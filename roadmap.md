# Roadmap — Dashboard layout rearrangement

- [x] Inventory existing modules, controls and baseline behavior.
- [x] Rearrange hero, command bar, statistics and module columns without redesigning.
- [x] Verify preservation, interactions, desktop/tablet/mobile overflow and available tests.
- [x] Check automatic production-build results and report verification limitations.

Verification: retained 32 original buttons, 2 inputs, 15 images, all 10 data collections and unchanged command/module handlers. All 15 navigation dialogs, four command shortcuts, lookbook selection/Auto, six agent selections/reset, mic state toggle and keyboard controls passed. Real AYRA command streamed successfully. No page errors or horizontal overflow at 320, 390, 768, 1026, 1280 and 1536px. Existing routing test passed (1/1); automatic production build reports build OK.

Limitations: original header Global/theme/notification/profile controls and search have no associated functionality; existing module dialogs and View All labels remain unchanged. No authentication or permission behavior was available to exercise; no server, route, integration or permission files were modified.

## Previous completed work — AYRA avatar upgrade

- [x] View all reference photos (24 unique: white-haired female robot, "ZINRA" label)
- [x] Generate front-facing AYRA portrait (cyan, matches dashboard palette)
- [x] Relabel 13 best looks ZINRA → AYRA, crop watermark strips (src/assets/ayra-*.jpg)
- [x] JarvisCore: crossfading look per state (listening=headset, thinking=cyan-side, executing=amber, verifying=braids, speaking=cyan-jacket, completed=amber-front, error=bob)
- [x] Festival/special-day calendar (AYRA_SCHEDULE): New Year & Christmas=veil, Holi=crystal crown, Diwali=gold, Republic/Independence Day — local timezone, first match wins
- [x] Verified live: dashboard renders new AYRA, command flow works, zero page errors, build OK

Note: no true festival-themed photos were in the set; occasions reuse the closest looks (gold/crystal/veil). Upload festival photos later and point AYRA_SCHEDULE at them.
