---
title: "Menampilkan gambar HTML"
slug: "menampilkan-gambar-HTML"
snippet: "Gunakan tag img untuk menampikan gambar di situs yang kamu buat dengan kode HTML"
date: 2022-12-03T16:10:10+08:00
label: HTML
order: 100
---

Bosan dong kalau tulisan terus isi websitenya. Sekarang kita lihat cara memasukkan gambar di situs kamu dengan HTML.

```
<img src="https://i.ibb.co/k39G1tL/Screen-Shot-2022-12-05-at-17-18-51.png">
```

menghasilkan gambar

![sample image classic computer in woods](https://i.ibb.co/k39G1tL/Screen-Shot-2022-12-05-at-17-18-51.png)

## Tag img tanpa penutup
Tag `<img>` tidak punya tag penutup seperti ini `</img>` teman-teman. Kita cukup membuat tag pembuka dengan atribut `src`.

## Atribut src pada tag Img
Atribut `src` pada tag Img berguna sebagai informasi dari mana sumber gambar yang kita punya. Selama gambarnya berada di internet, kita bisa memasukkan link dari gambar tersebut.

## Mengatur lebar pada tag Img
Untuk menentukan ukuran lebar gambar di HTML, kita menambahkan atribut `width`, yang berisi nilai angka dalam [pixel](https://en.wikipedia.org/wiki/Pixel).

```
<img width="100" src="https://i.ibb.co/k39G1tL/Screen-Shot-2022-12-05-at-17-18-51.png">
```

menghasilkan gambar

{{<rawhtml>}}<img width="100" alt="gambar komputer dengan hutan" src="https://i.ibb.co/k39G1tL/Screen-Shot-2022-12-05-at-17-18-51.png">{{</rawhtml>}}

Di contoh ini kita menampilkan gambar sebelumnya dengan lebar 100 pixel. Secara otomatis, tingginya pun ikut disesuaikan.

## Mengatur tinggi gambar pada tag Img
Untuk menentukan ukuran tinggi gambar di HTML, kita menambahkan atribut `height`, yang berisi nilai angka dalam [pixel](https://en.wikipedia.org/wiki/Pixel).

menghasilkan gambar

```
<img height="200" src="https://i.ibb.co/k39G1tL/Screen-Shot-2022-12-05-at-17-18-51.png">
```

{{<rawhtml>}}<img height="200" style="height: 200px;" alt="gambar komputer dengan hutan" src="https://i.ibb.co/k39G1tL/Screen-Shot-2022-12-05-at-17-18-51.png">{{</rawhtml>}}

Di contoh ini kita menampilkan gambar sebelumnya dengan lebar 200 pixel. Secara otomatis, lebarnya pun ikut disesuaikan.

## Mengatur lebar dan tinggi Img
Sangat disarankan untuk mengatur lebar dan tinggi gambar pada saat ingin menampilkannya. Ini membantu browser untuk menyediakan tempat yang dibutuhkan sesuai ukuran tersebut

```
<img width="300" height="150" src="https://i.ibb.co/k39G1tL/Screen-Shot-2022-12-05-at-17-18-51.png">
```

{{<rawhtml>}}<img width="250" height="150" style="height: 200px;" alt="gambar komputer dengan hutan" src="https://i.ibb.co/k39G1tL/Screen-Shot-2022-12-05-at-17-18-51.png">{{</rawhtml>}}

## Mengambil gambar dari lokasi relatif
Selain dengan link langsung dari gambar tersebut, jika kita mempunya gambar di folder yang sama di mana HTML kita berada, kita bisa menampilkannya berdasarkan lokasi tersebut. 

Contoh stuktur folder kamu seperti ini:
```
|_ index.html
|_ assets/
    |_ foto1.jpg
```
Di mana kamu punya gambar yang diletakkan di dalam folder `assets` yang berada di lokasi sama dengan file `index.html` . Maka cara mengambilnya 
```
<img width="300" height="150" src="/assets/foto1.jpg">
```