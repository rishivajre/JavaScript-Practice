let person = {
  firstName: "Rishi",           //Object=Collection of properties!!
  lastName: "Vajre",
  age : 29,
  fullName : function(){
    return this.firstName+" "+this.lastName
    //or
    //console.log(this.firstName+" "+this.lastName)
  }
};
//How to access the properties values??
console.log(person.firstName); //retrieving data via '.' notation
console.log(person["lastName"]); //retrieving dat via array like notation
console.log('-----------------------------------------------------')

//Changing the above properties at RUN-TIME
person.firstName = "Saurabh";
console.log(person.firstName); // assigning value at RUNTIME
console.log('-----------------------------------------------------')

person.gender = "male"; // adding new property in person object at RUNTIME
console.log(person);
delete person.gender;
console.log(person);
console.log('-----------------------------------------------------')

//Print all the values of JavaScript Object
for(let key in person){
    // Print key-value pairs
    //console.log(person[key])
    console.log(`${key} : ${person[key]}`) //Intervw Quest
}
console.log('-----------------------------------------------------')

console.log(person.fullName());
