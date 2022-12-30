---
title: "Input email di HTML"
slug: "input-email-di-HTML"
snippet: "Untuk membuat sebuah form dengan input email di sebuah situs HTML, gunakan input dengan type email"
date: 2022-12-30T20:35:41+08:00
label: HTML
order: 390
---

Input dengan type `email` digunakan untuk menerima masukan data berupa email.

```html
<input type="email" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type="email" />
{{</rawhtml>}}

Secara tampilan, tidak ada perbedaan antara input `email` dengan input `text`.

Perbedaan terletak pada saat melakukan validasi data nanti.

## Contoh validasi input email

Untuk melihat fungsi input email, kita buat dulu form HTML yang lebih lengkap seperti ini

```html
<form action="#">
    <input type='email'>
    <input type='submit'/>
</form>
```
Hasilnya

{{<rawhtml>}}
<form action="">
    <input type='email'>
    <input type='submit'/>
</form>
{{</rawhtml>}}

Sekarang coba masukkan text biasa, lalu ketik submit. Akan muncul pesan untuk memasukkan format email yang seharusnya.


## Nilai awal pada input email

Untuk memberi nilai otomatis pada input email, gunakan atribut `value`.

```html
<input type='email' value="hi@kodi.ng">
```
Hasilnya

{{<rawhtml>}}
<input type='email' value="hi@kodi.ng">
{{</rawhtml>}}

## Validasi email dengan format yang ditentukan

Untuk melihat fungsi input email yang divalidasi sesuai format tertentu, gunakan atribut `pattern` dengan sebuah aturan [regular expression](https://en.wikipedia.org/wiki/Regular_expression)

```html
<form action="#">
    <input type='email' pattern=".+@*\.com">
    <input type='submit'/>
</form>
```
Hasilnya

{{<rawhtml>}}
<form action="">
    <input type='email' pattern=".+@*\.com">
    <input type='submit'/>
</form>
{{</rawhtml>}}

Sekarang, data yang kamu masukkan harus berformat AWAL@AKHIR.com. `Awal` dan `Akhir` boleh apa saja, namun tanda (@) dan (.) harus ada di sana.
