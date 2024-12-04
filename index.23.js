let A = +prompt("A ni kiritin");

let Y = (parseInt(A / 100 ))
let U = (parseInt((A / 10 ) %10))
let B = (parseInt(A % 10 ));
let J = ((U*100)+(B*10)+Y);

alert("Y =" + Y);
alert("U =" + U);
alert("B =" + B);
alert("J =" + J);