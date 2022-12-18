---
title: "Input password di HTML"
slug: "input-password-di-HTML"
snippet: "Menerima masukan data password bisa dengan input password dari HTML agar tersembunyi"
date: 2022-12-17T17:37:16+08:00
label: HTML
order: 320
---

Tidak jarang, pengguna situs kita perlu memasukkan sebuah password. Sebagai bagian dari keamanan, kita perlu menyembunyikan text passwordnya dengan tag input type `password`.

Contoh input password
```
<input type='password'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='password'>
{{</rawhtml>}}

Coba klik kotaknya  👆🏼 dan ketik sesuatu. Kamu akan lihat karakternya berubah jadi titik untuk menyembunyikannya.

## Nilai contoh dengan atribut placeholder
Kita bisa memberi petunjuk atau contoh dari isian passwordnya, dengan atribut `placeholder`

```
<input type='password' placeholder='masukkan password di sini'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='password' placeholder='masukkan password di sini'>
{{</rawhtml>}}

## Nilai default dengan atribut value
Kita bisa memberi nilai otomatis dari isian passwordnya, dengan atribut `value`

```
<input type='password' value='otomatis!'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='password' value='otomatis!'>
{{</rawhtml>}}