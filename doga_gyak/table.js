/**
 * @import {ColspanType, RowspanType, HeaderArrayType} from "./functions.js"
 * 
 * 
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns {void}
 * 
 */
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

    /**
     * 
     * @param {HeaderArrayType} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager){

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