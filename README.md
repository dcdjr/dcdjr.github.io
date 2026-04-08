Portfolio Site

A polished, accessible personal portfolio site for me, built as a static GitHub Pages project with HTML, CSS, JavaScript, and Bootstrap.

Live site: [dcdjr.me](https://dcdjr.me)

## Highlights

- Responsive four-page portfolio experience
- Custom visual system layered on top of Bootstrap
- Light and dark theme toggle with saved preference
- Accessible navigation, skip links, focus states, and reduced-motion support
- Refined project, about, and contact sections with stronger content hierarchy

## Pages

- `index.html` - landing page and portfolio overview
- `about.html` - background, interests, and working style
- `projects.html` - selected projects and GitHub links
- `connect.html` - email, social links, and resume access

## Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons

## Project Structure

```text
.
|-- about.html
|-- connect.html
|-- index.html
|-- projects.html
`-- assets
    |-- CSS/styles.css
    |-- JS/scripts.js
    `-- images/
```

## Local Development

No build step is required.

1. Clone the repository.
2. Start a static server from the project root:

   ```bash
   python3 -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) in your browser.

## Deployment

The site is set up for GitHub Pages and uses the custom domain `dcdjr.me`.
