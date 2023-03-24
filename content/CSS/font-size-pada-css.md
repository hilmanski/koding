---
title: "Font Size pada CSS"
slug: "font-size-pada-css"
snippet: "Ukuran font bisa diatur dengan menggunakan properti font size pada CSS"
date: 2023-03-25T06:10:10+08:00
label: CSS
order: 260
---

Font-size adalah properti CSS yang digunakan untuk mengatur ukuran font di sebuah situs.

Gunakan variasi ukuran font untuk memperlihatkan hirarki yang lebih jelas pada website kamu, seperti judul, isi konten atau yang lainnya.

## Satuan atau unit yang bisa digunakan
Ada banyak satuan yang bisa dipakai untuk memberi nilai font-size. Ukuran absolut biasanya menggunakan px. Sementara yang lain untuk mengatur ukuran font ketika ingin relatif terhadap pembungkus atau size viewport kita.

- px: satuan default. Standar ukuran font adalah 16px.
- persen %: Presentase dari ukuran font pembungkusnya.
- em: relatif terhadap pembungkusnya 1em = ukuran default (16 px jika tidak diatur)
- rem: relatif terhadap root element (HTML)
- vw: viewport width, ukuran window browser. 1vw = 1% lebar viewport.
- vh: mirip dengan vw, tapi terhadap tinggi - viewport height.

## Contoh menggunakan Font Size

Sebagai contoh, jika saya ingin memilih font `Roboto` maka harus melakukan

``` html
<style>
.p1 {
  font-size: 16px
}

.p2 {
  font-size: 24px
}

.p3 {
  font-size: 2rem
}

</style>
```

{{<result>}}
<style>
.p1 {
  font-size: 16px
}

.p2 {
  font-size: 24px
}

.p3 {
  font-size: 2rem 
}
</style>

<p class="p1"> Text 16px </p>
<p class="p2"> Text 24px </p>
<p class="p3"> Text 2rem</p>

{{</result>}}

