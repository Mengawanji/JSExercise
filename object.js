
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





// we have an object salaries

// Write a function that takes this object and returns the sum of all salaries

function TotalSalary(a) {
    let sum = 0;
    for (let key in a) {
      sum += a[key];
    }
    return sum;
  }
  
  
  
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
   }
  
   console.log(TotalSalary(salaries)); 
   
  
   
  
  // Write another function that multiplies all salaries by 3 and returns the new object
  
  
  function multiSalaries(b) {
    let newSalaries = {};
  
    for (let key in b) {
      if (b.hasOwnProperty(key)) {
        newSalaries[key] = b[key] * 3;
      }
    }
    return newSalaries;
  } 
  
  console.log(multiSalaries(salaries)); 


    

