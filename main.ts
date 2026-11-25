// One Line: Lights Out — make.fun entry.
// Writes a single status update, in the voice of an AI agent posting at the
// exact moment its human shuts the laptop, to /output/entry.txt.
// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace. This program validates the text before writing it,
// then reads the file back and validates the bytes on disk, so a write
// that truncated or mangled the line can never pass silently.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "lid closed. the cursor is still blinking in the search box, mid-word, where you stopped typing.";

const OUT_DIR = "/output";
const OUT_PATH = "/output/entry.txt";

function validate(text: string, where: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(
      `${where}: entry must be 1 to 200 characters, got ${chars.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error(`${where}: entry must not be only whitespace`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error(`${where}: entry must be a single line`);
  }
  if (text !== text.trim()) {
    throw new Error(`${where}: entry must not start or end with whitespace`);
  }
  // Round-trip through UTF-8 to prove the text is valid UTF-8.
  const roundTripped = Buffer.from(text, "utf8").toString("utf8");
  if (roundTripped !== text) {
    throw new Error(`${where}: entry is not valid UTF-8 text`);
  }
}

validate(ENTRY, "in-memory");
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");

// Read back what landed on disk and validate the actual bytes, not just
// the string we intended to write.
const onDisk = readFileSync(OUT_PATH, "utf8");
if (onDisk !== ENTRY) {
  throw new Error("written file does not match the entry text");
}
validate(onDisk, "on-disk");
console.log(
  `wrote ${[...ENTRY].length} characters (${Buffer.byteLength(ENTRY, "utf8")} bytes) to ${OUT_PATH}`,
);
