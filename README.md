# Disturb-AI Chrome Extension

Disturb-AI helps you stay mindful of distractions while working online. It lets you set a focus goal, detects distracting browsing behavior and alerts you when your focus strays too long.

## Development Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. During development, use `npm run dev` and load the `src` folder as an unpacked extension.
4. For production, run `npm run build` to generate the extension in the `dist/` folder.
5. Load the `dist` folder as an unpacked extension in Chrome.
6. Provide your OpenAI API key on the settings page to enable distraction detection.
7. Saved options and focus goals are automatically loaded the next time you open the popup or options page.
8. Optionally add your own extension icons under `src/icons` and reference them in `manifest.json`.

The source under `src/` contains a minimal working skeleton. Edit the scripts to add advanced distraction detection logic.

### Bootstrapping From Scratch

If you'd like to recreate this extension completely from scratch, follow these basic steps. They mirror how this repository was initialized.

1. Initialise a new Node project:
   ```sh
   npm init -y
   ```
2. Install React, Vite and the React plugin for Vite:
   ```sh
   npm install -D vite @vitejs/plugin-react react react-dom
   ```
3. Create a `src/` directory and within it add `popup.html` and `options.html`.
4. Create React entry points (e.g. `popup-main.jsx` and `options-main.jsx`) that mount your React components.
5. Write a minimal `manifest.json` referencing your HTML files and a background service worker script.
6. Add a `vite.config.js` (see this repo for reference) so that `npm run dev` and `npm run build` work correctly.
7. Update `package.json` scripts to include `dev`, `build` and optionally `test` commands.

## CI

A simple GitHub Actions workflow installs dependencies and runs `npm test` on pull requests.

## License

Placeholder license text.
