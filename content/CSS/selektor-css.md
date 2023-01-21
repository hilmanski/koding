---
title: "Selektor CSS dan HTML"
slug: "selektor-css-dan-html"
snippet: "Ada banyak cara untuk memilih elemen HTML mana yang ingin dihias. Pelajari tentang selektor CSS"
date: 2023-01-21T00:06:20-08:00
label: CSS
order: 15
---

Ada banyak cara kita bisa menargetkan, elemen HTML mana yang ingin dihias. Berikut macam-macam selektor.

## Selektor tag HTML
Kita bisa memilih elemen HTML dengan nama tagnya langsung.  
Hiasan akan diaplikasikan langsung untuk [semua tag HTML](/html/apa-itu-tag-html/)nya.

Contoh
```css
p {
 color: blue;
}
```


{{<alert class="">}}
Berarti semua tag p yang ada di halaman, akan menjadi warna biru
{{</alert>}}



## Selektor dengan atribut id HTML
Memilih elemen mana yang dihias, bisa juga dengan [atribut id pada tag HTML](/html/atribut-id-pada-html/)nya.

Cara: masukkan nama id yang diawali dengan tanda pagar di antara tag `style`.

contoh
```html
<!DOCTYPE html>
<html>
<head>
<style>
    #heading {
        background-color: lightblue;
        color: white;
    }
</style>
</head>
<body>
    <h1 id="heading"> Heading utama </h1>
    <h1> Heading lainnya </h1>
</body>
</html>
```

{{<rawhtml>}}
<style>
#heading {
  background-color: lightblue;
  color: white;
}
</style>
<h1 id="heading"> Heading utama </h1>
<h1> Heading lainnya </h1>
{{</rawhtml>}}

{{<alert class="">}}
Hasilnya: hanya `h1` yang punya id `heading` yang terhias.
{{</alert>}}

## Selektor dengan atribut class HTML
Selain atribut id, menargetkan HTML bisa juga dengan [atribut class pada tag HTML](/html/atribut-class-pada-html/)nya.

Cara: masukkan nama class yang diawali dengan tanda titik (.) di antara tag `style`.

contoh
```html
<!DOCTYPE html>
<html>
<head>
<style>
    .styled-box {
        background-color: orange;
        color: white;
    }
</style>
</head>
<body>
    <p> box 1</p>
    <p class='styled-box'> box 2</p>
    <p> box 3</p>
    <p class='styled-box'> box 4</p>
</body>
</html>
```

{{<rawhtml>}}
<style>
.styled-box {
    background-color: orange;
    color: white;
}
</style>
    <p> box 1</p>
    <p class='styled-box'> box 2</p>
    <p> box 3</p>
    <p class='styled-box'> box 4</p>
{{</rawhtml>}}

{{<alert class="">}}
Hasilnya: hanya `p` yang punya class `styled-box` yang terhias
{{</alert>}}