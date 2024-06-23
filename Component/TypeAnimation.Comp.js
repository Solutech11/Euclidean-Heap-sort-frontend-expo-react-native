import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TypingAnimation = ({ text, speed = 100,styless }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <View style={styles.container}>
      <Text style={styless}>{displayedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 20,
    fontFamily: 'monospace',
  },
});

export default TypingAnimation;
