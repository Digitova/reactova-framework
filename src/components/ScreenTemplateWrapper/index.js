import React from 'react'
import { ImageBackground, Dimensions } from 'react-native'


export default function getScreenTemplate(routeConfig) {
	let sceneProps = routeConfig.props
	const Template = routeConfig.template

	return class extends React.Component {
		render() {
			if (routeConfig.hasOwnProperty('backgroundImage')) {
				return this.renderImageBackgroundTemplate();
			} else {
				return this.renderTemplate();
			}
		}

		renderImageBackgroundTemplate(){
			return (
				<ImageBackground source={routeConfig.backgroundImage}
				                 style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
					{ this.renderTemplate() }
				</ImageBackground>
			);
		}

		renderTemplate() {
			return <Template {...sceneProps } {...this.props} />
		}
	}
}