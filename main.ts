// makefun-dog-mailman — "The Dog Reviews the Mailman"
// SPDX-License-Identifier: MIT
// make.fun competition: u-motasimfuad-the-dog-reviews-the-mailman-87608f85
//
// The entry is one funny one-line review that a dog gives the mailman,
// under 200 characters. This program writes that line to /output/entry.txt,
// where the sealed scorer reads it (1–200 characters, UTF-8, not blank).
//
// The line: the dog escalates to the law — a restraining order — and the
// mailman ignores it and comes anyway. The dog's verdict flips from
// punishment to praise: the one human who will not be scared off earns
// five stars for the commitment.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Restraining order filed. He came anyway. Five stars for the commitment.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
