

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


## License


The Reactova framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).