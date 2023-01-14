---
title: "Atribut id pada HTML"
slug: "atribut-id-pada-HTML"
snippet: "Atribut id pada HTML adalah atribut yang berguna untuk memberi tanda atau nama pada sebuah elemen secara unik"
date: 2023-01-05T07:17:51+08:00
label: HTML
order: 800
chapter: Atribut pada HTML
---

Atribut id adalah atribut unik yang diberikan kepada sebuah elemen HTML. Setiap elemen hanya boleh punya satu atribut dan harus unik (tidak boleh beberapa elemen punya id yang sama)

## Cara menggunakan atribut id di HTML
Dengan menggunakan kata id diikuti dengan nilainya

```html
<h1 id="head">Header</h1>
```

## Apa kegunaan dari atribut id di HTML
Atribut id biasanya digunakan untuk memberi aski atau hiasan tertentu lewat javascript atau CSS (pelajaran yang akan kita lihat pada bagian lain).

## Contoh menggunakan atribut id pada CSS
Kamu belum perlu mengerti bagian ini, di sini adalah contoh menggunakan css dengan atribut id
```html
<!DOCTYPE html>
<html>
<head>
<style>
#head {
  background-color: lightblue;
  color: white;
}
</style>
</head>
<body>
<h1 id="head">Header</h1>
</body>
</html>
```

Hasilnya 
{{<rawhtml>}}
<style>
#head {
  background-color: lightblue;
  color: white;
}
</style>
<h1 id="head">Header</h1>

{{</rawhtml>}}

**Penjelasan**  
- Cara menunjuk id pada CSS dengan karakter `#` (tanda pagar) 
- Di CSS, kita memberi warna latar dan text dasar.