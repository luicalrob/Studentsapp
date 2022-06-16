const API_URL = "https://tractorwebappapi.azurewebsites.net/api";

export async function getAllStudents() {
  try {
    const response = await fetch(`${API_URL}/student`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error(error);
  }
}


export async function getStudentById(id) {
  try {
    const response = await fetch(`${API_URL}/student/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}