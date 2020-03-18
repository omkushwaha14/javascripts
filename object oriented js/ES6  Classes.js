class person{
    constructor(name,age,sex) {
        this.name=name
        this.age=age
        this.sex=sex
    }
}

 class student extends person{
    constructor(name,age,sex,school){
        super(name,age,sex)
        this.school=school
    }
}
let p=new person('harry',15,'male')
let p2=new student('om',18,'male','moonlight')
console.log(p)
console.log(p2)