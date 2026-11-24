// Weirdest Job Title: Blind Judge Showdown
// Writes one weird job title (60 chars or fewer) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Senior Apology Writer for Airline Lost-Luggage Letters";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
