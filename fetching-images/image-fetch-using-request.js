const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
  request.head(url, (err, resp, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

const url = 'https://icon-library.com/images/small-icon-images/small-icon-images-11.jpg'
const path = './image.jpg'

download(url, path, () => {
  console.log('✅ Done!')
})
