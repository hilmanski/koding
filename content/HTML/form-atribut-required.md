---
title: "Atribut Required di Input HTML"
slug: "atribut-required-di-input-HTML"
snippet: "Jika ingin mewajibkan sebuah input untuk harus diisi sebelum mengirim form data di HTML kita harus menggunakan atribut required"
date: 2022-12-30T20:59:25+08:00
label: HTML
order: 400
---

Untuk memberi aturan jika sebuah input harus diisi, pada sebuah formulir HTML, gunakan atribut `required`.

Untuk melihat efek dari `required`, kita perlu membuat contoh form yang lengkap dengan tombol submitnya.

```html
<form action="#">
    <input type='text' required>
    <input type="submit">
</form>
```
Hasilnya

{{<rawhtml>}}
<form action="">
    <input type='text' required>  
    <input type="submit">
</form>
{{</rawhtml>}}

Dengan atribut required, kamu perlu mengisi data terlebih dahulu sebelum menekan tombol submit. Jika tidak, akan muncul sebuah pesan untuk harus mengisinya.

{{<alert class="warning">}}
Validasi sebuah form, perlu dilakukan juga di bagian `backend`. <br>Tidak hanya pada HTML saja.
{{</alert>}}