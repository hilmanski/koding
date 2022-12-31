---
title: "Atribut for di Input HTML"
slug: "atribut-for-di-input-HTML"
snippet: "Atribut for pada sebuah input HTML berguna untuk menyambungkannya dengan sebuah label."
date: 2022-12-31T09:20:56+08:00
label: HTML
order: 525
---

Untuk memudahkan pengguna, kita biasa memberikan [label pada sebuah input](https://kodi.ng/html/tag-label-form-html/), seperti nama petunjuk. 

Atribut `for` digunakan pada input, untuk menyambungkan atribut `id` yang ada pada sebuah label.

## Contoh penggunaan atribut for
Contoh penggunaan
```html
<label for="username"> Username: </label> <br>
<input id="username" type="text">
```

Hasilnya
{{<rawhtml>}}
<div class='bg-gray-500 p-4'>
<label for="username"> Username: </label><br>
<input id="username" type="text">
</div>
{{</rawhtml>}}

Saat klik kata "Username:" akan otomatis mengantar kamu ke input yang punya atribut `for` yang sama.
