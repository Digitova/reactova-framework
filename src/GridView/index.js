import React, { Component } from 'react';
import { ScrollView,Text} from 'react-native';
import  GridViewRow  from './GridViewRow';


export default class extends Component
{
  render()
  {
  	const items = this.convertItemArrayToGridArray();

    return (
        <ScrollView contentContainerStyle={[Styles.scrollView,{ padding: this.props.itemMargin },{ paddingTop: this.props.topPadding }]}>
	        {
	        	items.map((row,key) => {
			        return (
			        	<GridViewRow key={key} row={row} {...this.props} />
			        )
	            })
	        }
        </ScrollView>
    )
  }

  convertItemArrayToGridArray() {
		var matrix = [], i, k;

		for (i = 0, k = -1; i < this.props.items.length; i++) {
			if (i % this.props.itemsPerRow === 0) {
				k++;
				matrix[k] = [];
			}

			matrix[k].push(this.props.items[i]);
			if(i == this.props.items.length-1){
				const gaps = this.props.itemsPerRow - this.props.items.length%this.props.itemsPerRow;
				if(gaps < this.props.itemsPerRow) {
					for (j = 0; j < gaps; j++) {
						matrix[k].push(null);
					}
				}
			}
		}
		return matrix;
	}
}

const Styles = {
	scrollView: {
		justifyContent: 'flex-start',
		paddingBottom: 100,
	}
}
