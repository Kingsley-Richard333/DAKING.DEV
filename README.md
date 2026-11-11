# DAKING-DEV website (React + Vite)

    npm install
    npm run dev      # local preview
    npm run build    # production build in /dist

## Contact form
The contact form uses EmailJS. Set `VITE_EMAILJS_SERVICE_ID`,
`VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in `.env` for local
development and in your hosting provider's build environment for production.
After changing these values, restart the dev server or rebuild the site.

## Where to edit
- `src/data/projects.js`: portfolio (name, category, image, description, tech, live link, case study)
- `src/data/testimonials.js`, `faq.js`, `services.js`, `process.js`
- `src/data/site.js`: contact email, phone, social links, navigation, tech ticker, stats
- Project images: put files in `src/assets/` and `import` them in `projects.js`, or use full URLs
- `src/styles/global.css`: colours are the CSS variables at the top (`--navy`, `--blue`, `--ice`)
- Logo files: `src/assets/logo.svg` (light backgrounds) and `logo-dark.svg` (dark backgrounds)
