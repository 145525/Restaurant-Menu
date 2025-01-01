export async function fetchUsers() {
  const url = "https://dummyjson.com/users";
  
  var response = await fetch(url);
  var data = await response.json();
  
  return data.users;
  }