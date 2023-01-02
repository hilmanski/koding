---
title: "Menampilkan waktu di HTML"
slug: "menampilkan-waktu-di-HTML"
snippet: "Untuk menampilkan waktu dengan berbagai format, gunakan tag time pada HTML"
date: 2023-01-02T18:17:51+08:00
label: HTML
order: 125
---
Sebuah waktu, dapat ditampikan dengan tag `<time>`

## Cara menggunakan tag time

```html
<p>"Kode ini dibuat pada <time>Senin, 2 Desember 2023</time>."</p>
```

Yang menampilkan:

{{<rawhtml>}}
<p>"Kode ini dibuat pada <time>Senin, 2 Desember 2023</time>."</p>
{{</rawhtml>}}

Tentu saja kita bisa menulis seperti biasa, tanpa tag `time`. Namun dengan menambahkannya, 
komputer termasuk mesin pencari akan lebih mudah mengerti isi konten yang dibuat.

## Menggunakan atribut datetime 
Atribut datetime juga bisa ditambahkan ke sebuah tag time, jika ingin memisahkan antara tulisan waktu yang terlihat dan waktu sebenarnya untuk dibaca mesin.


Contoh penggunaan atribut datetime 
```html
<p> Artikel ini berisi tentang.. </p>
<time datetime="2023-01-02">Dua jam yang lalu</time>
```

Yang menampilkan:

{{<rawhtml>}}
<p> Artikel ini berisi tentang.. </p>
<time datetime="2023-01-02">Dua jam yang lalu</time>
{{</rawhtml>}}

Ada banyak format waktu yang bisa digunakan pada datetime, dikutip dari [MDN mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time):

- 2011 
- 2011-11
- 2011-11-18
- 11-18
- 2011-W47
- 14:54
- 14:54:39
- 14:54:39.929
- 2011-11-18T14:54:39.929
- 2011-11-18 14:54:39.929
- 2011-11-18T14:54:39.929Z
- 2011-11-18T14:54:39.929-0400
- 2011-11-18T14:54:39.929-04:00
- 2011-11-18 14:54:39.929Z
- 2011-11-18 14:54:39.929-0400
- 2011-11-18 14:54:39.929-04:00

Bisa hanya tahun, bulan tanpa tahun, lengkap dengan waktu, dan detail lainnya..

