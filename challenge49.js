let challenge49 = (str1, str2) => {
  str1 = str1.toLowerCase(), str2 = str2.toLowerCase();
  let result = 0, minLength = str1.length <= str2.length ? str1.length : str2.length;
  for (let i = 0; i < minLength; i++) if (str1[i] == str2[i]) result++;
  return result;
};

console.log(challenge49("coding", "running"));