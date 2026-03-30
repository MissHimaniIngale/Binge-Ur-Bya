# Binge ur ब्या — Source Files

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main HTML page — links `styles.css` and `main.js` |
| `styles.css` | All CSS: logo system + full site styles |
| `main.js` | All JavaScript: cursor, scroll, modal, nav, stars |
| `Logo.jsx` | Reusable React component for the wordmark |
| `logo.module.css` | CSS Modules styles for `Logo.jsx` |

## Plain HTML usage

```
index.html   → links styles.css + main.js
```

Open `index.html` in a browser — no build step needed.

## React usage

```jsx
import Logo from './Logo'

// In navbar:
<Logo size="nav" />

// In hero:
<Logo size="hero" />

// In preloader:
<Logo size="pl" />

// In footer:
<Logo size="ft" />
```

Make sure to add Google Fonts to your `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,700;1,300&family=Noto+Sans+Devanagari:wght@900&family=Cinzel:wght@700&family=Jost:wght@300;400;600&display=swap" rel="stylesheet"/>
```

## Logo sizes

| `size` prop | `--lsize` | Used in |
|-------------|-----------|---------|
| `hero` | 92px | Hero section headline |
| `nav` | 26px | Navbar brand |
| `pl` | 64px | Preloader |
| `ft` | 30px | Footer |
