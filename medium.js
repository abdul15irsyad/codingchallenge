let allRules = {
  required: (data) => {
    return data != undefined && data != ''
  },
  min: (data, minLength) => {
    return data.length >= minLength
  }
}

let validate = ({
  rules,
  data,
  messages = {}
}) => {
  // console.log(messages)
  let result = {}
  for (let idxRules in rules) {
    let attribute = idxRules
    result[attribute] = {}
    //console.log(rules[idxRules]) // { require: true, min: 3 }
    for (let idxRule in rules[idxRules]) {
      switch (idxRule) {
        case 'required':
          result[attribute].required = {}
          // console.log('required:',allRules.required(data[attribute])) // true
          result[attribute].required.status = allRules.required(data[attribute])
          if (result[attribute].required.status) {
            delete result[attribute].required
          } else {
            result[attribute].required.message = messages.hasOwnProperty(attribute) && messages[attribute].hasOwnProperty(idxRule) ? messages[attribute][idxRule] : `${attribute} is required`
          }
          break
        case 'min':
          result[attribute].min = {}
          // console.log('min',allRules.min(data[attribute],rules[idxRules][idxRule])) // false
          result[attribute].min.status = allRules.min(data[attribute], rules[idxRules][idxRule])
          if (result[attribute].min.status) {
            delete result[attribute].min
          } else {
            result[attribute].min.message = messages.hasOwnProperty(attribute) && messages[attribute].hasOwnProperty(idxRule) ? messages[attribute][idxRule] : `${attribute} min 3`
          }
          break
        default:
          return {
            status: false,
              message: `error validate, there is no '${idxRule}' validation`
          }
      }
    }
    if (Object.keys(result[attribute]).length == 0) {
      delete result[attribute]
    }
  }
  return Object.keys(result).length > 0 ? {
    errors: result
  } : true
}

// example rules
let rules = {
  username: {
    required: true,
    min: 3
  },
  password: {
    required: true
  }
}

// examples data
let data = {
  username: '',
  password: ''
}

// examples messages
let messages = {
  username: {
    required: 'pake username asu !',
    min: 'username min 3'
  }
}

console.log(validate({
  rules,
  data,
  messages
}).errors)