// Write your solution in this file!
// Create an employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee with key and value (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object with updated key-value pair
    return { ...employee, [key]: value };
  }
  
  // Function to update employee with key and value (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the original object and return it
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property from employee object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    // Create a copy of the object with the specified key removed
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete property from employee object (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original object
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  console.log(updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe"));
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St"));
  console.log(deleteFromEmployeeByKey(employee, "name"));
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));
  