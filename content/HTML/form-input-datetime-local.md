---
title: "Input Datetime local di HTML"
slug: "input-datetime-local-di-HTML"
snippet: "Mengenal input datetime local untuk memasukkan tanggal dan waktu di sebuah formulir pada situs dengan HTML"
date: 2022-12-25T16:21:32+08:00
label: HTML
order: 340
---


Untuk memasukkan waktu yang lebih lengkap, yaitu tanggal dan jam, gunakan input dengan type `datetime-local`.

Contoh input datetime-local (tanggal dan waktu)
```html
<input type='datetime-local'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='datetime-local'>
{{</rawhtml>}}

Ada dua cara untuk memilih waktu dengan input di atas.  
1. Klik logo kalender di sebelah kanan  
2. Masukkan langsung tanggal bulan dan waktunya

## Format penulisan datetime-local
Dalam menulis nilai datetime-local, berikut formatnya:
YYYY-MM-DDThh:mm  
- Y adalah tahun
- M adalah bulan
- D adalah hari/tanggal
- T adalah pembatas
- h adalah jam
- m adalah menit



## Memberi nilai pada input datetime-local  
Untuk secara otomatis memasukkan nilai pada input datetime-local. Gunakan atribut `value`

Contoh input datetime-local (tanggal)
```html
<input type='datetime-local' value="2022-12-25T01:30" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type='datetime-local' value="2022-12-25T01:30" />
{{</rawhtml>}}


## Aturan tanggal dan waktu minimal
Untuk membuat batas minimal saat memilih tanggal dan waktu, gunakan atribut `min`

```html
<input type='datetime-local' min="2022-12-01T10:00" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type='datetime-local' min="2022-12-01T10:00" />
{{</rawhtml>}}

Sekarang kamu hanya bisa memilih tanggal dan waktu mulai dari awal Desember 2022 jam 10 saja.

## Aturan tanggal dan waktu maksimal
Untuk membuat batas maksimal saat memilih tanggal dan waktu, gunakan atribut `max`

```html
<input type='datetime-local' max="2022-12-15T10:00" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type='datetime-local' max="2022-12-15T10:00" />
{{</rawhtml>}}

Sekarang kamu hanya bisa memilih tanggal akhir sampai 15 Desember 2022 jam 10 saja.
