# Roadmap — Dashboard layout rearrangement

## Genuine AYRA walking and workspace concealment
- [x] Inspect current assets and identify the full-body rig and animation requirements.
- [x] Remove portrait sliding, synthetic breathing/sway and task-triggered repositioning.
- [x] Conceal the entire Action Workspace while keeping its component mounted and all task handlers intact.
- [ ] Implement and verify genuine walking, facial motion and depth-aware hide-and-seek — blocked on an identity-matching rigged AYRA model and compatible skeletal/facial animation assets.
- [x] Verify rendered concealment, stationary portrait and preserved interactions.

Verified at 1026×537 and 390×844: workspace remains mounted but invisible; AYRA's page-relative portrait position and transform remain unchanged during idle, pointer movement and an actual task. Fifteen navigation options and lookbook remain accessible. Real command returned HTTP 200, 34 bytes and measured 1132ms headers latency; stream completed with hidden telemetry retained. No page errors or mobile overflow. Seven existing tests passed; automatic build OK. No skeletal, facial, foot-contact or genuine hide-and-seek animation is implemented or verified: required AYRA assets are documented in AYRA_ANIMATION_ASSETS.md.

## Immersive 3D command center
- [x] Retain every navigation option in an accessible slide-out menu.
- [x] Add full-screen curved 3D environment and AYRA foreground/background movement without replacing existing look controls.
- [x] Expand workspace from actual task status and polish real file/extraction/request visuals.
- [x] Verify navigation, real operations, motion, screen sizes and tests; report unavailable external services honestly.

Immersive verification: all 15 navigation dialogs open/close; Ctrl+B, Escape and lookbook access passed. Local two-record JSON extraction, real download and actual malformed JSON error passed. Live AYRA request returned HTTP 200, 61 bytes, measured 1136ms headers latency, and stream completion returned running state to false. AYRA motion changed between frames; reduced-motion preference passed. Canvas and layout checked at 1280, 1026, 768, 390 and 320px with no overflow or page errors. Seven tests passed and automatic build OK. Uses the existing AYRA imagery with cinematic depth motion, not a rigged walking character. External calling, research, code execution and workers remain unconnected; original static dashboard content and display-only controls are preserved, not promoted to operation evidence.

## Real-time action workspace
- [x] Define verified task event sources and external connection requirements.
- [x] Build split AYRA/action presentation with truthful idle, running, result and error states.
- [x] Connect available real operations; leave unavailable capabilities explicitly unconnected.
- [x] Verify actual operations and preservation across screen sizes.
- [ ] Connect calling, live web research, isolated code execution, remote workers and external data/file/API systems — blocked on service selection/accounts and authorized connections; none exist in the copied app.

Workspace verification: real AYRA request returned HTTP 200, 114 received bytes and measured headers latency; completion from actual stream end. Local JSON extraction read two supplied records; malformed JSON showed actual parse error. Four tests passed; automatic build OK. No browser errors or overflow at 320, 390, 768 and 1026px. Existing dashboard sections and server AI calls retained. Cloud provisioned; no persistent file upload, calling or execution connections implemented. Workspace modes explicitly show missing services rather than fabricated activity.

## AYRA cinematic banner
- [x] Blend the existing AYRA identity into a full-width cinematic banner, retaining look/state controls.
- [x] Remove obsolete rotating circular dots and rings.
- [x] Verify banner rendering, existing interactions and available tests without changing other sections.

Banner verification: inspected desktop and mobile screenshots; retained 32 buttons and 2 inputs; zero obsolete ring/orbit elements; lookbook opens and microphone changes the core to listening. No horizontal overflow at 320, 390, 768 and 1026px; no browser errors. Existing routing test passed (1/1), automatic build OK. Dashboard route, command handlers and backend files unchanged; command service was not re-tested in this presentation-only update.

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
