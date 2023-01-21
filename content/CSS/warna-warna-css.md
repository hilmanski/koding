---
title: "Berbagai warna CSS"
slug: "warna-warna-di-css"
snippet: "Ada banyak cara memberi nilai warna di CSS, seperti kode RGB, HEX, HSL, RGBA, HSLA atau dengan nama unik langsung"
date: 2023-01-21T00:07:05-08:00
label: CSS
order: 60
---

Untuk memberi nilai pada properti `color` atau `background-color`, kita bisa memberi dengan berbagai jenis cara seperti melalui namanya langsung atau kode warna (RGB, HEX, HSL, RGBA, HSLA).

{{<alert class="info">}}
Ada banyak properti lain selain `color` dan `background-color` yang bisa diberi warna. Nanti kita intip ya..
{{</alert>}}

## Warna CSS dengan namanya
Dikutip dari situs w3school, ada 140 warna bernama yang bisa kita pakai langsung! akan kita lihat daftarnya di bagian lain.

Berikut contoh populer:

{{<rawhtml>}}
<style>
    #example {
        max-width: 400px;
        flex-wrap: wrap;
    }
    #example p{
        padding: 10px; margin: 5px;
        color: lightgrey;
    }
</style>
<div class="flex" id="example">
<p style="background-color:black;">black</p>
<p style="background-color:white;">white</p>
<p style="background-color:blue;">blue</p>

<p style="background-color:blueviolet;">blueviolet</p>
<p style="background-color:crimson;">crimson</p>
<p style="background-color:orange;">orange</p>

<p style="background-color:pink;">pink</p>
<p style="background-color:green;">green</p>
<p style="background-color:indigo;">indigo</p>
</div>
{{</rawhtml>}}

## Warna CSS dengan kode RGB
Kita juga bisa memberi warna dengan kode RGB.  
RGB adalah singkatan dari (red , green dan blue), di mana pada teori warna di dunia nyata, kita bisa mengkombinasikan tiga warna ini, untuk mendapatkan berbagai jenis warna lain!.

**Cara**  
- Setelah properti, beri nilai rgb(kode warna merah, kode warna hijau, kode warna biru)
- range kode warna bisa dari 0 sampai 255

**Contoh**

```html
<p style="background-color:rgb(100, 25, 25);">Saya diwarnai dengan RGB</p>
```

{{<rawhtml>}}
<p style="background-color:rgb(100, 25, 25); text-align:center;">Saya diwarnai dengan RGB</p>
{{</rawhtml>}} 

Klik untuk melihat warna RGB
{{<rawhtml>}}
<input class='w-full border-0 padding-0 rounded' type="color" id="colorpicker">
{{</rawhtml>}} 

## Warna CSS denga kode hex

Selain RGB, ada juga pengkodean warna populer yaitu `hex`. Dimana menggunakan angka hexadesimal untuk membuat warna.

Strukturnya: tanda pagar - diikuti dengan 6 angka hex

Contoh nilai warna (bukan kode CSS)
```css
hitam = `#000000`
putih = `#ffffff`
```

Contoh kode CSS
```html
<p style="background-color:#32a852;">Saya diwarnai dengan RGB</p>
```

{{<rawhtml>}}
<p style="background-color:#32a852; text-align:center;">Saya diwarnai dengan Kode HEX</p>
{{</rawhtml>}} 

Link [slider warna di google](https://g.co/kgs/wQZAeA), untuk melihat warna dan kodenya.


## Cara mana yang harus saya gunakan?

Mana saja boleh! kalau kamu mau spesifik bisa pakai kode warna seperti RGB atau HEX, jika ingin mudah diingat, bisa gunakan warna yang `bernama`. 

Ketika kerja nanti normalnya seorang desainer sudah menentukan warnanya dan kamu harus menggunakan persis warna tersebut berdasarkan kodenya.
