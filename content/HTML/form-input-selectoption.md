---
title: "Select Option di HTML"
slug: "select-option-di-HTML"
snippet: "Mengenal Select Option untuk memberi daftar pilihan yang memudahkan pengguna di sebuah formulir pada situs dengan HTML"
date: 2022-12-25T16:34:31+08:00
label: HTML
order: 345
---
Membuat pilihan pada sebuah formulir bisa memudahkan pengguna dan membatasi nilai sesuai yang kita mau. Berikut contoh membuat pilihan dropdown dengan HTML menggunakan `select` dan `option` tag.

{{<rawhtml>}}
<label for="subjects">Pilih pelajaranmu:</label>
<select name="subjects" id="subjects">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">Javscript</option>
</select>
{{</rawhtml>}}

Yang dibuat dengan kode berikut:
```html
<label for="subjects">Pilih pelajaranmu:</label>
<select name="subjects" id="subjects">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">Javscript</option>
</select>
```

## Membuat pilihan dengan tag select
Untuk menampilkan daftar pilihan, gunakan tag `select` dan penutupnya. Yang membungkus beberapa pilihan dengan tag `option`.

```html   
<select>
    <option> PILIHAN 1 </option>
    <option> PILIHAN 2 </option>
    <option> PILIHAN 3 </option>
</select>
``` 

Yang menampilkan
{{<rawhtml>}}
<select>
    <option> PILIHAN 1 </option>
    <option> PILIHAN 2 </option>
    <option> PILIHAN 3 </option>
</select>
{{</rawhtml>}}

Tag select dan option sudah cukup untuk membuat tampilan pilihannya. Namun untuk mengaitkannya dengan sisi server dibutuhkan beberapa atribut yang dijelaskan di bawah ini


## Atribut pada tag select
Atribut `name` pada tag select digunakan pada saat ingin mengambil nilainya pada sisi server. Adapun untuk nilainya sendiri ditentukan oleh isi dari atribut `value` yang dipilih di tag option tertentu.


## Membuat kelompok pilihan
Selain dengan daftar mendatar seperti contoh sebelumnya, kita juga bisa mengelompokkan beberapa pilihan sekaligus dengan tag `optgroup` yang membungkus beberapa tag `option`.

Contoh
```html   
<select name="subjects" id="subjects">
    <optgroup label="Media Fisik">
      <option value="buku">Buku</option>
      <option value="majalah">Majalah</option>
    </optgroup>
    <optgroup label="Media Digital">
      <option value="ebook">Ebook</option>
      <option value="streaming">Streaming</option>
    </optgroup>
  </select>
```

Yang menampilkan
{{<rawhtml>}}
<select name="subjects" id="subjects">
    <optgroup label="Media Fisik">
      <option value="buku">Buku</option>
      <option value="majalah">Majalah</option>
    </optgroup>
    <optgroup label="Media Digital">
      <option value="ebook">Ebook</option>
      <option value="streaming">Streaming</option>
    </optgroup>
  </select>
{{</rawhtml>}}
