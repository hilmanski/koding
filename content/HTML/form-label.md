---
title: "Label untuk form HTML"
slug: "tag-label-form-html"
snippet: "Setiap elemen form bisa diikuti dengan tag label yang berguna sebagai penanda dari elemen tersebut"
date: 2022-12-17T16:59:45+08:00
label: HTML
order: 315
---

Seperti yang kamu lihat di halaman sebelumnya, tag input hanya menampilkan form isiannya tanpa ada tulisan yang jelas. 

Untuk membantu pengguna situs mengerti apa yang harus diisi kita bisa menggunakan tag `<label>`.

## Contoh tag label
Berikut contoh kode tag label
```html
<label> Username: </label> <br>
<input type="text">
```

Hasilnya
{{<rawhtml>}}
<div class='bg-gray-500 p-4'>
<label> Username: </label><br>
<input type='text' placeholder='contoh isian'>
</div>
{{</rawhtml>}}

Sekarang kotaknya tidak berdiri sendiri! tapi sudah ada text penandanya.

{{<alert class="info">}}
Tag label, bukan hanya bisa digunakan pada input-text saja, nanti kita bisa gunakan ke berbagai type input lainnya.
{{</alert>}}

## Atribut for pada label
Untuk menghubungkan sebuah label dengan input, kita bisa menggunakan atribut `for` pada label dan atribut `id` pada input.

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

Sekarang coba klik text "Username:" , secara otomatis input akan terpilih agar kamu bisa mulai mengetik tanpa perlu klik kotaknya terlebih dahulu.

{{<alert class="warning">}}
Pastikan nilai pada atribut for dan id sama.  
Untuk mendapatkan efek ini.
{{</alert>}}

## Gabungkan dengan tag lain
Di sebuah form, kamu tidak dibatasi dengan tag input atau text saja, kita bisa menggabungkan dengan tag lain yang sudah kita pelajari.

{{<codepen src="dyjbJoW">}}

Di atas, kita memasukkan tag `<p>` di dalam tag `<form>` untuk membantu user menjelaskan form sebelumnya.