---
title: "Memberi jarak HTML"
slug: "memberi-jarak-HTML"
snippet: "Tag br dan pre pada HTML berguna sebagai pemberi jarak antar satu tulisan ke tulisan line. Nama br diambil dari kata break atau line break."
date: 2022-12-03T08:47:07+08:00
label: HTML
order: 60
---

Tag `<br>` adalah tag HTML yang kita gunakan untuk memberi jarak. Untuk mudah membayangkannya, `br` diambil dari kata `break` pada `line break` yaitu bahasa Inggris dari `baris baru`.

## Cara menggunakan `<br>`
Tag `<br>` tidak perlu pembuka, penutup dan konten, ia bisa berdiri sendiri.

```html
Text sebelum <br> text setelah br
```

Contoh penggunaan tag br

{{<codepen src="jOKQWOQ">}}

**Keterangan:**  
- Di atas ada tag `<p>` yang harusnya menampilkan satu baris
- Sekarang ada jarak karena tambahan tag `<br>`
- Kamu bisa menggunakan tag `<br>` di mana saja, tidak harus di tag `<p>`

## `<br>` Bisa digunakan berkali-kali 
tag br Bisa kamu gunakan berkali-kali untuk memberi jarak yang lebih jauh antar tulisan.


{{<alert class="try">}}
<p> Tambahkan tag br dibawah dengan copy paste dan lihat hasilnya.</p>
{{</alert>}}


{{<codepen src="jOKQWOQ">}}

## Memberi jarak dengan tag pre
Tag pre juga bisa digunakan untuk menampilkan format penulisan sesuai cara kita menulis di editor.

```
<pre>
    saya
    tulisan
    berjarak   wow!
</pre>
```

Hasilnya

{{<rawhtml>}}
<pre>
    saya
    tulisan
    berjarak   wow!
</pre>
{{</rawhtml>}}

Dengan menggunakan tag `<pre>` , baik baris baru atau spasi bisa langsung terlihat.