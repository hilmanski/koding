---
title: "Input Date di HTML"
slug: "input-date-di-HTML"
snippet: "Mengenal input date untuk memasukkan tanggal di sebuah formulir pada situs dengan HTML"
date: 2022-12-25T16:13:31+08:00
label: HTML
order: 335
---

Untuk memasukkan sebuah tanggal, kita bisa menggunakan input dengan type `date`.

Contoh input date (tanggal)
```html
<input type='date'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='date'>
{{</rawhtml>}}

Ada dua cara untuk memilih tanggal dengan input di atas.  
1. Klik logo kalender di sebelah kanan  
2. Masukkan langsung tanggal bulan dan waktunya

## Memberi nilai pada input date  
Untuk secara otomatis memasukkan nilai pada input date. Gunakan atribut `value`

Contoh input date (tanggal)
```html
<input type='date' value="2022-12-25" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type='date' value="2022-12-25" />
{{</rawhtml>}}

Urutan yang digunakan adalah TAHUN-BULAN-TANGGAL (YYYY-MM-DD)

## Aturan tanggal minimal
Untuk membuat batas minimal saat memilih tanggal, gunakan atribut `min`

```html
<input type='date' value="2022-12-25" min="2022-12-01" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type='date' value="2022-12-25" min="2022-12-01" />
{{</rawhtml>}}

Sekarang kamu hanya bisa memilih tanggal mulai dari awal Desember 2022 saja.

## Aturan tanggal maksimal
Untuk membuat batas maksimal saat memilih tanggal, gunakan atribut `max`

```html
<input type='date' value="2022-12-25" max="2022-12-15" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type='date' value="2022-12-25" max="2022-12-15" />
{{</rawhtml>}}

Sekarang kamu hanya bisa memilih tanggal akhir sampai 15 Desember 2022 saja.
