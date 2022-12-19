---
title: "Membuat link HTML"
slug: "membuat-link-HTML"
snippet: "Bagaimana cara menampilkan link pada HTML di situs kamu menggunakan tag a dan atribut href"
date: 2022-12-03T15:14:21+08:00
label: HTML
order: 90
---

Hal yang menarik dari internet adalah kita semua saling terhubung. Untuk menghubungkan satu halaman ke halaman lain, gunakan tag `<a>`

Berikut penggunaan tag `<a>`
```html
<a href='https://sekolahkoding.com/'> Situs Sekolah Koding </a>
```

{{<codepen src="rNKQMma">}}

**Lihat ada yang baru?**  
Di atas ada tulisan `href` pada tag pembuka.  Kita bertemu hal baru yang namanya `atribut`.

## Apa itu atribut (attribute)?  
Atribut adalah bagian pada tag HTML yang berisi informasi tambahan mengenai elemen tersebut. Ada banyak jenis atribute dengan kegunaannya masing-masing.  

Normalnya format atribut adalah pasangan `katakunci` dan `nilai`, yang dituliskan dengan
```html
<nama-tag kataKunci="nilai"> isi </nama-tag>
```

## Atribut href
Atribut `href` pada tag `<a>` berguna untuk memberitahu ke mana link yang dituju.

## Membuka link di tab browser lain
Secara otomatis, link akan dibuka di halaman yang sama. Berarti pengguna konten kamu akan berpindah tempat dari halaman yang sekarang. Jika ingin membuka link berikutnya di halaman lain (new tab). Gunakan atribut `target="_blank"` pada tag `</a>`

```html
<a target="_blank" href='https://sekolahkoding.com/'> Situs Sekolah Koding </a>
```
Hasilnya: {{<rawhtml>}}<a target="_blank" href='https://sekolahkoding.com/'> Situs Sekolah Koding </a>{{</rawhtml>}}


## Tampilan dasar tag `<a>`
Tampilan dari tag `a` secara otomatis berwarna biru-keunguan ditambah dengan garis bawah untuk membedakannya dengan garis biasa.

{{<alert class="info">}}
<p> Bukan hanya tulisan, kamu bisa membuat elemen HTML lain seperti gambar atau video menjadi link.</p>
{{</alert>}}