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
```html
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

## Atribut controls di tag video
Atribut `controls` digunakan untuk menampikan video player, yang bisa digunakan untuk memutar dan memberhentikan video di HTML.

Secara otomatis, kamu melihat: 
- Tombol play/pause
- Durasi audio
- Kontrol volume
- Tombol Download (unduh)
- Playback speed (mengatur kecepatan)
- Tombol fullscreen

## Sumber cadangan boleh lebih dari satu
Kita bisa memasukkan satu `<source>` saja atau lebih sebagai cadangan ketika file sebelumnya tidak didukung. 

Contoh hanya memasukkan satu sumber
```html
<video width="400" height="600" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

Contoh memasukkan banyak sumber
```html
<video width="400" height="600" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```
Saat format `mp4` tidak didukung, maka browser akan melihat format `ogg`.

## Mengatur ukuran video
Kita bisa mengatur ukuran video player dengan mengganti nilai tag `width` untuk lebar dan `height` untuk gambar.

## Format yang didukung
Untuk melihat browser apa yang mendukung tipe jenis apa. Cek di situs [caniuse video](https://caniuse.com/?search=video)

## Memutar video otomatis
Untuk membuat auto play (memutar video secara otomatis) tanpa perlu klik tombol play di saat mengunjungi situs. Gunakan atribut `autoplay`

```html
<video controls autoplay>
...
</video>
```

## Mengulang video otomatis
Untuk terus mengulang video secara otomatis, pasangkan atribut `loop` pada atribut video
```html
<video controls loop>
...
</video>
```

## Membuat video mute (tanpa suara)
Untuk terus mengulang video secara otomatis, pasangkan atribut `muted` pada atribut video
```html
<video controls muted>
...
</video>
```
## Poster untuk video (thumbnail)
Jika ingin menampilkan gambar tertentu saat video belum dimulai. Gunakan atribut `poster` yang disertai dengan sumber gambarmu.

```html
<video controls poster="/images/sumbergambar.png">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>
```

## Mengambil video dari lokasi relatif
Selain dengan link langsung dari video tersebut, jika kita mempunyai video di folder yang sama di mana HTML kita berada, kita bisa menampilkannya berdasarkan lokasi tersebut. 

Contoh stuktur folder kamu seperti ini:
```&nbsp;
|_ index.html
|_ assets/
    |_ video.mp4
```
Di mana kamu punya video yang diletakkan di dalam folder `assets` yang berada di lokasi sama dengan file `index.html` . Maka cara mengambilnya 
```html
<video width="400" height="600" controls>
  <source src="/assets/video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```
