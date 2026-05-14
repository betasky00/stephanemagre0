# Image Replacement Guide

All images currently use Unsplash placeholder photos. Replace them with your own
photography by dropping files into this folder and updating the `src` attributes
in the HTML. Every image location is marked with a comment in the HTML.

---

## Naming convention

Use the filenames listed below. Once a file exists here, update the `src` in
the corresponding HTML file to `images/filename.jpg`.

---

## Homepage (index.html)

| Filename | Location in page | Description |
|---|---|---|
| `hero-main.jpg` | Hero section | Full-width hero — wide garden composition, calm light, architecture visible. Landscape, 16:9 or wider. |
| `credibility-garden-detail.jpg` | Credibility section | A detail shot showing quality and precision — material, planting, or craftsmanship. Portrait, 4:5. |

---

## Projects page (projects.html)

| Filename | Location | Description |
|---|---|---|
| `project-ile-de-france-cover.jpg` | Project card 1 | Wide establishing shot of the Île-de-France garden. Landscape, 3:2. |
| `project-cote-dazur-cover.jpg` | Project card 2 | Terrace or garden view, Côte d'Azur. Landscape, 3:2. |
| `project-normandie-cover.jpg` | Project card 3 | Pastoral estate view, Normandie. Landscape, 3:2. |
| `project-paris-cover.jpg` | Project card 4 | Urban courtyard, Paris. Landscape, 3:2. |

---

## Project: Villa Privée, Île-de-France (project-ile-de-france.html)

| Filename | Description |
|---|---|
| `project-ile-de-france-hero.jpg` | Hero — cinematic wide shot of the full garden. 16:9 or wider. |
| `project-ile-de-france-01.jpg` | Gallery image 1 — full garden overview. 16:9. |
| `project-ile-de-france-02.jpg` | Gallery image 2 — stone terrace or path detail. 4:3. |
| `project-ile-de-france-03.jpg` | Gallery image 3 — hedge structure or geometric planting. 4:3. |
| `project-ile-de-france-04.jpg` | Gallery image 4 — wide atmospheric shot, morning or evening light. 21:9. |
| `project-ile-de-france-05.jpg` | Gallery image 5 — planting close-up, texture and light. 4:3. |
| `project-ile-de-france-06.jpg` | Gallery image 6 — circulation, path or steps. 4:3. |
| `project-ile-de-france-07.jpg` | Gallery image 7 — closing image, the most beautiful shot. 16:9. |

---

## Project: Résidence, Côte d'Azur (project-cote-dazur.html)

| Filename | Description |
|---|---|
| `project-cote-dazur-hero.jpg` | Hero — terrace overview, sea or hillside visible. 16:9 or wider. |
| `project-cote-dazur-01.jpg` | Gallery image 1 — main terrace, widest view. 16:9. |
| `project-cote-dazur-02.jpg` | Gallery image 2 — stone retaining wall detail. 4:3. |
| `project-cote-dazur-03.jpg` | Gallery image 3 — Mediterranean planting (lavender, olive, etc.). 4:3. |
| `project-cote-dazur-04.jpg` | Gallery image 4 — view across the landscape. 21:9. |
| `project-cote-dazur-05.jpg` | Gallery image 5 — evening atmosphere on the terrace. 4:3. |
| `project-cote-dazur-06.jpg` | Gallery image 6 — lower garden, transition to natural hillside. 4:3. |

---

## Project: Domaine Rural, Normandie (project-normandie.html)

| Filename | Description |
|---|---|
| `project-normandie-hero.jpg` | Hero — pastoral estate view, wide and green. 16:9 or wider. |
| `project-normandie-01.jpg` | Gallery image 1 — parkland, avenue of trees. 16:9. |
| `project-normandie-02.jpg` | Gallery image 2 — walled kitchen garden interior. 4:3. |
| `project-normandie-03.jpg` | Gallery image 3 — historic parkland tree. 4:3. |
| `project-normandie-04.jpg` | Gallery image 4 — meadow and woodland edge. 21:9. |
| `project-normandie-05.jpg` | Gallery image 5 — formal garden near house (hornbeam, grass). 4:3. |
| `project-normandie-06.jpg` | Gallery image 6 — orchard in season. 4:3. |
| `project-normandie-07.jpg` | Gallery image 7 — the estate in soft light, closing image. 16:9. |

---

## Project: Cour Urbaine, Paris (project-paris.html)

| Filename | Description |
|---|---|
| `project-paris-hero.jpg` | Hero — courtyard seen from main interior opening. 16:9 or wider. |
| `project-paris-01.jpg` | Gallery image 1 — full courtyard from main viewpoint. 16:9. |
| `project-paris-02.jpg` | Gallery image 2 — limestone floor detail, stone quality. 4:3. |
| `project-paris-03.jpg` | Gallery image 3 — shade planting bed, texture and growth. 4:3. |
| `project-paris-04.jpg` | Gallery image 4 — hornbeam casting shadow on limestone. 21:9. |
| `project-paris-05.jpg` | Gallery image 5 — view from apartment interior to courtyard. 4:3. |
| `project-paris-06.jpg` | Gallery image 6 — evening, wall light, atmosphere. 4:3. |

---

## About page (about.html)

| Filename | Description |
|---|---|
| `about-portrait.jpg` | Portrait of Stéphane — natural, on site or in a garden. Portrait, 3:4. |
| `about-garden-detail.jpg` | Atmospheric detail image — intimate, not a wide overview. Portrait, 4:5. |

---

## Contact page (contact.html)

| Filename | Description |
|---|---|
| `contact-image.jpg` | Calm, beautiful image — garden detail or site view. Portrait, 3:4. |

---

## How to replace a placeholder

1. Export your photograph at **2400px wide minimum**, saved as `.jpg` at quality 80–90.
2. Name it exactly as listed above (e.g. `hero-main.jpg`).
3. Place it in this `images/` folder.
4. In the corresponding HTML file, find the image comment (e.g. `REPLACE THIS IMAGE`) and change the `src` attribute from the Unsplash URL to `images/hero-main.jpg`.

Example — before:
```html
<img src="https://images.unsplash.com/photo-xxx?..." alt="..." />
```

After:
```html
<img src="images/hero-main.jpg" alt="Your descriptive alt text here" />
```

Keep the `alt` attribute descriptive — it helps with accessibility and SEO.
