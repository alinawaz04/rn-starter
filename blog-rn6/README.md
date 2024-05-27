# Upgrading the Blog app to use React Navigation v6

**Generate a brand new project:**

`npx create-expo-app blog-rn6`

**Install React Navigation v6 dependencies**

`npm install @react-navigation/native`

`npx expo install react-native-screens react-native-safe-area-context`

`npm install @react-navigation/stack`

`npx expo install react-native-gesture-handler`

**Install project dependencies:**

`npm install axios`

### App.js Outline of Changes:

1. Replace the React Navigation imports

```js
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
```

2. Add imports for TouchableOpacity and EvilIcons

```js
import { TouchableOpacity } from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";
```

3. Assign the createStackNavigator function to the Stack variable.

```js
const Stack = createStackNavigator();
```

4. Create a Provider component to wrap all of our components and screens

This Provider should be the topmost component wrapping the Navigation Container, Stack Navigator, and Stack Screens.

```js
<Provider>...</Provider>
```

5.  Use the NavigationContainer to wrap all of our navigation.

```js
<Provider>
  <NavigationContainer>
    ...
  </NavigationContainer>
<Provider>
```

6.  Create a Navigator within the NavigationContainer:

```js
<NavigationContainer>
  <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
    ....
  </Stack.Navigator>
</NavigationContainer>
```

The headerTitle passed to the screenOptions prop will be used across all screens the navigator is wrapping. Also, a navigation prop will be automatically shared with all screens wrapped within the navigator.

7.  Create four screens within the Navigator:

```js
<Stack.Screen
name="Index"
component={IndexScreen}
options={({ navigation }) => ({
    headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
    </TouchableOpacity>
    ),
})}
/>
<Stack.Screen
name="Show"
component={ShowScreen}
options={({ route, navigation }) => ({
    headerRight: () => (
    <TouchableOpacity
        onPress={() =>
        navigation.navigate("Edit", { id: route.params.id })
        }
    >
        <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
    ),
})}
/>
<Stack.Screen name="Create" component={CreateScreen} />
<Stack.Screen name="Edit" component={EditScreen} />
```

The navigationOptions from IndexScreen.js and ShowScreen.js have been moved to the Screen options prop. The function passed to the options prop will receive the navigation and route props automatically.

In the ShowScreen options, we are refactoring navigation.getParam('id') to instead extract the id with route.params.id

https://reactnavigation.org/docs/screen-options/

### IndexScreen Outline of Changes:

1. Listen for the focus event instead of the old didFocus event

`const listener = navigation.addListener("focus", () => {...`
https://reactnavigation.org/docs/navigation-events/

2. Remove the entire IndexScreen.navigationOptions
   - All of this code has been moved to the IndexScreen Screen options in App.js.

### ShowScreen Outline of Changes:

1. Remove TouchableOpacity and EvilIcons imports

2. Instead of a navigation prop pass a route prop to the component instead:

```js
const ShowScreen = ({ route }) => {
```

3. Instead of using the navigation.getParam method to extract id, use the route params prop:

```js
const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
```

4. Remove the entire ShowScreen.navigationOptions
   - All of this code has been moved to the ShowScreen Screen options in App.js.

### EditScreen Outline of Changes:

1. Pass both a navigation and route prop to the component:

```js
const EditScreen = ({ navigation, route }) => {
```

2. Instead of using the navigation.getParam method to extract id, use the route params prop:

```js
const id = route.params.id;
```
