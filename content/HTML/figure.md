---
title: "Menampilkan figur HTML"
slug: "menampilkan-figur-HTML"
snippet: "Gunakan tag figur untuk menampikan gambar, ilustrasi, diagram bahkan potongan kode di situs yang kamu buat dengan kode HTML"
date: 2022-12-03T16:10:10+08:00
label: HTML
order: 211
---

Selain dengan tag `image`, kita juga bisa menampilkan gambar dengan tag `figure`. 

```html
<figure>
  <img src="https://sko.dev/sumber-gambar.png">
  <figcaption>Gambar komputer dan hutan</figcaption>
</figure>
```

menghasilkan gambar

{{<rawhtml>}}
<figure>
  <img src="https://ucarecdn.com/152bb474-7d2f-4240-a5ad-f8b5f925e49a/-/preview/400x400/">
  <figcaption>Gambar komputer dan hutan</figcaption>
</figure>
{{</rawhtml>}}

## Aturan tag figure
- Tag figure mempunya objek utama, pada contoh di atas, tag `img` adalah objek utamanya
- Diikuti dengan caption atau penjelasan dari objek tersebut yang dibungkus dengan tag `figcaption`.
