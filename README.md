

## Components

### AlertBanner
The AlertBanner object is a presentational component that renders a tappable alert banner. 
It uses [react-native-vector-icons](https://oblador.github.io/react-native-vector-icons/) for the icon and exposes an
onPress function for when the user taps on it.

![](screenshots/alert_banner.png)

Usage:
```
<AlertBanner
        type="success"
        message="Congratulations! You did it!"
        iconName="ios-thumbs-up-outline"
        iconProvider="Ionicons"
        onPress={ () => console.log('tap') }
        underlayColor='#93A796'
    />
```
Types:
```
primary|success|danger|warning|info|light|dark 
```

## Library Functions

### Utils
#### arrayify(object)
This function wraps an object in an array if it is not already an array.  If it is already an array then it simply returns the object.

Example:
```
const action = {
    feedback: {
        id: 3,
        message: "test"
    }
}

const feedbackArray = arrayify(action,'feedback');
```
Would return
```
console.log(feedbackArray)
> [{id: 3, message: "test"}]

```


### Redux
#### NormalizedCollection
This function wraps normalized redux data in object that provides handy accessor functions.

Usage:
```
let Questions = new NormalizedCollection(questions,result)
const items = Questions.getItems()
const item3 = Questions.find(3)
```

## License


The Reactova framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).