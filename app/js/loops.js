// 1
let i = 10;

while (i >= 0) {
	if (i % 2 === 0) {
  	console.log( i );
  }
	--i;
}

//2
isAdmin = true ? alert('Привет, Admin!'): alert('Ты точно не Admin');

//4
const age = +prompt('Сколько тебе лет?', '12');

switch (age) {
  case 12:
    alert('Слишком мало :(');
    break;
  case 16:
    alert('Почти достаточно :[');
    break;
  case 18:
    alert('Вот сейчас в самый раз! :)');
    break;
  default:
    alert('Возраст не определен %)');
}


