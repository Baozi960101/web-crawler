function handlePriceStr(lastWTF) {
    let str = ''
    lastWTF.childNodes.forEach(c => {
        str = str + c.innerHTML
    })
    return str.replace('undefined', '-')
  }
  
  function grabData() {
    const height = Math.floor(document.body.scrollHeight / 4)
    for (let i = 1; i < 6; i++) {
        setTimeout(() => {
            window.scrollTo({
                top: height * i,
                behavior: 'smooth'
            })
        }, 1000 * i)
        if (i === 5) {
            const res = []
            setTimeout(() => {
                const temp = []
  
                const name = document.querySelectorAll('.PFM7lj')
                name.forEach((item, index) => {
                    temp[index] = {}
                    const moreName = item.childNodes[item.childNodes.length - 1].innerHTML
                    temp[index].title = moreName
                })
  
                const allImages = document.querySelectorAll('.mxM4vG')
                allImages.forEach((image, index) => {
                    temp[index].image = image.src
                })
  
                const all32 = document.querySelectorAll("._32hnQt")
                all32.forEach((item32, index) => {
                    const arr = []
  
                    item32.childNodes.forEach(c => {
                        if (c.classList.contains('WTFwws')) {
                            arr.push(c)
                        }
                    })
  
                    const lastWTF = arr[arr.length - 1]
                    temp[index].price = handlePriceStr(lastWTF)
                })
                res.push(temp)
                // 每一頁的所有資料
                console.log('res', res)
            }, 5000)
        }
    }
  }
  
  function main() {
  
    grabData()
  
    setInterval(() => {
        const btn = document.querySelector(".shopee-icon-button--right")
        btn.click()
        grabData()
    }, 8000)
  }
  
  // 啟動主程式
  main()