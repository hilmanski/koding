---
title: "Menggambar dengan SVG di HTML"
slug: "menggambar-dengan-SVG-di-HTML"
snippet: "SVG adalah elemen yang bisa digunakan untuk menggambar vector grafik pada sebuah halaman situs HTML dengan format XML."
date: 2023-01-05T07:17:51+08:00
label: HTML
order: 900
chapter: Grafis HTML
---

Kita bisa membuat gambar SVG di sebuah halaman HTML dengan tag `<svg>`. Kita bisa membuat path, berbagai bentuk, bahkan text dengan svg.

{{<alert class="info">}}
SVG merupakan singkatan dari "Scalable Vector Graphics", ia adalah salah satu format untuk menampilkan gambar.
{{</alert>}}

Kita belum akan mempelajari SVG terlalu jauh. Berikut hanya contoh-contoh bagaimana menggambar elemen dengan SVG.

## Cara menggambar dengan elemen SVG

- Elemen svg dibuka dan ditutup dengan tag `svg`.
- Lebar dan tinggi ditentukan di atribut svg dengan atribut `width` dan `height`.
- Di dalam tag SVG, bisa ada banyak elemen sesuai dengan yang ingin digambarkan.

## Menggambar kotak dengan SVG
```html
<svg width="200" height="200">
  <rect width="200" height="200" style="fill:white;stroke-width:10;stroke:blue" />
</svg>
```

{{<rawhtml>}}
<svg width="200" height="200">
  <rect width="200" height="200" style="fill:white;stroke-width:10;stroke:blue" />
</svg>
{{</rawhtml>}}

Penjelasan:
- Membuat svg dengan lebar dan tinggi 200px
- Dengan tag rect untuk membuat kotak yang punya lebar yang sama.
- Di atribut style, berisi hiasan warna (fill), warna border (stroke) dan lebarnya.

## Menggambar lingkaran dengan SVG
```html
<svg width="200" height="200">
   <circle cx="50" cy="50" r="40" stroke="red" stroke-width="2" fill="orange" />
</svg>
```

{{<rawhtml>}}
<svg width="100" height="100">
   <circle cx="50" cy="50" r="40" stroke="red" stroke-width="2" fill="orange" />
</svg>
{{</rawhtml>}}

Penjelasan Baru:
- Tag `circle` untuk membuat lingkaran
- Atribut r pada circle untuk menentukan radius
- Posisi koordinat mulai menggambar, ditentukan dengan `cx` dan `cy`