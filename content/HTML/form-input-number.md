---
title: "Input Number di HTML"
slug: "input-number-di-HTML"
snippet: "Menyediakan input untuk user memasukkan data berupa angka di formulir HTML"
date: 2022-12-17T17:40:28+08:00
label: HTML
order: 330
---

Selain text biasa, sebuah formulir juga biasa berisi data yang isiannya berupa angka. Contoh seperti mengisi umur, mengisi nilai ujian dan lainnya. Gunakan type `number` pada tag input.

Contoh input angka (number)
```html
<input type='number'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='number'>
{{</rawhtml>}}

Coba klik kotaknya  👆🏼 dan ketik sesuatu.  
Jika mengisi huruf, maka tidak akan terlihat apa-apa.  
Coba sekarang masukkan angka.

{{<alert class="info">}}
Tampilan input-an angka, ada tombol panah di sebelah kanan saat kamu memposisikan kursor di sana, panah ini berguna sebagai tombol menaikkan dan mengurangi angka.
{{</alert>}}

## Nilai contoh dengan atribut placeholder
Kita bisa memberi petunjuk atau contoh dari isian numbernya, dengan atribut `placeholder`

```html
<input type='number' placeholder='umur kamu'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='number' placeholder='umur kamu'>
{{</rawhtml>}}

## Nilai default dengan atribut value
Kita bisa memberi nilai otomatis dari isian numbernya, dengan atribut `value`. Pastikan value berisi angka

```html
<input type='number' value='100'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='number' value='100'>
{{</rawhtml>}}

## Memberi batas minimal dan maksimal
Kita bisa membatasi input yang dimasukkan oleh user dengan bantuan atribut `min` dan atribut `max`. Boleh hanya salah satu atau keduanya.

Contoh di bawah, kita buat input angka dengan minimal 10 dan maksimal 100
```html
<input type='number' min='10' max='100'>
```

{{<rawhtml>}}
<form action="#">
<input type='number' min='10' max='100' class='p-1'>
<input type='submit' value="kirim" class='bg-gray-100 p-1'/>
</form>
{{</rawhtml>}}

Silahkan coba masukkan angka di bawah 10 atau di atas 100. Maka akan muncul pesan error yang menandakan batas angkanya.   

Jika angkanya di antara 10 dan 100, maka tidak terjadi apa-apa.

## Atribut `step` untuk menentukan jumlah langkah
Jika menekan tombol panah di sebelah kanan input, kita bisa menaikkan angka secara otomatis atau menguranginya "1 langkah". Contoh jika input 5, maka tombol naik menjadi 6, tombol turun menjadi 4.

{{<alert class="info">}}
Tampilan input-an angka, ada tombol panah di sebelah kanan saat kamu memposisikan kursor di sana, panah ini berguna sebagai tombol menaikkan dan mengurangi angka.
{{</alert>}}

Contoh tombol 1 langkah (tekan panah di kotaknya)
{{<rawhtml>}}
<input type='number' value='5'>
{{</rawhtml>}}

Kita bisa menaikkan dan mengurangi sesuai jumlah yang kita mau dengan memasukkan atribut `step`.

```html
<input type='number' value='5' step='5'>
```

Di atas kita memasukkan atribut step bernilai 5, yang artinya jika kita memainkan panahnya sekarang, akan otomatis naik atau turun 5.

{{<rawhtml>}}
<input type='number' value='5' step='5'>
{{</rawhtml>}}

