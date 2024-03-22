import { View, Text, Image } from "react-native";
import { estilos } from "../../../styles";

export default function Props({ name, addres, description, imageSource }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.name}> {name}</Text>
      <Image source={imageSource} style={{ width: 500, height: 500 }} />
      <Text style={estilos.addres}> {addres}</Text>
      <Text style={estilos.description}> {description}</Text>
    </View>
  );
}
