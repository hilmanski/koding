---
title: "Overflow pada CSS"
slug: "overflow-pada-css"
snippet: "Apa yang terjadi ketika isi konten melebihi ukuran dari pembungkusnya? mari kita intip kekuatan overflow"
date: 2023-02-10T10:30:05-08:00
label: CSS
order: 130
---

Bagaimana jika lebar atau tinggi dari suatu elemen HTML tidak cukup menampung isi dari kontennya? Kita bisa mengatur apa yang akan terjadi dengan properi `overflow`.

## Opsi nilai overflow
Kita bisa memberi nilai dari overflow dengan ini:
- visible: (otomatis/default). Konten akan melebihi pembungkusnya
- hidden: Konten akan tersembunyi saat lebih dari pembungkus
- scroll: Konten akan terpotong, namun bisa scroll pada pembungkus untuk melihat isinya
- auto: mirip dengan scroll, namun hanya menampilkan `scrollbar` jika perlu.

{{<alert class="info">}}
Overflow hanya bekerja jika elemen diberi properti tinggi `height`
{{</alert>}}

## Contoh nilai Overflow

Berikut contoh menggunakan `overflow` pada CSS

```html
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}

.ov-hidden{
    height:60px;
    overflow: hidden;
}

.ov-scroll{
    height:120px;
    overflow: scroll;
}
</style>

<p class="p ov-hidden">
    Contoh P yang terbatasi tingginya dan diberi overflow hidden.  
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been   the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>

<p class="p ov-scroll">
    Contoh P yang terbatasi tingginya dan diberi overflow scroll.  
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been   the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>
```

{{<rawhtml>}}
<style>
.p{
 border: 1px solid white;
 padding: 5px;
}

.ov-hidden{
    height:60px;
    overflow: hidden;
}

.ov-scroll{
    height:120px;
    overflow: scroll;
}
</style>

Konten tersembunyi di box ini
<p class="p ov-hidden">
    Contoh P yang terbatasi tingginya dan diberi overflow hidden.  
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been   the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>

Kamu bisa scroll di box ini

<p class="p ov-scroll">
    Contoh P yang terbatasi tingginya dan diberi overflow scroll.  
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been   the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>
{{</rawhtml>}}

## Overflow-x dan Overflow-y

Kita juga bisa menentukan spesifik apakah overflow ini, ingin hanya pada lebar atau tinggi saja.
- overflow-x: untuk lebar (horizontal)
- overflow-y: untuk lebar (vertical)