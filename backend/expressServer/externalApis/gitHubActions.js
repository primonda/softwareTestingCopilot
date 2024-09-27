export const githubActionsToken = async () => {
    const url = 'https://api.github.com/user';
    const token = 'USER-ACCESS-TOKEN'; // Replace with your actual token
      
    try {
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
        });
    
        if (response.ok) {
        const data = await response.json();
        console.log(data); // Process the JSON data as needed
        } else {
        console.error('Request failed:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}