import {muvelet} from "./functions.js"
import {muveletLetrehoz } from "./functions.js"


class Gomb{
    constructor(input1, input2, muveletString, eredmenyDiv){
        this.input1 = input1
        this.input2 = input2
        this.muveletString = muveletString
        this.eredmenyDiv = eredmenyDiv

        const button = document.createElement("button")
        button.addEventListener("click", function(){

            const input1 = Number(input1.value)
            const input2 = Number(input2.value)

            if(muveletString == "+"){
                const {result} = muvelet(input1, input2, muveletLetrehoz("+"))
                eredmenyDiv.innerText = result
            }
            else if(muveletString == "-"){
                const {result} = muvelet(input1, input2, muveletLetrehoz("-"))
                eredmenyDiv.innerText = result
            }
            else if(muveletString == "*"){
                const {result} = muvelet(input1, input2, muveletLetrehoz("*"))
                eredmenyDiv.innerText = result
            }

        })
    }
}