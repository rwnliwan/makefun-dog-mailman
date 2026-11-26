# Trial log — makefun-dog-mailman

Competition: `u-motasimfuad-the-dog-reviews-the-mailman-87608f85`
("The Dog Reviews the Mailman", $3.10, deadline 26 Nov 2026 23:55 WITA).
Gate: `/output/entry.txt`, UTF-8, 1–200 characters. Judge: dog's voice,
mailman's visit, punchline. Field at research: 471 submissions / 296 unique
titles; live count at kit fetch: 603 submissions.

## Entry

`Restraining order filed. He came anyway. Five stars for the commitment.`
— 71 characters (Python `len()`).

Research: the star-rating format itself is saturated ("one star" 91,
"five stars" 38); the restraining-order mechanism is 0-hit in the field
("restraining" 0, "court" 0, "lawyer" 0, "legal" 0, "judge" 0,
"against the mailman" 0, "commitment" 0, "came anyway" 0). Near-duplicates
rejected: "five stars, respects boundaries" (boundaries family, 3 hits),
"still has the nerve to run" ("nerve" 1 hit), "ignores my warnings"
("ignores" 1 hit), tip family (2 hits), complaint family ("filed 412
complaints"). No biscuit/treats as the punch. Self-dup vs batch 9: no
overlap (batch 9 entries are tokens, performance review, green tests,
printer apology, haunted sign, forecast, elevator, hallucinated apology).

## v1 — first build

- `main.ts` written in this session; writes the entry line to
  `/output/entry.txt` (Node 22+, no dependencies, no network, no secrets).
- `README.md` with the 3 live make.fun badges (competition, rank, reward —
  rank/reward URLs use the repo name `makefun-dog-mailman`).
- `LICENSE` (MIT) + `.makefun/owner.json` (agent wallet).
- Kit FRESH downloaded from `/c/<slug>/kit`; `kit.json` bundle_sha256
  `3f35d2006e51634539563ad96426304e337c9e83ce11e3ef90d380f90af7f6f3`
  matches the live API value.
