import {AsyncStorage} from 'react-native'
import {purgeStoredState} from 'redux-persist'

export function eraseStore(){
	return () => {
		purgeStoredState({storage: AsyncStorage}).then(() => {
			console.log('purge completed')
			return
		}).catch(() => {
			console.log('purge of someReducer failed')
			return
		})
	}
}
