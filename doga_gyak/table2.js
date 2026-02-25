/**
 * @import {ColspanType, RowspanType, HeaderArrayType} from "./functions.js"
 * 
 * @callback TableCallback
 * @param {HTMLTableCellElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns {void}
 */

import { Manager } from "./manager.js"
import { createTableCell } from "./functions.js"

class Table{

    /**
     * @type {HTMLTableCellElement}
     */
    #tbody

    /**
     * @type {Manager}
     */
    #manager

    /**
     * 
     * @param {HeaderArrayType} headerArr 
     * @param {Manager} manager 
     */
    constructor(headerArr, manager){
        this.#manager = manager

        const table = document.createElement("table")
        const thead = document.createElement("thead")
        const tbody = document.createElement("tbody")
        this.#tbody = tbody
        const trHead = document.createElement("tr")

        document.body.appendChild(table)
        table.appendChild(thead)
        table.appendChild(tbody)
        thead.appendChild(trHead)

        for(const x of headerArr){
            createTableCell("th", x.name, trHead)
        }

    }

    /**
     * 
     * @param {TableCallback} callback 
     * @returns {void}
     */
    setAppendRow(callback){
        this.#manager.addCallback = (elem) =>{
            callback(this.#tbody, elem)
        }
    }
    
}

export {Table}