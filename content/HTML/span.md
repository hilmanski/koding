---
title: "Span pada HTML"
slug: "span-pada-HTML"
snippet: "Span bisa digunakan untuk mengapit satu elemen HTML atau mengelompokkan beberapa elemen HTML menjadi satu. Secara visual span tidak ada bedanya"
date: 2022-12-31T16:17:51+08:00
label: HTML
order: 605
---

Mirip seperti DIV, span adalah tag HTML yang tidak punya makna apa-apa ketika berdiri sendiri. Ia berguna untuk memberi aksi atau hiasan pada sebuah atau sekelompok elemen HTML.

## Contoh penggunaan span
Dibandingkan dengan div, penggunaan span biasanya hanya pada suatu text, atau elemen 'kecil'. 
Contoh

```html
<p>Saya adalah sebuah paragraf yang berisi <span>tag span</span> di tengahnya.</p>
```

Hasilnya:
{{<rawhtml>}}
<p>Saya adalah sebuah paragraf yang berisi <span>tag span</span> di tengahnya.</p>
{{</rawhtml>}}


## Contoh span yang menggunakan CSS

```html
<p>Saya adalah sebuah paragraf yang berisi 
    <span style='background:blue;'>tag span</span> di tengahnya.</p>
```

Hasilnya
{{<rawhtml>}}
<p>Saya adalah sebuah paragraf yang berisi <span style='background:blue;'>tag span</span> di tengahnya.</p>
{{</rawhtml>}}

Tentunya kamu bisa menggunakan lebih dari satu span


```html
<p>Saya adalah sebuah paragraf yang berisi 
    <span style='background:blue;'>tag span</span> di tengahnya
    dan di bagian <span style='background:orange;'>akhir</span>.</p>
```

Hasilnya
{{<rawhtml>}}
<p>Saya adalah sebuah paragraf yang berisi 
<span style='background:blue;'>tag span</span> di tengahnya
dan di bagian <span style='background:orange;'>akhir</span>.</p>
{{</rawhtml>}}

{{<alert class="info">}}
Span adalah tag yang bersifat `inline` atau muncul di baris yang sama.
{{</alert>}}