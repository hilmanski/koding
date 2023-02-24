---
title: "Text shadow pada CSS"
slug: "text-shadow-pada-css"
snippet: "bagaimana cara membuat efek bayangan pada text tulisan di CSS HTML"
date: 2023-02-25T06:10:10+08:00
label: CSS
order: 205
---

Sebuah tulisan bisa diberi efek bayangan pada CSS dengan properti `text-shadow`. 

Kita memberi nilai horizontal dan vertical untuk mengatur posisi bayangannya. 

## Contoh text shadow CSS

```html
<p style="text-shadow: 2px 5px;"> 
    Shadow 2px 5px
</p>
```

{{<result>}}
<p style="text-shadow: 2px 5px;"> 
    Shadow 2px 5px
</p>
{{</result>}}
Artinya bayangan kita 2px ke kanan dan 5px ke bawah

## Memberi warna bayangan
Kita bisa mengatur warna bayangan text dengan properti ketiga

```html
<p style="text-shadow: 2px 5px aqua;"> 
    Shadow 2px 5px
</p>
```

{{<result>}}
<p style="text-shadow: 2px 5px aqua;"> 
    Shadow 2px 5px
</p>
{{</result>}}

## Memberi efek blur
Blur effect bisa diberikan sebagai posisi ketiga (dan geser warna ke empat)

```html
<p style="text-shadow: 2px 5px 5px aqua;"> 
    Shadow 2px 5px
</p>
```

{{<result>}}
<p style="text-shadow: 2px 5px 5px aqua;"> 
    Shadow 2px 5px
</p>
{{</result>}}