const add = (a,b) => {
  console.log (`1)`,Number(a)+Number(b)); 
}
add(20, 50);
add(100,"2");



const length = (r) => {
  console.log (`2)`,2*Math.PI*r);
}
length(10);



const discr = (a, b, c) => {
  console.log (`3)`,b*b-4*c*a);
}
discr(2,5,-7);



const square = (num) => {
  console.log (`4)`,num*num);
}
square(2);
square(10);


const sumTo=(n)=> {
  if (n!=1) {
    return n+sumTo(n-1);
  } else {
    return 1;
}
}

console.log(`5)`, sumTo(10) );
console.log(`5)`, sumTo(100) );


const fib = (num) => {
  if (num < 2) {
    return num;
  } else {
    return (fib(num - 1) + fib(num - 2));
  }
}
console.log(`6)`, fib(6) );
console.log(`6)`, fib(11) );


const pow=(x,n)=> {
  if (n!=0) {
    return x*pow(x,n-1);
  } else {
    return 1;
}
}

console.log(`7)`, pow(2,4) );
console.log(`7)`, pow(10,3) );


const fact=(num)=> {
  if (num!=1) {
    return num*fact(num-1);
  } else {
    return 1;
}
}

console.log(`8)`, fact(5) );
console.log(`8)`, fact(10) );

