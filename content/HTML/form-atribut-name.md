---
title: "Atribut name di Input HTML"
slug: "atribut-name-di-input-HTML"
snippet: "Atribut name pada sebuah input HTML berguna sebagai nama penanda pada saat kita mengirim data ke server."
date: 2022-12-31T09:20:56+08:00
label: HTML
order: 515
---

Kamu akan sering menemukan atribut `name` pada sebuah input. Atribut ini tidak mengubah visual, namun berguna sebagai penanda saat kita mengirim data ke server nanti.

## Aturan atribut name
Dalam sebuah form, tidak boleh menggunakan atribut `name` yang sama pada beberapa input.

## Contoh penggunaan atribut name

```html
<input type='text' name="username">
<input type='password' name="password">
```
Hasilnya

{{<rawhtml>}}
<input type='text' name="username">
<input type='password' name="password">
{{</rawhtml>}}


{{<alert class="info">}}
Kita belum akan melihat bagaimana cara mengambil data dari atribut name. <br> Karena ini di luar lingkup pelajaran HTML.
{{</alert>}}