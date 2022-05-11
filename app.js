var border = document.querySelector(".border")
createMenuPage();

function createMenuPage() {
    var main = document.createElement("div")
    main.classList.add("main")

    var vsbtn = document.createElement("button")
    vsbtn.classList.add("btns")
    vsbtn.textContent = "1 VS 1"
    var botbtn = document.createElement("button")
    botbtn.classList.add("btns")
    botbtn.textContent = "Single Player"

    border.appendChild(main)
    main.appendChild(vsbtn)
    main.appendChild(botbtn)
    vsbtn.addEventListener("click", () => {  
        play()
    })
    botbtn.addEventListener("click", () => {
        play()
    })


    //clear main section
    function deleteMainSection() {
        main.remove();
    }
    function createMainSection() {
        var main = document.createElement("div")
        main.classList.add("main")
        main.classList.add("playGround")
        border.appendChild(main)
        
    }
    function play() {
        debugger
        deleteMainSection()
        createMainSection()
        for (let y = 0; y < list.length; y++) {
            for (let x = 0; x < list.length; x++) {
                var create = document.createElement("button")
                create.textContent = list[y][x]
                create.classList.add("xoBtns")
                document.querySelector(".main").appendChild(create)
            }
        }
    }
}



var list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]





































//live server config