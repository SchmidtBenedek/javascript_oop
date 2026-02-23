/**
 * @import {ColspanType, RowspanType} from "./functions.js"
 * 
 * @callback addCallback
 * @param {ColspanType | RowspanType}
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
     * @param {ColspanType | RowspanType} elment
     * @returns {void}
     */
    addElement(elment){
        this.#dataArr.push(elment)

        if(this.#addCallback){
            this.#addCallback(elment)
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