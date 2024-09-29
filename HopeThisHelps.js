import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const NatashaAndJohnny = () => {
  // State for obsessed and Natasha's liking of Johnny's point of view
  const [obsessed, setObsessed] = useState(0);  // initial obsession level
  const [natashaLikingJohnnysView, setNatashaLikingJohnnysView] = useState(0);  // Natasha's liking of Johnny's point of view

  // Function to increment obsessed and conditionally increase Natasha's liking of Johnny's POV
  const incrementObsessed = () => {
    setObsessed(prevObsessed => {
      const newObsessed = prevObsessed + 1;
      
      // If obsessed is incrementing, Natasha's liking of Johnny's point of view increases
      if (newObsessed > prevObsessed) {
        setNatashaLikingJohnnysView(prevLiking => prevLiking + 1);
      }

      return newObsessed;
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Obsessed Level: {obsessed}</Text>
      <Text>Natasha's Liking of Johnny's POV: {natashaLikingJohnnysView}</Text>

      <Button title="Increase Obsession" onPress={incrementObsessed} />
    </View>
  );
};

export default NatashaAndJohnny;
