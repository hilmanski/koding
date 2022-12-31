---
title: "Struktur dasar file HTML"
slug: "struktur-dasar-file-HTML"
snippet: "Sekarang kita akan mempelajari struktur dasar sebuah file HTML yang sebenarnya"
date: 2022-12-05T18:58:11+08:00
label: HTML
order: 150
chapter: Struktur Dasar HTML
---
Sejauh ini kita sudah melihat beberapa jenis tag yang bisa digunakan untuk menampilkan elemen di HTML. Tapi ada satu hal mendasar yang perlu kita pelajari sekarang yaitu "bagaimana membuat struktur HTML yang sebenarnya"

## Urutan struktur tag HTML
Meskipun tidak mengubah sesuatu secara visual, beberapa tag ini berguna sebagai informasi dari file yang kita buat sebagai sebuah HTML yang valid.

Seperti ini struktur dasar HTML
```html
<!DOCTYPE html>
<html>
<head>
<title>Judul Website</title>
</head>
<body>

<h1>Judul artikel</h1>
<p>pargraf artikel.</p>

</body>
</html>
```

{{<alert class="comment">}}
Tidak perlu panik. Kita akan membahasnya satu per satu
{{</alert>}}

## Apa itu Doctype HTML
Baris pertama ada 
```
<!DOCTYPE html>
```
ini adalah informasi bahwa file ini berisi dokument HTML5 (Versi terkini HTML 

## Apa itu tag `HTML`
Selanjutnya, seluruh dokumen akan dibungkus di antar tag pembuka `<html>` dan penutupnya `</html>`.

Semua tag yang sudah dan akan kita pelajari, akan berada di antara tag ini.

## Gambaran besar struktur dasar HTML
Setelah nanti melihat tag head dan body, kita bisa melihat struktur HTML secara sederhana seperti ini:

```
|_ tag <html>
    |_ tag <head>
    |_ tag <body>
```

- Semuanya berada di antara tag `html`
- Informasi meta berada di dalam tag `head`
- Tampilan atau visual elemen, berada di dalam tag `body`

{{<alert class="comment">}}
Untuk tag head dan body, akan kita bahas di bagian selanjutnya
{{</alert>}}