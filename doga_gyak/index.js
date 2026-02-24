import { Manager } from "./manager2.js";
import data from "./data.json" with {type: "json"}
import { Table } from "./table2.js";
import { tbodyRenderColspan, tbodyRenderRowspan } from "./functions.js";
import { FormController } from "./form.js";

const manager = new Manager()
const tableColspan = new Table(data.colspanHeaderArray, manager) //colspanos
const formColspan = new FormController(data.colspanFormFieldList, manager)
const tableRowspan = new Table(data.rowspanHeaderArray, manager) //rowspanos
const formRowspan = new FormController(data.colspanFormFieldList, manager)

console.log(data) //egeszet kiiratom mert miert ne
console.log(manager)

tableColspan.setAppendRow(tbodyRenderColspan)


for(const x of data.colspanDataArr){
    manager.addElement(x)
}


tableRowspan.setAppendRow(tbodyRenderRowspan)
for(const x of data.rowspanTableArray){
    manager.addElement(x)
}


