---
title: "Atribut disabled di Input HTML"
slug: "atribut-disabled-di-input-HTML"
snippet: "Atribut disabled pada sebuah input HTML berguna untuk menonaktifkan sebuah input agar tidak bisa dimanipulasi."
date: 2022-12-31T09:20:56+08:00
label: HTML
order: 535
---

Jika sebuah input ingin di non-aktifkan agar tidak bisa dimanipulasi, gunakan atribut `disabled` di sana.

## Contoh penggunaan atribut disabled

```html
<input type='text' value="username" disabled>
<input type='text' value="fullname">
```
Hasilnya

{{<rawhtml>}}
<input type='text' value="username" disabled>
<input type='text' value="fullname">
{{</rawhtml>}}

- Kamu bisa memanipulasi input fullname (kedua), tapi tidak dengan username (pertama)
- Di beberapa browser, akan ada perbedaan tampilan saat sebuah input menggunakan atribut disabled.


## Contoh disabled pada input lain
Contoh atribut disabled yang digunakan pada input checkbox


```html
<input type='checkbox' disabled> Ini Ter-disabled <br>
<input type='checkbox'> Ini Tidak 
```
Hasilnya

{{<rawhtml>}}
<input type='checkbox' disabled> Ini Ter-disabled <br>
<input type='checkbox'> Ini Tidak 
{{</rawhtml>}}


## Apa perbedaan atribut readonly dan disabled.
Secara kegunaan, atribut readonly dan disabled berfungsi untuk mencegah manipulasi nilai pada sebuah input. Berikut beberapa perbedannya:

1. Readonly tidak ada perubahan visual, disabled ada.
2. Data readonly tetap terikirim, disabled tidak.
3. Penggunaan readonly terbatas di beberapa input saja.