---
title: "Input Hidden di HTML"
slug: "input-hidden-di-HTML"
snippet: "Menyembunyikan sebuah input dari form yang berguna untuk diambil nilainya saja nanti dengan type hidden"
date: 2022-12-27T11:19:25+08:00
label: HTML
order: 365
---

Jika kita butuh sebuah data untuk diselipkan di form tanpa perlu menampilkannya, gunakan input dengan type `hidden`

```html
<input type="hidden" value="hilmanski" name="username" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type="hidden" value="hilmanski" name="username" />
{{</rawhtml>}}

Kamu tidak melihat apa-apa kan di atas? itu karena type hidden menyembunyikan elemen tersebut.

{{<alert class="info">}}
Trik ini biasanya berguna ketika kamu ingin mengirim data dari form <br> tanpa perlu diisi lagi.
{{</alert>}}

`Hidden` dalam bahasa Indonesia berarti tersembunyi.