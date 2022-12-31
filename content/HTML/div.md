---
title: "DIV pada HTML"
slug: "div-pada-HTML"
snippet: "DIV bisa digunakan untuk mengelompokkan beberapa elemen HTML menjadi satu. Secara visual DIV tidak ada bedanya"
date: 2022-12-31T16:17:51+08:00
label: HTML
chapter: Non Semantic HTML
order: 600
---

Untuk memberi hiasan atau aksi tertentu ke beberapa elemen sekaligus, kita bisa mengelompokkan beberapa elemen HTML menjadi satu dengan tag `div`. 

{{<alert class="info">}}
Untuk mudah mengingat, `div` diambil dari kata `division` dalam bahasa inggris atau pembagi. <br> Di mana div berperan sebagai pembagi beberapa elemen.
{{</alert>}}

## Contoh penggunaan DIV

Di sini saya akan membagi dua div. Kamu bisa menggunakan berapapun div yang kamu mau/butuhkan.

```html
<div>
 <p>Paragraf pertama</p>
 <p>Masih kelompok pertama</p>
</div>

<div>
 <p>Paragraf kedua</p>
 <p>Sudah kelompok kedua</p>
</div>
```

Hasilnya
{{<rawhtml>}}
<div>
 <p>Paragraf pertama</p>
 <p>Masih kelompok pertama</p>
</div>

<div>
 <p>Paragraf kedua</p>
 <p>Sudah kelompok kedua</p>
</div>
{{</rawhtml>}}

## Tidak ada perubahan tampilan
Seperti yang kamu lihat, tidak ada perbedaan secara tampilan, ketika menggunakan DIV. Namun setelah nanti kamu mempelajari CSS atau Javascript, barulah terlihat kegunaan DIV itu sendiri.

Contoh:

```html
<div style="background:orange;">
 <p>Paragraf pertama</p>
 <p>Masih kelompok pertama</p>
</div>

<div style="background:green;">
 <p>Paragraf kedua</p>
 <p>Sudah kelompok kedua</p>
</div>
```

Hasilnya
{{<rawhtml>}}
<div style="background:orange;">
 <p>Paragraf pertama</p>
 <p>Masih kelompok pertama</p>
</div>

<div style="background:green;">
 <p>Paragraf kedua</p>
 <p>Sudah kelompok kedua</p>
</div>
{{</rawhtml>}}

Di sini saya memberi hiasan (CSS), dua warna background yang berbeda di setiap `div` nya.

## Kenapa tidak menggunakan tag lain
Sebuah tag bisa dibungkus di tag lain, lalu kenapa tidak mengelompokkan dengan tag lain? 

Alasannya, karena tag lain sudah punya sifat atau makna tersendiri. Seperti tag `<p>` yang akan memberi jarak dan punya kegunaan sebagai paragraf.

Sementara `<div>` adalah tag non-semantic yang ia sendiri tidak bermakna apa-apa.

{{<alert class="info">}}
Div adalah tag yang bersifat `block` alias akan hadir di baris berikutnya.
{{</alert>}}