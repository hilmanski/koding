---
title: "Tombol Submit di HTML"
slug: "tombol-submit-di-HTML"
snippet: "Untuk mengirim data setelah selesai mengisinya, perlu sebuah tombol yang disebut tombol submit"
date: 2022-12-18T12:53:43+08:00
label: HTML
order: 320
---

Pada sebuah tampilan formulir, dibutuhkan tombol yang akan user tekan ketika sudah selesai mengisi datanya sebagai penanda untuk mulai memproses data tersebut. 

## Cara membuat tombol submit di form
Gunakan tag input dengan type `submit` seperti berikut
```html
<input type="submit"/>
```

{{<rawhtml>}}
<input type='submit'>
{{</rawhtml>}}

Secara otomatis, HTML akan memasukkan text "Submit" di tombol tersebut.

## Cara mengubah text submit
Gunakan atribut `value` dan beri nilai sesuai yang kamu inginkan, untuk mengubah text dari tombol submit
```html
<input type="submit" value='Kirim!'/>
```

{{<rawhtml>}}
<input type='submit' value='Kirim!'>
{{</rawhtml>}}

## Contoh form dengan tombol submit

Contoh kode lengkap
```html
<form>
    <label> Username </label>
    <input type='text'>
    <input type='submit' value='Kirim!'>
</form>
```

Yang hasilnya
{{<rawhtml>}}
<form>
<label> Username </label>
<input type='text'>
<input type='submit' value='Kirim!'>
</form>
{{</rawhtml>}}

{{<alert class="info">}}
Selama belajar seputar form di bagian HTML di kodi.ng, <br>kita hanya akan membuat tampilannya saja. Belum fungsinya
{{</alert>}}

## Alternatif tombol dengan tag button
Form juga bisa dikirim dengan tombol `button` selain `input submit`.

Contoh kode dengan button
```html
<form>
    <label> Username </label>
    <input type='text'>
    <button>Kirim!</button>
</form>
```

Yang hasilnya
{{<rawhtml>}}
<form>
<label> Username </label>
<input type='text'>
<button>Kirim!</button>
</form>
{{</rawhtml>}}