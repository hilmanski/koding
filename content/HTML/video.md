---
title: "Memutar Video di HTML"
slug: "menampilkan-video-HTML"
snippet: "Kita bisa memutar dan memainkan video dengan berbagai format di situs halaman dengan HTML"
date: 2022-12-10T16:18:25+08:00
label: HTML
order: 230
---

Selain gambar diam, kita juga bisa menampilkan gambar bergerak yang bersuara, alias video!


## Cara memutar video di HTML
Untuk menampilkan video, kita menggunakan tag `<video>`. Tag ini berisi sumber video  yang ingin ditampikan.

Contoh penggunaaan tag video
```
<video width="400" height="600" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```


Contoh hasil
{{<rawhtml>}}
<video width="300" height="400" controls>
  <source src="https://ucarecdn.com/700b0e0c-1bc8-4870-9341-04e22fe63892/samplevideo.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
{{</rawhtml>}}

## Penjelasan kode video
- Tag `<video>` harus dibuka dan ditutup dengan `</video>`. 
- Isi dari tag video adalah sumber suaranya.
- Sumber suara diletakkan pada tag `<source>` tanpa perlu penutup.
- Sumber video ada pada atribut src di tag `<source>`
- Tipe video ada pada atribut type di tag `<source>`
- Sebagai pengaman, saat browser tidak mendukung video atau tipenya, kita menuliskan di baris akhir *(Your browser does not support the video tag.)*

## Informasi lain mengenai tag video
Atribut `controls` digunakan untuk menampikan video player, yang bisa digunakan untuk memutar dan memberhentikan video di HTML.

Kita bisa memasukkan satu `<source>` atau lebih dari satu sebagai cadangan ketika file sebelumnya tidak didukung. 

Kita bisa mengatur ukuran video player dengan mengganti nilai tag `width` atau `height`.

Untuk melihat browser apa yang mendukung tipe jenis apa. Cek di situs [caniuse video](https://caniuse.com/?search=video)


