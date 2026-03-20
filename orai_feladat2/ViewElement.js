import { SelectManager } from "./selectManager.js";

class viewElement{
    /**
     * @type {SelectManager}
     */
    #manager

    /**
     * @type {HTMLDivElement}
     */
    #container

    /**
     * 
     * @param {SelectManager} manager 
     */
    constructor(manager){
        this.#manager = manager
        this.#container = document.createElement("div")

    }
}