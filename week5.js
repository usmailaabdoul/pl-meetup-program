// #### Loops
// for loops
// while loops
// do while loops

const arr = [
  {id: 1, name: 'abdoul'},
  {id: 2, name: 'usmaila'},
  {id: 3, name: 'ebot'},
  {id: 4, name: 'max'},
]

// for (let i = 0; i <= arr.length -1; i++) {
//   console.log(arr[i])
// }
// let i = arr.length - 1
// while (i >= 0) {
//   console.log(arr[i]);
//   i--;
// }

// let i = 0
// do {
//   console.log(arr[i]);
//   i++
// } while (i <= arr.length-1);

// ### Promise

const function1 = () => {
  return new Promise((resolve, reject) => {
    let condition = true
    if (!condition) {
      let data = {success: 'this was successful'}
      resolve(data);
    } else {
      reject({error: 'this has failed'});
    }
  })
}

function1()
  .then((values) => {
    console.log(values)
  })
  .catch((error) => {
    console.log(error)
  }).finally(() => console.log('has completed'))

// console.log(data)