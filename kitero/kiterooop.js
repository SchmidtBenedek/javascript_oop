//ugyanaz mint kiteronel csak mashogy
class Student{
    constructor(name){
        this.name = name
        this.askQuestionNumber = 0
    }

    askQuestion(){
        console.log("???");
        this.askQuestionNumber++
    }
}

class StudentWithWork extends Student{
    constructor(name){
        super(name)
        this.workDone = 0
    }
    doWork(){
        this.workDone ++
    }

}


const stu1 = new Student("Benedek")
console.log(stu1)

const stu3 = new StudentWithWork("Pikachu")
stu3.askQuestion()
console.log(stu3)

stu3.askQuestion()
stu3.doWork()
console.log(stu3)