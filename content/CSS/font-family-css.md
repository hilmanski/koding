---
title: "Font Family pada CSS"
slug: "font-family-pada-css"
snippet: "Mengubah jenis font dengan mengatur font family pada CSS"
date: 2023-03-25T05:45:10+08:00
label: CSS
order: 250
chapter: Font CSS
---

Ada banyak jenis atau gaya font yang bisa digunakan untuk menampilkan text di sebuah situs. 

Sebuah situs bisa punya lebih dari satu jenis font.

Sangat penting untuk menyajikan font yang mudah dibaca dan sesuai dengan karakter situs kamu.

## Font family umum pada CSS

Ada 5 font umum yang bisa digunakan pada CSS, dikenal sebagai *generic font*:
- Serif
- Sans-serif
- Monospace
- Cursive
- Fantasy

Masing-masing jenis font ini punya ciri khas yang berbeda. 

### 1. Serif
Font serif punya baris di bagian bagian ujung penulisannya. Biasanya digunakan untuk yang bersifat formal.

{{< mediacontent src="https://ucarecdn.com/a59533c3-96d8-4baf-9682-725fe8c5dd54/serif.png" title="gambaran font serif" >}}

*Perhatikan bagian yang dilingkari

contoh font serif: 
```
"Times, Times New Roman, serif"
```

### 2. Sans-serif
Serif tidak punya baris tambahan di setiap sisinya. Tampilannya menjadi terlihat minimalis dan modern.

contoh font sans-serif: 
```
"Times, Times New Roman, Georgia"
```

### 3. Monospace
Semua hurufnya punya lebar yang sama. Memberi kesan "robot" atau "mekanik".

contoh font Monospace: 
```
"Andale Mono, Courier New, Courier"
```

### 4. Cursive
Seperti tulisan tangan

contoh font Cursive: 
```
"Comic Sans, Apple Chancery, Bradley Hand"
```

### 5. Fantasy
Tulisan yang penuh gaya dan sangat beragam

contoh font Fantasy: 
```
"Impact, Luminari, Chalkduster"
```

## Cara menggunakan font-family pada CSS
Properti yang digunakan adalah `font-family`. Dimana nilainya bisa diberi lebih dari satu, yang berperan sebagai `fallback`, ketika font pertama tidak disupport, maka bisa lanjut ke font berikutnya.

Untuk penulisan, jika lebih dari satu kata, maka gunakan tanda kutip.

```
.p1 {
  font-family: "Times New Roman", Times, serif;
}

.p2 {
  font-family: Arial, Helvetica, sans-serif;
}

.p3 {
  font-family: "Lucida Console", "Courier New", monospace;
}
```

{{<result>}}
<style>
.p1 {
  font-family: "Times New Roman", Times, serif;
}

.p2 {
  font-family: Arial, Helvetica, sans-serif;
}

.p3 {
  font-family: "Lucida Console", "Courier New", monospace;
}
</style>

<p class="p1"> Times New Roman - Serif</p>
<p class="p2"> Arial Helvetica - Sans Serif </p>
<p class="p3"> Lucida - Monospace </p>
{{</result>}}

## Web safe fonts

Font-font di atas dikategorikan sebagai web safe font, yang artinya aman untuk digunakan di website. Ketika orang lain mengaksesnya dari komputer atau device yang berbeda, bisa diharapkan font yang sama yang akan tampil.