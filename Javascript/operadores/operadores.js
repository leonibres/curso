let a = 3, b = 2;
let z = a + b;
console.log( "Resultado de la suma: " + z );

z = a-b;
console.log( "Resultado de la resta: " + z );

z= a * b;
console.log( "Resultado de la multiplicacion es: " + z );

z = a / b;
console.log( "Resultado de la division es: " + z );

z = a % b;
console.log( "Resultado de operacion modulo (residuo):" + z );

z = a ** b;
console.log( "Resultado de operador exponente:" + z );

// Incremento
//pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log( a );
console.log( z );


//post-incremento (el operador ++ despues de la variable)
z = b++;
console.log( b );
console.log( z );

//decremento
//pre-decremento
z = --a;
console.log(a);
console.log( z );

//post-decremento
z = b--;
console.log( b );
console.log( z );