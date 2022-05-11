var main = document.querySelector(".main")
var vsDOM = document.querySelector("#vs")
var botDOM = document.querySelector("#bot")

vsDOM.addEventListener("click", () => {
    doVS()
})
botDOM.addEventListener("click", () => {
    doBot()
})


function doVS() {
    clearMainSection();

    // for (let y = 0; y < xoxList.length; y++) {
    //     for (let x = 0; x < xoxList.length; x++) {
    //         var create = document.createElement("button")
    //         create.textContent = xoxList[y][x]
    //         main.appendChild(create)
    //     }
    // }
}
function doBot() {

}

function clearMainSection() {
    main.remove()
    function createMainSection() {
        var main = document.createElement("button")
        main.classList.add("main")
        document.querySelector(".border").appendChild(main);
    }
    createMainSection();
}



//XOX LİST
var xoxList = [["", "", ""], ["", "", ""], ["", "", ""]]
console.log(``, xoxList)








































//live server config