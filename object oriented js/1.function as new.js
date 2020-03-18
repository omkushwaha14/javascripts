function person(name, age,sex){
    this.name =name
    this.age=age
    this.sex =sex

}
let p= new person('harry',12,'m')
//console.log('p=' +JSON.stringify(p));
console.log(p)