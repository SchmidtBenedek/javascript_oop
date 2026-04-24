/**
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 * 
 * @callback AddElementResultCallback
 * @param {string} message
 * @returns {void}
 * 
 * @callback ImportResultCallback
 * @param {string} message
 * @returns {void}
 * 
 */

class Author{ //definiálunk 1 Author entitás osztályt
    /**
     * @type {string}
     */
    #id //definiálunk egy id privát tulajdonságot és így tovább....

    /**
     * @type {string}
     */
    #name //definiálunk egy name privát tulajdonságot és így tovább....

    /**
     * @type {string}
     */
    #work //definiálunk egy work privát tulajdonságot és így tovább....

    /**
     * @type {string}
     */
    #concept //definiálunk egy concept privát tulajdonságot és így tovább....

    get id(){ //definiálunk gettert
        return this.#id //visszatérünk a privát tulajdonsággal
    }

    get name(){ //definiálunk gettert
        return this.#name //visszatérünk a privát tulajdonsággal
    }

    get work(){ //definiálunk gettert
        return this.#work //visszatérünk a privát tulajdonsággal
    }

    get concept(){ //definiálunk gettert
        return this.#concept //visszatérünk a privát tulajdonsággal
    }

    set id(value){ //definiálunk settert
        this.#id = value //beállítjuk
    }

    set name(value){ //definiálunk settert
        this.#name = value //beállítjuk
    }

    set work(value){ //definiálunk settert
        this.#work = value //beállítjuk
    }

    set concept(value){ //definiálunk settert
        this.#concept = value //beállítjuk
    }

    /**
     * @returns {boolean}
     */
    validate(){ //definiálunk egy validate függvényt a példánynak
        return this.#name && this.#concept && this.#work // ha mindennek helyes értéke van, akkor igazzal tér vissza, egyébként hamis
    }
}

class AuthorManager{ //definiáljuk az AuthorManager osztályt
    /**
     * @type {Author[]}
     */
    #authorList //definiálunk egy privát authorList tulajdonságot

    /**
     * @type {TableCallback}
     */
    #tableCallback //definiálunk egy privát tablecallback tulajdonságot

    /**
     * @param {AddElementResultCallback}
     */
    #addElementResultCallback //definiálunk egy privát addelementresult tulajdonságot

    /**
     * @type {ImportResultCallback}
     */
    #importResultCallback //definiálunk egy privát importResultCallback tulajdonságot (lásd addElement)

    /**
     * @param {TableCallback} value 
     */
    set tableCallback(value){ //definiálunk 1 settert a tableCallbacknek (hívjuk a Table-be)
        this.#tableCallback = value //értéket adunk a privát tulajdonságának
    }

    /**
     * @param {AddElementResultCallback} value 
     */
    set addElementResultCallback(value){ //definiálunk 1 settert az addElementResultCallbacknek (hívjuk a FormView-be)
        this.#addElementResultCallback = value //értéket adunk a callbacknek
    }

    /**
     * @param {ImportResultCallback} value 
     */
    set importResultCallback(value){
        this.#importResultCallback = value
    }

    constructor(){ //definiálunk 1 konstruktort
        this.#authorList = [] //inicializáljuk az authorListet üres tömbbel
    }

    /**
     * 
     * @param {import(".").AuthorType} element 
     * @returns {void}
     */
    addElement(element){ //definiáljuk az addElement függvényt
        const author = new Author() //példányosítunk 1 Authort
        author.id = this.#authorList.length //id tulajdonság értékét beéllítjuk a következő indexre
        author.name = element.author //beállítjuk a name tulajdonságot
        author.work = element.work //beállítjuk a work tulajdonságot
        author.concept = element.concept//beállítjuk a concept tulajdonságot
        if(author.validate()){ //meghívjuk a validate függvényét az author példánynak (lásd Author.validate) és ha valid
            this.#authorList.push(author) //hozzáadjuk a listához az elemet
            this.#addElementResultCallback("Sikeres elemfelvétel") //és meghívjuk az addElementResultCallbacket a stringgel
        }
        else{ //egyébként
            this.#addElementResultCallback("Nem volt sikeres az elemfelvétel")// meghívjuk az addElementResultCallbacket a stringgel
        }
        
    }

    /**
     * 
     * @param {import(".").AuthorType[]} elementList 
     */
    addElementList(elementList){ //definiáljuk az addElementList függvényt
        for(const elem of elementList){ //végigiterálunk az elementlistán
            const author = new Author() //példányosítjuk az Authort
            author.id = this.#authorList.length //id beállítása
            author.name = elem.author //name beállítása
            author.work = elem.work //work beállítása
            author.concept = elem.concept //concept beállítása

            if(author.validate()){ //meghívjuk a validate függvényt (lásd Author.validate)
                this.#authorList.push(author) //ha valid hozzáadjuk az authorlistához
                this.#importResultCallback("Sikeres volt.") //meghívjuk az importResultCallbacket
            }
            else{
                this.#importResultCallback("Sikertelen muvelet.") //meghívjuk az importResultCallbacket
                break //megállítjuk a ciklus futását, új elemet nem fogunk vizsgálni, hogy megfelel-e
            }
        }
    }

    /**
     * @returns {void}
     */
    getAllElement(){ //definiáljuk a függvényt
        this.#tableCallback(this.#authorList) //meghívjuk a tableCallbacket (implementáció: lásd Table)
    }

    /**
     * @returns {string}
     */
    getExportString(){ //definiáljuk a függvényt
        const result = [] //definiálunk egy üres tömböt
        for(const author of this.#authorList){ //végigiterálunk az authorlist tulajdonság értékein
            result.push(`${author.name};${author.work};${author.concept}`) //hozzáadjuk a tömbhöz a string reprezentációját az entitásnak
        }
        return result.join("\n") //joinoljuk egy sortörés karakterrel a tömb string elemeit (használjuk lásd ImportExport)
    }

}



export {AuthorManager}