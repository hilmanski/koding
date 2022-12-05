---
title: "Menampilkan daftar di HTML"
snippet: "Daftar atau list bisa kita tampilkan di HTML dengan tiga cara berbeda, menggunakan tag ul, ol atau dt"
date: 2022-12-05T17:39:48+08:00
label: HTML
order: 110
---

Membuat daftar makanan, daftar tugas, daftar belanja dan daftar lainnya, akan sulit jika terlihat seperti tulisan lainnya. Untung saja HTML punya cara untuk menampilkan sebuah daftar dengan menarik. Sehingga bisa terlihat seperti ini:
- Bangun Pagi
- Belajar HTML
- Mandi kilat

{{<alert class="comment">}}
<p> Lihat deh ada bulatan di sebelah kiri, menandakan elemen ini adalah sebuah daftar.</p>
{{</alert>}}

## List tanpa nomor
Untuk menampikan sebuah daftar tanpa nomor yang berurutan, kita bisa menggunakan tag `<ul>` yang membungkus sederet list `<li>`

```
<ul>
    <li> Belajar link </li>
    <li> Belajar gambar </li>
    <li> Belajar list </li>
</ul>
```

Kode di atas menghasilkan: 

{{<rawhtml>}}
<ul>
    <li> Belajar link </li>
    <li> Belajar gambar </li>
    <li> Belajar list </li>
</ul>
{{</rawhtml>}}

Tag `<li>` nya boleh sebanyak apapun, sementara tag pembungkusnya yaitu `<ul>` cukup satu saja.

## List dengan nomor
Untuk menampikan sebuah daftar dengan nomor urutannya, kita bisa menggunakan tag `<ol>` yang membungkus sederet list `<li>`

```
<ol>
    <li> Belajar link </li>
    <li> Belajar gambar </li>
    <li> Belajar list </li>
</ol>
```

Kode di atas menghasilkan: 

{{<rawhtml>}}
<ol class='mb-5'>
    <li> Belajar link </li>
    <li> Belajar gambar </li>
    <li> Belajar list </li>
</ol>
{{</rawhtml>}}

{{<alert class="comment">}}
<p> Kamu lihat sekarang bukan hanya bulatan di sebelah kirinya? tapi sudah ada nomor urutannya.</p>
{{</alert>}}

Tag `<li>` nya boleh sebanyak apapun, sementara tag pembungkusnya yaitu `<ol>` cukup satu saja.

## Daftar deskripsi
Selain kedua daftar biasa, HTML juga menyediakan cara menampilkan daftar dengan deskripsinya, menggunakan tag `<dl>` (description list) yang membungkus `<dt>` (definition term) dan `<dd>` yang berisi penjelasannya. 

```
<dl>
  <dt>Air</dt>
  <dd>- elemen yang menenangkan</dd>
  <dt>API</dt>
  <dd>- elemen yang membuat panas</dd>
</dl>
```

Kode di atas menghasilkan 

{{<rawhtml>}}
<dl>
  <dt>Air</dt>
  <dd>- elemen yang menenangkan</dd>
  <dt>API</dt>
  <dd>- elemen yang membuat panas</dd>
</dl>
{{</rawhtml>}}

{{<alert class="comment">}}
<p> Sekarang ada garis tanda kurang di setiap penjelasan dari masing masing daftar yang dibuat di tag dt.</p>
{{</alert>}}