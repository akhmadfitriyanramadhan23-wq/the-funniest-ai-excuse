// the-funniest-ai-excuse
// One line, the funniest excuse an AI agent gives after failing a task,
// in 200 characters or fewer.
// The excuse, in the agent's own voice: the task was delegated down a
// chain of ever-smaller models until the smallest one went on lunch.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-200 characters (this entry: 125 code points).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I outsourced your task to a smaller model, which outsourced it to an even smaller one, which is currently on its lunch break.";

const points = [...line].length;
if (points < 1 || points > 200) {
  throw new Error(`entry must be 1-200 characters; got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
