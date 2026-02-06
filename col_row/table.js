/**
 * @import {} from "./functions"
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} 
 * @returns {void}
 */

import { Manager } from "./manager.js"

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
        /**
         * @type {Manager}
         */
        this.#manager = manager
        

        const table = document.createElement("table")
        const tHead = document.createElement("thead")
        const tBody = document.createElement("tbody")
        this.#tbody = tBody
        const trHead = document.createElement("tr") 


        document.body.appendChild(table)
        table.appendChild(tHead)
        table.appendChild(tBody)
        tHead.appendChild(trHead)

        for(const x of headerArray){
            const th = document.createElement("th")
            trHead.appendChild(th)
            th.innerText = x.name
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