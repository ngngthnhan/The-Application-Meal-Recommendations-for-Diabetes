import { useState } from "react";

const unitHeight = [
  { key: "ft", title: "ft" },
  { key: "cm", title: "cm" },
];

export default function TallAccount() {
  const [unit, setUnit] = useState("cm");
  const [height, setHeight] = useState('');

  const saveHeight = async () => {
    try {
      const response = await fetch('http://localhost:2612/save_height', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ height }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
}
