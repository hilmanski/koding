---
title: "Menggunakan Iframe di HTML"
slug: "menggunakan-iframe-di-HTML"
snippet: "Menampilkan halaman dari situs lain di salah satu halaman yang kita punya bisa dengan tag Iframe"
date: 2022-12-17T16:30:53+08:00
label: HTML
order: 240
---

Kamu bisa menampilkan halaman dari situs lain ke halaman milikmu dengan menggunakan tag `iframe`. Biasa juga digunakan istilah "embed" halaman lain. 

## Contoh tag iframe
Contoh hasil dari iframe halaman lain
{{<rawhtml>}}
<iframe src="https://tailwindcss.com/" 
        title="situs tailwindCSS" 
        width="100%"
        height="300"></iframe>
{{</rawhtml>}}

Yang dibuat dengan kode berikut
```
<iframe src="https://tailwindcss.com" 
        title="situs tailwindCSS"
        width="100%" height="300">
</iframe>
```

## Penjelasan tag iframe
- Tag iframe dibuat dengan tag pembuka dan penutup
- Atribut `src` berisi sumber situs yang ingin diembed
- Atribut `title` merupakan judul dari iframe ini
- Atribut `width` untuk mengatur lebar
- Atribut `height` untuk mengatur tinggi

## Mengatur ukuran iframe
Atribut `width` dan `height` bisa dimainkan untuk mengubah ukurannya.   
Contoh lebar iframe 600px dan tinggi iframe 250px bisa dibuat dengan kode ini.

```
<iframe src="https://tailwindcss.com" 
        title="situs tailwindCSS"
        width="600" height="250">
</iframe>
```

{{<alert class="info">}}
<p> Kamu bisa punya lebih dari 1 iframe di satu halaman </p>
{{</alert>}}