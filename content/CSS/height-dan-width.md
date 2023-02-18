---
title: "Height dan Width pada CSS"
slug: "height-dan-width-pada-css"
snippet: "Mengatur ukuran elemen HTML, seperti tinggi bisa dengan height, sementara lebar dengan width, masing masing juga bisa diberi nilai minimal dan maksimal"
date: 2023-02-10T10:15:05-08:00
label: CSS
order: 125
---

Kita bisa mengatur ukuran dari elemen HTML dengan properti `width` untuk lebar serta `height` untuk tingginya.

## Mengatur lebar elemen

Berikut contoh menggunakan `width` pada CSS

```html
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}
.wide {
 width: 300px;
}
.narrow {
 width: 50px;
}
</style>

<p class="p">Aku adalah tag p tanpa lebar </p>
<p class="p wide">Aku adalah tag p wide </p>
<p class="p narrow"> Aku adalah tag p narrow </p>
```

{{<rawhtml>}}
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}
.wide {
 width: 200px;
}
.narrow {
 width: 50px;
}
</style>

<p class="p">Aku adalah tag p tanpa lebar </p>
<p class="p wide">Aku adalah tag p wide </p>
<p class="p narrow"> Aku adalah tag p narrow </p>
{{</rawhtml>}}

### Penjelasan
- tag p pertama otomatis punya lebar 100% karena [ia bersifat block](/html/perbedaan-elemen-block-dan-inline/)
- tag p kedua punya lebar 200px
- tag p ketiga lebarnya lebih kecil dari isi konten, maka otomatis konten akan terbungkus

## Mengatur tinggi elemen

Berikut contoh menggunakan `tinggi` pada CSS

```html
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}
.high {
 height: 300px;
}
.low {
 height: 50px;
}
</style>

<p class="p">Aku adalah tag p tanpa tinggi </p>
<p class="p high">Aku adalah tag p high </p>
<p class="p low"> Aku adalah tag p low </p>
```

{{<rawhtml>}}
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}
.high {
 height: 200px;
}
.low {
 height: 20px;
}
</style>

<p class="p">Aku adalah tag p tanpa tinggi </p>
<p class="p high">Aku adalah tag p high </p>
<p class="p low"> Aku adalah tag p low </p>
{{</rawhtml>}}

### Penjelasan
- tag p pertama otomatis punya tinggi sesuai kontenya
- tag p kedua punya tinggi, sehingga ada jarak terlihat
- tag p ketiga tingginya lebih kecil dari isi konten, maka otomatis konten akan terbungkus

## Opsi nilai pada height dan width
Properti height dan width pada CSS, bisa punya nilai berikut:

- auto : otomatis (browser akan menghitung jarak dan lebarnya)
- satuan seperti (px, cm, rem, etc..)
- % : presentasi dari elemen pembungkusnya
- initial : nilai default
- inherit : mengambil  nilai dari elemen pembungkusnya

## Mengatur ukuran maksimal

Jika kita ingin membatasi lebar atau tinggi dari suatu elemen, makan gunakan properti `max-height` atau `max-width`.

Biasanya ini berguna ketika kita TIDAK menentukan nilai satuannya, namun ingin memberi jarak maksimal.

Penggunaan dan satuannya sama dengan `width` dan `height` di atas.

## Mengatur ukuran minimal

Jika kita ingin membatasi sekecil apa lebar atau tinggi dari suatu elemen, makan gunakan properti `min-height` atau `min-width`.

Biasanya ini berguna ketika kita TIDAK menentukan nilai satuannya, namun ingin memberi jarak minimal.

Penggunaan dan satuannya sama dengan `width` dan `height` di atas.

## Kapan mengatur ukuran maksimal atau minimal
- ketika bermain dengan ukuran responsive. Kita ingin membatasi nilai terkecil atau terbesar dari ukuran elemennya
- ketika tidak mengetahui ukuran awalnya. Seperti ada konten dinamis dari database, yang ukurannya bisa bervariasi satu sama lain.