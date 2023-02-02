---
title: "Input image di HTML"
slug: "input-image-di-HTML"
snippet: "Sebuah tombol bisa juga dibuat berupa gambar, dengan menggunakan input image di form HTML"
date: 2022-12-30T20:45:45+08:00
label: HTML
order: 395
---
Untuk menampilkan tombol submit yang lebih cantik, kita bisa menggunakan input dengan type `image` sebagai pengganti input `submit`.

{{<alert class="info">}}
Untuk menghias tombol, nanti kamu juga akan belajar CSS.
{{</alert>}}

## Menggunakan input image di HTML

Kita akan membuat sebuah form dengan tombol submit yang menggunakan gambar

```html
<form action="#">
    <input type='text'> <br>
    <input type='image' width="150" height="50"
           src="https://sko.dev/sumber-gambar.png"
            >

</form>
```
Hasilnya

{{<rawhtml>}}
<form action="">
    <input type='text'>  <br>
    <input type='image' width="150" height="30" 
            src="https://ucarecdn.com/142626cf-ad1b-4f7c-90a7-bbbb6e0e0223/-/preview/150x50/">
</form>
{{</rawhtml>}}

Tombol berawarna di atas, adalah sebuah tombol submit. Jika kamu menekannya, formulir di atas akan terkirim. 

{{<alert class="info">}}
Jika ingin menampilkan tulisan di tombolnya, maka kamu harus memasukkan tulisan tersebut di gambar yang kamu muat.
{{</alert>}}

## Mengatur lebar dan tinggi gambar input type image
Ukuran lebar dan tinggi gambar, bisa diatur dengan atribut `width` dan `height`. Sama seperti saat menampilkan gambar biasa.

## Atribut alt pada input image
Gunakan atribut `alt` sebagai alternatif jika gambar tidak berhasil dimuat atau sebagai informasi untuk dibaca screen reader.

```html
<input type='image' width="150" height="50" alt="tombol submit"
           src="https://sko.dev/sumber-gambar.png" />
```