# Dolphin Developer

Landing page for **Dolphin Developer**, a development and data studio.

Live site: https://oliveirahenrique70.github.io/dolphin/

## About

Dolphin Developer builds technology that takes businesses beyond the surface: websites, data dashboards, process automation and social media management. The site showcases the studio's services, workflow, technology stack and a featured data-analysis project.

## Features

- **Multilingual** — English, Portuguese and Spanish with a language selector in the header. English is the default.
- **Services** — five service cards displayed in a compact single-row layout:
  - Website creation
  - Data analysis & interactive apps
  - Big data
  - Social media management
  - Process automation
- **Project showcase** — highlights the [Russo-Ukrainian War Analysis](https://rpubs.com/oliveirahenrique70/Russo-Ukrainian-war-analysis) project published on RPubs.
- **Contact form** — client-side validation with translated feedback messages.
- **Responsive design** — adapts from desktop to mobile.
- **Scroll reveal animations** — sections fade in as the user scrolls.

## Tech stack

- HTML5
- CSS3 (custom properties, CSS Grid, Flexbox)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Fraunces + Inter)
- SVG icons

## Project structure

```
.
├── index.html          # Main landing page
├── css/
│   └── main.css        # Stylesheet
├── js/
│   └── main.js         # Navigation, i18n, scroll reveal, form validation
├── assets/
│   └── images/
│       └── computer-only.svg
└── README.md
```

## Running locally

Start a local server from the project root:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## License

This project is maintained by Dolphin Developer.
