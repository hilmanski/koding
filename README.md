# Now

- Do not half ass on it. Be developer, editor, writer, and designer one thing at a time. No "just add this image" it musht think through

- Add image / gif / picture / illustration
  make sure no boring part even on one page (Write this on you doc u want to share)
  event using AI is better.

- Codesandbox shotcode
  Info: it's not working for "static HTML". search for alternative
  {{<codesandbox>}}koding-html-intro-1s28xs{{</codesandbox>}}
  /s
- Bikin tombol "edit on github"

- Find how to lazy load image

- Write everything in Notion
  Log, reason why teaching HTML start without doctype, etc..

# About

Koding. Referensi programming / koding berbahasa Indonesia

# Deploy

maybe you need to install package before running Hugo command

# Author

[hilmanski](https://hilman.space)

## Content Plan

- webtech (HTML, CSS, Javascript, ...)
- apa-itu (website, mobile, SEO, etc..)

## Writing Guide

- Clear. short. Always edit.
- No boring part. Always add image / code / gif/ anything outside written text

## Dev

Run server

```
hugo serve
```

Watch tailwind

```
cd themes/twhugo
yarn dev
```

## Guide shortcode

- Write alert (info box)

```
{{<alert class="info">}}

<p> HTML itu singkatan dari <span class='italic'>hypertext markup language</span>.</p>
{{</alert>}}
```

- Write Live editor

```
{{<liveeditor id="1">}}<h1> amazing </h1>{{</liveeditor>}}
{{<liveiframe id="1">}}
// id must unique on each page
```

## Plan

- Subchapter
- Avoid boring text with image, code and info/warning.
- clean highlight
- sandbox
- easy direct link to edit on Github
- comment (utterance.us)

## Next

- create HTML content
- next/prev
- whole sidebar menu (toggle / collapsable)

## Checklist before launch

- 1 category done
- clear guide how to contribute
- footer (sitemap, RSS, about me)
- Logo

## Tech stack

- Main site: Hugo static site generator
- CSS: tailwind
- Code higlight https://highlightjs.org/
- Plan, not yet -> Codesandbox: code playground (use SK github account)

## Design Inspiration

- https://beta.reactjs.org/
- https://www.w3schools.com/
- https://www.joshwcomeau.com/

## Links that helped me built this site

- https://flaviocopes.com/hugo-add-tailwind/
