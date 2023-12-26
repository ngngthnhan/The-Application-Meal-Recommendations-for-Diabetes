import { useState } from "react";

const CheckOwnFoodScreen = ({ navigation }) => {
  const [calories, setCalories] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');
  const [protein, setProtein] = useState('');

  const saveNutritionData = async () => {
    try {
      const response = await fetch('http://localhost:2612/save_nutrition_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          calories: calories,
          carbs: carbs,
          fats: fats,
          protein: protein,
        }),
      });

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
}

