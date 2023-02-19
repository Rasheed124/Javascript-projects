// const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","A", "B", "C", "D", "E", "F"];
const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// rgb(0, 0, 0)

const btn = document.querySelector("#btn")
const color = document.querySelector(".color")


btn.addEventListener("click", () => {

    // GENERATE  WITH LOOP & colors Arrays

    let hex = "#"
    for (let i = 0; i < 6; i++) {
        hex += colors[generateColors()]

    }
    document.body.style.backgroundColor = hex;
    color.textContent = hex;



    // GENERATE  WITHOUT  LOOP & colors Arrays

    // document.body.style.backgroundColor =  `#${generateColors()}`;
    // color.textContent = `#${generateColors()}`;

})


const generateColors = () => {


    //   Generate Color code Hex 1
    // return Math.random().toString(16).substring('2', '8') ;

    //   Generate Color code Hex 2
    return Math.floor(Math.random() * colors.length)

}

