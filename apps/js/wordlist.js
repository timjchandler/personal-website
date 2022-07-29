import { readSource } from "./src/noun.js"
import { buildTrace } from "./src/trace.js"
import { csv } from "./src/wordlist.js"

let words = readSource(csv)
buildTrace(words, 'word-list');