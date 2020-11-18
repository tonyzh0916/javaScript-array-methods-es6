const items = [
  {name:"Bike", price:100},
  {name:"TV", price:200},
  {name:"Album", price:10},
  {name:"Book", price:5},
  {name:"Phone", price:500},
  {name:"Computer", price:1000},
  {name:"KeyBoard", price:25}
]

// filter 
const filteredItems = items.filter((item)=>{
  return item.price<=100;
})

console.log(items);
console.log(filteredItems);

//map
const itemnames = items.map((item)=>{
  return item.name;
})

console.log(itemnames);

//find
const foundItem = items.find((item)=>{
  return item.name ==='Book';
})

console.log(foundItem);

//for each
items.forEach((item)=>{
  //console.log(item.price);
})

// some  
// check one of them if true return true 
const hasInexpensiveItems = items.some((item)=>{
  return item.price <=100;
})
console.log(hasInexpensiveItems); //return boolean true/false

// every  
// check All of them if all true return true 
const ifInexpensiveItems = items.every((item)=>{
  return item.price <=100;
})
console.log(ifInexpensiveItems); //return boolean true/false

//reduce
const total = items.reduce((currentTotal, item)=>{
  return item.price + currentTotal
}, 0)

console.log(total);

//include
const itmes2 = [1,2,3,4,5]

const includesTwo = itmes2.includes(2);
console.log(includesTwo);
console.table("aaa "+includesTwo)

