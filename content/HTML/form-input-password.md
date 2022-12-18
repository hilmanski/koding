---
title: "Input password di HTML"
slug: "input-password-di-HTML"
snippet: "Menerima masukan data password bisa dengan input password dari HTML agar tersembunyi"
date: 2022-12-17T17:37:16+08:00
label: HTML
order: 325
---

Tidak jarang, pengguna situs kita perlu memasukkan sebuah password. Sebagai bagian dari keamanan, kita perlu menyembunyikan text passwordnya dengan tag input type `password`.

Contoh input password
```html
<input type='password'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='password'>
{{</rawhtml>}}

Coba klik kotaknya  👆🏼 dan ketik sesuatu. Kamu akan lihat karakternya berubah jadi titik untuk menyembunyikannya.

## Nilai contoh dengan atribut placeholder
Kita bisa memberi petunjuk atau contoh dari isian passwordnya, dengan atribut `placeholder`

```html
<input type='password' placeholder='masukkan password di sini'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='password' placeholder='masukkan password di sini'>
{{</rawhtml>}}

## Nilai default dengan atribut value
Kita bisa memberi nilai otomatis dari isian passwordnya, dengan atribut `value`

```html
<input type='password' value='otomatis!'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='password' value='otomatis!'>
{{</rawhtml>}}

## Mengatur panjang input password
Panjang dari input bisa disesuaikan dari berapa karakter yang ingin dimasukkan dengan menggunakan atribut `size`. Sebagai contoh saya ingin memberi ukuran `5` karater.

```html
<input type='password' size='5'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='password' size='5'>
{{</rawhtml>}}

*Perhatikan panjang dari input password kita kali ini berubah.

## Memberi batas maksimal input password
Jika dengan atribut `size` mengatur tampilan kotaknya, kali ini kita bisa membatasi berapa maksimal karakter yang dimasukkan dengan atribut `maxlength`.

```html
<input type='password' maxlength='5'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='password' maxlength='5'>
{{</rawhtml>}}

*Coba masukkan lebih dari 5 karakter!

## Memberi batas minimal input password
Jika dengan atribut `size` mengatur tampilan kotaknya, kali ini kita bisa membatasi berapa minimal karakter yang dimasukkan dengan atribut `minlength`.

```html
<input type='password' minlength='3'>
```

Yang menghasilkan
{{<rawhtml>}}
<form>
<input type='password' minlength='3'>
<input type="submit">
</form>
{{</rawhtml>}}

Jika kamu coba memasukkan kurang dari 3 karakter dan tekan tombol submit, maka akan muncul sebuah warning (pengingat).