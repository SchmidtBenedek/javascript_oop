/**
 * @import {ColspanType, RowspanType} from "./functions.js"
 * 
 * @callback addCallback
 * @param {ColspanType | RowspanType} element
 * @returns {void}
 */

class Manager{
    /**
     * @type {ColspanType[] | RowspanType[]}
     */
    #dataArr

    /**
     * @type {addCallback}
     */
    #addCallback

    constructor(){
        this.#dataArr = []
    }

    /**
     * 
     * @param {ColspanType | RowspanType} element
     * @returns {void}
     */
    addElement(element){
        this.#dataArr.push(element)

        if(this.#addCallback){
            this.#addCallback(element)
        }
    }
    /**
     * @param {addCallback} value
     */
    set addCallback(value){
        this.#addCallback = value
    }
}

export {Manager}