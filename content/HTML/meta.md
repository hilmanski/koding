---
title: "Meta tag pada HTML"
slug: "meta-tag-pada-HTML"
snippet: "Ada banyak tag meta yang bisa digunakan untuk memberi informasi dari sebuah situs, seperti desc, title, gambar dll"
date: 2023-01-02T18:58:11+08:00
label: HTML
order: 170
---

Sebuah situs bisa punya banyak informasi yang tidak tampak langsung oleh pengunjung. Seperti judul yang terlihat di tab browser, icon, dan berbagai tag meta lain.

## Meta Deskripsi
Sebuah meta deskripsi bisa muncul pada mesin pencari atau "link preview" saat membagikan suatu konten di sosial media. 

Cara menggunakan `meta description` di HTML
```html
<head>
    <title>Situs Kodi.ng</title>
     <meta name="description" content="Referensi pemrograman dalam Bahasa Indonesia">
</head>
```

## Meta Autor
Penulis artikel atau penerbit situs, bisa diletakkan pada meta author

Cara menggunakan `meta author` di HTML
```html
<head>
    <title>Situs Kodi.ng</title>
     <meta name="author" content="hilmanski">
</head>
```

## Bahasa situs (lang)
Untuk memberitahu bahasa apa yang digunakan pada sebuah situs, gunakan atribut lang pada tag HTML

```html
<!DOCTYPE html>
<html lang="id">
<head>
    ...
</head>
<body>
    ...
</body>
</html>
```

Contoh di atas, menggunakan `id` sebagai dua digit kode untuk bahasa Indonesia.

## Menampilkan judul di browser
Untuk menampilkan judul dari situsmu, yang muncul pada mesin pencari dan tab browser, gunakan tag title di antara tag head 

```html
<head>
    <title>Situs Kodi.ng</title>
</head>
```

## Menampilkan favicon
Cara menampilkan icon atau favicon 
```html
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
```
Kamu bisa lihat panduan lengkap [cara menggunakan favicon di sini](/html/menampilkan-favicon-html/)