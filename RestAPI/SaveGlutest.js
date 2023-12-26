import { useState } from "react";


const HomeScreen = ({ navigation }) => {
  const [bloodSugar, setBloodSugar] = useState("");

  const saveBloodSugar = async () => {
    try {
      let type = bloodSugar > 125 ? 2 : 1; 

      const response = await fetch("http://localhost:2612/save_blood_sugar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blood_sugar: bloodSugar, type: type }), 
      });

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error("Error:", error);
    }
  };
}

