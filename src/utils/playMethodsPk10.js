export default function playMethodsSyx5 (type, detial, selectedData) {
  let selectedNum = [] // 所选数
  let bittingNumber = 0 // 注数
  let price = '' // 金额

  // 定位胆&前定位胆 [12345] 和 [21345]算俩
  if (type === '定位胆' && detial === '定位胆') {
    // 过滤空数组
    let resDataArr = selectedData.filter(item => {
      return item.data.length !== 0
    })
    console.log('符合条件的')
    console.log(resDataArr)
    // 算注数：
    let resultNumArr = []
    resDataArr.map(item => {
      for (let i = 0; i < item.data.length; i++) {
        resultNumArr.push(item.data[i].label)
      }
    })

    bittingNumber = resultNumArr.length
    price = 2 * bittingNumber
    selectedNum = resDataArr
  }
  // 猜前五&复式
  if (type === '猜前五' && detial === '复式') {
    let oneTwo = [] // 符合1，2级的
    let Three = [] // 符合1，2，3的
    let Four = [] // 符合1，2，3, 4的
    let Five = [] // 符合1，2，3, 4, 5的最终有效数据
    let firstNumArr = selectedData[0].data.map(item => item.label)
    let secondNumArr = selectedData[1].data.map(item => item.label)
    let thirdNumArr = selectedData[2].data.map(item => item.label)
    let fourNumArr = selectedData[3].data.map(item => item.label)
    let fiveNumArr = selectedData[4].data.map(item => item.label)
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
    // 处理1，2，3级的
    oneTwo.forEach(item => {
      for (let third = 0; third < thirdNumArr.length; third++) {
        if (item.indexOf(thirdNumArr[third]) === -1) {
          let list = item.concat(thirdNumArr[third])
          Three.push(list)
        }
      }
    })
    // console.log('符合条件的')
    // console.log(Three)
    // 处理1，2，3，4级的
    Three.forEach(item => {
      for (let fourth = 0; fourth < fourNumArr.length; fourth++) {
        if (item.indexOf(fourNumArr[fourth]) === -1) {
          let list = item.concat(fourNumArr[fourth])
          Four.push(list)
        }
      }
    })

    // 处理1，2，3，4, 5级的
    Four.forEach(item => {
      for (let fifth = 0; fifth < fiveNumArr.length; fifth++) {
        if (item.indexOf(fiveNumArr[fifth]) === -1) {
          let list = item.concat(fiveNumArr[fifth])
          Five.push(list)
        }
      }
    })

    // console.log('符合条件的')
    // console.log(Five)
    bittingNumber = Five.length
    price = 2 * bittingNumber
    selectedNum = Five
  }

  // 猜前五&单式 [1,2,3]和[3,2,1]算两个
  if (type === '猜前五' && detial === '单式') {
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 5
    })
    // console.log('符合条件的')
    // console.log(resultData)
    bittingNumber = resultData.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = resultData
  }

  // 猜前四&复式
  if (type === '猜前四' && detial === '复式') {
    let oneTwo = [] // 符合1，2级的
    let Three = [] // 符合1，2，3的
    let Four = [] // 符合1，2，3, 4的
    let firstNumArr = selectedData[0].data.map(item => item.label)
    let secondNumArr = selectedData[1].data.map(item => item.label)
    let thirdNumArr = selectedData[2].data.map(item => item.label)
    let fourNumArr = selectedData[3].data.map(item => item.label)
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
    // 处理1，2，3级的
    oneTwo.forEach(item => {
      for (let third = 0; third < thirdNumArr.length; third++) {
        if (item.indexOf(thirdNumArr[third]) === -1) {
          let list = item.concat(thirdNumArr[third])
          Three.push(list)
        }
      }
    })
    // console.log('符合条件的')
    // console.log(Three)
    // 处理1，2，3，4级的
    Three.forEach(item => {
      for (let fourth = 0; fourth < fourNumArr.length; fourth++) {
        if (item.indexOf(fourNumArr[fourth]) === -1) {
          let list = item.concat(fourNumArr[fourth])
          Four.push(list)
        }
      }
    })

    // console.log('符合条件的')
    // console.log(Four)
    bittingNumber = Four.length
    price = 2 * bittingNumber
    selectedNum = Four
  }

  // 猜前四&单式 [1,2,3]和[3,2,1]算两个
  if (type === '猜前四' && detial === '单式') {
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 4
    })
    // console.log('符合条件的')
    // console.log(resultData)
    bittingNumber = resultData.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = resultData
  }

  // 猜前三&复式
  if (type === '猜前三' && detial === '复式') {
    let oneTwo = [] // 符合1，2级的
    let Three = [] // 符合1，2，3的
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
    // console.log('1&2的')
    // console.log(oneTwo)
    // 处理1，2，3级的
    oneTwo.forEach(item => {
      for (let third = 0; third < thirdNumArr.length; third++) {
        if (item.indexOf(thirdNumArr[third]) === -1) {
          let list = item.concat(thirdNumArr[third])
          Three.push(list)
        }
      }
    })
    // console.log('符合条件的')
    // console.log(Three)

    bittingNumber = Three.length
    price = 2 * bittingNumber
    selectedNum = Three
  }

  // 猜前三&单式 [1,2,3]和[3,2,1]算两个
  if (type === '猜前三' && detial === '单式') {
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

  // 猜前二&复式
  if (type === '猜前二' && detial === '复式') {
    let oneTwo = [] // 符合1，2级的
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
    selectedNum = oneTwo
  }

  // 猜前二&单式 [1,2,3]和[3,2,1]算两个
  if (type === '猜前二' && detial === '单式') {
    let resultData = selectedData[0].data.filter(item => {
      return item.length === 2
    })
    // console.log('符合条件的')
    // console.log(resultData)
    bittingNumber = resultData.length
    price = 2 * bittingNumber
    // selectedNum = selectedData
    selectedNum = resultData
  }

  // 猜冠军
  if (type === '猜冠军' && detial === '复式') {
    let firstNumArr = selectedData[0].data.map(item => item.label)

    bittingNumber = firstNumArr.length
    price = 2 * bittingNumber
    selectedNum = firstNumArr
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
    selectedNum = selectedData[0].data.map(item => item.label)
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
    selectedNum = selectedData[0].data.map(item => item.label)
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
    selectedNum = selectedData[0].data.map(item => item.label)
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }

  // 定位胆&复式
  if (type === '定位胆' && detial === '复式') {
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
    selectedNum = selectedData[0].data.map(item => item.label)
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }
  // 趣味型&猜中位
  if (type === '趣味型' && detial === '猜中位') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }
  // 任选复式&一中一
  if (type === '任选复式' && detial === '一中一') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }
  // 任选复式&二中二
  if (type === '任选复式' && detial === '二中二') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 两个为一注，n*(n-1)/2的关系
    bittingNumber = selectedNum.length * (selectedNum.length - 1) / 2
    price = 2 * bittingNumber
  }

  // 任选复式&三中三
  if (type === '任选复式' && detial === '三中三') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 三个为一注，Cn3的关系;也就是 n*(n-1)*(n-2)/(3*2)
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) / 6
    price = 2 * bittingNumber
  }

  // 任选复式&四中四
  if (type === '任选复式' && detial === '四中四') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 四个为一注，Cn4的关系;也就是 n*(n-1)*(n-2)*(n-3)/(4*3*2)
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) * (selectedNum.length - 3) / 24
    price = 2 * bittingNumber
  }

  // 任选复式&五中五
  if (type === '任选复式' && detial === '五中五') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 五个为一注，Cn5的关系
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) * (selectedNum.length - 3) * (selectedNum.length - 4) / 120
    price = 2 * bittingNumber
  }

  // 任选复式&六中五
  if (type === '任选复式' && detial === '六中五') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 六个为一注，Cn6的关系
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) * (selectedNum.length - 3) * (selectedNum.length - 4) * (selectedNum.length - 5) / 720
    price = 2 * bittingNumber
  }

  // 任选复式&七中五
  if (type === '任选复式' && detial === '七中五') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 7个为一注，Cn7的关系
    bittingNumber = selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) * (selectedNum.length - 3) * (selectedNum.length - 4) * (selectedNum.length - 5) * (selectedNum.length - 6) / 5040
    price = 2 * bittingNumber
  }

  // 任选复式&八中五
  if (type === '任选复式' && detial === '八中五') {
    selectedNum = selectedData[0].data.map(item => item.label)
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
