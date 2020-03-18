function counter(init,final){
    return{
        up(){
            init=init+final;
            console.log(init)
        },
        down(){
            init=init-final;
            console.log(init)
        }
    }
}
var c= counter(10,2)
c.up();
c.down();