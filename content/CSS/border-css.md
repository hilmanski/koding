---
title: "Border pada CSS"
slug: "border-di-css"
snippet: "Border adalah garis batas yang bisa digunakan di setiap elemen."
date: 2023-01-27T10:00:05-08:00
label: CSS
order: 105
---

Untuk memperlihatkan garis batas dari sebuah elemen, gunakan properti `border` pada CSS.
Berikut berbagai properi border yang akan kita lihat:
- border
- border-style
- border-ARAH (top/bottom/right/left)
- border-radius
- border-width
- border-color

## Contoh menggunakan border di CSS
Berikut elemen yang diberikan border

```html
<p style="border: 1px solid white;">Aku adalah tag p dengan border </p>
```

{{<rawhtml>}}
<p style="border: 1px solid white;">Aku adalah tag p dengan border </p>
{{</rawhtml>}}

### Penjelasan
properti `border` sendiri terdiri dari tiga hal. 
```
border: A B C;
```
- `A` adalah ukuran ketebalan bordernya
- `B` adalah jenis dari border
- `C` adalah warna dari border

Berarti contoh `border: 1px solid white` punya:
- Ukuran garis sebesar 1px
- Jenis border garis lurus (solid)
- Warna border putih

{{<alert class="info">}}
Tidak hanya garis lurus, ada banyak variasi border lainnya !
{{</alert>}}

## Jenis Jenis garis border
Untuk mengubah jenis border gunakan properti spesifik `border-style` atau sebagai parameter kedua jika menggunakan properi umum `border`. 

Berikut daftar variasi garis border dan penampakannya.

{{<codepen src="zYLaLaL">}}

Di atas kita melihat berbagai jenis `border-style`:
```css
- dashed
- dotted
- solid
- double
- groove
- ridge
- inset
- outset
```

## Memberi border pada arah tertentu
Kita tidak harus memberi border pada keempat arah (atas, bawah, kiri dan kanan). Bisa juga memberi hanya pada satu arah saja

```html
<p style="border-top: 1px dashed white;">Aku adalah tag p dengan border atas </p>
```

{{<rawhtml>}}
<p style="border-top: 1px dashed white;">Aku adalah tag p dengan border atas</p>
{{</rawhtml>}}

Contoh di atas, kita menggunakan jenis border `dashed` hanya pada arah `border-top`.

Untuk menentukan posisi border, gunakan properti:
```css
- border-top (posisi atas saja)
- border-right (posisi kanan saja)
- border-bottom (posisi bawah saja)
- border-left (posisi kiri saja)
- border (semua arah)
```

## Memberi lengkungan pada border
Kita bisa memberi lengkungan pada border, dengan properti `border-radius` yang diberi nilai pixel sesuai ukuran yang dimau.

Contoh
```html
<style>
.radius-sample {
    border: 1px solid white;
    border-radius: 10px;
}
</style>
<p class="radius-sample">Aku adalah tag p dengan border atas </p>
```

{{<rawhtml>}}
<style>
.radius-sample {
    border: 1px solid white;
    border-radius: 10px;
}
</style>
<p class="radius-sample">Aku adalah tag p dengan border atas </p>
{{</rawhtml>}}

Lihat lengkungan di keempat sudutnya! 

## Mengganti ukuran border.
Ukuran border bisa dimanipulasi dengan properti `border-width`.


```html
<p style="border: 5px solid white;">Aku adalah tag p dengan border 5px </p>
atau
<p style="border-width: 10px;">Aku adalah tag p dengan border 10px </p>
```

{{<rawhtml>}}
<p style="border: 5px solid white;">Aku adalah tag p dengan border 5px </p>
<p style="border-width: 10px;">Aku adalah tag p dengan border 10px </p>
{{</rawhtml>}}

## Mengganti warna border
Warna border bisa diubah dengan properi `border-color`

```html
<p style="border: 5px solid red;">
    Aku adalah tag p dengan border merah 
</p>
atau
<p style="border-color: blue; border-width: 1px; border-style:solid;">
    Aku adalah tag p dengan border biru 
</p>
```

{{<rawhtml>}}
<p style="border: 1px solid red;">Aku adalah tag p dengan border merah</p>
<p style="border-color: blue; border-width: 1px; border-style:solid;">Aku adalah tag p dengan border biru </p>
{{</rawhtml>}}

## Menggabungkan properti berdasarkan arah

{{<alert class="comment">}}
Kamu juga bisa memberi warna, ukuran dan radius spesifik di setiap arah.
{{</alert>}}

Kita tidak harus memberi properti yang sama pada keempat sisi. properti `border-width`, `border-color` dan `border-radius` bisa diberikan nilai berbeda di setiap arah.

### Cara 1: memberi 4 nilai pada properti
Ini contoh memberikan 4 nilai properti berbeda dengan struktur (atas kanan bawah kiri)
```html
<p style="border-color: blue red green white; border-width: 1px; border-style:solid;">
    Aku adalah tag p dengan border penuh warna 
</p>
```

{{<rawhtml>}}
<p style="border-color: blue red green white; border-width: 1px; border-style:solid;">
    Aku adalah tag p dengan border penuh warna 
</p>
{{</rawhtml>}}

### Cara 2: menggunakan properti spesifik
Bisa juga memberi properti spesifk seperti 
``` css
border-top-width (ukuran atas saja)
border-left-radius (radius kiri saja)
border-bottom-color (warna bawah saja)
.. dst
```
Berikut polanya `border-{arah}-{properti}`.
- Ganti arah dengan (top - left - bottom atau right)
- Ganti properti dengan (width - style - radius atau color)

Contoh

```html
<p style="border-bottom-color:green; border-width: 1px; border-style:solid;">
    Aku adalah tag p 
</p>
```

{{<rawhtml>}}
<p style="border-bottom-color:green; border-width: 1px; border-style:solid;">
    Aku adalah tag p dengan border penuh warna 
</p>
{{</rawhtml>}}
