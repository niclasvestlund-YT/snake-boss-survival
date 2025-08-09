# Snake Boss v7.0 — POV Mode (prototype)

**POV Snake** med enkel raycaster i HTML5 Canvas (ingen WebGL).

## Kontroller
- Desktop: A/D eller ←/→ för att svänga. Space för start, Shift för boost.
- Mobil: håll vänster/höger sida för att styra.

## Teknik
- 20Hz logik, 60FPS render.
- Raycasting per kolumn (upp till ~240), fog + shading.
- Minimap (top‑down), begränsad arena (väggar är dödliga för tydlighet).

Lägg bara `pov.html` i root och se till att `service-worker.js` cacher den (version `sb-v7-0-pov`).

Det här är en **prototyp** – vi kan lägga in fler material, sprites, power‑ups, speedlines, head‑bob, samt 3D‑liknande pellets/boss i nästa version.
