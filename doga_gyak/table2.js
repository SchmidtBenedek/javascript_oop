/**
 * @import {ColspanType, RowspanType, HeaderArrayType} from "./functions.js"
 * 
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns {void}
 */

import { Manager } from "./manager.js"
import { createTableCell } from "./functions.js"

class Table{

    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody

    /**
     * @type {Manager}
     */
    #manager

    constructor(headerArray, manager){
        this.#manager = manager

        const table = document.createElement("table")
        document.body.appendChild(table)
        const thead = document.createElement("thead")
        table.appendChild(thead)
        const trHead = document.createElement("tr")
        thead.appendChild(trHead)
        const tbody = document.createElement("tbody")
        this.#tbody = tbody
        table.appendChild(tbody)
        

        for(const x of headerArray){
            createTableCell("th", x.name, trHead)
        }
    }

    /**
     * 
     * @param {TableCallback} callback 
     */
    setAppendRow(callback){
        this.#manager.addCallback = (elem) =>{
            callback(this.#tbody, elem)
        }
    }


}

export {Table}