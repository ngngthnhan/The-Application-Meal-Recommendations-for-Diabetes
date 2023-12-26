import { useState } from "react";

const unitWeight = [
  { key: "lb", title: "lb" },
  { key: "kg", title: "kg" },
];

export default function WeightAccount() {
  const [unit, setUnit] = useState("kg");
  const [weight, setWeight] = useState('');

  const saveWeight = async () => {
    try {
      const response = await fetch('http://localhost:2612/save_weight', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ weight }),
      });

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
}
