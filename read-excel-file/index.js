const readXlsxFile = require("read-excel-file/node");

// displays all the sheets in this book
readXlsxFile("./Data.xlsx", { getSheets: true }).then((sheets) => {
  sheets.forEach((obj) => {
    console.log(obj.name);
  });
});

// reading data from a specific sheet
readXlsxFile("./Data.xlsx", { sheet: "Sheet2" }).then((rows) => {
  for (let i in rows) {
    for (let j in rows[i]) {
      console.dir(rows[i][j]);
    }
  }
});
