---
title: "Perbedaan elemen block dan inline"
slug: "perbedaan-elemen-block-dan-inline"
snippet: "Ada istilah elemen block dan elemen inline di HTML. Apa perbedaan keduanya?"
date: 2022-12-31T16:17:51+08:00
label: HTML
order: 610
---

Ada istilah elemen block dan elemen inline di HTML. Perbedaannya adalah elemen block akan muncul di bawah elemen sebelumnya, sementara elemen inline akan muncul di samping elemen sebelumnya.


## Apa itu elemen block? 
Elemen `block` berarti sebuah elemen yang punya lebar 100% dari pembungkusnya. Contoh dari elemen bersifat block adalah tag `<p>`.

Contoh
```html
<p>Saya paragraf pertama.</p>
<p>Saya paragraf kedua.</p>
```

Hasilnya:
{{<rawhtml>}}
<p>Saya paragraf pertama.</p>
<p>Saya paragraf kedua.</p>
{{</rawhtml>}}

{{<alert class="comment">}}
Tulisan paragraf pertama dan kedua, punya jarak, tidak langsung di sampingnya.
{{</alert>}}

## Contoh tag block
Beberapa contoh tag yang bersifat block
- p
- h1, h2, h3, h4, h5, h6
- ol, ul
- pre
- address
- blockquote
- dl
- div
- fieldset
- form
- hr
- noscript
- table


## Apa itu elemen inline? 
Elemen `inline` berarti sebuah elemen hanya selebar dirinya sendiri. Sehingga elemen berikutnya berada ada di samping elemennya

Contoh
```html
<b>Saya tag bold.</b>
<i>Saya tag italic.</i>
```

Hasilnya:
{{<rawhtml>}}
<b>Saya tag bold.</b>
<i>Saya tag italic.</i>
{{</rawhtml>}}

{{<alert class="comment">}}
Tulisan tag satu dan dua berada di baris yang sama. Berbeda dengan elemen `block`.
{{</alert>}}

## Contoh tag inline
Beberapa tag yang bersifat inline

- b, big, i, small
- a, br, img, map, object, q, script, span, sub, sup
- button, input, label, select, textarea

## Menggunakan div dan span
Kegunaan tag `div` dan tag `span` juga terletak pada sifat ini. Di mana div adalah elemen block, sementara span adalah elemen inline. 

Jadi, pada saat kamu butuh sebuah baris baru atau melanjutkan baris sebelumnya, tinggal memilih diantara kedua elemen ini.