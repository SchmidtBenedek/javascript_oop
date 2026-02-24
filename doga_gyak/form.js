import { createInputField } from "./functions.js"
import { Manager } from "./manager.js"

class FormField{

    /**
     * @type {HTMLInputElement}
     */
    #inputLabel

    /**
     * @type {string}
     */
    #name

    /**
     * @type {boolean}
     */
    #required

    /**
     * @type {HTMLDivElement}
     */
    #errorDiv

    get value(){
        return this.#inputLabel.value ? this.#inputLabel.value : undefined
    }

    get name(){
        return this.#name
    }

    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} labelContent 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id, name, labelContent, required, parent){
        const div = document.createElement("div")
        parent.appendChild(div)

        const label = document.createElement("label")
        label.innerText = labelContent
        label.htmlFor = id
        div.appendChild(label)

        div.appendChild(document.createElement("br"))

        const input = document.createElement("input")
        input.id = id
        input.name = name
        div.appendChild(input)

        this.#inputLabel = input
        this.#name = name

        const errorDiv = document.createElement("div")
        errorDiv.classList.add("error")
        div.appendChild(errorDiv)

        this.#required = required
        this.#errorDiv = errorDiv

    }

    /**
     * @returns {boolean}
     */
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

    /**
     * @type {FormField[]}
     */
    #formFieldElemList

    /**
     * @type {Manager}
     */
    #manager

    /**
     * @type {HTMLFormElement}
     */
    #form

    /**
     * 
     * @param {FormFieldType[]} formFieldList 
     * @param {Manager} manager 
     */
    constructor(formFieldList, manager){
        this.#manager = manager
        const form = document.createElement("form")
        this.#form = form
        document.body.appendChild(form)

        this.#formFieldElemList = []
        for(const formField of formFieldList){
            const formFieldElem = new FormField(formField.id, formField.name, formField.label, formField.required, form)
            this.#formFieldElemList.push(formFieldElem)
        }
    }
}

export {FormController}
