import Props from "./src/assets/components/TouristLocation";

export default function App() {
  const image = {
    uri: "https://h8f7z4t2.stackpathcdn.com/wp-content/uploads/2019/12/coliseu-roma.jpg",
  };
  return (
    <Props
      name="Coliseu"
      imageSource={image}
      addres="Piazza del Colosseo, 1, 00184 Roma RM, Itália"
      description="O Coliseu de Roma é o maior anfiteatro do mundo e um dos maiores símbolos da cidade italiana. Inicialmente, ele possuía três andares e depois foi adicionado outro. O Coliseu possui 45 metros de altura, que corresponde a um prédio de dois andares. O Coliseu foi construído com concreto e areia."
    />
  );
}
