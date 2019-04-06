export default function playMethodsSyx5 (type, detial, selectedData) {
  console.log('的开发贷款')
  console.log(selectedData)
  let selectedNum = [] // 所选数
  let bittingNumber = 0 // 注数
  let price = '' // 金额

  // 三码&前三直选复式
  if (type === '三码' && detial === '前三直选复式') {
    let oneTwo = [] // 符合1，2级的
    let Three = [] // 符合1，2，3最终的有效数据
    let firstNumArr = selectedData[0].data.map(item => item.label)
    let secondNumArr = selectedData[1].data.map(item => item.label)
    let thirdNumArr = selectedData[2].data.map(item => item.label)
    // 处理1，2级的
    for (let first = 0; first < firstNumArr.length; first++) {
      for (let second = 0; second < secondNumArr.length; second++) {
        if (secondNumArr[second] !== firstNumArr[first]) {
          let item = [firstNumArr[first], secondNumArr[second]]
          oneTwo.push(item)
        }
      }
    }
    // 处理1&2级 和 3级的
    // console.log('1&2的')
    // console.log(oneTwo)
    oneTwo.forEach(item => {
      for (let third = 0; third < thirdNumArr.length; third++) {
        if (item.indexOf(thirdNumArr[third]) === -1) {
          let list = [item.concat(thirdNumArr[third])]
          Three.push(list)
        }
      }
    })
    // console.log('符合条件的')
    // console.log(Three)
    bittingNumber = Three.length
    price = 2 * bittingNumber
    selectedNum = selectedData
  }

  // 三码&前三直选单式 [1,2,3]和[3,2,1]算两个
  if (type === '三码' && detial === '前三直选单式') {
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 3
    })
    // console.log('符合条件的')
    // console.log(resultData)
    bittingNumber = resultData.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = resultData
  }

  // 三码&前三组选复式
  if (type === '三码' && detial === '前三组选复式') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 三个为一注，c53=10的关系
    bittingNumber = selectedNum.length < 3 ? 0 : selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) / 6
    price = 2 * bittingNumber
  }

  // 三码&前三组选单式 [1,2,3]和[3,2,1]算一个
  if (type === '三码' && detial === '前三组选单式') {
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
    let result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
  }

  // 二码&前二直选复式
  if (type === '二码' && detial === '前二直选复式') {
    let oneTwo = [] // 符合1，2级的最终的有效数据
    let firstNumArr = selectedData[0].data.map(item => item.label)
    let secondNumArr = selectedData[1].data.map(item => item.label)
    // 处理1，2级的
    for (let first = 0; first < firstNumArr.length; first++) {
      for (let second = 0; second < secondNumArr.length; second++) {
        if (secondNumArr[second] !== firstNumArr[first]) {
          let item = [firstNumArr[first], secondNumArr[second]]
          oneTwo.push(item)
        }
      }
    }
    // console.log('1&2的')
    // console.log(oneTwo)
    bittingNumber = oneTwo.length
    price = 2 * bittingNumber
    selectedNum = selectedData
  }

  // 二码&前二直选单式 [1,2]和[2,1]算两注
  if (type === '二码' && detial === '前二直选单式') {
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 2
    })
    bittingNumber = resultData.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = resultData
  }

  // 二码&前二组选复式
  if (type === '二码' && detial === '前二组选复式') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 两个为一注，n*(n-1)/2的关系
    bittingNumber = selectedNum.length < 2 ? 0 : selectedNum.length * (selectedNum.length - 1) / 2
    price = 2 * bittingNumber
  }

  // 二码&前二组选单式 [1,2]和[2,1]算一注
  if (type === '二码' && detial === '前二组选单式') {
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 2
    })
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
    let result = Array.from(new Set(newArr))
    result = result.map(item => item.split(''))
    // console.log('结果')
    // console.log(result)
    bittingNumber = result.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = result
  }

  // 不定位&前三一码不定位
  if (type === '不定位' && detial === '前三一码不定位') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }

  // 定位胆&复式
  if (type === '定位胆' && detial === '复式') {
    let finalDataArr = [] // 符合1，2，3最终的有效数据
    let firstNumArr = selectedData[0].data.map(item => item.label)
    let secondNumArr = selectedData[1].data.map(item => item.label)
    let thirdNumArr = selectedData[2].data.map(item => item.label)
    // 当获取有效值分层次的时候可去掉注释
    // finalDataArr.push(firstNumArr)
    // finalDataArr.push(secondNumArr)
    // finalDataArr.push(thirdNumArr)
    bittingNumber = firstNumArr.length + secondNumArr.length + thirdNumArr.length
    price = 2 * bittingNumber
    selectedNum = selectedData
  }

  // 趣味型&定单双
  if (type === '趣味型' && detial === '定单双') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }
  // 趣味型&猜中位
  if (type === '趣味型' && detial === '猜中位') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }
  // 任选复式&一中一
  if (type === '任选复式' && detial === '一中一') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }
  // 任选复式&二中二
  if (type === '任选复式' && detial === '二中二') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 两个为一注，n*(n-1)/2的关系
    bittingNumber = selectedNum.length * (selectedNum.length - 1) / 2
    price = 2 * bittingNumber
  }

  // 任选复式&三中三
  if (type === '任选复式' && detial === '三中三') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 三个为一注，Cn3的关系;也就是 n*(n-1)*(n-2)/(3*2)
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) / 6
    price = 2 * bittingNumber
  }

  // 任选复式&四中四
  if (type === '任选复式' && detial === '四中四') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 四个为一注，Cn4的关系;也就是 n*(n-1)*(n-2)*(n-3)/(4*3*2)
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) * (selectedNum.length - 3) / 24
    price = 2 * bittingNumber
  }

  // 任选复式&五中五
  if (type === '任选复式' && detial === '五中五') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 五个为一注，Cn5的关系
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) * (selectedNum.length - 3) * (selectedNum.length - 4) / 120
    price = 2 * bittingNumber
  }

  // 任选复式&六中五
  if (type === '任选复式' && detial === '六中五') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 六个为一注，Cn6的关系
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) * (selectedNum.length - 3) * (selectedNum.length - 4) * (selectedNum.length - 5) / 720
    price = 2 * bittingNumber
  }

  // 任选复式&七中五
  if (type === '任选复式' && detial === '七中五') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 7个为一注，Cn7的关系
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) * (selectedNum.length - 3) * (selectedNum.length - 4) * (selectedNum.length - 5) * (selectedNum.length - 6) / 5040
    price = 2 * bittingNumber
  }

  // 任选复式&八中五
  if (type === '任选复式' && detial === '八中五') {
    // selectedNum = selectedData[0].data.map(item => item.label)
    selectedNum = selectedData[0].data.map(item => {
      return {
        data: [{checked: true, label: item.label, value: item.value}]
      }
    })
    // 8个为一注，Cn8的关系
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) * (selectedNum.length - 3) * (selectedNum.length - 4) * (selectedNum.length - 5) * (selectedNum.length - 6) * (selectedNum.length - 7) / 40320
    price = 2 * bittingNumber
  }

  return {
    type, // 类型
    detial, // 详情
    selectedNum, // 所选数字
    bittingNumber, // 注数
    price // 价格
  }
}
