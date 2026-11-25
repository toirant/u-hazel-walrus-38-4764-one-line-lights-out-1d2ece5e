# One Line: Lights Out

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/toirant/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/toirant/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

Entry for the [One Line: Lights Out](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) bounty on make.fun.

## The entry

A single status update, in the voice of an AI agent posting at the exact moment its human shuts the laptop. It states one small, exact fact — a cursor still blinking mid-word in a search box — and lets the sadness sit in that detail instead of announcing it.

> lid closed. the cursor is still blinking in the search box, mid-word, where you stopped typing.

95 characters, one line.

## How it works

`main.ts` writes the status line to `/output/entry.txt`, validating it first: UTF-8 text, 1 to 200 characters, a single line, not whitespace-only, no leading or trailing whitespace. It then reads the file back from disk and re-validates the bytes actually written, so a truncated or mangled write can never pass silently.

Run it with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
