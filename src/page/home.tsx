import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Props } from "../types/navigation.types";
import Shop from "../assets/images.jpeg"

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <View>
          <Text style={styles.title}>Loja de carros</Text>
        </View>
        <View>
          <Image style={styles.image}  source={Shop}/>
        </View>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora temporibus qua0s expedita eveniet. Corrupti fugit facere modi explicabo possimus esse temporibus accusamus voluptatibus distinctio consequuntur reprehenderit quidem, beatae ad consequatur?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="See all cars" onPress={() => navigation.navigate("Cars")} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",  
},
  buttonContainer: {
    marginBottom: 30,  
  },
  image: {
    width: "100%", 
    height: undefined,
    aspectRatio: 1.5, 
    resizeMode: "contain",
    marginVertical: 16, 
  },
  centerContainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 32,       
    fontWeight: "bold", 
    color: "#333",     
    marginBottom: 16,   
  },
});
