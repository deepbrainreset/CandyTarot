import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const outputRoot = resolve("dist");

if (!existsSync(outputRoot)) {
  throw new Error("No se encontró dist/. Ejecutá primero el build de Vinext.");
}

const workerConfigs = [];

function collectWorkerConfigs(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      collectWorkerConfigs(filePath);
      continue;
    }

    if (entry.name !== "wrangler.json") {
      continue;
    }

    try {
      const config = JSON.parse(readFileSync(filePath, "utf8"));

      if (typeof config.main === "string" && config.main.length > 0) {
        workerConfigs.push(filePath);
      }
    } catch {
      // Ignore non-JSON files and let the explicit error below explain the problem.
    }
  }
}

collectWorkerConfigs(outputRoot);

if (workerConfigs.length === 0) {
  throw new Error(
    "Vinext no generó ningún wrangler.json de worker dentro de dist/. " +
      "Revisá la salida de pnpm run build.",
  );
}

const preferredConfig =
  workerConfigs.find((filePath) => relative(outputRoot, filePath).startsWith("rsc/")) ??
  workerConfigs[0];

if (workerConfigs.length > 1) {
  console.log(
    `[deploy] Se encontraron varias configuraciones; se usará ${preferredConfig}.\n` +
      workerConfigs.join("\n"),
  );
}

const configPath = relative(process.cwd(), preferredConfig);
const pnpm = process.platform === "win32" ? "pnpm.cmd" : "pnpm";

console.log(`[deploy] Publicando con la configuración generada: ${configPath}`);

execFileSync(pnpm, ["exec", "wrangler", "deploy", "--config", configPath], {
  stdio: "inherit",
});
