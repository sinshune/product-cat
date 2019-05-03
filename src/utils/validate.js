const partten = {
  password: /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!.@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/,
  phone: /^[1][3,4,5,7,8][0-9]{9}$/
}

export function checkUsername (rule, value, callback) {
  if (!value) {
    return callback(new Error('用户名不能为空'))
  } else {
    callback()
  }
}

export function checkPassword (rule, value, callback) {
  if (!value) {
    return callback(new Error('密码不能为空'))
  } else if (!partten.password.test(value)) {
    return callback(new Error('密码由6-16位字母、数字、特殊字符组成'))
  } else {
    callback()
  }
}

export function checkPhone (rule, value, callback) {
  if (!value) {
    return callback(new Error('手机号不能为空'))
  } else if (!partten.phone.test(value)) {
    return callback(new Error('请输入11位有效手机号码'))
  } else {
    callback()
  }
}
