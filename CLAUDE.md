# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static HTML personal portfolio/CV site for Lars Richter, hosted on GitHub Pages at `lars-richter.dev`. There is no build step, no package manager, no test suite, and no CI/CD pipeline. The entire site is a single `index.html` plus `site.css`.

## Development

Since there is no build toolchain, previewing changes requires a local HTTP server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

There are no linting, formatting, or test commands.

## Architecture

- **`index.html`** — the entire site. Contains a two-column layout: a sticky profile sidebar (left) and a chronological work history timeline (right).
- **`site.css`** — custom styles layered on top of Bulma. Defines hover colors for social icons, the `.highlight-color` accent (`#209cee`), and responsive font sizing.
- **`images/`** — company logos and the profile photo referenced directly in `index.html`.

### CSS framework conventions

The site uses [Bulma](https://bulma.io/) (v1.0.0 via CDN) for layout and components, and [Font Awesome](https://fontawesome.com/) (v6.4.2 via CDN) for icons. Bulma utility classes (`is-4`, `has-text-centered`, `tags are-medium`, etc.) are used throughout. Custom overrides live in `site.css`; don't add inline styles.

### Work history entry pattern

Each job entry in the timeline follows this structure inside `.content > .media`:

```html
<div class="media">
  <div class="media-left">
    <figure class="image is-64x64">
      <img src="images/logo.jpg" alt="Company Logo">
    </figure>
  </div>
  <div class="media-content">
    <p class="title is-4">Role @ Company</p>
    <p class="subtitle is-6">Start - End (use <span class="tag is-info">today</span> for current)</p>
    <!-- description paragraphs -->
    <p class="title is-6"><i class="fa fa-lightbulb highlight-color"></i> Skills</p>
    <div class="tags are-medium"><!-- skill tags --></div>
    <!-- optionally: Languages/Frameworks block and Tools block -->
    <p class="title is-6"><i class="fa fa-map-marked-alt highlight-color"></i> Location</p>
    <div class="tags are-medium"><span class="tag">City</span></div>
  </div>
</div>
<hr>
```

Entries are ordered newest-first. The `<hr>` goes after each entry except the last.

## Deployment

Pushing to `main` on GitHub automatically deploys via GitHub Pages. There is no manual deploy step.
