---
title: "Input Range di HTML"
slug: "input-range-slider-di-html"
snippet: "Memasukkan data dengan slider yang dapat digeser dengan menggunakan Input range di HTML"
date: 2022-12-27T11:03:46+08:00
label: HTML
order: 360
---

Di beberapa formulir, kita bisa menemukan slider yang biasanya terlihat lebih menarik dan memudahkan user memasukkan data karena hanya perlu menggeser mouse saja tanpa perlu memasukkan nilai tepatnya.

Di HTML, kita bisa menampilkan slider dengan input type `range`

```html
<input type="range" />
```

Yang menghasilkan
{{<rawhtml>}}
<input type="range" />
{{</rawhtml>}}

Silahkan geser bulatan slider di atas untuk memainkannya

Secara otomatis, jarak yang digunakan pada nilai slider ini adalah 0 - 100.


## Memberi nilai awal
Untuk memberi nilai maksimal, gunakan atribut `value` di inputnya.

```html
<input type="range" value="70"/>
```

Yang menghasilkan
{{<rawhtml>}}
<input id="range0" type="range" value="70"/>
{{</rawhtml>}}


## Menampilkan angka / nilai
Tidak cukup dengan HTML saja, kita memerlukan teknologi lain yaitu javascript untuk menampilkan nilai sebenarnya. Kita tidak akan belajar sekarang, tapi di demo nya akan diperlihatkan untuk membantu kamu menvisualisasikan nilainya


## Menentukan nilai maksimal slider
Untuk memberi nilai maksimal, gunakan atribut `max`

```html
<input type="range" max="50" />
```

Yang menghasilkan
{{<rawhtml>}}
<input id="range" type="range" max="50"/>
<span id="value"></span>

<script>
    const rangeDiv = document.getElementById('range')
    rangeDiv.addEventListener('input', function(){
        document.getElementById('value').innerHTML = rangeDiv.value
    })
</script>
{{</rawhtml>}}

Geser dan lihat nilai maksimalnya!


## Menentukan nilai minimal slider
Untuk memberi nilai minimal, gunakan atribut `min`

```html
<input type="range" min="50" />
```

Yang menghasilkan
{{<rawhtml>}}
<input id="range2" type="range" min="50"/>
<span id="value2"></span>

<script>
    const rangeDiv2 = document.getElementById('range2')
    rangeDiv2.addEventListener('input', function(){
        document.getElementById('value2').innerHTML = rangeDiv2.value
    })
</script>
{{</rawhtml>}}

Geser dan lihat nilai minimalnya!

## Menentukan jumlah step
Untuk menentukan jumlah step/langkah perpindahan, saat slider digeser, gunakan atribut `step`

```html
<input type="range" step="10" />
```

Yang menghasilkan
{{<rawhtml>}}
<input id="range3" type="range" step="10"/>
<span id="value3"></span>

<script>
    const rangeDiv3 = document.getElementById('range3')
    rangeDiv3.addEventListener('input', function(){
        document.getElementById('value3').innerHTML = rangeDiv3.value
    })
</script>
{{</rawhtml>}}

Geser dan lihat nilainya, sekarang akan pindah per 10 angka!

