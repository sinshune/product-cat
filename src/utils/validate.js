import { isEmpty } from './utils'

const partten = {
  password: /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!.@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/,
  phone: /^[1][3,4,5,7,8][0-9]{9}$/
}

export function checkUsername (rule, value, callback) {
  if (isEmpty(value)) {
    return callback(new Error('用户名不能为空'))
  } else {
    callback()
  }
}

export function checkPassword (rule, value, callback) {
  if (isEmpty(value)) {
    return callback(new Error('密码不能为空'))
  } else if (!partten.password.test(value)) {
    return callback(new Error('密码由6-16位字母、数字、特殊字符组成'))
  } else {
    callback()
  }
}

export function checkPhone (rule, value, callback) {
  if (isEmpty(value)) {
    return callback(new Error('手机号不能为空'))
  } else if (!partten.phone.test(value)) {
    return callback(new Error('请输入11位有效手机号码'))
  } else {
    callback()
  }
}

export function checkArticleTitle (rule, value, callback) {
  if (isEmpty(value)) {
    return callback(new Error('标题不能为空'))
  } else if (value.length > 50) {
    return callback(new Error('标题汉字在50个字以内，请重新输入'))
  } else {
    callback()
  }
}

export function checkArticleNot (rule, value, callback) {
  if (isEmpty(value)) {
    return callback(new Error('请输入正文内容'))
  } else {
    return callback()
  }
}
