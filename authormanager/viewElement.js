/**
 * @callback ActivateCallback
 * @returns {void} 
 */

import { hide, show } from "./gomszab.min.js"


class ViewElement{ //Őszosztály a megjelenítendő view osztályoknak
    /**
     * @type {HTMLDivElement}
     */
    #div //példányosításkor létrehozunk 1 divet az elemnek, azt tároljuk el benne

    /**
     * @type {string}
     */
    #id //privát tulajdonság az osztály példányának

    /**
     * @type {ActivateCallback}
     */
    #activateCallback //akkor fut le, amikor aktivvá válik (megjelenik) az adott elem (opcionális, lásd: activate függvény)

    get div(){ //getter definiálása a divnek
        return this.#div //visszatér a privát div tulajdonsággal
    }
    
    get id(){ //getter az azonositonak (navigációkor használatos)
        return this.#id
    }

    /**
     * @param {ActivateCallback} value 
     */
    set activateCallback(value){ //setter az activateCallbacknek
        this.#activateCallback = value //beállítja az activateCallbacknek a bemeneti paramétert
    }

    /**
     * 
     * @param {string} id 
     */
    constructor(id){ //konstruktor, bemeneti azonosítóval
        this.#id = id //azonosító beállítása
        this.#div = document.createElement("div") //div létrehozása és a div privát tulajdonság beállítása
        this.div.id = id //div azonosítójának beállítása
    }

    /**
     * 
     * @param {HTMLElement} parent 
     * @returns {void}
     */
    appendTo(parent){ //definiálunk 1 függvényt a példánynak, a bemeneti paraméter 1 html elem
        parent.appendChild(this.#div)// a html elemhez hozzácsatuljuk a div tulajdonságot (lásd: konstruktor)
    }

    /**
     * 
     * @param {string} id 
     * @returns {void}
     */
    activate(id){ //függvényt definiálunk a példányoknak 
        if(this.#id === id){ //össszehasonlítjuk a bemeneti id paramétert az id tulajdonsággal
            show(this.#div) //a divtől elveszi a hidden css osztályt
            if(this.#activateCallback){ //ha van activateCallback
                this.#activateCallback() //akkor meghívjuk az activateCallbacket
            }
        }
        else{ //egyébként
            hide(this.#div) //hozzáfűzzük az elemhez a hidden css osztályt
        }
    }
}

export {ViewElement} //exportáljuk a viewelementet