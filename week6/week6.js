// ### FETCH()
// POST, GET, PUT, DELETE

// fetch('url', {

// })

const book = {
  name: 'learning JS 2.0',
  author: 'Max and Ebot',
  genreId: '5f9d724e0e816d1d65622546',
}

const getData = () => {
  fetch('http://127.0.0.1:3000/api/v1/books', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(res => {
      const info = res.map((d) => `<h3>${d.name}</h3> <br> <p>${d.author}</p>`)
      document.getElementById('home').innerHTML = info
    })
    .catch((err) => console.error(err))
}

getData()

// PROMISES

console.log('hello')