---
title: "Menggambar dengan Canvas di HTML"
slug: "menggambar-dengan-canvas-di-HTML"
snippet: "Canvas adalah elemen yang bisa digunakan untuk menggambar pada sebuah halaman situs HTML."
date: 2023-01-05T07:17:51+08:00
label: HTML
order: 905
---

Sama seperti kanvas di dunia nyata, HTML punya tag `canvas` yang bisa digunakan untuk menggambar apapun yang kamu mau disebuah halaman situs.

## Butuh Javascript

Jika kamu belum pernah mendengarnya, ada teknologi lain di pengembangan website yang bernama **Javascript**. Untuk menggambar dengan kanvas, diperlukan pengetahuan Javascript. 

Karena HTML hanya akan berfungsi sebagai tempat meletakkan elemen gambarnya. Untuk menggambarnya sendiri dilakukan dengan aksi-aksi di Javascript.

## Contoh membuat kanvas dengan HTML

Di html sediakan tag ini
```html
<canvas id="myCanvas" width="400" height="200"></canvas>
```

- Atribut id sebagai penanda/nama. [Baca: Apa itu id](/html/atribut-id-pada-html/)
- Lebar kanvas ditentukan dengan atribut width
- Tinggi kanvas ditentukan dengan atribut height

Sehingga menghasilkan kanvas putih seperti ini

{{<rawhtml>}}
<style>
  canvas{
    background: white;
  }
</style>
<canvas id="canvas1" width="400" height="200"></canvas>
{{</rawhtml>}}

## Menggambar di atas kanvas dengan Javascript
Kamu tidak harus mengerti bagian ini, kita akan membahas seputar `canvas` di bagian lain.

```html
<body>
  <!-- bagian HTML -->
 <canvas id="myCanvas" width="400" height="200"></canvas>

 <!-- bagian Javascript -->
  <script>
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    // menggambar garis
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();

    //menggambar tulisan
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 220, 150);
  </script>

</body>
```

{{<rawhtml>}}
  <!-- bagian HTML -->
 <canvas id="myCanvas" width="400" height="200"></canvas>

 <!-- bagian Javascript -->
  <script>
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // menggambar garis
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();

    //menggambar tulisan
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 220, 150);
  </script>

{{</rawhtml>}}
