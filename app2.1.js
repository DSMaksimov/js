'use strict';

let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ 2 потому что, а = 1 приавляется 1 иза двухзнаков "+" затем записывается в саму "а"

//пример 2
d = b++;
alert(d); //ответ: 1 потому что не правильно расположены знаки увеличения (два "+"), то есть сначала "d" присваевается 1, а потом уже "b" увеличивается на 1 и записывается в "b"

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5 потому что сначала "а" = 2 (что мы записали выше в примере) увеличивается на 1 и становится 3 потом 2+3=5

//пример 4
d = 2 + b++;
alert(d); //ответ: 4 потому что ранее мы увеличили "b" на 1 и сейчас "b" = 2  соответсвенно 2 + 2 = 4

alert(a); //ответ 3 потому что ранее мы "а" равное 2 увеличили еще на единицу и получили 3
alert(b); //ответ 3 потому что так же как и "а" мы увеличили и "b" он стал равен 3