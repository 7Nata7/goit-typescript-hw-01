import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const url = 'https://api.example.com/users/1';
  
  fetchData<User>(url)
    .then(data => {
      console.log(data.id);
      console.log(data.name);
      console.log(data.email);
    })
    .catch(error => {
      console.error(error.message);
    });