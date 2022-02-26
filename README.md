# React-Native-Custom-Switch
A lightweight, fully customizable switch component for React Native.

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/34407628/155825397-eb27d759-e505-4fdb-9f8a-f3eb17a34bde.gif)

## Installation 
```jsx
npm install react-native-custom-switch
```

## Usage
```jsx
import CustomSwitch from 'react-native-custom-switch';

<CustomSwitch />
```

### Basic Usage

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/34407628/155826266-9ec93534-87d5-4fe1-a097-192152ce527c.gif)

Provide a callback function to ```onSwitch()``` which will be called when the switch is pressed.
```jsx
<CustomSwitch 
  onSwitch={() => changeToDarkTheme()>
/>
```

### Flexible Sizing

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/34407628/155826449-efefb3b6-823f-45bc-a18b-437110b2f975.gif)

```jsx
<CustomSwitch 
  onSwitch={() => sayHello()>
  buttonWidth={20}
  switchWidth={100}
  buttonPadding={2}
/>
```

### Customizable Colors
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/34407628/155826703-0c8065f6-29c6-4321-b03f-af7746013094.gif)

```jsx
<CustomSwitch 
  buttonColor={'#EFE6DD'}
  switchBorderColor={'#F3DFA2'}
  buttonBorderColor={'#997048'}
  switchBackgroundColor={'#7EBDC2'}
  onSwitchBackgroundColor={'#BB4430'}
/>
```

### Add background Text, and customize the style
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/34407628/155827020-c2a4f152-d50d-47be-a393-f4bda534768d.gif)

```jsx
<CustomSwitch 
  switchLeftText={"Tea"}
  switchLeftTextStyle={{color: 'green', fontSize: 24}}
  switchRightText={"Coffee"}
  switchRightTextStyle={{color: 'brown', fontSize: 24}}
/>
```
### Add text to the button
![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/34407628/155827449-f63f49cc-85fc-4a2a-8218-6e4f128bab73.gif)
```jsx
<CustomSwitch 
  switchLeftText={"Tea"}
  switchLeftTextStyle={{color: 'green', fontSize: 24}}
  switchRightText={"Coffee"}
  switchRightTextStyle={{color: 'brown', fontSize: 24}}
/>
```

### ...including Emojis
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/34407628/155827223-40a82499-ae10-4d09-9ff7-c6cfdace0200.gif)  
```jsx
<CustomSwitch 
  buttonText={'Hello'}
  onSwitchButtonText={'Bye'}
/>
```
## Props Reference
Props | Description | Default | 
--- | --- | --- |
buttonWidth | 301 | 20 | 
--- | --- | --- |
buttonPadding | 301 | 0 | 
--- | --- | --- |
buttonColor | 301 | 0 | 
--- | --- | --- |
buttonBorderWidth | 301 | 0 | 
--- | --- | --- |
buttonBorderColor | 301 | 0 | 
--- | --- | --- |
buttonText | 301 | 0 | 
--- | --- | --- |
buttonTextStyle | 301 | 0 |
--- | --- | --- |
switchWidth | 301 | 0 |
--- | --- | --- |
switchBackgroundColor | 301 | 0 |
--- | --- | --- |
switchBorderWidth | 301 | 0 |
--- | --- | --- |
switchBorderColor | 301 | 0 |
--- | --- | --- |
switchLeftText | 301 | 0 |
--- | --- | --- |
switchLeftTextStyle | 301 | 0 |
--- | --- | --- |
switchRightText | 301 | 0 |
--- | --- | --- |
switchRightTextStyle | 301 | 0 |
--- | --- | --- |
onSwitch | 301 | 0 |
--- | --- | --- |
onSwitchReverse | 301 | 0 |
--- | --- | --- |
onSwitchButtonText | 301 | 0 |
--- | --- | --- |
onSwitchButtonTextStyle | 301 | 0 |
--- | --- | --- |
onSwitchBackgroundColor | 301 | 0 |
--- | --- | --- |
animationSpeed | 301 | 0 |
--- | --- | --- |
startOnLeft | 301 | 0 |
--- | --- | --- |
disabled | 301 | 0 |
