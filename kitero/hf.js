// class Plate{
//     constructor(color){
//         this.color = color
//     }  
// }

// class SmallPlate extends Plate{
//     constructor(color){
//         super(color)
//         this.size = "kicsi"
//     }
// }

// class LargePlate extends Plate{
//     constructor(color){
//         super(color)
//         this.size = "nagy"
//     }
// }


// class Glass{
//     constructor(color){
//         this.color = color
//     }
// }

// const smallPlate1 = new SmallPlate("kék")
// const smallPlate2 = new SmallPlate("zöld")
// const largePlate = new LargePlate("fekete")
// const glass = new Glass("átlátszó")

// console.log(smallPlate1 )
// console.log(smallPlate2)
// console.log(largePlate)
// console.log(glass)

function Plate(color){
    this.color = color
}

function SmallPlate(color){
    Plate.call(this, color)
    this.size = "kicsi"
}

Object.setPrototypeOf(SmallPlate.prototype, Plate.prototype)

function LargePlate(color){
    Plate.call(this, color)
    this.size = "nagy"
}

Object.setPrototypeOf(LargePlate.prototype, Plate.prototype)

function Glass(color){
    this.color = color
}

const smallPlate1 = new SmallPlate("kék")
const smallPlate2 = new SmallPlate("zöld")
const largePlate = new LargePlate("fekete")
const glass = new Glass("átlátszó")

console.log(smallPlate1 )
console.log(smallPlate2)
console.log(largePlate)
console.log(glass)