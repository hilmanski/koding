---
title: "Input text di HTML"
slug: "input-text-di-HTML"
snippet: "Menerima masukan data tulisan atau text bisa dengan input text dari HTML"
date: 2022-12-17T17:01:01+08:00
label: HTML
order: 320
---

Untuk menerima sebuah input text, gunakan tag `<input>` dengan type `text`

Contoh input text
```
<input type='text'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='text'>
{{</rawhtml>}}

Coba klik kotaknya  👆🏼 dan ketik sesuatu.

## Nilai contoh dengan atribut placeholder
Kita bisa memberi petunjuk atau contoh dari isian textnya, dengan atribut `placeholder`

```
<input type='text' placeholder='contoh isian'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='text' placeholder='contoh isian'>
{{</rawhtml>}}

## Nilai default dengan atribut value
Kita bisa memberi nilai otomatis dari isian textnya, dengan atribut `value`

```
<input type='text' value='otomatis!'>
```

Yang menghasilkan
{{<rawhtml>}}
<input type='text' value='otomatis!'>
{{</rawhtml>}}