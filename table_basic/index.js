// /** 
//  * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
//  * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
//  * @typedef {{name: string, colSpan?: number}} HeaderType
//  * 
//  * @callback callbackMethod
//  * @param {HTMLTableSectionElement}
// */

// /** @type {HeaderType[]}  */
// const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
// /** @type {HeaderType[]}   */
// const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

// /** @type {RowspanRowType[]}  */
// const rowspanBodyArr = [
//     {
//         author: "Appolliniare",
//         title1: "A megsebzett galamb és a szökőkút", 
//         concepts1: "képvers", 
//         title2: "Búcsú",
//         concepts2: "avantgárd" 
//     },
//     {
//         author: "Thomas Mann",
//         title1: "Mario és a varázsló",
//         concepts1: "kisregény" 
//     },
//     {
//         author: "Franz Kafka",
//         title1: "A per", 
//         concepts1: "képvers", 
//         title2: "Az átvlátozás", 
//         concepts2: "kisregény" 
//     }
// ]


// /** @type {ColspanRowType[]} */
// const colspanBodyArr = [ 
//     {
//         author: "Appolliniare", 
//         title: "A megsebzett galamb és a szökőkút",
//         concepts: "Képvers",  
//         concepts2: "Emlékezés", 
//     },
//     {
//         author: "Appolliniare", 
//         title: "Búcsú", 
//         concepts: "Avantgárd" 
//     },
//     {
//         author: "Thomas Mann", 
//         title: "Mario és a varázsló", 
//         concepts: "Kisregény" 
//     },
//     {
//         author: "Franz Kafka",
//         title: "A per", 
//         concepts: "regény" 
//     },
//     {
//         author: "Franz Kafka", 
//         title: "Az átváltozás",
//         concepts: "kisregény", 
//         concepts2: "groteszk" 
//     }
// ]

// // renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// // renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

// class Table{
//     /**
//      * @type {HTMLTableSectionElement}
//      */
//     #tbody;
//     constructor(tableHeaderArray){
//         this.#tbody = makeTableBodyWithHeader(tableHeaderArray)
//     }

//     /**
//      * @param {callbackMethod} param 
//      */
//     method(param) {
//         param(this.#tbody)
//     }

//     get tbody(){
//         return this.#tbody
//     }
// }

// class ColspanTable extends Table{
//     constructor(tableHeaderArray){
//         super(tableHeaderArray)
//     }

//     /**
//      * 
//      * @param {ColspanRowType[]} param 
//      */
//     render(param){
//         renderColspanBody(this.tbody, param)
//     }

    
// }

// class RowSpanTable extends Table{
//     constructor(tableHeaderArray){
//         super(tableHeaderArray)
//     }

//     /**
//      * 
//      * @param {RowspanRowType[]} param
//      */
//     render(param) {
//         renderRowspanBody(this.tbody, param)
//     }
// }

// const colSpanTable = new ColspanTable(colspanHeaderArr)
// colSpanTable.render(colspanBodyArr)

// const rowSpanTable = new RowSpanTable(rowspanHeaderArr)
// rowSpanTable.render(rowspanBodyArr)



// const gombRowSpan = document.createElement("button")
// document.body.appendChild(gombRowSpan)
// gombRowSpan.innerText = "RowSpan hozzáadás"

// const gombColSpan = document.createElement("button")
// document.body.appendChild(gombColSpan)
// gombColSpan.innerText = "ColSpan hozzáadás"

// gombRowSpan.addEventListener("click", addRowSpanWithButton.bind(rowSpanTable))
// gombColSpan.addEventListener("click", addColSpanWithButton.bind(colSpanTable))


// /**
//  * @this {RowSpanTable}
//  */
// function addRowSpanWithButton(){
    
//     /**
//      *@type {RowspanRowType} objektum tipusa
//      */
//     const obj = {
//         author: "Franz Kafka",
//         title1: "A per", 
//         concepts1: "képvers", 
//         title2: "Az átvlátozás", 
//         concepts2: "kisregény" 
//     }

//     this.method(function(body){

//         const row1 = document.createElement("tr")
//         body.appendChild(row1)

//         const cell1 = document.createElement("td")
//         cell1.innerText = obj.author
//         row1.appendChild(cell1)

//         const cell2 = document.createElement("td")
//         cell2.innerText = obj.title1
//         row1.appendChild(cell2)

//         const cell3 = document.createElement("td")
//         cell3.innerText = obj.concepts1
//         row1.appendChild(cell3)

//         if(obj.title2 && obj.concepts2){
            
//             cell1.rowSpan = 2
//             const row2 = document.createElement("tr")
//             body.appendChild(row2)
            
//             const cell4 = document.createElement("td")
//             cell4.innerText = obj.title2
//             row2.appendChild(cell4)

//             const cell5 = document.createElement("td")
//             cell5.innerText = obj.concepts2
//             row2.appendChild(cell5)
//         }
        
//     })
// }



// /**
//  * @this {ColspanTable}
//  */
// function addColSpanWithButton(){
    
//     /**
//      * @type {ColspanRowType}
//      */
//     const obj = {
//         author: "Franz Kafka", 
//         title: "Az átváltozás",
//         concepts: "kisregény", 
//         concepts2: "groteszk" 
//     }

//     this.method(function(body){
//         const row1 = document.createElement("tr")
//         body.appendChild(row1)

//         const cell1 = document.createElement("td")
//         cell1.innerText = obj.author
//         row1.appendChild(cell1)

//         const cell2 = document.createElement("td")
//         cell2.innerText = obj.title
//         row1.appendChild(cell2)

//         const cell3 = document.createElement("td")
//         cell3.innerText = obj.concepts
//         row1.appendChild(cell3)

//         if(obj.concepts2){
//             const cell4 = document.createElement("td")
//             cell4.innerText = obj.concepts2
//             row1.appendChild(cell4)
//         }
//         else{
//             cell3.colSpan = 2
//         }
//     })
// }



// const button = document.createElement('button');
// button.innerText = 'gombocska';
// document.body.appendChild(button);

// class Student {
// 	constructor(name){
// 		this.name = name
// 	}

// 	askSomething(){
// 		console.log(this.name +' kérdezett')
// 	}
// }

// class Humanoid {
// 	constructor(type){
// 		this.type = type;
// 	}

// 	doFly(){
// 	console.log(this.type + ' repül');
// 	}
// }


// const stu1 = new Student('János');
// const hu1 = new Humanoid('Kacsaember');

// function clickOnButton(){
// 	console.log('kattintva');
// }


// button.addEventListener('click', clickOnButton.bind(stu1.askSomething()))



//1.
function BlogPost (title, author, content) {
	this.title = title
	this.author = author
	this.content = content
}

//2.
function SponsoredPost(title, author, content, sponsorName) {
    BlogPost.call(this, title, author, content)
    this.sponsorName = sponsorName

   
}

SponsoredPost.prototype.display = function(){
        console.log(this.title + " " + sponsorName)
    }

Object.setPrototypeOf(SponsoredPost.prototype, BlogPost.prototype)

//3.
class Logger{
    #history
    constructor(){
        this.#history = []
    }

    get history(){
        return this.#history
    }

    log(message){
        this.#history.push(message)
    }
}

//4.
class AdvancedLogger extends Logger{
    #maxSize
    constructor(maxSize){
        super()
        this.#maxSize = maxSize
    }

    processWithCallback(callback){
        for(const x of this.history){
            callback(x)
        }
    }
}

//5.
const button = document.createElement('button');
button.innerText = 'gombocska';
document.body.appendChild(button);
class Student {
   constructor(name){
       this.name = name
   }
   askSomething(){
       console.log(this.name +' kérdezett')
   }
}
class Humanoid {
   constructor(type){
       this.type = type;
   }
   doFly(){
       console.log(this.type + ' repül');
   }
}
const stu2 = new Student('János');
const hu2 = new Humanoid('Kacsaember');
function clickOnButton(){
   console.log('kattintva');
   stu2.askSomething()
}
button.addEventListener('click', clickOnButton.bind(stu2))