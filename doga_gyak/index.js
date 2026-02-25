import { Manager } from "./manager2.js";
import { Table } from "./table2.js";
import data from "./data.json" with {type: "json"}
import { tbodyRenderColspan } from "./functions.js";
import { FormController } from "./form2.js";

const manager = new Manager()

const table = new Table(data.colspanHeaderArray, manager)
const formCol = new FormController(data.colspanFormFieldList, manager)

table.setAppendRow(tbodyRenderColspan)

for(const x of data.colspanDataArr){
    manager.addElement(x)
}