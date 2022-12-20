---
title: "Atribut pada form HTML"
slug: "atribut-form-html"
snippet: "Berbagai atribut yang ada pada form HTML yang digunakan untuk membantu penanganan data dari formulir yang dibuat."
date: 2022-12-17T17:25:58+08:00
label: HTML
order: 305
---

Di beberapa bagian bawah, kita akan membahas atribut yang bisa digunakan pada form HTML. Tapi ini belum akan banyak berguna pada saat kita hanya belajar HTML, karena ini dimanfaatkan pada saat benar-benar mengirimkan data nanti.

Kamu boleh melewati bagian bagian atribut di bawah ini.

## Atribut `action` pada Form HTML
Form HTML bisa mempunyai beberapa atribut. Yang paling penting adalah atribut `action`.

Atribut `action` pada form HTML menandakan ke tautan mana data ini ingin dikirim. 

{{<alert class="warning">}}
Untuk di awal, kita belum akan belajar cara mengirim data, karena perlu sebuah server untuk menanganinya.
{{</alert>}}

Contoh penggunaan 
```html
<form action="/action.php">
    <input type="text">
    <input type="password">
</form>
```
Di sini, `/action.php` adalah lokasi tautan ke mana data kita di kirim

## Atribut `target` pada Form HTML
Sama seperti atribut target yang ada pada tag link. Kita juga bisa membuat form pada saat disubmit pindah ke halaman (tab) baru dengan `target="_blank"`

```html
<form target="_blank">
    <input type="text">
    <input type="password">
</form>
```

Tanpa atribut target, kita akan bertahan di halaman yang sama.

## Atribut `method` pada Form HTML
Atribut method adalah jenis metode yang kita gunakan pada saat mengirim data. 

Ada dua nilai dari atribut method yang bisa digunakan, yaitu `get` dan `post`. Jika tidak memberi nilai method khusus, secara otomatis kita menggunakan `get`.

### Method GET
Dengan method get kita akan menampilkan nilai dari input nya di URL. Karena itu hindari menggunakan get untuk informasi yang panjang dan bersifat rahasia.

### Method POST
Dengan method post kita akan menyembunyikan nilai dari input yang kita kirim. Cocok untuk mengirim data yang banyak/panjang dan bersifat rahasia.