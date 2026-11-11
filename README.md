# Leonida Diario

Shorts verticales (1080x1920) de la cuenta atrás de GTA 6 para el canal de YouTube **Leonida Diario**, hechos con [Remotion](https://www.remotion.dev).

Canal fan no oficial, sin relación con Rockstar Games. Las imágenes son ilustraciones generadas con IA (ElevenLabs) y la voz es de ElevenLabs.

## Qué hay

| Ruta | Qué es |
|---|---|
| `src/Gta6/Episodio.tsx` | Plantilla de episodio: gancho → N datos con imagen → cierre, cortado con la voz |
| `src/Gta6/Scenes.tsx` | Escenas (gancho, dato con imagen, cierre) |
| `src/Gta6/Subtitulos.tsx` | Subtítulos estilo TikTok sincronizados palabra a palabra |
| `src/Gta6/episodios/` | Datos de cada episodio (`epN.ts`) y sus subtítulos (`epN-voz.ts`) |
| `src/Gta6/Curiosidades.tsx` | Episodio 1 (7 curiosidades) |
| `src/Gta6/Branding.tsx` | Avatar y banner del canal |
| `public/gta6/` | Voces e imágenes |
| `out/` | Vídeos finales, avatar y banner |

## Uso

```bash
npm install
npm run dev
```

Exportar un episodio:

```bash
npx remotion render Ep2-Personajes out/ep2-personajes.mp4
```

Avatar y banner:

```bash
npx remotion still Avatar out/canal/avatar.png
npx remotion still Banner out/canal/banner.png
```

## Nuevo episodio

1. Escribe el guion con marcadores "Uno:", "Dos:"… y genera la voz en ElevenLabs.
2. Transcribe la voz (ElevenLabs Scribe) y descarga `words.json`.
3. Genera `src/Gta6/episodios/epN-voz.ts` con los tiempos de cada palabra y de cada escena.
4. Crea `src/Gta6/episodios/epN.ts` con los títulos e imágenes, y regístralo en `src/Root.tsx`.
