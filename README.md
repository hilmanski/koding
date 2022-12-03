# Status

Masih dalam tahap pengembangan. *Sangat* baru dimulai. Dibuka untuk mendapatkan feedback awal. Tidak pelu membuat PR terkait menambah konten untuk saat ini (sampai pengumuman berikutnya).

# About

Koding. Referensi programming / koding berbahasa Indonesia

## Bertanya atau beri masukan?  
Silahkan ke bagian [discussion di repository](https://github.com/hilmanski/koding/discussions) ini.

## Link

- Situs : [kodi.ng](https://kodi.ng)
- Dokumentasi : [docs.kodi.ng](https://docs.kodi.ng)
- Ask / Comment / Feedback: [Discussion](https://github.com/hilmanski/koding/discussions)
- Author: [hilmanski](https://hilman.space)  

## Dev (Run locally)

- Install [Hugo](https://gohugo.io/) if yo haven't

- Clone repo

- Run server

```
hugo serve
```

- Watch tailwind

```
yarn install //for first time
cd themes/twhugo
yarn dev
```

##  Create new file

Run command
```
hugo new HTML/nama.md
```
- change HTML to whatever folder/language you're working on
- update the "order", based on latest order. Increase it by 10
- if new chapter -> add key "chapter" in frontmatter

## Content
- separate what-is "topic" pages
- separate Apa-itu-ABC-tag-HTML pages

## Guide shortcode

- Write alert (info box)

```
{{<alert class="info">}}

<p> HTML itu singkatan dari <span class='italic'>hypertext markup language</span>.</p>
{{</alert>}}
```
// variasi class= info / warning / try


- Codepen
```
{{<codepen src="id-codepen"}}
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
- Codepen, Codesandbox


## Checklist before launch

- Footer (sitemap, RSS, about me)
- Logo
- Complete the HTML refrence
- Upgrade design 100x better (use nice images)
- Og Image vercel for each page