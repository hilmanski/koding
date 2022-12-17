---
title: "Membuat Form di HTML"
slug: "form-di-html"
snippet: "HTML Form digunakan untuk menerima input dari pengguna situs. Namun dibutuhkan sisi server untuk menerima datanya"
date: 2022-12-17T16:47:54+08:00
label: HTML
order: 300
chapter: Form (Formulir) HTML
---

Kamu pasti sudah pernah melihat sebuah form (Formulir) . Contohnya seperti ini.

{{<rawhtml>}}
<div class='flex flex-col space-y-2 border p-5 rounded-xl bg-gray-600'>
Contoh Form <br>
<div>
    <label>Username: </label>
    <input type="text" class='text-black'> 
</div>

<div>
<label>Password: </label>
<input type="password" class='text-black'> 
</div>

<br>
<button class='p-2 bg-blue-400 mt-3'>Daftar</button>
</div>
{{</rawhtml>}}

Formulir seperti ini bisa dibuat dengan HTML.

{{<alert class="info">}}
<p> Dalam bahasa Indonesia, formulir juga bisa disebut "borang" </p>
{{</alert>}}

## Mengirim data membutuhkan server
Selama belajar seputar form di bagian HTML di kodi.ng, kita hanya akan membuat tampilannya saja. Namun belum bisa mengirim datanya ke mana pun. Karena dibutuhkan server untuk mengolah dan menerima data tersebut yang berada di luar pelajaran HTML.

## Apa yang bisa dibuat dengan Form HTML
Elemen apa saja yang bisa dibuat dengan Form HTML? banyak sekali!
- input text
- input password
- input nomor
- checkbox
- radio button
- tombol submit

## Struktur dasar form HTML
Form pada HTML, ditandai dengan tag pembuka dan penutup dari `<form>`

```
<form>
    // isi formnya
</form>
```

Lalu isi dari formnya, tergantung dari elemen apa yang ingin kamu tampilkan, kita bisa lihat satu per satu elemen yang bisa dimasukkan di sebuah form.  

Contoh untuk menampilkan input text
```
<form>
    <input type="text">
</form>
```

Contoh untuk menampilkan input text dan input password
```
<form>
    <input type="text">
    <input type="password">
</form>
```
