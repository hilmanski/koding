---
title: "Input Color di HTML"
slug: "input-color-di-HTML"
snippet: "Membuat opsi pilihan warna yang bisa pengunjung situs kamu gunakan, bisa dengan input color"
date: 2022-12-27T11:23:29+08:00
label: HTML
order: 370
---

Input ini cukup menarik, kamu bisa memilih warna dengan visual yang disediakan, dengan input type `color`.

```html
<input type="color" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type="color" />
{{</rawhtml>}}

Klik tombol warna di atas, kamu akan bisa memlih warna pada paletnya dan juga jenis warna yang digunakan. Seperti RGB, HSL, CMYK, dan lainnya.

## Memberi nilai pada warna awal
Kita bisa memberi nilai awla pada pilihan warnanya, dengan memasukkan [angka hex](https://www.google.com/search?q=hex+color) sebagai nilai dari atribut `value`.

```html
<input type="color" value="#17fc03" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type="color" value="#17fc03" />
{{</rawhtml>}}
