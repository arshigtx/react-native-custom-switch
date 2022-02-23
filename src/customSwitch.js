import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Animated, LayoutAnimation } from 'react-native';

import hexToRgb from './utils';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function CustomSwitch({ 
  buttonWidth,
  buttonPadding,
  buttonColor,
  buttonBorderWidth,
  buttonBorderColor,
  buttonText,
  switchWidth,
  switchBackgroundColor,
  onSwitchRight,
  onSwitchLeft,
  onSwitchButtonText,
  onswitchBackgroundColor,
  animationSpeed,
  startOnLeft, 
}) {
  
  const [ toggleRight, setToggleRight ] = useState(startOnLeft === true ? true : false);

  const colorAnim = useRef(new Animated.Value(0)).current;
  const colorAnimInterpolation = onswitchBackgroundColor && useRef(colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange:[
      switchBackgroundColor ? hexToRgb(switchBackgroundColor) : hexToRgb('#BBD8B3'), 
      hexToRgb(onswitchBackgroundColor)
    ]
  })).current;


  const layoutAnim = {
    Opacity: () => (
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          animationSpeed ? animationSpeed : defaultValues.animationSpeed, 
          LayoutAnimation.Types.Spring,
          LayoutAnimation.Properties.opacity
        )
      )
    )
  }

  const changeToggle = () => {
    setToggleRight(!toggleRight);
  }

  const changeColor = () => {
    if (toggleRight) {
      Animated.timing(
        colorAnim, 
        {
          toValue: 1,
          duration: animationSpeed ? animationSpeed : defaultValues.animationSpeed, 
          useNativeDriver: false,
      }).start()
    } else {
      Animated.timing(
        colorAnim, 
        {
          toValue: 0,
          duration: animationSpeed ? animationSpeed : defaultValues.animationSpeed, 
          useNativeDriver: false,
      }).start()
    }
  }

  useEffect(() => {
    if (toggleRight && onSwitchRight) {
      onSwitchRight();
    } else if (onSwitchLeft) {
      onSwitchLeft()
    }
    if (onswitchBackgroundColor) {
      changeColor();
      console.log(colorAnimInterpolation);
    }
  },[toggleRight])

  const defaultValues = {
    button: {
      size: { 
        width: 20,
        height: 20,
      },
      padding: 3,
      color: {
        backgroundColor: '#F3B61F'
      }
    },
    switch: {
      size: {
        width: 50,
      },
      color: {
        backgroundColor: '#BBD8B3'
      }
    },
    animationSpeed: 150
  }

  const buttonStyle = {
    height: buttonWidth 
      ? buttonWidth
      : (!buttonWidth && switchWidth)
        ? switchWidth/2
      : defaultValues.button.size.width,
    width: buttonWidth 
      ? buttonWidth
      : !buttonWidth && switchWidth 
        ? switchWidth/2
      : defaultValues.button.size.width,
    backgroundColor: buttonColor ? buttonColor : defaultValues.button.color.backgroundColor,
    borderWidth: buttonBorderWidth ? buttonBorderWidth : 0,
    borderColor: buttonBorderColor ? buttonBorderColor : null,
    borderRadius: buttonWidth 
      ? buttonWidth/2
      : (!buttonWidth && switchWidth)
        ? switchWidth
      : defaultValues.button.size.width/2,
  }

  const toggleStyle = {
    width: buttonWidth && !switchWidth 
      ? buttonWidth*2
      : (buttonWidth) >= switchWidth*0.75
        ? buttonWidth*1.1
        : switchWidth
          ? switchWidth
      : defaultValues.switch.size.width,
    backgroundColor: onswitchBackgroundColor 
      ? colorAnimInterpolation
      : switchBackgroundColor && !onswitchBackgroundColor 
        ? switchBackgroundColor
      : defaultValues.switch.color.backgroundColor,
    padding: buttonPadding ? buttonPadding : defaultValues.button.padding,
    alignItems: toggleRight ? 'flex-end' : 'flex-start',
    borderRadius: (buttonWidth && buttonPadding) 
      ? (buttonWidth + (buttonPadding/2))*2
      : (buttonWidth && !buttonPadding)
        ? (buttonWidth + (defaultValues.button.padding/2))*2
        : (!buttonWidth && buttonPadding)
          ? (defaultValues.button.size.width + (buttonPadding/2))*2
          : (switchWidth && !buttonWidth) 
            ? switchWidth*2
      : (defaultValues.button.size.width + (defaultValues.button.padding/2))*2,
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      changeToggle();
      layoutAnim.Opacity();
    }}>
      <Animated.View style={toggleStyle}>
        <View style={[styles.button, buttonStyle]}>
          {(buttonText && onSwitchButtonText)
            ? toggleRight 
              ? <Text>{onSwitchButtonText}</Text>
              : <Text>{buttonText}</Text>
            : (onSwitchButtonText && !buttonText && toggleRight)
              ? <Text>{onSwitchButtonText}</Text>
              : buttonText 
                ? <Text>{buttonText}</Text>
            : null
          } 
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

