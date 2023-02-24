---
title: "Menampilkan favicon pada HTML"
slug: "menampilkan-favicon-HTML"
snippet: "Untuk membuat situs kamu unik, tambahkan favicon yang berguna sebagai icon situs seperti pada tab browser"
date: 2023-01-02T18:58:11+08:00
label: HTML
order: 165
---

Untuk menampikan favicon pada sebuah situs, seperti yang muncul pada tab browser yang membuatnya unik dan terlihat jelas seperti ini

{{< mediacontent src="https://ucarecdn.com/e79e3eaa-d368-4b5c-9c92-b93f7e4d540d/ScreenShot20230102at190628.png" title="contoh favicon di sebuah situs" alt="contoh favicon di sebuah situs" >}}

Gunakan tag `link` dengan atribut rel `icon` di antara tag `<head>`

## Contoh memasang favicon di HTML
Berikut contoh menggunakan gambar favicon di sebuah situs
```html
<!DOCTYPE html>
<html>
<head>
    <title>Judul Website</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>
 ...
</body>
</html>
```

Pastikan lokasi gambar pada atribut `href` sesuai dengan lokasi asal file gambar yang kamu gunakan.

## Bagaimana untuk punya file .ico
Ada banyak situs di internet yang bisa kamu gunakan. Misalnya kamu punya gambar berformat jpg yang ingin diconvert ke .ico.

Maka coba google "convert jpg to ico", nanti kamu bisa mendapatkan file .ico tersebut sebagai sumber filenya.
