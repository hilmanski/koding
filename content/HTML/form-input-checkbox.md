---
title: "Input Checkbox di HTML"
slug: "form-input-checkbox"
snippet: "Membuat daftar periksa alias centang yang bisa di aktif dan non aktifkan, bisa dengan checkbox di HTML"
date: 2022-12-25T16:48:41+08:00
label: HTML
order: 350
---

Gunakan tag `checkbox` untuk membuat pengguna bisa memilih satu atau beberapa pilihan yang bisa di aktif dan non-aktifkan dengan sebuah tanda centang.

Contoh kode checkbox
```html
<input type="checkbox" id="terms">
<label for="terms"> Setuju dengan syarat </label>
```

Yang menghasilkan:
{{<rawhtml>}}
  <input type="checkbox" id="terms">
  <label for="terms"> Setuju dengan syarat </label>
{{</rawhtml>}}
Kamu bisa klik kotak putih atau tulisan di sampingnya, untuk menampilkan tanda centang

## Membuat tulisan bisa diklik
Kotak centang biasanya berukuran kecil, karena itu untuk memudahkan pengguna, cobalah untuk membuat tulisannya bisa diklik juga. Di HTML kita bisa menyambungkan label(tulisan) dengan inputnya lewat atrubut `for` dan `id`

Atribut `for` pada label harus bernilai sama dengan atribut `id` pada input type checkboxnya.

## Membuat lebih dari satu centang
Kita bisa menampilkan lebih dari satu checkbox dengan menggunakan kode yang sama beberapa kali
```html
<input type="checkbox" id="terms">
<label for="terms"> Setuju dengan syarat </label>

<br>
<input type="checkbox" id="risk">
<label for="risk"> Setuju dengan resiko </label>
```

Yang menghasilkan:
{{<rawhtml>}}
<input type="checkbox" id="terms2">
<label for="terms2"> Setuju dengan syarat </label>

<br>
<input type="checkbox" id="risk">
<label for="risk"> Setuju dengan resiko </label>
{{</rawhtml>}}


{{<alert class="warning">}}
Jika punya lebih dari satu checkbox, pastikan mereka punya nilai `for` yang berbeda
{{</alert>}}