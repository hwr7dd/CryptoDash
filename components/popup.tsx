import * as React from "react";
import { Button, Overlay } from "react-native-elements";
import { Text, View } from "../components/Themed";
import { useState } from "react";
const OverlayExample = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  );
};
export default OverlayExample;
