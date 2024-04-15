# Bombardier React Native Library

# Buttons

Basic button component that is styled with the base colours and fonts of Bombardier. Allows for very minimal UI changes and therefore should use the base Button react-native components that will better fit your needs.

## Example

```javascript
    <Button
        title="Button Text"
        fill={true}
        rightIcon={<Feather name="arrow-right" size={20}/>}
        onPress={() => Alert.alert("Button Pressed")}
        disabled={false}/>
```

## Props
### onPress
Type: VoidFunction\
Event handler that will run when the button has been pressed with the argument being in the form of a PressEvent.

### title
Type: String\
Text to be displayed on the button that will always be displayed in upper case.

### leftIcon && rightIcon
Type: VectorIcon\
Icons that can be added to be displayed on either the left or the right side of the button title. 

### fill
Type: Boolean\
When set to true, the button will be styled to be filled.

|Fill|Production|
|----|----------|
| true | ![Filled](./Assets/FilledButton.png) |
| false | ![NonFilled](./Assets/Button.png) |

### disabled
Type: Boolean\
When set to true, all the interactions of the button will be disabled.

---------------------------------------

# Radio Button

Base component that produces a single radio button element styled to the Bombardier standards. 

Please note that to have the radio button effect, use RadioButton.Group from react-paper, this is not a native feature in ReactNative.

## Example

```javascript
    <RadioButton.Group value={value}>
        <Radio value={"button1"} onPress={onPress} status={"checked"}/>
        <Radio value={"button2"} onPress={onPress}/>
    </RadioButton.Group>
```
## Props

### value
Type: String\
The value of the radio button

### status 
Values: "checked" | "unchecked"\
Status of the radio button

### onPress
Type: (selectedId: String) => void\
Event handler of the radio button when seleceted. Passes in as an argument the value of the button selected.

### disabled
Type: Boolean\
If set to true all interactions of the radio button are disabled

---------------------------------------

# Search Bar

Base Molecule that generates a Bombarider standard search bar with a text insert as well as a search icon.

## Example

```javascript
    <SearchBar 
        onSearch={(text) => Alert.alert(text)}
        placeHolder={"Larger"} 
        height={100} 
        width={300} 
        fontSize={30}/>
```

## Props
### placeHolder
Type: String\
Text to be displayed when user has not entered anything in the search bar

### onSearch
Type: (searchValue: string) => void\
Event handler that deals with the click of the search icon

### height
Type: Number\
Allows to override the base height of the search box

### width
Type: Number\
Allows to override the base width of the search box

### fontSize
Type: Number\
Allows to override the base fontSize of the text in the search bar

---------------------------------------

# Quantity Picker

Base Molecule that represents a quantity picker based on the Bombardier standards. Please note that the state of the value should be managed by the parent component.

## Example

```javascript
    <QuantityPicker 
        size={"xSmall"} 
        onValueChange={onChange} 
        value={value}/>
```

## Props
### value 
Type: number\
The value of which the quantity picker currently has

### onValueChange
Type: (newValue: number) => void\
Event handler that will deal with the change of value that occurs when either the increase or decrease icon are clicked.

### Size
Type: "xSmall" | "small" | "normal" | "large"\
Allows to have the quantity changer to scale in size

---------------------------------------

# DropDown

Base molecule that represents a basic drop down menu.

## Example

```javascript
    <DropDown 
        items={items} 
        value={value} 
        onValueChange={(newValue) => setValue(newValue)}/>
```

## Props

### height
Type: number\
Can specify a height to override the base height of the component

### width
Type: number\
Can specify a width to override the base width of the component

### items
Type: String[]\
List of items to be placed in the drop down list

### value
Type: String\
Current value of the dropdown list

### onValueChange
Type: (value, index) => Void\
Event handler that is called everytime the value of the drop down changes.