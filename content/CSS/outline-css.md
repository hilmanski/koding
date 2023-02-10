---
title: "Outline pada CSS"
slug: "outline-pada-css"
snippet: "Outline adalah batasan garis yang berada di luar border elemen"
date: 2023-02-10T10:15:05-08:00
label: CSS
order: 120
---

Setelah border, masih ada nilai yang bisa kita manipulasi yaitu OUTLINE.

{{<alert class="info">}}
Outline tidak menjadi bagian dari dimensi elemen. Total lebar dan tinggi elemen tidak terpengaruh oleh outline.
{{</alert>}}

## Contoh outline CSS

Berikut contoh menggunakan `outline` pada CSS

```html
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}
.outline {
  outline: blue solid 5px;
  padding: 10px;
  text-align: center;
}
</style>

<p class="p">Aku adalah tag p </p>
<p class="p outline">Aku adalah tag p dengan outline </p>
```

{{<rawhtml>}}
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}
.outline {
  outline: blue solid 5px;
  padding: 10px;
  text-align: center;
}
</style>

<p class="p">Aku adalah tag p </p>
<p class="p outline">Aku adalah tag p dengan outline </p>
{{</rawhtml>}}


## Properti-properti dari outline

Outline bisa ditulis dengan satu baris seperti ini 
```
outline: blue solid 5px;
```

atau spesifik berdasarkan fungsinya
- outline-style
- outline-color
- outline-width
- outline-offset

## Contoh mengubah Outline style
sama seperti border, kita bisa menggunakan nilai ini untuk mengubah gaya outline 

```css
- dashed
- dotted
- solid
- double
- groove
- ridge
- inset
- outset
```

Contoh

```html
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}
.outline-1 {
  outline: green dashed 5px;
  padding: 10px;
  text-align: center;
}
.outline-2 {
  outline: orange ridge 5px;
  padding: 10px;
  text-align: center;
}
</style>

<p class="p">Aku adalah tag p </p>
<p class="p outline-1">Aku adalah tag p dengan outline </p>
<p class="p outline-2">Aku adalah tag p dengan outline </p>
```

{{<rawhtml>}}
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}
.outline-1 {
  outline: green dashed 5px;
  padding: 10px;
  text-align: center;
}
.outline-2 {
  outline: orange ridge 5px;
  padding: 10px;
  text-align: center;
}
</style>

<p class="p">Aku adalah tag p </p>
<p class="p outline-1">Aku adalah tag p dengan outline </p>
<p class="p outline-2">Aku adalah tag p dengan outline </p>
{{</rawhtml>}}