import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one deadpan line from a robot vacuum explaining why it
// missed a spot. Written once, here, as a plain string constant.
const LINE =
  "I did not miss the spot. My sensors classified it as a load-bearing crumb, and removing it would void the floor's warranty.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the bounty takes exactly one line of 1-200 characters, no
// trailing newline. Refuse to write anything that would fail the gate
// rather than shipping a bad entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
