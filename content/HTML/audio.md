---
title: "Memutar Audio di HTML"
slug: "menampilkan-audio-HTML"
snippet: "Kita bisa memutar dan memainkan audio dengan berbagai format di situs halaman dengan HTML untuk memberi suara."
date: 2022-12-10T16:19:54+08:00
label: HTML
order: 220
---

Kita bisa mengendalikan atau sekedar memutar suara di situs kita dengan HTML. Mungkin member *sound-effect* atau memutar musik di balik layar. Semuanya mungkin dilakukan.

## Cara memutar audio di HTML
Untuk mengeluarkan suara, kita menggunakan tag `<audio>`. Tag ini berisi sumber suara yang ingin ditampikan.

Contoh penggunaaan tag audio
```
<audio controls>
  <source src="suara.ogg" type="audio/ogg">
  <source src="suara.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

Contoh hasil

{{<rawhtml>}}
<audio controls>
  <source src="https://ucarecdn.com/385ea418-2e8c-4edf-9e86-fa424f178b25/suarahalo.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
{{</rawhtml>}}

## Penjelasan kode audio
- Tag `<audio>` harus dibuka dan ditutup dengan `</audio>`. 
- Isi dari tag audio adalah sumber suaranya.
- Sumber suara diletakkan pada tag `<source>` tanpa perlu penutup.
- Sumber audio ada pada atribut src di tag `<source>`
- Tipe audio ada pada atribut type di tag `<source>`
- Sebagai pengaman, saat browser tidak mendukung audio atau tipenya, kita menuliskan di baris akhir *(Your browser does not support the audio tag.)*

## Informasi lain mengenai tag audio
Atribut `controls` digunakan untuk menampikan audio player, yang bisa digunakan untuk memutar dan memberhentikan suara di HTML.

Kita bisa memasukkan satu `<source>` atau lebih dari satu sebagai cadangan ketika file sebelumnya tidak didukung. 

Untuk melihat browser apa yang mendukung tipe jenis apa. Cek di situs [caniuse audio](https://caniuse.com/?search=audio)