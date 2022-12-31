---
title: "Lokasi relatif media HTML"
slug: "lokasi-relatif-media-HTML"
snippet: "Untuk mengambil sebuah sumber media dari lokasi relatif tertentu, ketahui caranya di sini"
date: 2022-12-10T16:18:25+08:00
label: HTML
order: 235
---

Jika sumber media yang kamu gunakan, berada di folder yang sama atau disebut sebagai relatif (bukan absolut), begini cara mengambil lokasinya

## Sumber media berada di folder "anak"
Ini berlaku, bukan hanya pada gambar, tapi juga audio, video dan media lainnya.

Jika kita mempunya gambar di folder yang sama di mana HTML kita berada, kita bisa menampilkannya berdasarkan lokasi tersebut. 

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

Gunakan backslash ("/") untuk masuk ke folder anak.

## Sumber media berada di folder lain
Jika sumber media, berada di folder atas atau lokasi lain.

Contoh stuktur folder kamu seperti ini:
```&nbsp;
|_ src
  |_ index.html
|_ assets/
    |_ foto1.jpg
```

Sekarang file index.html kita berada di bawah folder `src`. Maka perlu mundur satu langkah sebelum masuk ke folder `assets`. Cara untuk mundur gunakan titik dua `("../")`


```html
<img width="300" height="150" src="../assets/foto1.jpg">
```

## Mundur dua folder belakang atau lebih

Jika sumber media, berada jauh di folder atas (dua atau lebih).

Contoh stuktur folder kamu seperti ini:
```&nbsp;
|_ src
  |_ files
    |_ index.html
|_ assets/
    |_ foto1.jpg
```

Sekarang file index.html kita berada di bawah folder `files` dan `src` . Maka perlu mundur dua langkah sebelum masuk ke folder `assets`. Cara untuk mundur gunakan titik dua `("../")`


```html
<img width="300" height="150" src="../../assets/foto1.jpg">
```
Hal ini berlaku untuk seberapa jauh pun datanya. Gunakan (../) untuk setiap mundur satu langkah.


## Lokasi absolut
Lawan dari lokasi relatif, adalah lokasi `absolut`. Di mana sumber media diambil langsung dari sebuah URL. seperti `https://kodi.ng/gambar/foto1.jpg`