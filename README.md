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

- Create new file
```
hugo new HTML/nama.md
```
Change the order based on latest order

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

- Codepen
{{<codepen>}}koding-html-intro-1s28xs{{</codepen>}}

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


# Notes

- Do not half ass on it. Be developer, editor, writer, and designer. One at a time.


## Checklist before launch

- Footer (sitemap, RSS, about me)
- Logo
- Complete the HTML refrence
- Upgrade design 100x better (use nice images)
- Og Image vercel for each page