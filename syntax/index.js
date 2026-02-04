
import { Gomb } from "./gomb.js"

// // import { muvelet, muveletLetrehoz } from "./functions.js"


// // const gomb = document.createElement("button")
// // gomb.innerText = "Gomb"

// // gomb.addEventListener("click", function(){
// //     const sz1 = Number(input1.value)
// //     const sz2 = Number(input2.value)
    
// //     const {result} = muvelet(sz1, sz2, muveletLetrehoz("+"))
// //     div.innerText = result
// // })

// // // function muvelet(a, b){
// // //     return a + b
// // // }

// // const fv = muveletLetrehoz("+")
// // console.log(fv(1, 2))

// // div.appendChild(gomb)
// // div.appendChild(input1)
// // div.appendChild(input2)


const input1 = document.createElement("input")
const input2 = document.createElement("input")

document.body.appendChild(input1)
document.body.appendChild(input2)

const eredmenyDiv = document.createElement("div")
document.body.appendChild(eredmenyDiv)

const gombokDiv = document.createElement("div")
document.body.appendChild(gombokDiv)

new Gomb(input1, input2, "+", eredmenyDiv)
new Gomb(input1, input2, "-", eredmenyDiv)
new Gomb(input1, input2, "*", eredmenyDiv)

