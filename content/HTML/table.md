---
title: "Membuat tabel di HTML"
slug: "membuat-tabel-di-HTML"
snippet: "Saat menampilkan data yang terstruktur biasanya kita menggunakan sebuah table yang terbagi ke baris dan kolom. Lihat caranya di HTML"
date: 2022-12-05T18:58:11+08:00
label: HTML
order: 110
---

Saat menampilkan data yang terstruktur biasanya kita menggunakan sebuah tabel yang terbagi ke baris dan kolom. Seperti berikut

{{<rawhtml>}}
<table>
  <tr>
    <th>Nama</th>
    <th>Jenis</th>
  </tr>
  <tr>
    <td>Paus</td>
    <td>Air</td>
  </tr>
  <tr>
    <td>Rusa</td>
    <td>Darat</td>
  </tr>
   <tr>
    <td>Hiu</td>
    <td>Air</td>
  </tr>
</table>

<style>
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #333;
}
</style>
{{</rawhtml>}}

  
Tabel di atas, dibuat dengan kode HTML berikut

```html
<table>
  <tr>
    <th>Nama</th>
    <th>Jenis</th>
  </tr>
  <tr>
    <td>Paus</td>
    <td>Air</td>
  </tr>
  <tr>
    <td>Rusa</td>
    <td>Darat</td>
  </tr>
   <tr>
    <td>Hiu</td>
    <td>Air</td>
  </tr>
</table>
```

{{<alert class="comment">}}
<p>Tampilan tabel di atas sudah dihias dari tampilan aslinya</p>
{{</alert>}}

## Tampilan dasar tabel HTML
Secara otomatis, tampilan dasar dari table akan terbagi ke baris dan kolom namun tanpa ada batas apa-apa. Tidak ada jarak dan baris. Untuk menghiasnya kita perlu belajar CSS nanti.

## Cara membuat tabel HTML
- Untuk membuat table, gunakan tag `<table>` sebagai pembungkus
- Untuk membuat barisnya, gunakan tag `<tr>` (singkatan dari table row)
- Untuk membuat isi dari setiap barisnya, gunakan tag `<td>` (singkatan dari  table data)
- Untuk membuat judul dari masing-masing baris tabelnya, gunakan tag `<th>` (singkatan dari table header)

Mungkin kamu akan bingung jika harus mengingat semuanya. Tidak perlu khawatir. Kamu bisa menyalin dan memainkan kode di sini.

{{<codepen src="jOKXMRo">}}

Keterangan:  
- `<th>` membungkus "Nama" dan "Jenis". Karena itu mereka menjadi tebal seperti sebuah judul
- Setelah itu, masing-masing hewan disusun menjadi baris di antara tag `<tr>`

## Membuat tabel HTML dengan 3 kolom

Dari contoh di atas, mari mengembangkan dengan kolom ketiga

{{<codepen src="KKebgOO">}}

Dengan prinsip yang sama, kamu bisa mengembangkannya menjadi berapapun baris atau kolom yang kamu butuhkan.

{{<alert class="try">}}
<p> 1. Tambahkan hewan di atas dan 2. Tambahkan kategori baru yaitu kategori "Bertelur"</p>
{{</alert>}}