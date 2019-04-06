import computePriceAndNumber from './computePriceAndNumber'
import {
  isAllStrEqual,
  isAllArrEquql,
  removeStrInArrRepeat,
  Cmn,
  multiply,
  addition,
  hezhi,
  zuxuanfushi,
  zhixuankuadu,
  zuxuanhezhi,
  zhixuanhezhi3,
  zhixuankuadu3,
  zuxuanhezhi3,
  zuxuan_zusan,
  budingwei_erma
} from './computePriceAndNumber'

export default function playMethods (type, detial, selectedData) {
  let bittingNumber = 0
  let price = 0
  let selectedNum = selectedData
  if (type == '一星' && detial == '复式') {
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '前二' && detial == '直选复式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '直选单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 2
    })
    // console.log('符合条件的')
    // console.log(resultData)

    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    //result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '直选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(hezhi(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '跨度') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuankuadu(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '组选复式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data.length
      }
    }
    let numberCache = 0
    for (let i = 0; i < cache.length; i++) {
      numberCache += zuxuanfushi(cache)
    }
    if (counter.length >= YminLimit) {
      bittingNumber = numberCache
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '组选单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 2 && !isAllArrEquql(item)
    })
    // console.log('符合条件的')
    // console.log(resultData)
    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '组选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zuxuanhezhi(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '组选包胆') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = 9
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '后二' && detial == '直选复式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '直选单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 2
    })
    // console.log('符合条件的')
    // console.log(resultData)

    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    //result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '直选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(hezhi(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '跨度') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuankuadu(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '组选复式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data.length
      }
    }
    let numberCache = 0
    for (let i = 0; i < cache.length; i++) {
      numberCache += zuxuanfushi(cache)
    }
    if (counter.length >= YminLimit) {
      bittingNumber = numberCache
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '组选单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 2 && !isAllArrEquql(item)
    })
    // console.log('符合条件的')
    // console.log(resultData)
    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '组选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zuxuanhezhi(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '组选包胆') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = 9
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '前三' && detial == '复式') {
    let YminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3
    })
    // console.log('符合条件的')
    // console.log(resultData)

    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '直选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuanhezhi3(v.label))
      })
    }
    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '跨度') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuankuadu3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '组选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zuxuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '组三') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = zuxuan_zusan(counter[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '组六') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = Cmn(counter[0].length, 3)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '混合组选') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3 && !isAllArrEquql(item)
    })
    // console.log('符合条件的')
    // console.log(resultData)
    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '组选包胆') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = 54
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '组三单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3 && !isAllArrEquql(item)
    })
    // console.log('符合条件的')
    // console.log(resultData)
    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '组六单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3 && !isAllArrEquql(item)
    })
    // console.log('符合条件的')
    // console.log(resultData)
    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '一码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '二码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    console.log(cache[0])

    if (counter.length >= YminLimit && cache[0].length >= XminLimit) {
      bittingNumber = budingwei_erma(cache[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '中三' && detial == '复式') {
    let YminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3
    })
    // console.log('符合条件的')
    // console.log(resultData)

    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '直选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '跨度') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuankuadu3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '组选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zuxuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '组三') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = zuxuan_zusan(counter[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '组六') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = Cmn(counter[0].length, 3)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '组选包胆') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = 54
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '组三单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3 && !isAllArrEquql(item)
    })
    // console.log('符合条件的')
    // console.log(resultData)
    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '组六单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3 && !isAllArrEquql(item)
    })
    // console.log('符合条件的')
    // console.log(resultData)
    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '一码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '二码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    console.log(cache[0])

    if (counter.length >= YminLimit && cache[0].length >= XminLimit) {
      bittingNumber = budingwei_erma(cache[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '后三' && detial == '复式') {
    let YminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3
    })
    // console.log('符合条件的')
    // console.log(resultData)

    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '直选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '跨度') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuankuadu3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '组选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zuxuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '组三') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = zuxuan_zusan(counter[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '组六') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = Cmn(counter[0].length, 3)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '组选包胆') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = 54
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '组三单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3 && !isAllArrEquql(item)
    })
    // console.log('符合条件的')
    // console.log(resultData)
    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '组六单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3 && !isAllArrEquql(item)
    })
    // console.log('符合条件的')
    // console.log(resultData)
    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '一码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '二码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    console.log(cache[0])

    if (counter.length >= YminLimit && cache[0].length >= XminLimit) {
      bittingNumber = budingwei_erma(cache[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '四星' && detial == '复式') {
    let YminLimit = 4
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '四星' && detial == '单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 4
    })
    // console.log('符合条件的')
    // console.log(resultData)

    // 排序
    resultData = resultData.map(item => {
      return item.sort((a, b) => {
        return a - b
      })
    })
    let newArr = []
    resultData.forEach(item => {
      newArr.push(item.join(''))
    })
    let result = newArr
    result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '四星' && detial == '组选24') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 4
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = Cmn(counter[0].length, XminLimit)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '四星' && detial == '一码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '四星' && detial == '二码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    console.log(cache[0])

    if (counter.length >= YminLimit && cache[0].length >= XminLimit) {
      bittingNumber = budingwei_erma(cache[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '四星' && detial == '组选12') {
    let YminLimit = 2
    let XminLimit1 = 1
    let Xminlimit2 = 2
    let doubleNum = [] // 所选二重号码 -> 选的哪几个数
    let singleNum = [] // 单号码 -> 哪几个数
    let numberList = []

    let cache = []
    // 二重号码处理
    for (let i in selectedData[0].data) {
      doubleNum.push(selectedData[0].data[i].label)
    }

    //单号码处理
    for (let i in selectedData[1].data) {
      singleNum.push(selectedData[1].data[i].label)
    }

    let m = 0
    let n = singleNum.length
    m = singleNum.filter(item => {
      console.log(item)
      console.log('doubleNum', doubleNum)
      return doubleNum.includes(item)
    }).length
    n = n - m
    console.log('m', m)
    console.log('n', n)
    console.log('singleNum', singleNum.length)

    if (n >= Xminlimit2 && doubleNum.length >= XminLimit1) {
      bittingNumber = Cmn(singleNum.length, Xminlimit2) * (doubleNum.length - m) + Cmn(singleNum.length - 1, Xminlimit2) * m
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '四星' && detial == '组选6') {
    let XminLimit = 2
    let counter = []
    let numberList = []

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter[0].length >= XminLimit) {
      bittingNumber = Cmn(counter[0].length, XminLimit)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '四星' && detial == '组选4') {
    let YminLimit = 2
    let XminLimit1 = 1
    let Xminlimit2 = 1
    let doubleNum = [] // 所选二重号码 -> 选的哪几个数
    let singleNum = [] // 单号码 -> 哪几个数
    let numberList = []

    let cache = []
    // 二重号码处理
    for (let i in selectedData[0].data) {
      doubleNum.push(selectedData[0].data[i].label)
    }

    //单号码处理
    for (let i in selectedData[1].data) {
      singleNum.push(selectedData[1].data[i].label)
    }

    let m = 0
    let n = singleNum.length
    m = singleNum.filter(item => {
      console.log(item)
      console.log('doubleNum', doubleNum)
      return doubleNum.includes(item)
    }).length
    n = n - m
    console.log('m', m)
    console.log('n', n)
    console.log('singleNum', singleNum.length)

    if (n >= Xminlimit2 && doubleNum.length >= XminLimit1) {
      bittingNumber = Cmn(singleNum.length, Xminlimit2) * (doubleNum.length - m) + Cmn(singleNum.length - 1, Xminlimit2) * m
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '五星' && detial == '复式') {
    let YminLimit = 5
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '组选120') {
    // let YminLimit = 1
    let XminLimit = 5
    let counter = []
    let numberList = []

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter[0].length >= XminLimit) {
      bittingNumber = Cmn(counter[0].length, XminLimit)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '组选60') {
    let YminLimit = 2
    let XminLimit1 = 1
    let Xminlimit2 = 3
    let doubleNum = [] // 所选二重号码 -> 选的哪几个数
    let singleNum = [] // 单号码 -> 哪几个数
    let numberList = []

    let cache = []
    // 二重号码处理
    for (let i in selectedData[0].data) {
      doubleNum.push(selectedData[0].data[i].label)
    }

    //单号码处理
    for (let i in selectedData[1].data) {
      singleNum.push(selectedData[1].data[i].label)
    }

    let m = 0
    let n = singleNum.length
    m = singleNum.filter(item => {
      console.log(item)
      console.log('doubleNum', doubleNum)
      return doubleNum.includes(item)
    }).length
    n = n - m
    console.log('m', m)
    console.log('n', n)
    console.log('singleNum', singleNum.length)

    if (n >= Xminlimit2 && doubleNum.length >= XminLimit1) {
      bittingNumber = Cmn(singleNum.length, 3) * (doubleNum.length - m) + Cmn(singleNum.length - 1, 3) * m
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  // if (type == '五星' && detial == '组选30') {
  //   let YminLimit = 2
  //   let XminLimit1 = 2
  //   let Xminlimit2 = 1
  //   let doubleNum = [] // 所选二重号码 -> 选的哪几个数
  //   let singleNum = [] // 单号码 -> 哪几个数
  //   let numberList = []
  //
  //   let cache = []
  //   // 二重号码处理
  //   for (let i in selectedData[0].data) {
  //     doubleNum.push(selectedData[0].data[i].label)
  //   }
  //
  //   //单号码处理
  //   for (let i in selectedData[1].data) {
  //     singleNum.push(selectedData[1].data[i].label)
  //   }
  //
  //   let m = 0
  //   let n = singleNum.length
  //   m = singleNum.filter(item => {
  //     console.log(item)
  //     console.log('doubleNum',doubleNum)
  //     return doubleNum.includes(item)
  //   }).length
  //   n = n-m
  //   console.log('m', m)
  //   console.log('n', n)
  //   console.log('singleNum',singleNum.length)
  //
  //   if (n >= Xminlimit2 && doubleNum.length >= XminLimit1) {
  //     bittingNumber = Cmn(singleNum.length,Xminlimit2)* (doubleNum.length - m) + Cmn(singleNum.length - 1,Xminlimit2)*m
  //     price = bittingNumber * 2
  //   }
  //   return {
  //     type,
  //     detial,
  //     selectedNum,
  //     bittingNumber,
  //     price
  //   }
  // }
  if (type == '五星' && detial == '组选20') {
    let YminLimit = 2
    let XminLimit1 = 1
    let Xminlimit2 = 2
    let doubleNum = [] // 所选二重号码 -> 选的哪几个数
    let singleNum = [] // 单号码 -> 哪几个数
    let numberList = []

    let cache = []
    // 二重号码处理
    for (let i in selectedData[0].data) {
      doubleNum.push(selectedData[0].data[i].label)
    }

    //单号码处理
    for (let i in selectedData[1].data) {
      singleNum.push(selectedData[1].data[i].label)
    }

    let m = 0
    let n = singleNum.length
    m = singleNum.filter(item => {
      console.log(item)
      console.log('doubleNum', doubleNum)
      return doubleNum.includes(item)
    }).length
    n = n - m
    console.log('m', m)
    console.log('n', n)
    console.log('singleNum', singleNum.length)

    if (n >= Xminlimit2 && doubleNum.length >= XminLimit1) {
      bittingNumber = Cmn(singleNum.length, Xminlimit2) * (doubleNum.length - m) + Cmn(singleNum.length - 1, Xminlimit2) * m
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '组选10') {
    let YminLimit = 2
    let XminLimit1 = 1
    let Xminlimit2 = 1
    let doubleNum = [] // 所选二重号码 -> 选的哪几个数
    let singleNum = [] // 单号码 -> 哪几个数
    let numberList = []

    let cache = []
    // 二重号码处理
    for (let i in selectedData[0].data) {
      doubleNum.push(selectedData[0].data[i].label)
    }

    //单号码处理
    for (let i in selectedData[1].data) {
      singleNum.push(selectedData[1].data[i].label)
    }

    let m = 0
    let n = singleNum.length
    m = singleNum.filter(item => {
      console.log(item)
      console.log('doubleNum', doubleNum)
      return doubleNum.includes(item)
    }).length
    n = n - m
    console.log('m', m)
    console.log('n', n)
    console.log('singleNum', singleNum.length)

    if (n >= Xminlimit2 && doubleNum.length >= XminLimit1) {
      bittingNumber = Cmn(singleNum.length, Xminlimit2) * (doubleNum.length - m) + Cmn(singleNum.length - 1, Xminlimit2) * m
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '组选5') {
    let YminLimit = 2
    let XminLimit1 = 1
    let Xminlimit2 = 1
    let doubleNum = [] // 所选二重号码 -> 选的哪几个数
    let singleNum = [] // 单号码 -> 哪几个数
    let numberList = []

    let cache = []
    // 二重号码处理
    for (let i in selectedData[0].data) {
      doubleNum.push(selectedData[0].data[i].label)
    }

    //单号码处理
    for (let i in selectedData[1].data) {
      singleNum.push(selectedData[1].data[i].label)
    }

    let m = 0
    let n = singleNum.length
    m = singleNum.filter(item => {
      console.log(item)
      console.log('doubleNum', doubleNum)
      return doubleNum.includes(item)
    }).length
    n = n - m
    console.log('m', m)
    console.log('n', n)
    console.log('singleNum', singleNum.length)

    if (n >= Xminlimit2 && doubleNum.length >= XminLimit1) {
      bittingNumber = Cmn(singleNum.length, Xminlimit2) * (doubleNum.length - m) + Cmn(singleNum.length - 1, Xminlimit2) * m
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '一码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '二码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    console.log(cache[0])

    if (counter.length >= YminLimit && cache[0].length >= XminLimit) {
      bittingNumber = budingwei_erma(cache[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '一帆风顺') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      console.log(selectedData.length)
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '好事成双') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '三星报喜') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '四季发财') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '大小单双' && detial == '前二') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 2  // 上下
    let counter = []
    let numberList = []

    let cache = []
    for (let i in selectedData) {
      console.log(selectedData[i].data)
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '大小单双' && detial == '后二') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '大小单双' && detial == '前三') {
    let YminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '大小单双' && detial == '后三') {
    let YminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

}

