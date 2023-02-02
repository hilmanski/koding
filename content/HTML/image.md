---
title: "Menampilkan gambar HTML"
slug: "menampilkan-gambar-HTML"
snippet: "Gunakan tag img untuk menampikan gambar di situs yang kamu buat dengan kode HTML"
date: 2022-12-03T16:10:10+08:00
label: HTML
order: 210
---

Bosan dong kalau tulisan terus isi websitenya. Sekarang kita lihat cara memasukkan gambar di situs kamu dengan HTML.

```html
<img src="https://sko.dev/sumber-gambar.png">
```

menghasilkan gambar

![sample image classic computer in woods](https://ucarecdn.com/152bb474-7d2f-4240-a5ad-f8b5f925e49a/)

## Tag img tanpa penutup
Tag `<img>` tidak punya tag penutup seperti ini `</img>` teman-teman. Kita cukup membuat tag pembuka dengan atribut `src`.

## Atribut src pada tag Img
Atribut `src` pada tag Img berguna sebagai informasi dari mana sumber gambar yang kita punya. Selama gambarnya berada di internet, kita bisa memasukkan link dari gambar tersebut.

## Mengatur lebar pada tag Img
Untuk menentukan ukuran lebar gambar di HTML, kita menambahkan atribut `width`, yang berisi nilai angka dalam [pixel](https://en.wikipedia.org/wiki/Pixel).

```html
<img width="100" src="https://sko.dev/sumber-gambar.png">
```

menghasilkan gambar

{{<rawhtml>}}<img width="100" alt="gambar komputer dengan hutan" src="https://ucarecdn.com/152bb474-7d2f-4240-a5ad-f8b5f925e49a/">{{</rawhtml>}}

Di contoh ini kita menampilkan gambar sebelumnya dengan lebar 100 pixel. Secara otomatis, tingginya pun ikut disesuaikan.

## Mengatur tinggi gambar pada tag Img
Untuk menentukan ukuran tinggi gambar di HTML, kita menambahkan atribut `height`, yang berisi nilai angka dalam [pixel](https://en.wikipedia.org/wiki/Pixel).

menghasilkan gambar

```html
<img height="200" src="https://sko.dev/sumber-gambar.png">
```

{{<rawhtml>}}<img height="200" style="height: 200px;" alt="gambar komputer dengan hutan" src="https://ucarecdn.com/152bb474-7d2f-4240-a5ad-f8b5f925e49a/">{{</rawhtml>}}

Di contoh ini kita menampilkan gambar sebelumnya dengan lebar 200 pixel. Secara otomatis, lebarnya pun ikut disesuaikan.

## Mengatur lebar dan tinggi Img
Sangat disarankan untuk mengatur lebar dan tinggi gambar pada saat ingin menampilkannya. Ini membantu browser untuk menyediakan tempat yang dibutuhkan sesuai ukuran tersebut

```html
<img width="300" height="150" src="https://sko.dev/sumber-gambar.png">
```

{{<rawhtml>}}<img width="250" height="150" style="height: 200px;" alt="gambar komputer dengan hutan" src="https://ucarecdn.com/152bb474-7d2f-4240-a5ad-f8b5f925e49a/">{{</rawhtml>}}

## Mengambil gambar dari lokasi relatif
Selain dengan link langsung dari gambar tersebut, jika kita mempunya gambar di folder yang sama di mana HTML kita berada, kita bisa menampilkannya berdasarkan lokasi tersebut. 

Contoh stuktur folder kamu seperti ini:
```&nbsp;
|_ index.html
|_ assets/
    |_ foto1.jpg
```
Di mana kamu punya gambar yang diletakkan di dalam folder `assets` yang berada di lokasi sama dengan file `index.html` . Maka cara mengambilnya 
```html
<img width="300" height="150" src="/assets/foto1.jpg">
```

## Lazy loading image
Butuh waktu dan sumber daya untuk menampilkan sebuah gambar. Karena itu penting untuk hanya menampilkan gambar ketika muncul di layar saja. [Baca detailnya di sini](https://web.dev/browser-level-image-lazy-loading/)

Sudah ada cara praktis untuk melakukan ini, yaitu dengan atribut `loading='lazy'`

```html
<img src="image.jpg" alt="judul gambar" loading="lazy" />
```

Kamu tidak akan melihat perubahan langsung dengan menambahkan atribut tersebut. Yang dilakukan oleh `loading=lazy` adalah ia hanya akan memuat gambar ketika dibutuhkan saja, yang akan mempercepat situs kamu dan hemat sumber daya. 
