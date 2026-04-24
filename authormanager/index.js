/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

import { FormView } from "./form.js"
import { ImportView } from "./importexport.js"
import { AuthorManager } from "./manager.js"
import { NavigationBar } from "./navigationBar.js"
import { TableView } from "./table.js"

const formFields = [{ //létrehozunk 1 formField listát ami alapján példányosít a FormController
    id: 'author',
    label: 'Név',
    name: 'author'
},
{
    id: 'work',
    label: 'Mű',
    name: 'work'
},
{
    id: 'concept',
    label: 'Fogalom',
    name: 'concept'
}]

const headerArray = ['Szerző', 'Mű', 'Fogalom'] //header lista

const manager = new AuthorManager() //példányosítjuk a managert


const navbar = new NavigationBar() //példányosítjuk a navbart
navbar.appendTo(document.body) //hozzáadjuk a navbart a bodyhoz

const tableView = new TableView('table', headerArray, manager) //példányosítás
tableView.appendTo(document.body) //hozzáadjuk a bodyhoz
navbar.addViewElement('Táblázat', tableView) //hozzáadjuk a navbarhoz

const formView = new FormView('tableForm', formFields, manager)//példányosítás
formView.appendTo(document.body) //hozzáadjuk a bodyhoz
navbar.addViewElement('Form', formView) //hozzáadjuk a navbarhoz



const importExport = new ImportView("importexport", manager)//példányosítás
importExport.appendTo(document.body) //hozzáadjuk a bodyhoz
navbar.addViewElement("Import/Export", importExport) //hozzáadjuk a navbarhoz

navbar.activate('table') //meghívjuk a navbar activate metódusét a table azonosítójával