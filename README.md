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
  buttonText={'Hello'}
  onSwitchButtonText={'Bye'}
/>
```

### ...including Emojis
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/34407628/155827223-40a82499-ae10-4d09-9ff7-c6cfdace0200.gif)  
```jsx
<CustomSwitch 
  switchLeftText={"☀️"}
  switchRightText={"🌙"}
/>
```
Props | Description | Example | Default | 
--- | --- | --- | --- |
buttonWidth | Adjusts the width of the button. | ```buttonWidth={20}``` | ```20``` |
buttonPadding | Adjusts the amount of padding around the button. | ```buttonPadding={5}``` | ```undefined``` |
buttonColor | Adjusts the color of the button. | ```buttonColor={'#FFFFFF'}``` | ```#FFFFFF``` |
buttonBorderWidth | Adjusts the width of the button border. | ```buttonBorderWidthbuttonBorderWidth={1}``` | ```undefined``` |
buttonBorderColor | Adjusts the color of the button border. | ```buttonBorderColor={'#D4EDE1'}``` | ```undefined``` |
buttonText | Defines the text that will appear inside of the button. | ```buttonText={"On"}``` | ```undefined``` |
buttonTextStyle | Adjusts the style of the text inside of the button. | ```buttonTextStyle={{fontSize: 18}}``` | ```undefined``` |
switchWidth | Adjust the total width of the switch. | ```switchWidth={75}``` | ```50``` |
switchBackgroundColor | Adjusts the background color of the switch. | ```switchBackgroundColor={'#0f2832'}``` | ```#D4EDE1``` |
switchBorderWidth | Adjusts the width of the switch border. | ```switchBorderWidth={2}``` | ```undefined``` |
switchBorderColor |  Adjusts the color of the switch border. | ```switchBorderColor={'#0f2832'}``` | ```undefined``` |
switchLeftText | Defines the text that appears on the left side of the switch. | ```switchLeftText={'On'}``` | ```undefined``` |
switchLeftTextStyle | Adjusts the style of the text on the left side of the switch. | ```switchLeftTextStyle={{fontSize: 18}}``` | ```undefined``` |
switchRightText |  Defines the text that appears on the right side of the switch | ```switchRightText={'Off}``` | ```undefined``` |
switchRightTextStyle | Adjusts the style of the text on the right side of the switch. | ```switchRightTextStyle={{fontSize: 18}}``` |```undefined``` |
onSwitch | Takes a callback that is called when the switch is pressed. | ```onSwitch={() => changeTheme}``` | ```undefined``` |
onSwitchReverse | Takes a callback that is called when the switch position is reversed. | ```onSwitchReverse={() => sayHello()}``` | ```undefined``` |
onSwitchButtonText | Defines the text that will appear in the button when the switch is pressed. | ```onSwitchButtonText``` | ```undefined``` |
onSwitchButtonTextStyle | Adjusts the style of the text in the button when the switch is pressed. | ```onSwitchButtonTextStyle={{fontSize: 18}}``` |```undefined``` |
onSwitchBackgroundColor | Adjusts the background color of the switch when the switch is pressed. | ```onSwitchBackgroundColor={'#0f2832'}``` | ```undefined``` |
animationSpeed | Adjuts the speed of the animation when the switch is pressed.  | ```animationSpeed={50}``` | ```150``` | 
startOnLeft | Changes the start position of the switch to the right side. | ```startOnLeft={true}``` | ```false``` |
disabled | Prevents the switch from being pressed. | ```disabled={true}``` | ```false``` |