---
title: "Input text di HTML"
slug: "input-text-di-HTML"
snippet: "Menerima masukan data tulisan atau text bisa dengan input text dari HTML"
date: 2022-12-17T17:01:01+08:00
label: HTML
order: 310
---

Untuk menerima sebuah input tulisan (text), gunakan tag `<input>` dengan type `text`

Contoh input text
```html
<input type='text'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='text'>
{{</rawhtml>}}

Coba klik kotaknya  👆🏼 dan ketik sesuatu.

## Nilai contoh dengan atribut placeholder
Kita bisa memberi petunjuk atau contoh dari isian textnya, dengan atribut `placeholder`

```html
<input type='text' placeholder='contoh isian'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='text' placeholder='contoh isian'>
{{</rawhtml>}}

## Nilai default dengan atribut value
Kita bisa memberi nilai otomatis dari isian textnya, dengan atribut `value`

```html
<input type='text' value='otomatis!'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='text' value='otomatis!'>
{{</rawhtml>}}

## Mengatur panjang input text
Panjang dari input bisa disesuaikan dari berapa karakter yang ingin dimasukkan dengan menggunakan atribut `size`. Sebagai contoh saya ingin memberi ukuran `5` karater.

```html
<input type='text' size='5'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='text' size='5'>
{{</rawhtml>}}

*Perhatikan panjang dari input text kita kali ini berubah.

## Memberi batas maksimal input text
Jika dengan atribut `size` mengatur tampilan kotaknya, kali ini kita bisa membatasi berapa maksimal karakter yang dimasukkan dengan atribut `maxlength`.

```html
<input type='text' maxlength='5'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='text' maxlength='5'>
{{</rawhtml>}}

*Coba masukkan lebih dari 5 karakter!

## Memberi batas minimal input text
Jika dengan atribut `size` mengatur tampilan kotaknya, kali ini kita bisa membatasi berapa minimal karakter yang dimasukkan dengan atribut `minlength`.

```html
<input type='text' minlength='3'>
```

Yang menghasilkan
{{<rawhtml>}}
<form>
<input type='text' minlength='3'>
<input type="submit">
</form>
{{</rawhtml>}}

Jika kamu coba memasukkan kurang dari 3 karakter dan tekan tombol submit, maka akan muncul sebuah warning (pengingat).