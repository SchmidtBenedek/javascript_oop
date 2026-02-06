

/**
 * @import {"./functions.js"}
 * 
 * @callback addCallback
 * @param {ColspanType | RowspanType} param
 * @returns {void}
 * 
 * 
 **/

import { Manager } from "./manager.js";
import data from "./data.json" with {type: "json"}
import { Table } from "./table.js"

const manager = new Manager()

const table = new Table(data.colspanHeaderArray, manager)

table.setAppendRow((tbody, elem) =>{
    const tr = document.createElement("tr")
    tbody.appendChild(tr)
    
    const nevTd = document.createElement("td")
    tr.appendChild(nevTd)
    nevTd.innerText = elem.neve

    const korTd = document.createElement("td")
    tr.appendChild(korTd)
    korTd.innerText = elem.kor

    const szerelem1Td = document.createElement("td")
    tr.appendChild(szerelem1Td)
    szerelem1Td.innerText = elem.szerelme1

    const szerelem2Td = document.createElement("td")
    tr.appendChild(szerelem2Td)
    szerelem2Td.innerText = elem.szerelme2
})



for(const x of data.colspanDataArr){
    manager.addElement(x)    
}

