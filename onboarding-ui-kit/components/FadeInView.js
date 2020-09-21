import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

const FadeInView = ({trigger, delay, ...props}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      delay: delay || 400,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim, trigger, delay]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
