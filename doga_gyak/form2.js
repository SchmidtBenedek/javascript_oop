import { createInputField } from "./functions.js"

class FormField{
    #name
    #inputField
    #required
    #errorDiv

    get value(){
        return this.#inputField.value ? this.#inputField.value : undefined
    }

    get name(){
        return this.#name
    }

    constructor(name, id, labelContent, required, parent){

        const {errorElement, input} = createInputField({id, name, labelContent, parent})

        this.#name = name
        this.#inputField = input
        this.#required = required
        this.#errorDiv = errorElement
    }

    validate(){
        let result = true

        if(!this.value && this.#required){
            result = false
            this.#errorDiv.innerText = "Kötelező mező"
        }
        else{
            this.#errorDiv.innerText = ""
        }
        return result
    }


}

class FormController{
    #formFieldList
    #manager
    #form

    constructor(formFieldList, manager){
        this.#formFieldList = []
        this.#manager = manager
        
        const form = document.createElement("form")
        this.#form = form
        document.body.appendChild(form)

        for(const x of formFieldList){
            const field = new FormField(x.name, x.id, x.label, x.required, form)
            this.#formFieldList.push(field)
        }

        const button = document.createElement("button")
        button.innerText = "Elkuld"
        form.appendChild(button)

        form.addEventListener("submit", (e) => {
            e.preventDefault()

            const elem = this.#createElement()
            
            if(elem){
                this.#manager.addElement(elem)
                e.target.reset()
            }
        })
        
    }

    /**
     * 
     * @returns {ColspanType | RowspanType | null}
     */
    #createElement(){
        let result = {}
        let valid = true

        for(const x of this.#formFieldList){
            if(x.validate()){
                result[x.name] = x.value
            }
            else{
                valid = false
            }
        }

        if(valid){
            return result
        }
        else{
            return null
        }
    }
}

export {FormController}