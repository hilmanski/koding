---
title: "white space pada CSS"
slug: "white-space-pada-css"
snippet: "bagaimana cara mengatur jarak antara baris kosong atau white-space dengan CSS menggunakan white space"
date: 2023-02-25T06:10:05+08:00
label: CSS
order: 200
---

white-space adalah properti CSS yang digunakan untuk mengatur bagaimana white-space ditangani pada sebuah situs


Nilai white-space bisa diisi dengan:
- normal (detaul)
- nowrap
- pre
- pre-line
- pre-wrap
- inherit (mengikut parentnnya)

## normal pada white-space

```html

<p style="white-space: normal;"> 
    WHITE-SPACE: NORMAL ->
    TIDAK PEDULI JARAK KOSONG 
    TAPI AKAN MEMBUNGKUS KE BARIS BERIKUTNYA SAAT KELUAR BATAS
</p>

```

{{<result>}}

<p style="white-space: normal;"> 
    WHITE-SPACE: NORMAL ->
    TIDAK PEDULI JARAK KOSONG 
    TAPI AKAN MEMBUNGKUS KE BARIS BERIKUTNYA SAAT KELUAR BATAS
</p>


{{</result>}}


## Nowrap pada white-space
Nowrap berarti tulisannya tidak akan terbungkus meskipun melewati batas

```html
<p style="white-space: nowrap;"> 
    WHITE-SPACE: NOWRAP ->
    TIDAK PEDULI JARAK KOSONG 
    DAN TIDAK MEMBUNGKUS WALAUPUN KELUAR BATAS
</p>
```

{{<result>}}
<p style="white-space: nowrap;"> 
    WHITE-SPACE: NOWRAP ->
    TIDAK PEDULI JARAK KOSONG 
    DAN TIDAK MEMBUNGKUS WALAUPUN KELUAR BATAS SEJAUH APAPUN TULISANNYA BERJALAN
</p>

{{</result>}}


## Pre pada white-space
Pre akan mengikuti bagaimana tulisannya dalam HTML, mulai dari jarak awal, jumlah white space kosong dan juga baris baru (line break). 
Namun jika melewati baris akan lanjut begitu saja

```html
<p style="white-space: pre;"> 
    WHITE-SPACE:   PRE ->
    mengikuti jarak kosong aslinya
    seperti ini jika tulisan dari ini sangatlah panjang sehingga ia melewati batas dari lebar yang ditentukan aslinya, lihat sendiri apa yang terjadi
</p>
```

{{<result>}}
<p style="white-space: pre;"> 
    WHITE-SPACE:   PRE ->
    mengikuti jarak kosong aslinya
    seperti ini jika tulisan dari ini sangatlah panjang sehingga ia melewati batas dari lebar yang ditentukan aslinya, lihat sendiri apa yang terjadi
</p>
{{</result>}}



## Pre-wrap pada white-space
Perbedaan pre dan Pre wrap , pre-wrap akan wrap atau membungkus tulisan jika melwati bari

```html
<p style="white-space: pre-wrap;"> 
    WHITE-SPACE:     pre-wrap ->
    mengikuti jarak kosong aslinya
    seperti ini jika tulisan dari ini sangatlah panjang sehingga ia melewati batas dari lebar yang ditentukan aslinya, lihat sendiri apa yang terjadi
</p>
```

{{<result>}}
<p style="white-space: pre-wrap;"> 
    WHITE-SPACE:     pre-wrap ->
    mengikuti jarak kosong aslinya
    seperti ini jika tulisan dari ini sangatlah panjang sehingga ia melewati batas dari lebar yang ditentukan aslinya, lihat sendiri apa yang terjadi
</p>
{{</result>}}


## Pre-line pada white-space
Pre line akan membuat beberapa white-space menjadi satu saja, namun akan membuat line-break pada baris baru

```html
<p style="white-space: pre-line;"> 
    WHITE-SPACE:     pre-line ->
    mengikuti jarak kosong aslinya
    itu dia!
</p>
```

{{<result>}}
<p style="white-space: pre-line;"> 
    WHITE-SPACE:     pre-line ->
    mengikuti jarak kosong aslinya
    itu dia!
</p>
{{</result>}}