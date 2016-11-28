// app/promis.js

const fs = require('fs')

function stats (file) {  
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, data) => {
      if (err) {
        return reject (err)
      }
      resolve(data)
    })
  })
}

Promise.all([  
  stats('./data/file1'),
  stats('./data/file2'),
  stats('./data/file3')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))
