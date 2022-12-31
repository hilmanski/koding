---
title: "Menampilkan code di HTML"
slug: "menampilkan-code-di-HTML"
snippet: "Untuk menampilkan sintaksis kode pada sebuah halaman seperti di halaman tutorial, gunakan tag code atau pre"
date: 2022-12-05T18:58:11+08:00
label: HTML
order: 120
---
Sebuah baris kode bisa ditampilkan di HTML, dengan tag `<code>`

## Cara menggunakan tag code

```html
<p>Kode ini dibuat dengan <code>tag html</code> saja.</p>
```

Yang menampilkan:

{{<rawhtml>}}
<p>Kode ini dibuat dengan <code style="font-family: monospace;">tag html</code> saja.</p>
{{</rawhtml>}}

Perhatikan, secara otomatis tulisan code menggunakan jenis font yang berbeda.

## Menampilkan kode beberapa baris
Untuk menampilkan kode beberapa baris, kita perlu bantuan tag `<pre>`.

```
<pre>
    <code style="font-family: monospace;">
        Ini adalah HTML
        test (123)
    </code>
</pre>
```

{{<rawhtml>}}
<code>
Ini adalah HTML <br>
test (123)
</code>
{{</rawhtml>}}



