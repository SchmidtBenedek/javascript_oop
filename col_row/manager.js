/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions"
 * 
 * @callback addCallback
 * @param {ColspanType | RowspanType} element
 * @returns {void}
 **/

class Manager{
    /**
     * @type {ColspanType[] | RowspanType[]} 
     */
    #dataArray

    /**
     * @type {addCallback}
     */
    #addCallback

    constructor(){
        this.#dataArray = []
    }

    /**
     * 
     * @param {ColspanType | RowspanType} element
     * @returns {void}
     *  
     */
    addElement(element){
        this.#dataArray.push(element)

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