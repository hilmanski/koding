---
title: "Atribut readonly di Input HTML"
slug: "atribut-readonly-di-input-HTML"
snippet: "Untuk mencegah pengguna situs mengubah nilai dari suatu input, gunakan atribut readonly pada input yang diinginkan."
date: 2022-12-31T09:10:28+08:00
label: HTML
order: 510
---

Atribut `readonly` adalah atribut yang digunakan untuk membuat sebuah input hanya bisa dilihat saja, namun tidak bisa diedit, diubah atau menyalin tulisannya.


## Cara menggunakan atribut readonly
Atribut readonly digunakan dengan cara menambahkan `readonly` pada atribut yang dimau. 

## Contoh atribut readonly pada input text

```html
<input type='text' value="tidak bisa kamu ubah" readonly>
```
Hasilnya

{{<rawhtml>}}
<input type='text' value="tidak bisa kamu ubah" readonly>
{{</rawhtml>}}

Kamu tidak bisa mengubah nilai yang ada di kotak input di atas.

## Contoh atribut readonly pada input password

```html
<input type='password' value="123" readonly>
```
Hasilnya

{{<rawhtml>}}
<input type='password' value="123" readonly>
{{</rawhtml>}}

{{<alert class="warning">}}
Tidak semua jenpis input bisa diberi readonly. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly#:~:text=The%20readonly%20attribute%20is%20supported,form%20control%20elements.">Sumber Info: MDN</a><br>
Hanya text, search, url, tel, email, password, date, month, week, time, datetime-local, dam number.
{{</alert>}}