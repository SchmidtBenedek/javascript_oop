import { createRadioButton } from "./gomszab.min.js";
import { ViewElement } from "./viewElement.js";

class NavigationBar extends ViewElement{ //navigationBar osztály definíciója
    /**
     * @type {ViewElement[]}
     */
    #viewElementList //privát tulajdonság, ami tartalmazza a megjelenítendő viewelement leszármazottakat (táblázat, form, importexport)

    constructor(){ //konstruktor definíció
        super('navbar')//meghívjuk a szülőosztály konstruktorát
        this.#viewElementList = [] //inicializáljuk a viewelementListet egy üres tömbbel
        this.div.addEventListener('change', (e) =>{ //feliratkozunk a div change eseményére (mivel a div radiogombokat fog tartalmazni, ezért tudjuk figyelni a divnél, hogy melyik radiogomb lesz kijelölve)
            const radioButtonValue = e.target.value  //elkérjük a target value értékét
            this.activate(radioButtonValue) //meghívjuk az activate függvényt a kiválasztott radiogomb értékével (a viewelement azonosítói lehetnek, lásd: addViewElement)
        })
    }

    /**
     * 
     * @param {string} label 
     * @param {ViewElement} viewElement
     */
    addViewElement(label, viewElement){ //a navigationBar példányának definiál egy függvényt
        this.#viewElementList.push(viewElement)// bemeneti viewelementet hozzáadjuk a viewelement listhez
        const div = createRadioButton({id: viewElement.id, name: this.id, label}) //csinálunk 1 rádiógombot, amelynek az azonosítója a view element azonosítója, a labelje a függvény bemeneti paramétere, és a name, az a navigationBar azonosítója, Azért mert a radiogomboknál ha azonos a name tulajdonság csak egy választás lehetséges
        this.div.appendChild(div) //hozzáfüzzük a divhez a radiogomb kreálás visszatérési értékét (this.div lásd Viewelement osztály definiciója)
    }

    /**
     * @override
     * @param {string} value 
     */
    activate(value){ //a szülő osztály definiál 1 activate függvényt (lásd Viewelement.activate), de a navigációs bár más logikát kell tartalmazzon
        for(const viewElement of this.#viewElementList){ //végigiterálunk a viewelementListen(table, form, és az importexportot tartalmazza)
            viewElement.activate(value) //meghívjuk az activate függvényét minden viewelementnek (lást ViewElement.activate)
        }
        this.div.querySelector(`#${value}`).checked = true //a diven belül lekérjük a bemeneti paraméterrel megeggyező id-jú element, és kijelöltre állítjuk
    }
}

export {NavigationBar} //exportáljuk