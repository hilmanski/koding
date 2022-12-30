---
title: "Input search di HTML"
slug: "input-search-di-HTML"
snippet: "Untuk membuat sebuah form pencarian di sebuah situs HTML, gunakan input dengan type search"
date: 2022-12-30T20:24:54+08:00
label: HTML
order: 385
---

Input dengan type `search` digunakan khusus saat situs kamu ingin dipasangkan sebuah form pencarian.


```html
<input type="search" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type="search" />
{{</rawhtml>}}

Secara tampilan, tidak ada perbedaan antara input `search` dengan input `text`, kecuali pada beberapa Browser ada tanda silang di bagian input search, saat kamu mengetik. 

Perbedaan terletak pada kegunaan input itu sendiri, yang belum akan kita lihat di sini.

## Contoh validasi input search

Untuk melihat fungsi input search, kita buat dulu form HTML yang lebih lengkap seperti ini

```html
<form action="#">
    <input type='search' name="query">
    <input type='submit'/>
</form>
```
Hasilnya

{{<rawhtml>}}
<form action="">
    <input type='search' name="query">
    <input type='submit'/>
</form>
{{</rawhtml>}}

- Coba masukkan sebuah text, lalu ketik submit.
- Perhatikan di URL kamu sekarang ada tambahan `?query=TEXT-YANG-KAMU-MASUKKAN`

### Penjelasan
- Input search, biasanya dipasangkan dengan atribut `name`, yang berguna sebagai penanda atau nama dari input ini, agar mudah diambil datanya nanti
- Untuk mengambil datanya, belum akan dilihat di pelajaran HTML, karena tugas ini di luar lingkup HTML.

## Nilai awal pada input search

Untuk memberi nilai otomatis pada input search, gunakan atribut `value`.

```html
<input type='search' value="belajar HTML">
```
Hasilnya

{{<rawhtml>}}
<input type='search' value="belajar HTML">
{{</rawhtml>}}