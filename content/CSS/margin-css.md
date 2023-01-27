---
title: "Margin pada CSS"
slug: "margin-pada-css"
snippet: "Margin pada CSS adalah jarak antara garis batas (border) dengan elemen luar atau elemen lainnya."
date: 2023-01-27T10:15:05-08:00
label: CSS
order: 115
---

Margin pada CSS adalah jarak antara garis batas (border) dengan elemen luar atau elemen lainnya.

Berikut visualnya:

{{< mediacontent src="https://ucarecdn.com/671f17f9-baab-4225-8466-22455b472352/boxmodelcss.jpg" title="box model CSS" >}}

## Contoh margin pada CSS

Sekarang kita coba memberi jarak antara dua konten HTML dengan garis bordernya lewat properti `margin`.

```html
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}
.margin {
 margin: 25px;
}
</style>

<p class="p margin">Aku adalah tag p dengan border </p>
<p class="p"> tag P lainnya </p>
```

{{<rawhtml>}}
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}
.margin {
 margin: 25px;
}
</style>

<p class="p margin">Aku adalah tag p dengan margin </p>
<p class="p"> tag P lainnya </p>
{{</rawhtml>}}

{{<alert class="comment">}}
Perhatikan konten pertama, ia sekarang punya jarak (margin) sebesar 25px di setiap sisinya.
{{</alert>}}


## Memberi margin pada setiap sisi
Setiap sisi, bisa mempunyai margin yang berbeda.
Ada dua cara:
1. memberi 4 nilai di margin
2. memberi properti detail margin-(arah)

```html
<style>
.margin-all {
 border: 1px solid violet;
 margin: 10px 5px 2px 20px;
}
.margin-each {
 border: 1px solid white;
 margin-top: 5px;
 margin-right: 40px;
 margin-bottom: 15px;
 margin-left: 25px;
}
</style>

<p class="margin-all">Aku adalah tag p dengan margin </p>
<p class="margin-each">Aku adalah tag p dengan margin </p>
```

{{<rawhtml>}}
<style>
.margin-all {
 border: 1px solid violet;
 margin: 10px 5px 2px 20px;
}
.margin-each {
 border: 1px solid white;
 margin-top: 5px;
 margin-right: 40px;
 margin-bottom: 15px;
 margin-left: 25px;
</style>

<p class="margin-all">Aku adalah tag p dengan margin </p>
<p class="margin-each">Aku adalah tag p dengan margin </p>
{{</rawhtml>}}


## Nilai satuan margin
margin bisa punya nilai absolut `px` seperti yang kita lihat. Atau opsi lain:
```css
- auto: memberi nilai otomatis
- satuan solid lain seperti px, pt, cm, dll..
- Presentasi dari lebar elemen pembungkusnya. Contoh -> padding :10%;
- inherit : mengambil nilai dari pembungkusnya
```