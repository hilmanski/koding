---
title: "Input Url di HTML"
slug: "input-url-di-HTML"
snippet: "Untuk memasukkan data berupa URL ke sebuah formulir HTML, gunakan input dengan type URL"
date: 2022-12-30T20:16:30+08:00
label: HTML
order: 380
---

Input dengan type `url` digunakan untuk memasukkan data berupa url ke sebuah formulir di HTML.

```html
<input type="url" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type="url" />
{{</rawhtml>}}

Secara tampilan, tidak ada perbedaan antara input `url` dengan input `text`. Perbedaan terletak pada saat kita melakukan validasi pada formulir tersebut.

## Contoh validasi input url

Untuk melihat validasi otomatis dari browser, kita buat dulu form HTML yang lebih lengkap seperti ini

```html
<form action="#">
    <input type='url'>
    <input type='submit'/>
</form>
```
Hasilnya

{{<rawhtml>}}
<form action="#">
    <input type='url'>
    <input type='submit'/>
</form>
{{</rawhtml>}}

Coba isi input di atas dengan text biasa, lalu tekan tombol `submit`. Kamu akan mendapatkan pesan `please enter a URL`. HTML membaca jenis input yang digunakan, karena itu kamu harus memasukkan sebuah url seperti `https://sekolahkoding.com`.

## Nilai awal pada input url

Untuk memberi nilai otomatis pada input url, gunakan atribut `value`.

```html
<input type='url' value="https://google.com">
```
Hasilnya

{{<rawhtml>}}
<input type='url' value="https://google.com">
{{</rawhtml>}}