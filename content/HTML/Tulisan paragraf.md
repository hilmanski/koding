---
title: "Menampilkan paragraf HTML"
slug: "menampilkan-paragraf-HTML"
snippet: "Apa itu tag P di HTML? belajar bagaimana cara membuat tulisan paragraf di HTML."
date: 2022-12-02T00:03:20-08:00
label: HTML
order: 50
---

Halaman ini adalah informasi seputar tag P yang kita gunakan sebelumnya.  
Dengan tag `<p>` kita bisa membuat tulisan paragraf di website.


## Cara penulisan tag P HTML
```html
<p> Isi atau nilai dari setiap tagnya </p>
```

## Menggunakan tag P atau tidak
Di HTML, kita juga menampilkan tulisan tanpa tag `<p>` . Lalu apa bedanya. 

1. Tanpa tag `<p>`
{{<codepen src="WNyYQyz">}}

Meskipun kita punya dua baris tulisan yang berbeda, HTML akan menampilkan tulisan secara berderet tanpa peduli ada jarak antara mereka. 

{{<alert class="try">}}
<p> Beri jarak yang jauh di kode atas antara tulisannya, dengan klik di bagian yang ingin kamu pisah dan ketik (enter/return), lihat apakah ada perbedaanya..</p>
{{</alert>}}

Jawaba: Tidak ada perbedaan.

2. Dengan tag `<p>`  
Sekarang kita coba dengan bantuan tag `</p>`
{{<codepen src="KKerdxB">}}

Lihat bedanya? Website kita jadi tahu, bahwa setiap tulisan yang dibungkus dengan tag `</p>` merupakan paragraf tersendiri. Karena itu jadi ada jarak antara mereka.

{{<alert class="try">}}

<p> Tambahkan kode di atas dengan paragraf yang baru kamu buat dan lihat hasilnya.</p>
{{</alert>}}

## Tampilan dasar tag p
Secara otomatis (default), tag p ditampilkan dengan: 
- Lebar 100%, artinya konten setelah p akan berada di bagian berikutnya.
- Warna hitam dengan ukurang font normal

{{<alert class="info">}}
Tenang saja, kamu bisa mengganti semua tampilan otomatis <br> dengan bantuan "CSS" nanti
{{</alert>}}