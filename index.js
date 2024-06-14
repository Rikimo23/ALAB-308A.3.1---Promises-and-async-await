// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {

  //Check values outside of the range( 1 and 10)
  if(typeof id !== "number"){ return Promise.reject(new Error("Invalid Input -- Not a Number"))};
  if (id < 1 || id > 10) { return Promise.reject (new Error("Invalid Input -- Out of Range"))};

  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  try{
  
  //Determine database to access for a particular user's information.
  const centralDB = await central(id);

  //Access databases that contains the user's basic information, including username, website, and company. 
  const userInfo = await dbs[centralDB](id)
    
  //Fetch personal data for each user is contained within the vault database 
  const userPersonalData = await vault(id);

// Return an object containing the data specified on the asigment.
  return{
      id,
      name: userPersonalData.name,
      username: userInfo.username,
      email: userPersonalData.email,
      address: userPersonalData.address,
      phone: userPersonalData.phone,
      website: userInfo.website,
      company: userInfo.company

  }
}catch(e){
  console.log(e.message)}
}

//Call the function with 2 as paramenter. Use then to retrive data and catch to print out errors
getUserData(2)
.then(data => console.log(data))
.catch(error => console.log(error.message))