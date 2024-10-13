import React from 'react';
import { View, Text, Image } from 'react-native';
import { Car as CarType } from '../types/cars.types';

interface CarProps {
  car: CarType;
}

const Car: React.FC<CarProps> = ({ car }) => {
  const imageUrl = `https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/${car.id}.png`;

  return (
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 300, height: 200 }}
        resizeMode="contain"
      />
      <Text>Car Name: {car.carName}</Text>
      <Text>Release Year: {car.releaseYear}</Text>
      <Text>Price: {car.price}</Text>
    </View>
  );
};

export default Car;


