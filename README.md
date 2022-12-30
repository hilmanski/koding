# Status

Just getting started! Please don't submit a new article for now. Feel free to thow any ideas, correct typos or suggesting new features on issue/PR.

# About

Programming reference in Indonesian language.

## Question or Feedback?
Visit [discussion tab in this repository](https://github.com/hilmanski/koding/discussions).

## Link

- Site : [kodi.ng](https://kodi.ng)
- Documentation : [docs.kodi.ng](https://docs.kodi.ng)
- Discussion: [Discussion](https://github.com/hilmanski/koding/discussions)
- Author: [hilmanski](https://hilman.space)  

## Dev (Run locally)

- Install [Hugo](https://gohugo.io/)
- Clone repo
- Run server

```bash
hugo serve
```

- Watch tailwind

```bash
yarn install # for first time
cd themes/twhugo
yarn dev
```

##  Create new file

Run command
```bash
hugo new HTML/nama.md
```
- change HTML to whatever folder/language you're working on
- update the "order", based on latest order. Increase it by 10 or 5
- if new chapter -> add key "chapter" in frontmatter

## Guide shortcode

- Write alert (info box)

```html
{{<alert class="info">}}

<p> HTML itu singkatan dari <span class='italic'>hypertext markup language</span>.</p>
{{</alert>}}
```
// variasi class= info / warning / try / comment


- Codepen
```html
{{<codepen src="id-codepen"}}
```

- Codesandbox shotcode
  Info: it's not working for "static HTML". search for alternative
```html
{{<codesandbox>}}koding-html-intro-1s28xs{{</codesandbox>}}
```

- Figure / Image / GIf
{{< mediacontent src="https://ucarecdn.com/96aa94cb-3025-4425-b4dc-88dd9de47184/Xnapper20221201165355.png" title="screenshot new file di VSCode" >}}



## Before first release

- Very important ! (reread everything. edit multiple times! hapus "kita" menjadi "gunakan" misalnya)
- Footer (sitemap, RSS, about me)
- Logo
- favicon
- Complete the HTML refrence
- Upgrade design 100x better (use nice images)
- Make hompage background alive (nice homepage)
example: https://twitter.com/meezwhite/status/1599450806217867265
- social image (OG graph autoamte by vercel)
- work on metadata (og metadata.html)
- about page with disqus-comments
- clean highlight

(After)   
- share on sekolahkoding
- share on pulodev  
- share on linkedIn
- share on facebook
- share on twitter
- share on instagram
- share on tiktok
- add kodi.ng link to (hilmanspace, sekolahkoding, halokoding)

## Next plan
- Improve HTML content: explore mote attribute for video and audio (muted loop playsinline etc.)
- add CSS
- add JS
- sidebar menu on subjects on mobile (show toggle with burgen menu)
- comment (utterance.us) ? needed
- Write Live editor ?

## Tech stack

- Main site: Hugo static site generator
- CSS: tailwind
- Code higlight https://highlightjs.org/
- Codepen, Codesandbox

---

## Next(Micro) Current HTML chapters "FORM" on Process
- [DONE] required
- Atribut Umum: readonly - name - value - max? - min?
- Suggested value dengan list/datalist
```
<input id="myURL" name="myURL" type="url" list="defaultURLs" />

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/" label="MDN Web Docs"></option>
  <option value="http://www.google.com/" label="Google"></option>
  <option value="http://www.microsoft.com/" label="Microsoft"></option>
  <option value="https://www.mozilla.org/" label="Mozilla"></option>
  <option value="http://w3.org/" label="W3C"></option>
</datalist>
```
- id, 
- Move attribtue form at the end of chapters ?
- Info lokasi folder relatif (../) - Mungkin di bagian media

## Next(Macro) HTML chapters
- other tags: code, quotes
- correct HTML structue: doctype, head, body
- what is head
- what is body
- what is inline and block
- div and span
- special chars, entities, symbols
- Semantic? aside, article, etc...
