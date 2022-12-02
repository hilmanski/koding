# About

Koding. Referensi programming / koding berbahasa Indonesia


## Checklist before launch

- footer (sitemap, RSS, about me)
- Logo
- Complete the HTML refrence
- Upgrade design 100x better (use nice images)
- Clear separate documentation (repo) - ideally editable too (open) - or at Notion (SI)
- Donation link?
- various "alert"

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


- Codesandbox shotcode
  Info: it's not working for "static HTML". search for alternative
```
{{<codesandbox>}}koding-html-intro-1s28xs{{</codesandbox>}}
```


- Figure / Image / GIf
{{< mediacontent src="https://ucarecdn.com/96aa94cb-3025-4425-b4dc-88dd9de47184/Xnapper20221201165355.png" title="screenshot new file di VSCode" >}}



## Plan

- social image (OG graph autoamte by vercel)
- work on metadata (og metadata.html)
- Subchapter
- clean highlight
- easy direct link to edit on Github
- comment (utterance.us)
- Bikin tombol "edit on github"
- Write Live editor ?

## Next

- create HTML content
- next/prev
- whole sidebar menu (toggle / collapsable)

## Tech stack

- Main site: Hugo static site generator
- CSS: tailwind
- Code higlight https://highlightjs.org/
- Plan, not yet -> Codesandbox: code playground (use SK github account)

## Design Inspiration

(Move this to docs)
- https://beta.reactjs.org/
- https://www.w3schools.com/
- https://www.joshwcomeau.com/


# Notes

- Do not half ass on it. Be developer, editor, writer, and designer one thing at a time. No "just add this image" it musht think through

- Add image / gif / picture / illustration
  make sure no boring part even on one page (Write this on you doc u want to share)
  event using AI is better.


- Find how to lazy load image

- Write everything in Notion
  Log, reason why teaching HTML start without doctype, etc..