
// Assignments
// Write the code, one line for each action
// create an empty oject called user
// add the property name with value John
// add the property surname with value Smith
// Change the value of the name to Pete
// remove the property name from the object

// ----------------solution--------------------

user = {
    name: "John",
    surname: "Smith",
}

user["name"] = "Pete";

console.log(user.name);

delete user.name
  


// Write a function call isEmpty that returns true if an object has no property or false otherwise

user = {
    name: "John",
    surname: "Smith",
}


function isEmpty (person) {
    if (person.length === 0){
        return true;
    }else{
        return false;
    } 
}
isEmpty(user);


    

