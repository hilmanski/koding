---
title: "Struktur semantik pada HTML"
slug: "struktur-semantik-pada-HTML"
snippet: "Sejak HTML5, semakin banyak elemen semantik yang memudahkan kita membuat dan mengerti struktur dari sebuah halaman situs yang dibuat dengan HTML"
date: 2023-01-02T16:17:51+08:00
label: HTML
order: 705
---

Ada banyak elemen HTML lain yang termasuk elemen semantik. Terutama sejak hadirnya HTML5. Beberapa elemen ini tidak mempunyai perbedaan secara tampilan.

## Daftar struktur semantik HTML
- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- dll.

## Sebelum elemen semantik
Sebelum lazimnya elemen semantik digunakan. Saat membuat struktur halaman situs, orang sering menggunakan cara ini:

```html
<div id="header">
    <h1> Ini Judul </h1>
</div>

<div id="content">
    <div id="mainContent">
        <p>Ini adalah konten </p>
    </div>
    
    <div id="aside">
        <p>Hanya sampingan</p>
    </div>
</div>

<div id="footer">
    <p>Ini adalah footer </p>
</div>
```

Kontennya bisa lebih beragam dan bervariasi, namun seperti yang kamu lihat, biasanya kita hanya menggunakan banyak div untuk membuat sebuah struktur.

## Dengan elemen semantik
Dengan hadirnya elemen semantik ini, sekarang kita bisa membuat konten yang lebih jelas stukturnya seperti ini

```html
<header>
    <nav> 
        <li> Home </li>
        <li> Tentang </li>
    </nav>
</header>

<main>
    <p>Ini adalah konten utama</p>
</main>

<aside>
    <p>Hanya sampingan</p>
</aside>

<footer>
    <p>Ini adalah footer </p>
</footer>
```

{{<alert class="comment">}}
Baik manusia ataupun komputer, akan mudah membaca stuktur di atas
{{</alert>}}

## Detail struktur semantik
Sekarang kita lihat, kegunaan masing-masing struktur semantik ini. Tidak ada aturan baku dari setiap tag yang digunakan, kamu bisa mengisinya dengan apa saja, tapi berikut tujuan utama dari masing-masing tag semantik ini.

## Tag Header
Tag header adalah tag yang berisi konten perkenalan seperti nama situs, logo dan juga daftar menu.

Contoh penggunaan tag header.
```html
<header>
    <h1> Situs Kodi.ng </h1>
    <nav> 
        <li> Home </li>
        <li> Tentang </li>
    </nav>
</header>
```

## Tag Nav
Tag nav adalah tag yang berisi menu navigasi dari sebuah situs.  

Contoh penggunaan tag nav.
```html
<nav> 
    <li> Home </li>
    <li> Tentang </li>
</nav>
```

## Tag Main
Tag main adalah tag yang berisi konten utama dari sebuah situs. Contoh pada sebuah situs berita, maka tag `main` adalah isi dari artikelnya itu sendiri.

Contoh penggunaan tag main.
```html
<main> 
    <h1> Judul berita </h1>
    <p> Konten berita  ... </p>
</main>
```

## Tag Aside
Tag aside adalah tag yang berisi konten sampingan dari konten utamanya. Contoh pada halaman pelajaran seperti ini, maka tag aside bisa digunakan untuk menampung daftar link ke artikel lain atau informasi tambahan.

Contoh penggunaan tag aside.
```html
<main> 
    <h1> Judul berita </h1>
    <p> Konten berita  ... </p>
    <aside>
        Baca berita lain 
        link1
        link2 ..
    </aside>
</main>
```

## Tag Section
Tag section adalah tag yang berisi kumpulan dari beberapa bagian yang sampa pentingnya di sebuah halaman. Hanya gunakan tag ini, jika tag-tag sebelumnya tidak bisa mempresentasikan konten tersebut. Sebagai contoh jika ada menu navigasi, maka utamakan menggunakan tag `<nav>` sebelum tag `<section>`.

Contoh penggunaan tag section.
```html
<main>
<h1>Belajar Koding</h1>
<section>
    <h2>HTML</h2>
    <p>Konten tentang HTML..</p>
</section>

<section>
    <h2>CSS</h2>
    <p>Konten tentang CSS..</p>
</section>
</main>
```

## Tag Article
Tag article adalah tag yang menggambarkan beberapa data yang punya level yang sama. Sebagai contoh daftar berita di halaman utama sebuah situs berita. Contoh lain daftar cuaca di masing-masing kota.

Contoh penggunaan tag article.
- Daftar forum
- Daftar blog
- Daftar komentar user
- dll.

Contoh kode tag article

```html
<main>
<h1>Berita Koding</h1>
<article>
    <h2>Kenapa belajar koding</h2>
    <p>Potongan konten berita..</p>
</article>

<article>
    <h2> Apa itu koding</h2>
    <p>Potongan konten berita..</p>
</article>
</main>
```


## Tag Footer
Tag footer adalah tag yang digunakan sebagai footer atau penutup atau catatan kaki dari sebuah situs halaman. Bisa berisi info situs, waktu, peta situs dan lainnya.

```html
<footer>
 <p>©Kodi.ng 2023</p>
 <p>Belajar koding sekarang, kapan lagi</p>
</footer>
```

{{<alert class="warning">}}
Kamu tidak harus mengguanakan semua tag semantik ini di satu halaman. <br>
Gunakan apa yang menurutmu sesuai dengan konten situs kamu.
{{</alert>}}