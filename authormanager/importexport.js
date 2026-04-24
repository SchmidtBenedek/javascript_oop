import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewElement.js";

class ImportView extends ViewElement{ //definiáljuk az imprtView osztályt, leszármazik a Viewelementből
    /**
     * @type {AuthorManager}
     */
    #manager //privát manager tulajdonság definiálása
    /**
     * 
     * @param {string} id 
     * @param {AuthorManager} manager 
     */
    constructor(id, manager){ //konstruktor definiálása
        super(id) //szülő osztály konstruktorának meghívása
        this.#manager = manager //manager tulajdonságnak érték megadása

        const fileInput = document.createElement("input") //input létrehozása
        fileInput.type = "file" //típusának "file" ra állítása
        this.div.appendChild(fileInput) //input hozzáfűzése a divhez
        const resultDiv = document.createElement("div") //resultDiv hozzácsatolása a divhez
        this.div.appendChild(resultDiv)
        this.#manager.importResultCallback = (message) => { //importResultCallback függvény definiálása (hívjuk az AuthorManager.addElementList függvényben)
            resultDiv.innerText = message //resultDiv tartalmának beállítása
            setTimeout(()=> { //setTimeout hívása
                resultDiv.innerText = "" //tartalma törlése a resultDivnek
            }, 1500) //1,5 mp múlva

        }
        fileInput.addEventListener("change", (e) => { //input change eseményére való feliratkozás
            const file = e.target.files[0] //elkérjük az esemény targetének a files tulajdonságából az 1. element
            const reader = new FileReader() //példányosítjuk a FileReader osztályt
            reader.readAsText(file, "UTF-8") //beolvassuk a filet
            reader.onload = () => { //feliratkozunk a reader load eseményére a callbackel (akkor fut le, ha a file beolvasása a memóriába sikeres volt)
                /**
                 * @type {import("./index.js").AuthorType[]}
                 */
                const result = [] //üres result tömböt hozunk létre
                const fileContent = reader.result //elkérjük a fileReader példány result tulajdonságát
                const fileContentLines = fileContent.split("\n") //szétválaszjuk a fájl tartalmát soronként
                for(const line of fileContentLines){ //végéigiterálunk a sorokon
                    const data = line.split(";") //szétbálasztjuk a sorokat ";" ként
                    /**
                     * @type {import("./index.js").AuthorType}
                     */
                    const authorType = { //deklarálunk egy author tipusu objektumot
                        author: data[0], //ahol az author a sor első ;-ig tartó string
                        work: data[1], //ahol az author a sor második ;-ig tartó string
                        concept: data[2] //ahol az author a sor náodik; után tartó string
                    }
                    result.push(authorType) //hozzáadjuk az objektumot a result tömbhöz
                }
                this.#manager.addElementList(result) //meghívjuk a tömbbel az AuthorManager.addElementList metódusát
            }

        })

        const exportButton = document.createElement("button")  //gombot hozunk létre
        exportButton.innerText = "Export" //export felirattal
        this.div.appendChild(exportButton) //hozzáadjuk a divhez

        exportButton.addEventListener("click", () => { //feliratkozunk a gomb "click" eseményére
            const a = document.createElement("a") //létrehozunk 1 linket
            const fileContent = this.#manager.getExportString() //elkérjük az authorok string reprezentációját az AuthorManagertől
            const file = new Blob([fileContent]) //példányosítunk egy Blobot, amelynek megadunk egy tömböt, ami tartalmazza az authorok string reprezentációját
            const fileUrl = URL.createObjectURL(file) // létrehozunk 1 URL-t a Blob alapján
            a.href = fileUrl //megadjuk a link href-jének a létrehozott Blob URL-jét
            a.download = "export.csv" //megadjuk a letöltendő fájl nevét
            a.click() //clickelünk a linken
            URL.revokeObjectURL(a.href) //visszavonjuk a Blob linkjét az URL.jén
        })
    }
}

export {ImportView} //exportáljuk az osztályt