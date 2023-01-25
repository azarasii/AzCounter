window.addEventListener("load", () => {
    let countText = document.getElementById("countText")
    let countBtn = document.getElementById("countBtn")
    
    countBtn.addEventListener("click", () => {
        countText.innerText = parseInt(countText.innerText) + 1
    })

    createAds() 
})

function createAds(){
    let admax = document.getElementById("admax")
    let mainBody = document.getElementById("main")
    let height = innerHeight
    let adWedth = 728
    let adHeight = 90

    let ads = parseInt((height - mainBody.clientHeight) / adHeight)
    for(let i=0; i < ads; i++){
        let iframe = document.createElement("iframe")
        iframe.width = adWedth
        iframe.height = adHeight
        iframe.scrolling = "no"

        admax.appendChild(iframe)
        
        let iframeDocument = iframe.contentWindow.document
        iframeDocument.open()
        iframeDocument.write('<body style="margin: 0px;"><script src="https://adm.shinobi.jp/s/b4b71713445ac0f955cd917b8701b082"></script></body>')
        iframeDocument.close()
    }
}