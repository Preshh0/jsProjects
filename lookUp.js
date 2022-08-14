/*
Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (characteristics of that contact) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact. //1. Is name in the array? Is the property related to that name?

If both are true, then return the "value" of that property. //2. If they're both there, return the values in the property

If name does not correspond to any contacts then return the string No such contact. //3. If the name is not there, return 'No such contact.'

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. //4. If contact is not there, return 'no such property'
//Prop == key, 

*/
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Akira",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name || contacts[i].lastName === name) {
      // return contacts[i][prop] ? contacts[i][prop] : "No Such Property"
      if (contacts[i][prop]) {
        return contacts[i][prop];
      }
      return "No such Property";
    }
    return "No Such Contact";
  }
  
  //Using the map/filter function 

  // const contact = contacts.filter(contact => contact.firstName == name || contact.lastName == name).map(contact => contact[prop] ? contact[prop] : "No Such Property")
  // return contact.length > 0 ? contact : "No Such Contact"

  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
