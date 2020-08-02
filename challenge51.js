let challenge51 = (str) => {
  if (str.toLowerCase() !== str) return "Upper case not allowed";
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (res.indexOf(str[i]) != -1) res = res.filter((x) => x != str[i]);
    res.push(str[i]);
  }
  return res.join("");
};

console.log(challenge51("nextgencoder"));
