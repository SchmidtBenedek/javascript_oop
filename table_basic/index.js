/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * 
 * @callback callbackMethod
 * @param {HTMLTableSectionElement}
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]


/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

class Table{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody;
    constructor(tableHeaderArray){
        this.#tbody = makeTableBodyWithHeader(tableHeaderArray)
    }

    /**
     * @param {callbackMethod} param 
     */
    method(param) {
        param(this.#tbody)
    }

    get tbody(){
        return this.#tbody
    }
}

class ColspanTable extends Table{
    constructor(tableHeaderArray){
        super(tableHeaderArray)
    }

    /**
     * 
     * @param {ColspanRowType[]} param 
     */
    render(param){
        renderColspanBody(this.tbody, param)
    }

    
}

class RowSpanTable extends Table{
    constructor(tableHeaderArray){
        super(tableHeaderArray)
    }

    /**
     * 
     * @param {RowspanRowType[]} param
     */
    render(param) {
        renderRowspanBody(this.tbody, param)
    }
}

const colSpanTable = new ColspanTable(colspanHeaderArr)
colSpanTable.render(colspanBodyArr)

const rowSpanTable = new RowSpanTable(rowspanHeaderArr)
rowSpanTable.render(rowspanBodyArr)



const gomb = document.createElement("button")
document.body.appendChild(gomb)
gomb.innerText = "RowSpan hozzáadás"

gomb.addEventListener("click", addWithButton.bind(rowSpanTable))

/**
 * @this {RowSpanTable}
 */
function addWithButton(){
    
    /**
     *@type {RowspanRowType} objektum tipusa
     */
    const obj = {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }

    this.method(function(body){

        const row = document.createElement("tr")
        body.appendChild(row)

        const cell1 = document.createElement("td")
        cell1.innerText = obj.author
        row.appendChild(cell1)

        const cell2 = document.createElement("td")
        cell2.innerText = obj.title1
        row.appendChild(cell2)

        const cell3 = document.createElement("td")
        cell3.innerText = obj.concepts1
        row.appendChild(cell3)

        const cell4 = document.createElement("td")
        cell4.innerText = obj.title2
        row.appendChild(cell4)

        const cell5 = document.createElement("td")
        cell5.innerText = obj.concepts2
        row.appendChild(cell5)
    })
}

