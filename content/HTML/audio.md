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
```html
<audio controls>
  <source src="suara.ogg" type="audio/ogg">
  <source src="suara.mp3" type="audio/mp3">
  Your browser does not support the audio tag.
</audio>
```

Contoh hasil

{{<rawhtml>}}
<audio controls>
  <source src="https://ucarecdn.com/385ea418-2e8c-4edf-9e86-fa424f178b25/suarahalo.mp3" type="audio/mp3">
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

## Atirbut controls tag audio
Atribut `controls` digunakan untuk menampikan audio player, yang bisa digunakan untuk memutar dan memberhentikan suara di HTML.

Secara otomatis, kamu melihat tombol play/pause, waktu lama audio, kontrol volume, download dan playback speed

## Lebih dari satu sumber
Kita bisa memasukkan satu `<source>` saja atau lebih sebagai cadangan ketika file sebelumnya tidak didukung. 

## Format audio apa yang didukung browser
Untuk melihat browser apa yang mendukung tipe jenis apa. Cek di situs [caniuse audio](https://caniuse.com/?search=audio)

## Mengambil audio dari lokasi relatif
Selain dengan link langsung dari audio tersebut, jika kita mempunyai audio di folder yang sama di mana HTML kita berada, kita bisa menampilkannya berdasarkan lokasi tersebut. 

Contoh stuktur folder kamu seperti ini:
```&nbsp;
|_ index.html
|_ assets/
    |_ audio.mp3
```
Di mana kamu punya audio yang diletakkan di dalam folder `assets` yang berada di lokasi sama dengan file `index.html` . Maka cara mengambilnya 
```html
<audio controls>
  <source src="/assets/audio.mp3" type="audio/mp3">
  Your browser does not support the audio tag.
</audio>
```
