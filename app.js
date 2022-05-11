var border = document.querySelector(".border")
var count = 1;
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
        playVS()
    })
    botbtn.addEventListener("click", () => {
        playBot()
    })


    //clear main section
    function deleteMainSection() {
        document.querySelector(".main").remove();
    }
    function createMainSection() {
        var main = document.createElement("div")
        main.classList.add("main")
        main.classList.add("playGround")
        border.appendChild(main)

    }
    function playVS() {
        deleteMainSection()
        createMainSection()
        for (let y = 0; y < list.length; y++) {
            for (let x = 0; x < list.length; x++) {
                var create = document.createElement("button")
                create.textContent = list[y][x]
                create.classList.add("xoBtns")
                create.addEventListener("click", () => {
                    if (count % 2 == 1 && list[y][x] == "") {
                        list[y][x] = "X"
                        count++;

                        playVS();
                    } else if (count % 2 == 0 && list[y][x] == "") {
                        list[y][x] = "O"
                        count++;
                        
                        playVS();
                    }

                })
                document.querySelector(".main").appendChild(create)
            }
        }

    }
    function playBot() {
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



var list = [["", "", ""], ["", "", ""], ["", "", ""]]





































//live server config