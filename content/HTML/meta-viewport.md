---
title: "Meta viewport pada HTML"
slug: "meta-viewport-pada-HTML"
snippet: "Viewport adalah area pada sebuah situs yang dapat dilihat. Menggunakan meta viewport akan membantu kamu mengelola situs responsif"
date: 2023-01-02T19:00:11+08:00
label: HTML
order: 175
---

Saat ini ada berbagai ukuran layar di mana situs kita bisa ditampilkan. Seperti pada desktop, mobile dan table yang punya berbagai ukuran berbeda.

Bahkan di satu desktop/monitor pun, pengguna bisa mengubah ukuran (resize) dari sebuah browser. 

{{<alert class="warning">}}
Sebagai pengembang situs, kita perlu memikirkan bagaimana situs kita ingin terlihat di variasi ukuran tersebut atau sering disebut membuat website responsif.
{{</alert>}}

## Menggunakan meta viewport di HTML
Bayangkan kalau pengunjung situs kamu harus melihat tampilan desktop pada saat di telepon genggam yang ia gunakan. Tentu banyak tulisan menjadi kecil dan tidak terlihat karena harus dimuat pada satu layar.

Karena itu kita perlu memberi tahu, bagaimana sebuah situs perlu terlihat di layar tertenu. Dengan cara menggunakan meta viewport dengan nilai content berikut

```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    ...
</head>

```

Ada banyak detail yang bisa kita atur pada atribut `content`. Seperti lebar (width), tinggi(height) dan initial-scale (ukuran skala pertama).

Bagian penting di sini adalah `initial-scale` yang kita beri nilai 1 sebagai tanda bahwa pengguna tidak perlu melakukan zoom lagi. 


## Opsi nilai atribute content
Ada banyak nilai yang bisa dimasukkan pada atribut `content`, untuk memasukkan lebih dari satu nilai, pisahkan dengan tanda koma.

### > Nilai initial-scale
mulai dari 0.1 hingga 10. 

### > Nilai width
Bisa berupa angka atau device-width yang berarti 100% lebarnya.

### > Nilai height
Bisa berupa angka atau device-height yang berarti 100% tingginya.

### > Nilai user-scalable
tentukan apakah user boleh melakukan zoom atau tidak dengan memberi nilai 0 atau 1 (1 berarti ya, 0 berarti tidak)

### > Nilai minimum-scale
Menentukan minimal zoom yang boleh dilakukan pengguna. Mulai dari 0.1 hingga 10

### > Nilai maximum-scale
Menentukan maksimal zoom yang boleh dilakukan pengguna. Mulai dari 0.1 hingga 10