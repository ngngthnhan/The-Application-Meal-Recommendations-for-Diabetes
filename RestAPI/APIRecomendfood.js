import { useEffect, useState } from "react";

export default function RecomendScreen({ navigation }) {
  const [suggestedFoods, setSuggestedFoods] = useState([]);

  const fetchSuggestedFoods = async () => {
    try {
      const response = await fetch("http://localhost:2612/suggest-meal", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      setSuggestedFoods(data.suggested_meals);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchSuggestedFoods();
  }, []);

  return (
    <div>
      {/* Hiển thị suggestedFoods ở đây */}
    </div>
  );
}
