---
title: "Input File di HTML"
slug: "input-file-di-HTML"
snippet: "Mengunggah file atau media di halaman situs kamu bisa dengan input file pada HTML"
date: 2022-12-27T11:28:43+08:00
label: HTML
order: 375
---

Tidak jarang pengguna kita perlu mengunggah sebuah file dengan berbagai media (file PDF, gambar, audio bahkan video) ke situs yang kita buat. Untuk ini diperlukan input dengan type `file`

```html
<input type="file" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type="file" />
{{</rawhtml>}}

Coba klik tombol 'Choose File' di atas, kamu akan bisa memilih file yang ada di komputermu.

{{<alert class="info">}}
Pada saat memilih file, nama file kamu akan muncul.
{{</alert>}}


## Membatasi format file
Kita bisa memberi batasan file format apa yang bisa diunggah oleh pengguna situs dengan atribut `accept`

```html
<input type="file" accept="image/png">
```

Yang menghasilkan
{{<rawhtml>}}
<input type="file" accept="image/png">
{{</rawhtml>}}

Sekarang saat memilih, hanya gambar dengan tipe png yang bisa dipilih.

{{<alert class="info">}}
Nilai yang ada pada atribut `accept` adalah nilai "mime type" dari sebuah media. <br>
Lihat <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">daftar mime type media di sini</a>
{{</alert>}}

Kita juga bisa menerima lebih dari satu jenis format, cukup memisahkannya dengan koma.
Contoh:
```html
<input type="file" accept="image/png, image/jpeg">
```

## Memilih lebih dari satu file
Gunakan atribut `multiple` untuk mengizinkan user memilih lebih dari satu file

```html
<input type="file" multiple>
```

Yang menghasilkan
{{<rawhtml>}}
<input type="file" multiple>
{{</rawhtml>}}

Saat memilih file, kamu bisa menekan ctrl atau cmd sambil memilih beberapa file.