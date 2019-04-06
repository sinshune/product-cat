export default function computePriceAndNumber (type, details, selectedData) {
  return type
}

export function Cmn (m, n) {
  return factorial(m, n) / factorial(n, n)//就是Cmn(上面是n，下面是m) = Amn(上面是n，下面是m)/Ann(上下都是n)
}

//自定义排列函数(就是数学排列组合里的A)
export function Amn (m, n) {
  return factorial(m, n)//就是数学里的Amn,上面是n，下面是m
}

//自定义一个阶乘函数，就是有n个数相乘，从m开始，每个数减1，如factorial(5,4)就是5*(5-1)*(5-2)*(5-3),相乘的数有4个
function factorial (m, n) {
  var num = 1
  var count = 0
  for (var i = m; i > 0; i--) {
    if (count == n) {//当循环次数等于指定的相乘个数时，即跳出for循环
      break
    }
    num = num * i
    count++
  }
  return num
}

export function isAllStrEqual (str) {
  let array = str.split('')
  if (array.length > 0) {
    return !array.some((value, index) => {
      return value !== array[0]
    })
  } else {
    return true
  }
}

export function isAllArrEquql (arr) {
  if (arr.length > 0) {
    return !arr.some((value, index) => {
      return value !== arr[0]
    })
  } else {
    return true
  }
}

export function removeStrInArrRepeat (arr) {
  let cacheArr = []
  arr.forEach((v, i) => {
    console.log(v)
  })
}

export function multiply (arr) {
  return arr.reduce(function (a, b) {
    return a * b                        //如果是相加return a + b 如果是相减return a - b
  })
}

export function addition (arr) {
  if (arr.length == 0) {
    return 0
  }
  return arr.reduce(function (a, b) {
    return a + b                        //如果是相加return a + b 如果是相减return a - b
  })
}

export function zhixuankuadu (n) {
  let count = 0
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (Math.abs(i - j) == n) {
        count++
      }
    }
  }
  return count
}

export function zhixuankuadu3 (n) {
  let count = 0
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        if (Math.abs(Math.max(i, j, k) - Math.min(i, j, k)) == n) {
          count++
        }
      }
    }
  }
  return count
}

export function hezhi (n) {
  let count = 0
  for (let i = 0; i < 10; i++) {
    let j = n - i
    if (j < 10 && j > -1) {
      count++
    }
  }
  return count
}

export function zuxuanfushi (n) {
  let count = 0
  for (let i = 0; i < n; i++) {
    count += i
  }
  return count
}

export function zuxuanhezhi (n) {
  let count = 0
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i + j == n && i != j) {
        count++
      }
    }
  }
  return count / 2
}

export function zuxuanhezhi3 (n) {
  let count = 0
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        if (i + j + k == n && !(i == j == k)) {
          count++
        }
      }
    }
  }
  return count / 3
}

export function zhixuanhezhi3 (n) {
  let count = 0
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        if (i + j + k == n) {
          count++
        }
      }
    }
  }
  return count
}

export function zuxuan_zusan (n) {
  return n * (n - 1)
}

export function budingwei_erma (n) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += i
  }
  return sum
}
