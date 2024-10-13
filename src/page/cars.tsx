import axios from "axios";
import { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
import { Car as CarType } from "../types/cars.types";
import Car from "../components/car.component";

const Cars = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    axios
      .get("https://digitalinnovationone.github.io/fake-data-api-lamborghini/api/lamborghini.json")
      .then((res) => setCars(res.data.cars))
      .catch((err) => console.error(err));
  }, []);

  const changeCar = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setNumber((prev) => (prev + 1) % cars.length);
    } else if (direction === 'prev') {
      setNumber((prev) => (prev - 1 + cars.length) % cars.length);
    }
  };

  return (
    <View>
      {cars.length > 0 ? (
        <>
            <Car car={cars[number]} />
            <Button title="Previous" onPress={() => changeCar('prev')} />
            <Button title="Next" onPress={() => changeCar('next')} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Cars;
