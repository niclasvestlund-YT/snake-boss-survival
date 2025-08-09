# Snake Boss v6.0 (Mobile-first)

Race the AI boss to the food. Collision rules: head-on = game over. The boss grows only when **it** eats for fairness.

## What’s new (v6.0 → v6.3)
- **Mobile fix:** “Play again” now always restarts the game.
- **Auto-routing:** Phones open `mobile.html` by default.
- **No scroll/jitter:** Canvas locks to viewport on desktop and mobile.
- **Dopamine background:** Animated gradient + subtle grid with event pulses.
- **PWA:** Faster updates via `skipWaiting()` + `clients.claim()`.

## Controls
- **Desktop:** Space/click to start. Arrows/WASD to turn.
- **Mobile:** Hold & drag on the game area (snap to 4-way). Light haptic tick on valid turn.

## UI
- Slim HUD: `SCORE` (top-left), `BEST` (top-right).
- Start + mute only before play; hidden during gameplay.
- Theme toggle cycles 3 colorways. Persisted via `localStorage`.

## PWA
- Installable on mobile. `start_url` points to `mobile.html` and `orientation: portrait`.

## Dev
- Single RAF loop with fixed-step updates (12 tps) and delta accumulator.
- Canvas auto-fits using DPR; `imageSmoothingEnabled=false` for crisp pixels.
- Effects: render-time screen shake, boss flash, background pulse.
