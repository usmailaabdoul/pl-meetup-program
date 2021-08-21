// #### DRY - DON'T REPEAT YOURSELF

// ### STRINGS ###
// - `slice(*start*, *end*)`
// - `substring(*start*, *end*)`
// - `substr(*start*, *length*)`
// - `slice()`
// - `toUpperCase(), toLowerCase()`

// let str = 'hello,jsjsjjs,world';
// let newstr = str.slice(2, 5);
// let l = str.split(',');
// console.log({str, newstr, l});

// ### Objects ###

// let obj = {
//   name: 'abdoul',
//   age: 22,
//   passed: [
//     true
//   ],
//   func: () => {}
// }

// console.log(obj.age.toString())
// console.log(obj['name'])
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// delete obj.func

// console.log(obj)
// let str = JSON.stringify(obj)
// console.log({str, str2: JSON.parse(str)})

// ### FUNCTIONS ###

// function hello(name) {
//   console.log('hello !', name)
// }

// hello('usmaila');
// const a = 'someht';
// // const hello20 = (name, age) => console.log('hello 2.0 ' + name + ' and he is ' + age);
// const hello20 = (name, age, mood) => {
//   let b = 'abc'
//   console.log(`hello ${name} and he is ${age} yrs, and he is ${mood.length === 5 ? 'happy' : 'sad'}`)
// }

// hello20('Abdoul', 22, 'is');

// const humans = (obj, title) => {
//   const {name, age} = obj;
//   console.log(`my name is ${name} and i am ${age} old`)
// }

// let obj = {
//   name: 'abdoul',
//   age: 22,
//   passed: [
//     true
//   ],
//   func: () => { }
// }

// humans(obj, 'title')

// ### CONDITIONS

// if (abdoul && max) {

// } else if (abdoul || ebot) {

// }

// switch(age) {
//   case 10:
//     console.log('you are too young');
//     break
//   case 22:
//     console.log('hhmm old')
//     return;
//   default:
//     console.log('no age yet');
// }