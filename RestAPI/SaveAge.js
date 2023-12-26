import { useState } from "react";

export default function AgeAccount() {
  const [age, setAge] = useState('');

  const saveAge = async () => {
    try {
      const response = await fetch('http://localhost:2612/save_age', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ age }),
      });

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
}
 
