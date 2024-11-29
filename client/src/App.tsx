import { useEffect, useState } from 'react';
import axios from 'axios';
import SignIn from './components/templates/signIn/signIn';
const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/hello');
        setMessage(response.data.message); // Access the "message" property from the API response
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Failed to load message from the server.');
      }
    };

    fetchMessage();
  }, []);

  return (<><h1>{message}</h1><SignIn /></>);
};

export default App;
