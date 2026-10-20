# Roadmap — Dashboard layout rearrangement

- [ ] Inventory existing modules, controls and baseline behavior.
- [ ] Rearrange hero, command bar, statistics and module columns without redesigning.
- [ ] Verify preservation, interactions, desktop/tablet/mobile overflow and available tests.
- [ ] Check automatic production-build results and report verification limitations.

## Previous completed work — AYRA avatar upgrade

- [x] View all reference photos (24 unique: white-haired female robot, "ZINRA" label)
- [x] Generate front-facing AYRA portrait (cyan, matches dashboard palette)
- [x] Relabel 13 best looks ZINRA → AYRA, crop watermark strips (src/assets/ayra-*.jpg)
- [x] JarvisCore: crossfading look per state (listening=headset, thinking=cyan-side, executing=amber, verifying=braids, speaking=cyan-jacket, completed=amber-front, error=bob)
- [x] Festival/special-day calendar (AYRA_SCHEDULE): New Year & Christmas=veil, Holi=crystal crown, Diwali=gold, Republic/Independence Day — local timezone, first match wins
- [x] Verified live: dashboard renders new AYRA, command flow works, zero page errors, build OK

Note: no true festival-themed photos were in the set; occasions reuse the closest looks (gold/crystal/veil). Upload festival photos later and point AYRA_SCHEDULE at them.
