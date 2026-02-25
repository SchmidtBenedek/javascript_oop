/**
 * @import {ColspanType, RowspanType} from "./functions.js"
 * 
 * @callback addCallback
 * @param {ColspanType | RowspanType}
 * @returns {void}
 */

class Manager{
    /**
     * @type {ColspanTypeĐ[] | RowspanType[]}
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
     * @param {ColspanType | RowspanType} elem 
     * @returns {void}
     */
    addElement(elem){
        this.#dataArr.push(elem)

        if(this.#addCallback){
            this.#addCallback(elem)
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