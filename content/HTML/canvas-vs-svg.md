---
title: "Pilih Canvas atau SVG di HTML"
slug: "pilih-canvas-atau-svg-di-HTML"
snippet: "Kita bisa menggambar di HTMl dengan canvas atau SVG apa kelebihan dan kekurangan masing-masing"
date: 2023-01-05T07:17:51+08:00
label: HTML
order: 910
---


Sekilas kita sudah mengintip cara menggambar di HTML dengan `canvas` dan `svg`. Apa perbedannya, apa kekurangan dan kelebihan masing-masing?

Sebelumnya:
- [Baca SVG di sini](/html/menggambar-dengan-svg-di-html/)
- [Baca Canvas di sini](/html/menggambar-dengan-canvas-di-html/)

## Untuk membuat logo
Untuk menggambar logo sederhana disarankan menggunakan SVG. Karena pada dasarnya format SVG lebih fleksibel secara ukuran. 

## Untuk membuat permainan "game"
Di mana ada gerakan kompleks dan interaksi seperti game. Canvas lebih cocok secara performa.  

## Kontrol pada DOM
DOM adalah singkatan dari `document object model`. Di mana HTML mempunyai DOM yang merupakan representasi dari suatu struktur HTML.

Ketika menggambar dengan SVG, kita punya kontrol terhadap DOM.  
Sementara kanvas tidak. Semuanya dilakukan di Javascript saja.

## Resolusi yang responsif
Karena kanvas mengandalkan pixel untuk menggambar sementara SVG tidak. Maka untuk resolusi yang lebih fleksible (gambar tidak pecah di berbagai ukuran), gunakan SVG.

## Referensi
Baca pendapat para ahli seputar canvas VS SVG [di artikel CSS trick ini](https://css-tricks.com/when-to-use-svg-vs-when-to-use-canvas/)