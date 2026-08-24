# Hotstar / Disney+ Clone

A front-end clone of the Disney+ Hotstar OTT platform, built with **HTML, CSS, and JavaScript**. It replicates the core UI/UX of a streaming platform — including a landing page, login/signup modal, auto-sliding carousel, and dedicated pages for Movies, TV, Shows, and Sports.

## Features

- **Landing Page** – Hero video cards for Disney, Pixar, Marvel, Star Wars, and National Geographic with hover-to-play video previews.
- **Auto Carousel** – Rotating banner slider showcasing featured titles (Loki, WandaVision, Raya and the Last Dragon, Luca, etc.) with title and description.
- **Login / Sign Up Modal** – Popup-based authentication UI (front-end only, no backend).
- **Multi-Page Navigation** – Separate pages for Home, TV, Movies, Shows, and Sports, each with its own styling.
- **Responsive Design** – Layouts and navigation adapt across screen sizes.
- **Dynamic Content Rendering** – Carousel and video cards are rendered dynamically via JavaScript arrays/objects (see `script.js`).

## Tech Stack

| Category | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript |

## Project Structure

```
Hotstar/
├── index.html          # Home page
├── login.html           # Login / Sign up page
├── movies.html           # Movies page
├── shows.html            # Shows page
├── sports.html           # Sports page
├── tv.html                # TV page
├── style.css              # Home page styles
├── login.css               # Login/signup styles
├── movies.css              # Movies page styles
├── shows.css                # Shows page styles
├── sports.css                # Sports page styles
├── tv.css                     # TV page styles
├── script.js                   # Carousel & dynamic content logic
├── login.js                     # Login/signup modal logic
└── images/                       # Posters, logos, and preview videos
```

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/hotstar-clone.git
   ```
2. Navigate into the project folder
   ```bash
   cd hotstar-clone
   ```
3. Open `index.html` in your browser (or use the VS Code **Live Server** extension for auto-reload).

No build tools, package managers, or dependencies are required — it's a pure HTML/CSS/JS project.

## Future Improvements

- Connect login/signup to a real backend (Node.js/Express + database).
- Add JWT-based authentication and protected routes.
- Fetch movie/show data dynamically from an external API (e.g., TMDB) instead of static arrays.
- Add a working search feature.
- Improve mobile responsiveness further.

## Author

**Bharathi S**
