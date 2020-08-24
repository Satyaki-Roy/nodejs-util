const axios = require("axios");
const utf8 = require("utf8");

axios({
  url:
    "https://icon-library.com/images/small-icon-images/small-icon-images-11.jpg",
  responseEncoding: 'base64',
})
  .then(function (response) {
    const body = response.data;
    let finalImage = "data:image/png;base64," + utf8.decode(body);
    console.log(finalImage);
  })
  .catch((e) => {
    console.log(e);
  });
