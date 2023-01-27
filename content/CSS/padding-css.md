---
title: "Padding pada CSS"
slug: "padding-pada-css"
snippet: "Padding pada CSS adalah jarak antara garis batas (border) dengan elemennya."
date: 2023-01-27T10:10:05-08:00
label: CSS
order: 110
---

Padding pada CSS adalah jarak antara garis batas (border) dengan elemennya

Berikut visualnya:

{{< mediacontent src="https://ucarecdn.com/671f17f9-baab-4225-8466-22455b472352/boxmodelcss.jpg" title="box model CSS" >}}

## Contoh padding pada CSS

Sekarang kita coba memberi jarak antara konten HTML dengan garis bordernya lewat properti `border`.

```html
<style>
.padding {
 border: 1px solid white;
 padding: 5px;
}
</style>

<p class="padding">Aku adalah tag p dengan border </p>
```

{{<rawhtml>}}
<style>
.padding {
 border: 1px solid white;
 padding: 5px;
}
</style>

<p class="padding">Aku adalah tag p dengan padding </p>
{{</rawhtml>}}

*Kamu bisa memberi nilai padding sesuai yang kamu butuhkan.*

## Memberi padding pada setiap sisi
Setiap sisi, bisa mempunyai padding yang berbeda.
Ada dua cara:
1. memberi 4 nilai di padding
2. memberi properti detail padding-(arah)

```html
<style>
.padding-all {
 border: 1px solid violet;
 padding: 10px 5px 2px 20px;
}
.padding-each {
 border: 1px solid white;
 padding-top: 5px;
 padding-right: 10px;
 padding-bottom: 15px;
 padding-left: 25px;
}
</style>

<p class="padding-all">Aku adalah tag p dengan padding </p>
atau
<p class="padding-each">Aku adalah tag p dengan padding </p>
```

{{<rawhtml>}}
<style>
.padding-all {
 border: 1px solid violet;
 padding: 10px 5px 2px 20px;
}
.padding-each {
 border: 1px solid white;
 padding-top: 5px;
 padding-right: 10px;
 padding-bottom: 15px;
 padding-left: 25px;
</style>

<p class="padding-all">Aku adalah tag p dengan padding </p>
atau
<p class="padding-each">Aku adalah tag p dengan padding </p>
{{</rawhtml>}}


{{<alert class="info">}}
Jika konten punya lebar 100% seperti di atas, maka `padding-right` tidak terpakai. Karena konten dimulai dari kiri.
{{</alert>}}

## Nilai satuan padding
Padding bisa punya nilai absolut `px` seperti yang kita lihat. Atau opsi lain:
```css
- satuan solid lain seperti px, pt, cm, dll..
- Presentasi dari lebar elemen pembungkusnya. Contoh -> padding :10%;
- inherit : mengambil nilai dari pembungkusnya
```