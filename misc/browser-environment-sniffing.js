// in browser "inBrowser" will be will be true
// in node "inBrowser" will be will be false

const inBrowser = typeof window !== "undefined";
console.log(inBrowser);
