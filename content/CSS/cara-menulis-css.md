---
title: "Cara menulis CSS"
slug: "cara-menulis-css"
snippet: "CSS bisa ditulis di tiga tempat. Bersama file HTML, sebagai file terpisah CSS sendiri atau inline alias langsung pada elemen HTMLnya"
date: 2023-01-11T00:13:20-08:00
label: CSS
order: 5
---

CSS bisa ditulis di tiga tempat berbeda. 
- Pada file terpisah dengan ekstensi `.css`
- Bersamaan di file HTML tersebut dengan tag `<style>`
- Sebagai atribut di setiap elemen HTML

## 1. Menulis CSS di file terpisah

CSS bisa diletakkan pada file terpisah dari HTML. Kita memberi nama filenya dengan ekstensi `.css`.

Cara menyambungkan file CSS dengan HTML:

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="namafile.css">
</head>
<body>

<h1>Koding Yuk!</h1>

</body>
</html>
```

sumber lokasi file CSS diletakkan pada atribut `href` di tag `link`.
```
<link rel="stylesheet" href="namafile.css">
```
Yang umumnya diletakkan di antara [tag head pada HTML](/html/tag-head-pada-html/).

Sumber gambarnya bisa dari file lokal atau URL penuh.

{{<alert class="warning">}}
Perhatikan <a href="/html/lokasi-relatif-media-html/">cara mengambil lokasi relatif dari suatu file di sini</a>, tergantung lokasinya.
{{</alert>}}


## 2. Menulis CSS di file yang sama

Menulis CSS juga boleh di file HTML yang sama. Di mana kita meletakkannya di antara tag `<style>`.

{{<codepen src="poZPaZj">}}

## 3. Menulis CSS pada baris elemen HTML
CSS juga bisa dimuat pada elemen HTML yang ingin dihias dengan atribut `style`. Disebut juga sebagai `inline-tyle`

{{<codepen src="oNMWEME">}}

Contoh kode inline CSS
```html
<p style="color:blue; text-align:center;">Koding Koding Koding</p>
```

## Cara mana yang harus dipilih?
Tidak perlu bingung, yang mana pun valid. Ini hanya saran, agar file kamu lebih rapi lebih baik memisahkannya (cara pertama), agar kamu bisa membedakan saat bekerja dengan HTML atau CSS. Ini juga membuatnya lebih ringan dipandang mata.