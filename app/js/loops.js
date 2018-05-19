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

//3 C помощью функции получилось бы вкуснее)
var login = prompt('Введите логин');

if (login === 'Admin') {
  var password = prompt('Введите пароль');
  if (password === 'MeGaHaTsKeR_666'){
    alert (`Добро пожаловать, ${login}!`);
  } else if (password === null) {
    alert (`Введите пароль.`);
  } else {
    alert(`Пароль введен не верно.`);
}


} else if (login === 'User') {
  var password = prompt('Введите пароль');
  if (password === 'qwerty1234'){
    alert (`Добро пожаловать, ${login}!`);
  } else if (password === null) {
    alert (`Введите пароль.`);
  } else {
    alert(`Пароль введен не верно.`);
} 

}else {
    alert('Такого логина нет в системе.');
}


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


