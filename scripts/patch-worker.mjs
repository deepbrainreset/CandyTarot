import { readFile, writeFile } from "node:fs/promises";

const outputPath = new URL("../dist/server/index.js", import.meta.url);
let source = await readFile(outputPath, "utf8");
const exportLine = "export { _virtual_vinext_rsc_entry_default as default, generateStaticParamsMap };";
if (!source.includes(exportLine)) throw new Error("Vinext server export format changed; worker adapter not applied.");
source = source.replace(exportLine, "const __candyTarotWorker = { fetch(request, env, ctx) { return _virtual_vinext_rsc_entry_default(request, ctx); } };\nexport { __candyTarotWorker as default, generateStaticParamsMap };");
await writeFile(outputPath, source);
