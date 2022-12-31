---
title: "Atribut list di Input HTML"
slug: "atribut-list-di-input-HTML"
snippet: "Atribut list pada sebuah input HTML berguna untuk memberi pilihan ada user atau saran input."
date: 2022-12-31T09:20:56+08:00
label: HTML
order: 530
---

Untuk memudahkan pengguna mengisi suatu input, kita bisa memberikan beberapa opsi berupa saran yang bisa dipilih pengunjung situs.


## Contoh penggunaan atribut list
Gunakan atribut `list` dengan nama yang sama pada sebuah tag `datalist` yang berisi data-data yang ingin menjadi saran.

```
<label for="subject">Pilih pelajaran yang ingin kamu coba:</label>
<input list="subjects" name="subject">

<datalist id="subjects">
  <option value="HTML">
  <option value="CSS">
  <option value="Javascript">
  <option value="Go">
  <option value="Rust">
</datalist>
```

Hasilnya
{{<rawhtml>}}
<label for="subject">Pilih pelajaran yang ingin kamu coba:</label>
<input list="subjects" name="subject">

<datalist id="subjects">
  <option value="HTML">
  <option value="CSS">
  <option value="Javascript">
  <option value="Go">
  <option value="Rust">
</datalist>
{{</rawhtml>}}

Pada saat input dalam keadaan kosong, lalu kamu klik, akan muncul opsi opsi yang kamu definisikan pada atribut `value` di antara tag `option` pada `datalist`.

{{<alert class="info">}}
Pengguna tetap bisa memasukkan input apa saja <br>
Ini hanya saran yang bisa dipilih.
{{</alert>}}

