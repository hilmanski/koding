---
title: "Font Family dari Google"
slug: "font-family-dari-google"
snippet: "Google Fonts menawarkan variasi font yang lebih beragam, yang bisa disesuaikan dengan karakter dan jenis situs kamu"
date: 2023-03-25T06:00:10+08:00
label: CSS
order: 255
---

Ada beberapa situs yang menawarkan variasi font yang jauh lebih beragam, salah satunya yang sangat populer digunakan adalah [Google Fonts](https://fonts.google.com/).

Di situs ini kamu bisa mencari berbagai jenis font yang bisa kamu gunakan untuk situsmu. Lalu menggunakannya dengan memasang kode di bagian CSS atau HTML.

## Contoh menggunakan Google font

Sebagai contoh, jika saya ingin memilih font `Roboto` maka harus melakukan

``` html
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.p1 {
  font-family: 'Roboto', sans-serif;
}
</style>
```

{{<result>}}
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.p1 {
  font-family: 'Roboto', sans-serif;
}
</style>

<p class="p1"> Roboto dari Google</p>

{{</result>}}

Perhatikan setelah roboto, kita juga menuliskan sans-serif, yang berperan sebagai fallback, jika orang lain membuka situs kita dan font tersebut tidak disupport.

### Tips 👨‍🎨
- Setiap font punya banyak variasi, seperti italic, bold dan ketebalannya. Kamu bisa memilih salah satu saja, tanpa harus menggunakan semuanya.
- Buat situs kamu jadi lebih nyaman dibaca dengan font yang bervariasi, berbeda antara judul dan isi, untuk memperlihatkan hirarki.


## Keuntungan google font
Selain menggunakan Google font seperti ini, kamu juga bisa mengupload "font" kamu di folder yang sama dengan file HTML lalu menggunakannya.

Keuntungan menggunakan google font, kamu hanya perlu memasukkan link, tanpa perlu mengunduh dan memindahkan fontnya terlebih dahulu.