

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

### Redux
#### getActionPropertyAsArray
This function is a useful redux helper function for getting an action property as an array.
If the property was already an array it get's returned.  If the property was not an array it gets wrapped in one.



Example:
```
const action = {
    feedback: {
        id: 3,
        message: "test"
    }
}

const feedbackArray = getActionPropertyAsArray(action,'feedback');
```
Would return
```
console.log(feedbackArray)
> [{id: 3, message: "test"}]

```



## License


The Reactova framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).