---
title: "Apa itu HTML"
slug: "apa-itu-HTML"
snippet: "HTML adalah kerangka dasar untuk mulai membuat website. Pelajari lebih lanjut apa itu HTML"
date: 2022-11-20T09:03:20-08:00
label: HTML
order: 0
chapter: "Perkenalan"
---

Dalam pembuatan website, ada beberapa teknologi yang diperlukan.  
Salah satu dan yang paling mendasar adalah HTML.

{{<alert class="info">}}

<p> HTML itu singkatan dari <span class='italic'>hypertext markup language</span>.</p>
{{</alert>}}

HTML digunakan untuk membuat kerangka dasar website (situs web).  
Karena itu penting untuk mulai belajar HTML jika ingin membuat website atau menjadi seorang Web Developer (pengembang website).


## Apa sih kerangka dasar website ?

Sering disebutkan, kalau HTML berguna sebagai "kerangka dasar". Apa sih maksudnya?

Tulisan, tombol, link(tautan), gambar, dan video adalah contoh kerangka dasar yang bisa kita lihat di halaman website. Elemen-elemen tadi bisa kita tampilkan dengan "kode-kode" HTML.

{{< mediacontent src="https://ucarecdn.com/13da78d2-e165-4d7a-94b7-3f3f73dbc585/ScreenShot20221203at061152.png" title="blueprint monitor website" alt="blueprint monitor website">}}

## Kode sendiri itu apa?

Jika bicara dengan manusia kita menggunakan bahasa manusia. Saat bicara dengan komputer, kita menggunakan bahasa komputer yang disebut kode.

{{<alert class="info">}}
<p>Dengan bisa berbahasa komputer, kita bisa menyuruh komputer melakukan hal apa saja melalui program yang dibuat.</p>
{{</alert>}}

Ada banyak bahasa komputer dengan tujuannya masing-masing. Salah satunya, HTML, bahasa yang kita gunakan untuk membuat website.


## Contoh kode HTML

Berikut contoh kode HTML.
Klik dan ganti tulisan "Pak Jokowi" di bawah, jadi nama kamu

{{<rawhtml>}}

<div class='hljs language-xml text-center'>
&lt;p&gt; Mau belajar koding, <input id="nameInput" class='bg-transparent p-1 text-slate-200 w-[100px]' type='text' value='Pak Jokowi'> ?
&lt;/p&gt;
</div>
<p class='text-center'>Yang menghasilkan: </p>
{{</rawhtml>}}

{{<rawhtml>}}

<p class='text-center mb-10 -mt-5 text-sky-400'>Mau belajar koding, <span id="namePlaceHolder">Pak Jokowi</span> ?</p>
<script>
    const nameInput = document.getElementById('nameInput');
    const namePlaceHolder = document.getElementById('namePlaceHolder');
    nameInput.addEventListener("input", function() {
         namePlaceHolder.innerHTML = nameInput.value
    });
</script>
{{</rawhtml>}}

Ini contoh lain kode HTML yang lebih lengkap. Tenang.. Kamu tidak perlu mengerti apa-apa dari kode di bawah.

```html
<!DOCTYPE html>
<html>
<head>
<title>Judul Halaman</title>
</head>
<body>

<h1>Judul utama</h1>
<p>aku mah apa atuh, cuma paragraf.</p>

</body>
</html>
```

Semuanya akan kita pelajari secara perlahan.

## Referensi terkait 
- [Apa itu HTML](https://blog.sko.dev/apa-itu/html/)