class Person{
  constructor(name){
    this.name = name ;
  }
  

  printNameArrow(){
    setTimeout(()=>{
      console.log('Arrow: '+ this.name);
    }, 100)
  }

  printNameFunction(){
    console.log("printNameFunction ", this);
    setTimeout(function(){ //window.setTimeout this point to window's 
      console.log('Function: '+ this.name);
    }.bind(this), 100);
  }
}
let name = 'Tony';
let person = new Person('Bob');
person.printNameArrow();
person.printNameFunction();