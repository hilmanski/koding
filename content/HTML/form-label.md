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
```
<label> Username: </label>
<input type="text">
```

Hasilnya
{{<rawhtml>}}
<div class='bg-gray-500 p-4'>
<label> Username: </label>
<input type='text' placeholder='contoh isian'>
</div>
{{</rawhtml>}}

Sekarang kotaknya tidak berdiri sendiri! tapi sudah ada text penandanya.

{{<alert class="info">}}
Tag label, bukan hanya bisa digunakan pada input-text saja, nanti kita bisa gunakan ke berbagai type input lainnya.
{{</alert>}}

## Gabungkan dengan tag lain
Di sebuah form, kamu tidak dibatasi dengan tag input atau text saja, kita bisa menggabungkan dengan tag lain yang sudah kita pelajari.

{{<codepen src="dyjbJoW">}}

Di atas, kita memasukkan tag `<p>` di dalam tag `<form>` untuk membantu user menjelaskan form sebelumnya.