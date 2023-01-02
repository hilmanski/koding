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
  <img src="https://i.ibb.co/k39G1tL/Screen-Shot-2022-12-05-at-17-18-51.png">
  <figcaption>Gambar komputer dan hutan</figcaption>
</figure>
```

menghasilkan gambar

{{<rawhtml>}}
<figure>
  <img src="https://i.ibb.co/k39G1tL/Screen-Shot-2022-12-05-at-17-18-51.png">
  <figcaption>Gambar komputer dan hutan</figcaption>
</figure>
{{</rawhtml>}}

## Aturan tag figure
- Tag figure mempunya objek utama, pada contoh di atas, tag `img` adalah objek utamanya
- Diikuti dengan caption atau penjelasan dari objek tersebut yang dibungkus dengan tag `figcaption`.
