import { createTableCell, createTableHeader } from "./gomszab.min.js";
import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewElement.js";

class TableView extends ViewElement{ //táblázatot tartalmazó viewelement definiálása ViewElementből leszármazva

    /**
     * @type {AuthorManager}
     */
    #manager //privát tulajdonsága a managernek

    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody //privát tulajdonság a táblázat törzsének

    /**
     * 
     * @param {string} id 
     * @param {string[]} headerArray 
     * @param {AuthorManager} manager 
     */
    constructor(id, headerArray, manager){
        super(id) //szülőosztály konstruktorának meghívása
        this.#manager = manager //a manager értéke a bemeneti manager példány
        const table = document.createElement('table') //létrehozunk 1 táblázatot
        this.div.appendChild(table) //hozzácsatoljuk a táblázatot a divhez
        const thead = createTableHeader(headerArray) //létrehozzuk a táblázat fejlécét a string tömb alapján
        table.appendChild(thead)//hozzácsatoljuk a táblázathoz a theadet
        this.#tbody = document.createElement('tbody')// létrehozzuk a tbodyt
        table.appendChild(this.#tbody)//hozzácsatoljuk a tbodyt a tablehöz
        this.#manager.tableCallback = (authorList) => { //definiáljuk a manager tableCallback-jét (a setter meghívásával lásd: AuthorManager.tableCallback)
            if(authorList.length ==0){ //ha a lista üres
                const tr = document.createElement("tr") //létrehozunk 1 sor elemet
                this.#tbody.appendChild(tr) //hozzácsatoljuk a tbodyhoz
                const td = createTableCell(tr, "Nincs megjelenítendő sor") //létrehozunk 1 cellát tartalommal és hozzácsatoljuk a sorhoz
                td.colSpan = 3 //kiterjesztük a cellát 3 oszlopos szélességűre
            } //bele lehetne tenni else ágba
            for(const author of authorList){ //végigiterálunk az authorListán
                const tr = document.createElement('tr') //létrehozunk 1 sort
                this.#tbody.appendChild(tr) //hozzácsatoljuk a tbodyhoz

                createTableCell(tr, author.name) //létrehozunk 1 cellát a sorhoz az author namel
                createTableCell(tr, author.work) //létrehozunk 1 cellát a sorhoz az author workjével
                createTableCell(tr, author.concept) //létrehozunk 1 cellát a sorhoz az author conceptjével
            }
        }
        this.activateCallback = () => { //definiáljuk az activateCallback-et
            this.#tbody.innerText = "" //töröljük a tbody tartalmát
            this.#manager.getAllElement() //meghívjuk a manager getAllElementjét (ami meghívja a tablecallback-et lásd AuthorManager.getAllElement)
        }
    }
}

export {TableView} //exportáljuk a tablet