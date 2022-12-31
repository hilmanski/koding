---
title: "Menampilkan quote di HTML"
slug: "menampilkan-quote-di-HTML"
snippet: "Ada beberapa cara untuk menampikan Quote atau kutipan di HTML, bisa dengan tag blockquote atau tag q "
date: 2022-12-05T18:58:11+08:00
label: HTML
order: 115
---
Sebuah tulisan bisa diselipkan dengan kutipan (quote). Di HTML,  kutipan bisa ditampilkan dengan tag `<blockquote>` dan `<q>`

## Cara menggunakan blockquote

Kutipan bisa diapit diantara tag pembuka dan penutup `<quote>` seperti ini: 
```
<blockquote>
Koding tidak perlu pusing
</blockquote>
```

Yang menampilkan:

{{<rawhtml>}}
<blockquote>
Koding tidak perlu pusing
</blockquote>
{{</rawhtml>}}

Perhatikan, secara otomatis blockquote ditampilkan dengan indentasi (jarak) seperti di atas.

## Memberi informasi sumber dengan atribut cite
Pada tag `blockquote`, sumber informasi diletakkan pada atribut `cite` seperti ini

```html
<blockquote cite="https://kodi.ng">
Koding tidak perlu pusing
</blockquote>
```

Tidak ada perubahan tampilan saat menggunakan atribut cite, ini hanya informasi tertulis saja.

## Cara menggunakan tag q (quote)
Selain `blockquote` , ada cara lain menunjukkan sebuah kutipan, yaitu dengan tag `<q>`. Contohnya

```html
<p>Dilansir dari situs koding: <q>Koding tidak perlu pusing</q></p>
```

Yang menampilkan:

{{<rawhtml>}}
Dilansir dari situs koding: <q>Koding tidak perlu pusing</q>
{{</rawhtml>}}



## Perbedaan tag q dan blockquote adalah:
- Tag q digunakan untuk kutipan pendek
- Tag blockquote untuk kutipan panjang
- Tag q , secara otomatis memberi tanda kutip

