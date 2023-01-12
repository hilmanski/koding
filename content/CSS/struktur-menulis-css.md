---
title: "Struktur penulisan CSS"
slug: "struktur-penulisan-css"
snippet: "Begini sturktur dari suatu kode CSS. Di mana ada selektor, atribut dan nilainya."
date: 2023-01-11T00:13:20-08:00
label: CSS
order: 10
---

Berikut struktur penulisan dari kode CSS. 
```css
selektor {
    properti: nilai;
}
```

contoh dengan nilai sungguhan
```css
p {
    color: blue;
}
```
Kode di atas membuat text dengan tag p menjadi biru (blue).

## Apa itu selektor di CSS?
Selektor adalah elemen HTML yang ingin kamu targetkan. Karena setiap hiasan boleh berbeda untuk setiap elemennya.

## Apa itu properti di CSS?
Properti CSS adalah bagian-bagian dari elemen HTML yang bisa kita hias. 

Kalau manusia punya properti: kepala, hidung, tangan, dst. Maka setiap elemen HTML punya properti seperti: warna, ukuran, dst.


{{<alert class="warning">}}
Tidak boleh kreatif dalam membuat properti CSS. Semua properti sudah ditentukan.
{{</alert>}}

## Apa itu nilai di CSS?
Nilai atua value pada CSS adalah isi dari setiap properti yang kita berikan. 

Contoh properti `color` dari tag `p` kita beri nilai `blue`:
```css
p {
    color: blue;
}
```

## Boleh lebih dari satu properti
Kita bisa memberi lebih dari satu nilai properti, contoh

```css
p {
    color: blue;
    font-size: 20px;
}
```

Berati tag p sekarang punya warna `blue` dengan ukuran (font-size) `20px`.

## Boleh memberi nilai lebih dari satu selektor
Kita juga bisa memilih beberapa selektor sekaligus, untuk diberi properti yang sama
```css
h1, p {
    color: blue;
    font-size: 20px;
}
```

Kode di atas bearti tag h1 dan tag p punya warna dan ukuran yang sama.