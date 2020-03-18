function person(name ,age){
    this.name= name
    this.age=age
}
person.prototype.isAdult=function(){
    return this.age >=18
}
let p=new person('harry',19)
let p2 =new person('om',29)
console.log(p.isAdult())
console.log(p2.isAdult())