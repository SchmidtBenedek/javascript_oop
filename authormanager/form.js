import { createInputAndErrorDiv } from "./gomszab.min.js";
import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewElement.js";

class FormView extends ViewElement{ //leszármazunk a ViewElementből és definiáljuk a FormControllert osztályt

    /**
     * @type {FormField[]}
     */
    #formInputList //privát formInputList tulajdonság létrehozása

    /**
     * @type {AuthorManager}
     */
    #manager //privát manager tulajdonság létrehozása

    /**
     * @type {HTMLFormElement}
     */
    #form

    /**
     * 
     * @param {string} id 
     * @param {import("./index.js").FormFieldType} formFieldList 
     * @param {AuthorManager} manager 
     */
    constructor(id, formFieldList, manager){ //definiáljuk a konstruktort
        super(id) //meghívjuk a szülő osztály konstruktorát
        this.#manager = manager //értéket adunk a privát manager tulajdonságnak
        this.#formInputList = [] //inicializáljuk a formInputList tulajdonságot
        const form = document.createElement("form") //létrehozunk 1 formot

        for(const field of formFieldList){ //végigiterálunk a bemeneti formFieldList paraméteren
            const formField = new FormField(field.id, field.label, field.name, form) //példányosítjuk a forminputokat
            this.#formInputList.push(formField) //hozzáadjuk a formInputList listához
        }

        const button = document.createElement("button") //létrehozunk 1 gombot
        button.innerText = "Küldés" //szöveget állítunk a gombnak
        form.appendChild(button) //hozzáfűzzük az űrlaphoz
        const resultDiv = document.createElement("div") //létrehozunk 1 resultDiv-et a megjelenítendő üzenetnek
        this.div.appendChild(resultDiv) //hozzácsatoljuk a resultDiv-et a viewElement div-hez
        this.div.appendChild(form) //hozzácsatoljuk a formot a divhez
        
        form.addEventListener("submit", (e) => { //feliratkozunk a form submit eseményére
            e.preventDefault()// megakadályozzuk az űrlap alapértelmezett működését
            const elem = this.#createElement() //meghívjuk a createElement metódust
            this.#manager.addElement(elem) //Meghívjuk a manager addElement függvényét (Lásd AuthorManager.addElement)
        })

        this.#manager.addElementResultCallback = (result) => { //definiáljuk az addElementResultCallbacket (Az AuthorManager.addELement hívja a callbacket)
            resultDiv.innerText = result //beállítjuk a kapott stringet
            setTimeout(() =>{ //meghívjuk a setTimeot-ot
                resultDiv.innerText = "" //töröljük a resultDiv tartalmát
            }, 1500) //1,5 mp múlva
        }
    }

    /**
     * @returns {import("./index.js").AuthorType}
     */
    #createElement(){ // createElement metódus definiálása
        /**
         * @type {import("./index.js").AuthorType}
         */
        let result = {} //authorType típusu objektum létrehozása
        for(const field of this.#formInputList){ //végégiterálunk a formInputList elemein
            if(field.validate()){ //meghívjuk minden formInputra a validate függvényt
                result[field.name] = field.value //a result objektum formInputField name értékével megeggyező nevű tulajdonságának megadjuk a forminput beviteli mezőjének az értékét
            }
        }
        return result //visszatérünk az objektummal
    }
}

class FormField{
    /**
     * @type {HTMLInputElement}
     */
    #inputElement //privát tulajdonságot definiálunk

    /**
     * @type {HTMLDivElement}
     */
    #errorDiv //privát tulajdonságot definiálunk

    /**
     * @type {string}
     */
    #name //privát tulajdonságot definiálunk

    get name(){ //definiálunk 1 gettert a namenek
        return this.#name //visszatérünk a name tulajdonság értékével
    }

    get value(){ //definiálunk gettert a value-nak
        return this.#inputElement.value ? this.#inputElement.value : undefined //amennyiben az inputElementnek van beírt értéke, akkor visszatér a beírt értékkel, egyébként undefined
    }

    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {HTMLFormElement} parent 
     */
    constructor(id, label, name, parent){ //konstruktort definiálunk
        const {input, errorDiv} = createInputAndErrorDiv({id, label, name, parent}) //létrehozunk 1 divet ami tartalmaz 1 labelt, inputot, és 1 error divet
        this.#name = name //name tulajdonság értékét állítunk
        this.#inputElement = input //visszatérési érték input tulajdonságának értékét állítjuk be
        this.#errorDiv = errorDiv //visszatérési érték errorDiv tulajdonságának értékét állítjuk be
    }

    /**
     * @returns {boolean}
     */
    validate(){ //definiáljuk a validate függvényt
        let result = true //létrehozunk 1 result változót igaz értékkel
        if(!this.value){ //ha a value getter visszatérési értéke undefined
            this.#errorDiv.innerText = "Mező kitöltése kötelező" //beállítjuk az error div értékét hibaüzenetre
            result = false
        }
        else{ //egyébként
            this.#errorDiv.innerText = " " //töröljük az errorDiv tartalmát
        }
        return result //visszatéünk a result változó értékével
    }
}



export {FormView} //exportáljuk