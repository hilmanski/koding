---
title: "Karakter entitas HTML"
slug: "karakter-entitas-HTML"
snippet: "Karakter entitas adalah daftar karakter berupa nama dan nomor pada HTML yang bisa digunakan untuk menampikan text khusus"
date: 2023-01-05T06:17:51+08:00
label: HTML
order: 760
---

Ada dua cara untuk menampilkan karakter khusus pada HTML. Mereka adalah "nama entitas" (entity name) dan "nomor entitas" (entity number).

Keduanya menghasilkan hal yang sama, perbedannya:
- nama entitas lebih mudah diingat karena menggunakan nama bermakna
- nomor entitas penggunannya lebih luas (lebih aman)


## Karakter entitas yang sering digunakan di HTML
Berikut karakter yang sering digunakan
{{<rawhtml>}}
<style>
    .tablechars, .tablechars th, .tablechars td{
        border: 1px solid;
        padding: 2px;
        text-align: center;
    }
</style>
<table class="tablechars">
<tbody><tr>
<th style="width:15%">Karakter</th>
<th style="width:25%">Nomor Entitas</th>
<th style="width:25%">Nama Entitas</th>
<th style="width:35%">Keterangan</th>
</tr>
<tr>
<td>"</td>
<td>&amp;#34;</td>
<td>&amp;quot;</td>
<td>tanda kutip dua</td>
</tr>
<tr>
<td>'</td>
<td>&amp;#39;</td>
<td>&amp;apos;</td>
<td>tanda kutip satu&nbsp;</td>
</tr>
<tr>
<td>&amp;</td>
<td>&amp;#38;</td>
<td>&amp;amp;</td>
<td>dan</td>
</tr>
<tr>
<td>&lt;</td>
<td>&amp;#60;</td>
<td>&amp;lt;</td>
<td>kurang dari</td>
</tr>
<tr>
<td>&gt;</td>
<td>&amp;#62;</td>
<td>&amp;gt;</td>
<td>lebih dari</td>
</tr>
</tbody></table>
{{</rawhtml>}}

## Daftar lengkap karakter entitas HTML

{{<rawhtml>}}
<table class="tablechars">
<tbody><tr>
<th style="width:15%;">Karakter</th>
<th style="width:25%;">Nomor Entitas</th>
<th style="width:25%;">Nama Entitas</th>
<th style="width:35%;">Keterangan</th>
</tr>
<tr>
<td>Œ</td>
<td>&amp;#338;</td>
<td>&amp;OElig;</td>
<td>capital ligature OE</td>
</tr>
<tr>
<td>œ</td>
<td>&amp;#339;</td>
<td>&amp;oelig;</td>
<td>small ligature oe</td>
</tr>
<tr>
<td>Š</td>
<td>&amp;#352;</td>
<td>&amp;Scaron;</td>
<td>capital S with caron</td>
</tr>
<tr>
<td>š</td>
<td>&amp;#353;</td>
<td>&amp;scaron;</td>
<td>small S with caron</td>
</tr>
<tr>
<td>Ÿ</td>
<td>&amp;#376;</td>
<td>&amp;Yuml;</td>
<td>capital Y with diaeres</td>
</tr>
<tr>
<td>ƒ</td>
<td>&amp;#402;</td>
<td>&amp;fnof;</td>
<td>f with hook</td>
</tr>
<tr>
<td>ˆ</td>
<td>&amp;#710;</td>
<td>&amp;circ;</td>
<td>modifier letter circumflex accent</td>
</tr>
<tr>
<td>˜</td>
<td>&amp;#732;</td>
<td>&amp;tilde;</td>
<td>small tilde</td>
</tr>
<tr>
<td> </td>
<td>&amp;#8194;</td>
<td>&amp;ensp;</td>
<td>en space</td>
</tr>
<tr>
<td> </td>
<td>&amp;#8195;</td>
<td>&amp;emsp;</td>
<td>em space</td>
</tr>
<tr>
<td> </td>
<td>&amp;#8201;</td>
<td>&amp;thinsp;</td>
<td>thin space</td>
</tr>
<tr>
<td>‌</td>
<td>&amp;#8204;</td>
<td>&amp;zwnj;</td>
<td>zero width non-joiner</td>
</tr>
<tr>
<td>‍</td>
<td>&amp;#8205;</td>
<td>&amp;zwj;</td>
<td>zero width joiner</td>
</tr>
<tr>
<td>‎</td>
<td>&amp;#8206;</td>
<td>&amp;lrm;</td>
<td>left-to-right mark</td>
</tr>
<tr>
<td>‏</td>
<td>&amp;#8207;</td>
<td>&amp;rlm;</td>
<td>right-to-left mark</td>
</tr>
<tr>
<td>–</td>
<td>&amp;#8211;</td>
<td>&amp;ndash;</td>
<td>en dash</td>
</tr>
<tr>
<td>—</td>
<td>&amp;#8212;</td>
<td>&amp;mdash;</td>
<td>em dash</td>
</tr>
<tr>
<td>‘</td>
<td>&amp;#8216;</td>
<td>&amp;lsquo;</td>
<td>left single quotation mark</td>
</tr>
<tr>
<td>’</td>
<td>&amp;#8217;</td>
<td>&amp;rsquo;</td>
<td>right single quotation mark</td>
</tr>
<tr>
<td>‚</td>
<td>&amp;#8218;</td>
<td>&amp;sbquo;</td>
<td>single low-9 quotation mark</td>
</tr>
<tr>
<td>“</td>
<td>&amp;#8220;</td>
<td>&amp;ldquo;</td>
<td>left double quotation mark</td>
</tr>
<tr>
<td>”</td>
<td>&amp;#8221;</td>
<td>&amp;rdquo;</td>
<td>right double quotation mark</td>
</tr>
<tr>
<td>„</td>
<td>&amp;#8222;</td>
<td>&amp;bdquo;</td>
<td>double low-9 quotation mark</td>
</tr>
<tr>
<td>†</td>
<td>&amp;#8224;</td>
<td>&amp;dagger;</td>
<td>dagger</td>
</tr>
<tr>
<td>‡</td>
<td>&amp;#8225;</td>
<td>&amp;Dagger;</td>
<td>double dagger</td>
</tr>
<tr>
<td>•</td>
<td>&amp;#8226;</td>
<td>&amp;bull;</td>
<td>bullet</td>
</tr>
<tr>
<td>…</td>
<td>&amp;#8230;</td>
<td>&amp;hellip;</td>
<td>horizontal ellipsis</td>
</tr>
<tr>
<td>‰</td>
<td>&amp;#8240;</td>
<td>&amp;permil;</td>
<td>per mille&nbsp;</td>
</tr>
<tr>
<td>′</td>
<td>&amp;#8242;</td>
<td>&amp;prime;</td>
<td>minutes</td>
</tr>
<tr>
<td>″</td>
<td>&amp;#8243;</td>
<td>&amp;Prime;</td>
<td>seconds</td>
</tr>
<tr>
<td>‹</td>
<td>&amp;#8249;</td>
<td>&amp;lsaquo;</td>
<td>single left angle quotation</td>
</tr>
<tr>
<td>›</td>
<td>&amp;#8250;</td>
<td>&amp;rsaquo;</td>
<td>single right angle quotation</td>
</tr>
<tr>
<td>‾</td>
<td>&amp;#8254;</td>
<td>&amp;oline;</td>
<td>overline</td>
</tr>
<tr>
<td>€</td>
<td>&amp;#8364;</td>
<td>&amp;euro;</td>
<td>euro</td>
</tr>
<tr>
<td>™</td>
<td>&amp;#8482;</td>
<td>&amp;trade;</td>
<td>trademark</td>
</tr>
<tr>
<td>←</td>
<td>&amp;#8592;</td>
<td>&amp;larr;</td>
<td>left arrow</td>
</tr>
<tr>
<td>↑</td>
<td>&amp;#8593;</td>
<td>&amp;uarr;</td>
<td>up arrow</td>
</tr>
<tr>
<td>→</td>
<td>&amp;#8594;</td>
<td>&amp;rarr;</td>
<td>right arrow</td>
</tr>
<tr>
<td>↓</td>
<td>&amp;#8595;</td>
<td>&amp;darr;</td>
<td>down arrow</td>
</tr>
<tr>
<td>↔</td>
<td>&amp;#8596;</td>
<td>&amp;harr;</td>
<td>left right arrow</td>
</tr>
<tr>
<td>↵</td>
<td>&amp;#8629;</td>
<td>&amp;crarr;</td>
<td>carriage return arrow</td>
</tr>
<tr>
<td>⌈</td>
<td>&amp;#8968;</td>
<td>&amp;lceil;</td>
<td>left ceiling</td>
</tr>
<tr>
<td>⌉</td>
<td>&amp;#8969;</td>
<td>&amp;rceil;</td>
<td>right ceiling</td>
</tr>
<tr>
<td>⌊</td>
<td>&amp;#8970;</td>
<td>&amp;lfloor;</td>
<td>left floor</td>
</tr>
<tr>
<td>⌋</td>
<td>&amp;#8971;</td>
<td>&amp;rfloor;</td>
<td>right floor</td>
</tr>
<tr>
<td>◊</td>
<td>&amp;#9674;</td>
<td>&amp;loz;</td>
<td>lozenge</td>
</tr>
<tr>
<td>♠</td>
<td>&amp;#9824;</td>
<td>&amp;spades;</td>
<td>spade</td>
</tr>
<tr>
<td>♣</td>
<td>&amp;#9827;</td>
<td>&amp;clubs;</td>
<td>club</td>
</tr>
<tr>
<td>♥</td>
<td>&amp;#9829;</td>
<td>&amp;hearts;</td>
<td>heart</td>
</tr>
<tr>
<td>♦</td>
<td>&amp;#9830;</td>
<td>&amp;diams;</td>
<td>diamond</td>
</tr>
</tbody></table>
{{</rawhtml>}}

## Daftar entitas simbol matematika pada HTML

{{<rawhtml>}}
<table class="tablechars">
<tbody><tr>
<th style="width:15%;">Simbol</th>
<th style="width:25%;">Nomor entitas</th>
<th style="width:25%;">Nama entitas</th>
<th style="width:35%;">Keterangan</th>
</tr>
<tr>
<td>∀</td>
<td>&amp;#8704;</td>
<td>&amp;forall;</td>
<td>for all</td>
</tr>
<tr>
<td>∂</td>
<td>&amp;#8706;</td>
<td>&amp;part;</td>
<td>part</td>
</tr>
<tr>
<td>∃</td>
<td>&amp;#8707;</td>
<td>&amp;exist;</td>
<td>exists</td>
</tr>
<tr>
<td>∅</td>
<td>&amp;#8709;</td>
<td>&amp;empty;</td>
<td>empty</td>
</tr>
<tr>
<td>∇</td>
<td>&amp;#8711;</td>
<td>&amp;nabla;</td>
<td>nabla</td>
</tr>
<tr>
<td>∈</td>
<td>&amp;#8712;</td>
<td>&amp;isin;</td>
<td>isin</td>
</tr>
<tr>
<td>∉</td>
<td>&amp;#8713;</td>
<td>&amp;notin;</td>
<td>notin</td>
</tr>
<tr>
<td>∋</td>
<td>&amp;#8715;</td>
<td>&amp;ni;</td>
<td>ni</td>
</tr>
<tr>
<td>∏</td>
<td>&amp;#8719;</td>
<td>&amp;prod;</td>
<td>prod</td>
</tr>
<tr>
<td>∑</td>
<td>&amp;#8721;</td>
<td>&amp;sum;</td>
<td>sum</td>
</tr>
<tr>
<td>−</td>
<td>&amp;#8722;</td>
<td>&amp;minus;</td>
<td>minus</td>
</tr>
<tr>
<td>∗</td>
<td>&amp;#8727;</td>
<td>&amp;lowast;</td>
<td>lowast</td>
</tr>
<tr>
<td>√</td>
<td>&amp;#8730;</td>
<td>&amp;radic;</td>
<td>square root</td>
</tr>
<tr>
<td>∝</td>
<td>&amp;#8733;</td>
<td>&amp;prop;</td>
<td>proportional to</td>
</tr>
<tr>
<td>∞</td>
<td>&amp;#8734;</td>
<td>&amp;infin;</td>
<td>infinity</td>
</tr>
<tr>
<td>∠</td>
<td>&amp;#8736;</td>
<td>&amp;ang;</td>
<td>angle</td>
</tr>
<tr>
<td>∧</td>
<td>&amp;#8743;</td>
<td>&amp;and;</td>
<td>and</td>
</tr>
<tr>
<td>∨</td>
<td>&amp;#8744;</td>
<td>&amp;or;</td>
<td>or</td>
</tr>
<tr>
<td>∩</td>
<td>&amp;#8745;</td>
<td>&amp;cap;</td>
<td>cap</td>
</tr>
<tr>
<td>∪</td>
<td>&amp;#8746;</td>
<td>&amp;cup;</td>
<td>cup</td>
</tr>
<tr>
<td>∫</td>
<td>&amp;#8747;</td>
<td>&amp;int;</td>
<td>integral</td>
</tr>
<tr>
<td>∴</td>
<td>&amp;#8756;</td>
<td>&amp;there4;</td>
<td>therefore</td>
</tr>
<tr>
<td>∼</td>
<td>&amp;#8764;</td>
<td>&amp;sim;</td>
<td>similar to</td>
</tr>
<tr>
<td>≅</td>
<td>&amp;#8773;</td>
<td>&amp;cong;</td>
<td>congruent to</td>
</tr>
<tr>
<td>≈</td>
<td>&amp;#8776;</td>
<td>&amp;asymp;</td>
<td>almost equal</td>
</tr>
<tr>
<td>≠</td>
<td>&amp;#8800;</td>
<td>&amp;ne;</td>
<td>not equal</td>
</tr>
<tr>
<td>≡</td>
<td>&amp;#8801;</td>
<td>&amp;equiv;</td>
<td>equivalent</td>
</tr>
<tr>
<td>≤</td>
<td>&amp;#8804;</td>
<td>&amp;le;</td>
<td>less or equal</td>
</tr>
<tr>
<td>≥</td>
<td>&amp;#8805;</td>
<td>&amp;ge;</td>
<td>greater or equal</td>
</tr>
<tr>
<td>⊂</td>
<td>&amp;#8834;</td>
<td>&amp;sub;</td>
<td>subset of</td>
</tr>
<tr>
<td>⊃</td>
<td>&amp;#8835;</td>
<td>&amp;sup;</td>
<td>superset of</td>
</tr>
<tr>
<td>⊄</td>
<td>&amp;#8836;</td>
<td>&amp;nsub;</td>
<td>not subset of</td>
</tr>
<tr>
<td>⊆</td>
<td>&amp;#8838;</td>
<td>&amp;sube;</td>
<td>subset or equal</td>
</tr>
<tr>
<td>⊇</td>
<td>&amp;#8839;</td>
<td>&amp;supe;</td>
<td>superset or equal</td>
</tr>
<tr>
<td>⊕</td>
<td>&amp;#8853;</td>
<td>&amp;oplus;</td>
<td>circled plus</td>
</tr>
<tr>
<td>⊗</td>
<td>&amp;#8855;</td>
<td>&amp;otimes;</td>
<td>circled times</td>
</tr>
<tr>
<td>⊥</td>
<td>&amp;#8869;</td>
<td>&amp;perp;</td>
<td>perpendicular</td>
</tr>
<tr>
<td>⋅</td>
<td>&amp;#8901;</td>
<td>&amp;sdot;</td>
<td>dot operator</td>
</tr>
</tbody></table>
{{</rawhtml>}}

## Daftar karakter bahasa asing

{{<rawhtml>}}
<table class="tablechars">
<thead><tr>
<th>Karakter</th>
<th>Keterangan</th>
<th>Nama entitas</th>
<th>Nomor entitas</th></tr></thead><tbody><tr><td>Ÿ</td><td>Y Umlaut</td><td>	&amp;Yuml;</td><td>	&amp;#195;</td></tr><tr><td>ÿ</td><td>y Umlaut</td><td>	&amp;yuml;</td><td>	&amp;#255;<br></td></tr><tr><td>Ü</td><td>U Umlaut</td><td>&amp;Uuml;</td><td>	&amp;#220;</td></tr><tr><td>ü</td><td>u Umlaut</td><td>	&amp;uuml;</td><td>	&amp;#252;</td></tr><tr><td>Ö</td><td>O Umlaut</td><td>	&amp;Ouml;</td><td>	&amp;#214;</td></tr><tr><td>ö</td><td>	o Umlaut</td><td>&amp;ouml;</td><td>&amp;#246;</td></tr><tr><td>Ï	</td><td>I Umlaut</td><td>	&amp;Iuml;</td><td>&amp;#207;</td></tr><tr><td>ï	</td><td>	i Umlaut</td><td>	&amp;iuml;</td><td>	&amp;#239;</td></tr><tr><td>Ë	</td><td>	E Umlaut</td><td>&amp;Euml;</td><td>	&amp;#203;</td></tr><tr><td>ë</td><td>	e Umlaut</td><td>	&amp;euml;</td><td>	&amp;#235;</td></tr><tr><td>Ä</td><td>A Umlaut</td><td>	&amp;Auml;</td><td>	&amp;#196;</td></tr><tr><td>ä</td><td>a Umlaut</td><td>	&amp;auml;</td><td>	&amp;#228;</td></tr>
</tbody>

<tr><td>À	</td><td>A Accent grave	</td><td>	&amp;Agrave;</td><td>&amp;#192;</td></tr><tr><td>Á	</td><td>A Accent acute</td><td>	&amp;Aacute;</td><td>&amp;#193;</td></tr><tr><td>Â</td><td>A Circumflex</td><td>&amp;Acirc;</td><td>	&amp;#194;</td></tr><tr><td>Ã</td><td>A Tilde</td><td>&amp;Atilde;</td><td>&amp;#195;</td></tr><tr><td>Å</td><td>	A Ring</td><td>&amp;Aring;</td><td>	&amp;#197;</td></tr><tr><td>Æ</td><td>	AE-Ligatur</td><td>	&amp;AElig;</td><td>&amp;#198;</td></tr><tr><td>Ç</td><td>C Häkchen</td><td>	&amp;Ccedil;</td><td>	&amp;#199;</td></tr><tr><td>È</td><td>	E Accent grave</td><td>	&amp;Egrave;</td><td>	&amp;#200;</td></tr><tr><td>É	</td><td>	E Accent acute</td><td>&amp;Eacute;</td><td>	&amp;#201;</td></tr><tr><td>Ê</td><td>	E Circumflex</td><td>&amp;Ecirc;</td><td>	&amp;#202;</td></tr><tr><td>Ì	</td><td>		I Accent grave</td><td>	&amp;Igrave;</td><td>	&amp;#203;</td></tr><tr><td>Í</td><td>I Accent acute</td><td>&amp;Iacute;</td><td>	&amp;#204;</td></tr><tr><td>Î</td><td>	I Circumflex</td><td>	&amp;Icirc;</td><td>		&amp;#205;</td></tr><tr><td>Ð</td><td>Eth (isländisch)</td><td>		&amp;ETH;</td><td>	&amp;#208;</td></tr><tr><td>Ñ</td><td>	N Tilde</td><td>&amp;Ntilde;</td><td>	&amp;#209;</td></tr><tr><td>Ò	</td><td>	O Accent grave</td><td>	&amp;Ograve;</td><td>	&amp;#210;</td></tr><tr><td>Ó</td><td>	O Accent acute</td><td>	&amp;Oacute;</td><td>	&amp;#211;</td></tr><tr><td>Ô</td><td>	O Circumflex</td><td>	&amp;Ocirc;</td><td>	&amp;#212;</td></tr><tr><td>Õ	</td><td> O Tilde</td><td>	&amp;Otilde;</td><td>	&amp;#213;</td></tr><tr><td>Ø	</td><td>O Schrägstrich</td><td>	&amp;Oslash;</td><td>	&amp;#216;</td></tr><tr><td>Œ</td><td>OE-Ligatur</td><td>	&amp;OElig;</td><td>	&amp;#140;</td></tr><tr><td>Ù</td><td>	U Accent grave</td><td>&amp;Ugrave;</td><td>	&amp;#217;</td></tr><tr><td>Ú</td><td>	U Accent acute</td><td>	&amp;Uacute;</td><td>	&amp;#218;</td></tr><tr><td>Û</td><td>U Circumflex</td><td>&amp;Ucirc;</td><td>	&amp;#219;</td></tr><tr><td>Ý	</td><td>	Y Accent acute</td><td>&amp;Yacute;</td><td>	&amp;#221;</td></tr><tr><td>Þ	</td><td>	THORN (isländisch)</td><td>&amp;THORN;</td><td>	&amp;#222;</td></tr><tr><td>à	</td><td>a Accent grave</td><td>	&amp;agrave;</td><td>	&amp;#224;</td></tr><tr><td>á</td><td>	a Accent acute</td><td>	&amp;aacute;</td><td>	&amp;#225;</td></tr><tr><td>â</td><td>	a Circumflex</td><td>	&amp;acirc;</td><td>	&amp;#226;</td></tr><tr><td>ã</td><td>a Tilde</td><td>	&amp;atilde;</td><td>	&amp;#227;</td></tr><tr><td>å	</td><td>	a Ring</td><td>&amp;aring;</td><td>	&amp;#229;</td></tr><tr><td>æ	</td><td>	ae-Ligatur</td><td>&amp;aelig;</td><td>	&amp;#230;</td></tr><tr><td>ç	</td><td>c Häkchen</td><td>	&amp;ccedil;</td><td>	&amp;#231;</td></tr><tr><td>è</td><td>	e Accent grave</td><td>&amp;egrave;</td><td>	&amp;#232;</td></tr><tr><td>é	</td><td>e Accent acute</td><td>	&amp;eacute;</td><td>	&amp;#233;</td></tr><tr><td>ê</td><td>	e Circumflex</td><td>&amp;ecirc;</td><td>	&amp;#234;</td></tr><tr><td>ì</td><td> i Accent grave</td><td>	&amp;igrave;</td><td>	&amp;#236;</td></tr><tr><td>í</td><td>	i Accent acute</td><td>	&amp;iacute;</td><td>	&amp;#237;</td></tr><tr><td>ð</td><td>	eth (isländisch)</td><td>&amp;eth;</td><td>&amp;#240;</td></tr><tr><td>ñ	</td><td>	n Tilde</td><td>	&amp;ntilde;</td><td>&amp;#241;</td></tr><tr><td>ò</td><td>	o Accent grave</td><td>	&amp;ograve;</td><td>&amp;#242;</td></tr><tr><td>ó</td><td>	o Accent acute</td><td>	&amp;oacute;</td><td>&amp;#243;</td></tr><tr><td>ô	</td><td>o Circumflex</td><td>&amp;ocirc;</td><td>&amp;#244;</td></tr><tr><td>õ</td><td>	o Tilde</td><td>&amp;otilde;</td><td>&amp;#245;</td></tr><tr><td>ø	</td><td>	o Schrägstrich</td><td>&amp;oslash;</td><td>&amp;#248</td></tr><tr><td>œ</td><td>oe-Ligatur</td><td>&amp;oelig;</td><td>&amp;#156;</td></tr><tr><td>ù</td><td>u Accent grave</td><td>	&amp;ugrave;</td><td>&amp;#249;</td></tr><tr><td>ú	</td><td>	u Accent acute</td><td>	&amp;uacute;</td><td>&amp;#250;</td></tr><tr><td>û</td><td>	u Circumflex</td><td>	&amp;ucirc;</td><td>&amp;#251;</td></tr><tr><td>ý</td><td>y Accent acute</td><td>&amp;yacute;</td><td>&amp;#253;</td></tr><tr><td>þ</td><td>thorn (isländisch)</td><td>	&amp;thorn;</td><td>	&amp;#254;</td></tr><tr><td>Š</td><td>	S Hacek</td><td>&amp;Scaron;</td><td>	&amp;#138;</td></tr><tr><td>š</td><td>	s Hacek</td><td>	&amp;scaron;</td><td>	&amp;#154;</td></tr><tr><td>Č</td><td>	C Hacek</td><td>	&amp;Ccaron;	</td><td>	&amp;#268;</td></tr><tr><td>č</td><td>	c Hacek</td><td>	&amp;ccaron;	</td><td>	&amp;#269;</td></tr>

</table>
{{</rawhtml>}}

Sumber infomasi karakter:
- [htmlam special chars reference](https://www.html.am/reference/html-special-characters.cfm)
- [adfreak blog html umlau and special chars](https://www.adfreak.de/en/blog/html-umlauts-and-special-characters-entities-and-unicodes-list/)