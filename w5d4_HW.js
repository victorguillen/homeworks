window.setTimeout(function () {
  alert('hammer time!');
}, 5000);



function hammerTime (time) {
  window.setTimeout(function () {
    alert(`${time} is hammer time!`);
  });
}





const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits () {
  reader.question('Would you like some tea?', function (res) {
    console.log(`You replied ${res}.`);
    reader.question('Would you like some biscuits?', function (res2) {
      console.log(`You replied ${res2}.`);
      const first = (res === 'yes') ? 'do' : 'don\'t';
      const second = (res === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${first} want tea and you ${second} want biscuits.`);
      reader.close();
    });
  });
}



function Cat () {
  this.name = 'Kuro';
  this.age = 2;
}

function Dog () {
  this.name = 'Shiro';
  this.age = 2;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};

const Kuro = new Cat ();
const Shiro = new Dog ();



Shiro.chase(Kuro);

Shiro.chase.call(Kuro, Shiro);
Shiro.chase.apply(Kuro, [Shiro]);
