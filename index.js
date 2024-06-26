
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {

  
  if(typeof id !== "number"){ return Promise.reject(new Error("Invalid Input -- Not a Number"))};
  if (id < 1 || id > 10) { return Promise.reject (new Error("Invalid Input -- Out of Range"))};

  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  try{
  
  
  const centralDB = await central(id);

   
  const userInfo = await dbs[centralDB](id)
    
  
  const userPersonalData = await vault(id);


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


getUserData(2)
.then(data => console.log(data))
.catch(error => console.log(error.message))
