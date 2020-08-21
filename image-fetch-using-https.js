const https = require("https");
const fs = require("fs");
const utf8 = require("utf8");

const req = https.request(
  "https://icon-library.com/images/small-icon-images/small-icon-images-11.jpg",
  (resp) => {
    let body = "";

    resp.setEncoding("base64");

    resp.on("data", (data) => {
      body += data;
    });

    const path = Math.random().toString().split('.').pop();

    resp.on("end", () => {
      let finalImage = "data:image/png;base64," + utf8.decode(body);

      fs.writeFile(path, finalImage, "binary", function (err) {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    });
  }
);

req.on("error", (e) => {
  console.error(e);
});
req.end();

// open js bin and use <img src="finalImage">

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// using request module

// const fs = require('fs')
// const request = require('request')
//
// const download = (url, path, callback) => {
//   request.head(url, (err, resp, body) => {
//     request(url)
//       .pipe(fs.createWriteStream(path))
//       .on('close', callback)
//   })
// }
//
// const url = 'https://icon-library.com/images/small-icon-images/small-icon-images-11.jpg'
// const path = './image.jpg'
//
// download(url, path, () => {
//   console.log('✅ Done!')
// })
