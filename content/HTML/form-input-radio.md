---
title: "Input radio di HTML"
slug: "form-input-radio"
snippet: "Membuat tombol radio untuk menentukan sebuah pilihan di formulir bisa dengan radio button di HTML"
date: 2022-12-25T16:48:41+08:00
label: HTML
order: 355
---

Radio button adalah tombol yang digunakan untuk membuat beberapa pilihan yang hanya bisa dipilih satu saja. Cocok untuk kasus seperti membuat kuis pilihan ganda di mana hanya ada satu jawaban yang benar.

```html
<input type="radio" id="html" name="bahasa" value="HTML">
<label for="html">HTML</label><br>
<input type="radio" id="css" name="bahasa" value="CSS">
<label for="css">CSS</label><br>
<input type="radio" id="js" name="bahasa" value="JS">
<label for="js">Javascript</label><br>
```

Yang menghasilkan
{{<rawhtml>}}
<input type="radio" id="html" name="bahasa" value="HTML">
<label for="html">HTML</label><br>
<input type="radio" id="css" name="bahasa" value="CSS">
<label for="css">CSS</label><br>
<input type="radio" id="js" name="bahasa" value="JS">
<label for="js">Javascript</label><br>
{{</rawhtml>}}

{{<alert class="try">}}
Meskipun ada beberapa pilihan, kamu hanya bisa memilih satu saja
{{</alert>}}

## Penulisan radio button
- Radio button dibuat dengan tag input yang punya type `radio`. 
- Untuk membuat beberapa radio saling berhubungan (hanya bisa memilih satu) gunakan atribute `name` yang sama di semua inputnya.

## Membuat tulisan bisa diklik
Radio button biasanya berukuran kecil, karena itu untuk memudahkan pengguna, cobalah untuk membuat tulisannya bisa diklik juga. Di HTML kita bisa menyambungkan label(tulisan) dengan inputnya lewat atrubut `for` dan `id`

Atribut `for` pada label harus bernilai sama dengan atribut `id` pada input type checkboxnya.

