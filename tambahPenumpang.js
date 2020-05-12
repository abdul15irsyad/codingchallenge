let penumpang = ['Tito', undefined, 'Dodi', undefined]

let tambahPenumpang = (namaPenumpang, penumpang) => {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang)
    return penumpang
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang
        break
      }
    }
    return penumpang
  }
}

console.log(tambahPenumpang('b', penumpang))