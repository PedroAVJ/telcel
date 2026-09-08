# Repository guidance

- This repository is the canonical source for `telcel@package-manager`.
- Keep `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, and
  `package.json` on the same semantic version.
- Keep account identifiers, phone numbers, messages, balances, credentials,
  one-time codes, and payment data out of Git, tests, logs, and examples.
- Treat official Telcel pages and live account state as authoritative. Static
  package amounts or benefits are hints only and must be rechecked before a
  purchase or recurring-package change.
- Do not claim a recharge, activation, recurrence change, or purchase succeeded
  until the resulting package or balance is read back.
- This repository is plugin-only. A skill or manifest change is a plugin
  release and must be published through both Package Manager catalogs.
