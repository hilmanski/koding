---
title: "Menampilkan detail di HTML"
slug: "menampilkan-detail-di-HTML"
snippet: "Menyembunyikan sebuah detail di atas rangkuman text, bisa menggunakan tag details-summary di HTML"
date: 2023-01-02T18:17:51+08:00
label: HTML
order: 130
---

Kita bisa membungkus sebuah text penjelasan di bawah sebuah judul atau text yang kita inginkan dengan pasangan tag `details` dan tag `summary`

## Cara menggunakan tag details dan summary

```html
<details>
    <summary>Catatan Kaki</summary>
     - dari W3School<br>
    - dari MDN Mozilla
</details>
```

Yang menampilkan:

{{<rawhtml>}}
<details>
    <summary>Catatan Kaki</summary>
    - dari W3School<br>
    - dari MDN Mozilla
</details>
{{</rawhtml>}}

{{<alert class="try">}}
Klik text tanda panah di atas.
{{</alert>}}


## Penjelasan tag details
- Untuk text yang ingin ditampilkan langsung, letakkan di antara tag `<summary`>. 
- Apapun yang kamu letakkan di dalam tag `details` tapi di luar `summary`, maka akan dianggap sebagai detail atau penjelasannya.