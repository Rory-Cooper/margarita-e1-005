const R2D2 = {
	pow: function(x,n) {
  		if (isNaN(x) || isNaN(n)) {
        console.log('Введите верное значение');
        } else if (n != 0) {
		function func(x, n) {
        if (n === 0) {
        return 1;
        }
        return x * func(x, n - 1);
        }
		const her = func(x, n);
		console.log(her);
		} else {
        console.log(`1`);
        }
        },
	max: function (a,b) {
		let c = Number(a)-b;
		if (isNaN(a)||isNaN(b)){
		console.log (`Введите верное значение`);
		} else if (c>0) {
		return a;
		}else if (c<0) {
		return b;
		} else {
		console.log (`Значение равны между собой`);
		}
		},
	min: function (a,b) {
		let c = Number(a)-b;
		if (isNaN(a)||isNaN(b)){
		console.log (`Введите верное значение`);
		} else if (c<0) {
		return a;
		} else if (c>0) {
		return b;
		} else {
		console.log (`Значение равны между собой`);
		}
		},
	add: function (a,b) {
		if (isNaN(a)||isNaN(b)){
		console.log (`Введите верное значение`);
		} else {
  		return Number(a)+Number(b); 
		}
		},
	diam: function (len) {
		if (len>0 ) {
		return (len/3.141592).toFixed(0);
		} else {
		console.log (`Введите верное значение`);
		}
		},
	disk: function (a,b,c) {
		if (isNaN(a)||isNaN(b)||isNaN(c)){
		console.log (`Введите верное значение`);
		} else {
		return b*b-4*c*a;
		}
		}};

Object.defineProperty(R2D2, "E", {
  value: 2.718281828459045,
  writable: false
});

Object.defineProperty(R2D2, "PI", {
  value: 3.14159265359,
  writable: false
});

R2D2.pow(2,2);
