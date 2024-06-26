const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export async function central(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 1 || id > 10) throw new Error("Invalid Input -- Out of Range");

  await wait(100);
  let db = "db1";
  if (id > 4) db = "db2";
  if (id > 7) db = "db3";

  return db;
}


export async function db1(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 1 || id > 4) throw new Error("Invalid Input -- Out of Range");

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const json = await data.json();

  return {
    username: json.username,
    website: json.website,
    company: json.company
  };
}

export async function db2(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 5 || id > 7) throw new Error("Invalid Input -- Out of Range");

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const json = await data.json();

  return {
    username: json.username,
    website: json.website,
    company: json.company
  };
}

export async function db3(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 8 || id > 10) throw new Error("Invalid Input -- Out of Range");

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const json = await data.json();

  return {
    username: json.username,
    website: json.website,
    company: json.company
  };
}


export async function vault(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 1 || id > 10) throw new Error("Invalid Input -- Out of Range");

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const json = await data.json();

  return {
    name: json.name,
    email: json.email,
    address: json.address,
    phone: json.phone
  };
}
