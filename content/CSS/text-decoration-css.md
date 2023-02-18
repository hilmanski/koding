---
title: "Text decoration pada CSS"
slug: "text-decoration-pada-css"
snippet: "Untuk memberi baris pada text, baik itu di atas, bawah atau tengah kita bisa menggunakan text-decoration"
date: 2023-02-18T10:50:05+08:00
label: CSS
order: 165
---

CSS punya properti `text-decoration` untuk memberi hiasan berupa baris untuk sebuah text HTML.

## Contoh menggunakan text-decoration
Berikut contoh memberi baris pada berbagai posisi untuk sebuah element
```html
<p style="text-decoration:overline;"> 
    Saya overline 
</p>
<p style="text-decoration:line-through;"> 
    Saya line-through 
</p>
<p style="text-decoration:underline;"> 
    Saya underline 
</p>
```

**Hasil:**

{{<rawhtml>}}
<p style="text-decoration:overline;"> Saya overline </p>
<p style="text-decoration:line-through;"> Saya line-through </p>
<p style="text-decoration:underline;"> Saya underline </p>
{{</rawhtml>}}


## Warna text-decoration

Warna dari baris text juga bisa diatur dengan properti `text-decoration-color`, yang bisa diaplikasikan pada `text-decoration` mana saja.

```html
<p style="
    text-decoration:line-through;
    text-decoration-color: yellow;
    "> 
    Saya line-through 
</p>
```

{{<rawhtml>}}
<p style="
    text-decoration:line-through;
    text-decoration-color: yellow;
    "> 
    Saya line-through 
</p>
{{</rawhtml>}}

## Gaya dari baris text-decoration

Seperti border, kamu bisa mengatur gaya dari baris text-decoration, seperti:
- solid (defaultnya)
- double
- dotted
- dashed
- wavy

```html
<p style="
    text-decoration:line-through;
    text-decoration-color: yellow;
    text-decoration-style: wavy;
    "> 
    Saya line-through wavy
</p>

<p style="
    text-decoration:line-through;
    text-decoration-color: aqua;
    text-decoration-style: dotted;
    "> 
    Saya line-through dotted
</p>
```

{{<rawhtml>}}
<p style="
    text-decoration:line-through;
    text-decoration-color: yellow;
    text-decoration-style: wavy;
    "> 
    Saya line-through wavy
</p>

<p style="
    text-decoration:line-through;
    text-decoration-color: aqua;
    text-decoration-style: dotted;
    "> 
    Saya line-through dotted
</p>
{{</rawhtml>}}

## Ketebalan baris text-decoration

Ketebalan baris text-decoration juga bisa diatur dengan properti `text-decoration-thickness`.

```html
<p style="
    text-decoration:line-through;
    text-decoration-color: yellow;
    text-decoration-style: wavy;
    text-decoration-thickness: 5px;
    "> 
    Saya line-through wavy
</p>

<p style="
    text-decoration:line-through;
    text-decoration-color: aqua;
    text-decoration-style: dotted;
    "> 
    Saya line-through dotted
</p>
```

{{<rawhtml>}}
<p style="
    text-decoration:line-through;
    text-decoration-color: yellow;
    text-decoration-style: wavy;
    text-decoration-thickness: 5px;
    "> 
    Saya line-through wavy
</p>

<p style="
    text-decoration:line-through;
    text-decoration-color: aqua;
    text-decoration-style: dotted;
    "> 
    Saya line-through dotted
</p>
{{</rawhtml>}}

## Penulisan singkat text-decoration
Semua properti tadi, bisa dideklarasikan secara singkat lewat 1 baris `text-decoration`

```html
<p style="text-decoration: underline blue dashed 2px;"> 
    Saya baris satu
</p>

<p style="text-decoration: overline red double 5px;"> 
    Saya baris dua
</p>
```

{{<rawhtml>}}
<p style="text-decoration: underline blue dashed 2px;"> 
    Saya baris satu
</p>

<p style="text-decoration: overline red double 5px;"> 
    Saya baris dua
</p>
{{</rawhtml>}}