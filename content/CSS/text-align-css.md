---
title: "Text align pada CSS"
slug: "text-align-pada-css"
snippet: "Meratakan text pada CSS menggunakan text-align, untuk membuat elemen rata kiri, tengah atau kanan"
date: 2023-02-18T10:40:05+08:00
label: CSS
order: 160
---

Kita bisa meratakan sebuah text ke kiri (default), tengah atau kanan dengan bantuan properti `text-align`

## Contoh penggunaan text-align

Berikut contoh meratakan text
```html
<p style="text-align:left;"> Saya rata kiri </p>
<p style="text-align:center;"> Saya rata tengah </p>
<p style="text-align:right;"> Saya rata kanan </p>
```

{{<rawhtml>}}
<p style="color:yellow; text-align:left;"> Saya rata kiri </p>
<p style="color:yellow; text-align:center;"> Saya rata tengah </p>
<p style="color:yellow; text-align:right;"> Saya rata kanan </p>
{{</rawhtml>}}


## Align Justify 

Bagaimana dengan justify? atau menyebarkan text dengan rata hingga baris akhir, yang biasanya digunakan pada text yang memenuhi lebar?

```html
<p style="text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset she
</p>
```

{{<rawhtml>}}
<p style="color: yellow; text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset she
</p>
{{</rawhtml>}}

Bandingkan dengan yang tidak menggunakan `text-align:justify`

{{<rawhtml>}}
<p style="color: yellow;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset she
</p>
{{</rawhtml>}}