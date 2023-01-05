---
title: "Atribut class pada HTML"
slug: "atribut-class-pada-HTML"
snippet: "Atribut class pada HTML adalah atribut yang berguna untuk memberi tanda kepada beberapa elemen agar bisa dihias atau diberi aksi"
date: 2023-01-05T07:17:51+08:00
label: HTML
order: 805
---

Atribut `class` adalah atribut yang bisa diberikan kepada satu atau beberapa elemen HTML. 
- Setiap elemen bisa punya banyak kelas
- Setiap kelas bisa digunakan oleh banyak elemen

## Cara menggunakan atribut class di HTML
Dengan menggunakan kata class diikuti dengan nilainya

```html
<p class="text">Text biasa</p>
<p class="text">Text luar biasa</p>
```

## Apa kegunaan dari atribut class di HTML
Atribut class biasanya digunakan untuk memberi aski atau hiasan tertentu lewat javascript atau CSS (pelajaran yang akan kita lihat pada bagian lain).

## Contoh menggunakan atribut class pada CSS
Kamu belum perlu mengerti bagian ini, di sini adalah contoh menggunakan css dengan atribut class
```html
<!DOCTYPE html>
<html>
<head>
<style>
.text {
  background-color: lightblue;
  color: white;
}
</style>
</head>
<body>
<p class="text">Text biasa</p>
<p class="text">Text luar biasa</p>
</body>
</html>
```

Hasilnya 
{{<rawhtml>}}
<style>
.text {
  background-color: lightblue;
  color: white;
}
</style>
<p class="text">Text biasa</p>
<p class="text">Text luar biasa</p>
{{</rawhtml>}}

**Penjelasan**  
- Cara menunjuk id pada CSS dengan karakter `#` (tanda pagar) 
- Di CSS, kita memberi warna latar dan text dasar.