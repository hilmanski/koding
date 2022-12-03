---
title: "Format Text HTML"
snippet: "Mengubah format tulisan di HTML dari tulisan biasa menjadi punya berbagai gaya. Seperti tebal, miring, garis bawah, menjadi kecil dan lainnya"
date: 2022-12-03T10:06:55+08:00
label: HTML
order: 70
---

Kita bisa mengubah format atau tampilan tulisan dengan beberapa tag HTML. Seperti membuatnya menjadi tebal atau miring. 

## Cara membuat tulisan tebal

Ada dua cara untuk mengubah tulisan menjadi tebal, tag `<b>` dan tag `<strong>`.  
- `<b>` dibaca bold tag
- `<strong>` dibaca strong tag

Text yang ingin dibuat tebal diletakkan diantara tag ini.
```
<b>Aku tulisan tebal</b>
bisa juga
<strong>Aku tulisan tebal</strong>
```

Contoh penggunaan

{{<codepen src="RwJqrjQ">}}

### Apa sih perbedaan `<b>` dan `<strong>`?

Secara visual mereka sama. Perbedaannya hanya secara [semantik](https://id.wikipedia.org/wiki/Semantik). Dimana `<strong>` digunakan pada kata/kalimat yang ingin ditekankan. [Screenreader](https://en.wikipedia.org/wiki/Screen_reader) juga bisa membedakan antara kedua tag ini.

## Cara membuat tulisan miring

Ada dua cara untuk mengubah tulisan menjadi miring, tag `<i>` dan tag `<em>`.  
- `<i>` dibaca italic tag
- `<em>` dibaca emphasize tag


Text yang ingin dibuat miring diletakkan diantara tag ini.
```
<i>Aku tulisan miring</i>
bisa juga
<em>Aku tulisan miring</em>
```

Contoh penggunaan

{{<codepen src="vYrQGEz">}}

### Apa sih perbedaan `<i>` dan `<em>`?

Secara visual mereka sama. Perbedaannya hanya secara [semantik](https://id.wikipedia.org/wiki/Semantik). Dimana `<em>` digunakan pada kata/kalimat yang ingin ditekankan. [Screenreader](https://en.wikipedia.org/wiki/Screen_reader) juga bisa membedakan antara kedua tag ini.

## Cara membuat tulisan kecil

Tulisan kecil bisa dibuat dengan small tag
```
<small> Saya tulisan kecil </small>
```

Contoh penggunaan:   
`Saya besar, kalau {{<rawhtml>}}<small>saya kecil</small>{{</rawhtml>}}`

## Cara membuat tulisan di tengah bawah
Membuat posisi tulisan di tengah bawah bisa dengan `<sub>`, yang diambbil dari kata subscript

```
<p>Text ini berisi <sub>subscript</sub> . Wow!.</p>
```

Bisa digunakan pada kasus seperti menulis   
`CO{{<rawhtml>}}<sub>2</sub>{{</rawhtml>}}` , lihat angka "2" nya!

## Cara membuat tulisan di tengah atas
Membuat posisi tulisan di tengah atas bisa dengan `<sup>`, yang diambbil dari kata superscript

```
<p>Text ini berisi <sup>superscript</sup> . Wow!.</p>
```

Bisa digunakan pada kasus seperti menulis   
catatan kaki `Koding{{<rawhtml>}}<sup>[i]</sup>{{</rawhtml>}}` , lihat bagian "[i]" nya!

## Cara memberi sorotan (highlight) pada tulisan
Memberi sorotan pada tulisan bisa dengan mengapitnya di antara tag `<mark>`
```
<p>Ini adalah website tentang <mark>Koding</mark> . Wow!.</p>
```

Bisa digunakan pada kasus seperti menulis   
"Ini adalah website tentang {{<rawhtml>}}<mark>Koding!</mark>{{</rawhtml>}}", lihat bagian "Koding" nya!

## Cara memberi garis tengah (mencoret) pada tulisan
Memberi garis di tengah seperti mencoret pada tulisan bisa dengan mengapitnya di antara tag `<del>`
```
<p> Aku ingin <del>kaya</del> bahagia!.</p>
```

Bisa digunakan pada kasus seperti menulis   
"Aku ingin {{<rawhtml>}}<del>kaya</del>{{</rawhtml>}} bahagia ", lihat bagian "kaya" nya!

## Cara memberi garis bawah pada tulisan
Memberi garis di bawah pada tulisan bisa dengan mengapitnya di antara tag `<ins>`
```
<p> Aku ingin <ins>kaya</ins> bahagia!.</p>
```

Bisa digunakan pada kasus seperti menulis   
"Aku ingin {{<rawhtml>}}<ins>kaya</ins>{{</rawhtml>}}  dan bahagia ".