import {muvelet} from "./functions.js"
import {muveletLetrehoz } from "./functions.js"


class Gomb{
    constructor(input1, input2, muveletString, eredmenyDiv){
        this.input1 = input1
        this.input2 = input2
        this.muveletString = muveletString
        this.eredmenyDiv = eredmenyDiv


        const button = document.createElement("button")
        document.body.appendChild(button)
        button.innerText = muveletString

        button.addEventListener("click", this.#calculate(this.input1, this.input2, eredmenyDiv))

            

    }

    #calculate(input1, input2, eredmenyDiv){
        return () =>{
            const sz1 = Number(input1.value)
            const sz2 = Number(input2.value)

            const {result} = muvelet(sz1, sz2, muveletLetrehoz(this.muveletString))
            eredmenyDiv.innerText = result
        }
    }
}

export {Gomb}