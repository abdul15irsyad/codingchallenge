const fisherYates = require("./fisher-yates");

let list = [...Array(10).keys()].map(x => x + 1)
// let list = [
//   { nim: '47827', name: 'irsyad' },
//   { nim: '12974', name: 'abdul' },
//   { nim: '30042', name: 'hamid' },
//   { nim: '33454', name: 'darussalam' },
// ]

for (let i = 0; i < 3; i++) {
  let randomList = fisherYates(list)
  console.log({ randomList })
}