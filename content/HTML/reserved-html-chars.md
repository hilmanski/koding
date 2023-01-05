---
title: "Karakter milik HTML"
slug: "karakter-milik-HTML"
snippet: "Karakter kurung lancing adalah bagian dari penulisan tag HTML, untuk menampilkannya sebagai text biasa perlu berhati-hati"
date: 2023-01-05T06:17:51+08:00
label: HTML
order: 755
---

Meskipun tidak selalu kasus ini datang, kita perlu berhati-hati saat ingin menampilkan karakter `<` dan `>` di halaman HTML.

Karena kedua karakter ini sudah bagian dari tag HTML. Mudah untuk HTML menjadi bingung ketika kita salah menempatkan kedua tanda ini.

## Menggunakan entity_name
Kita bisa menulis simbol ini dengan nama entity -nya. Seperti berikut
```html
&lt; untuk <
```

dan
```html
&gt; untuk >
```

## Menggunakan entity_number
Ada juga cara penulisan dengan nomor entity. Seperti berikut

```html
&#60; untuk <
```

dan 
```html
&#62; untuk >
````

Kedua cara di atas menghasilkan hal yang sama, yaitu cara menulis kurung lancip pembuka dan kurung lancip penutup atau tanda kurang dari dan tanda lebih dari pada HTML.