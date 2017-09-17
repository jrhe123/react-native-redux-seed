import React, { Component } from 'react';
import {
    View,
} from 'react-native';

// libraries
import {
    Text,
    ButtonGroup,
} from 'react-native-elements';

// styles
import { BUTTON_GROUP_STYLE } from '../constants';


// redux
import { connect } from 'react-redux';
// actions
import { selectKeyIndex } from '../actions';


class KeyButtons extends Component{

    render(){

        const { 
            keys, 
            selectedValues:{selectedKeyIndex} 
        } = this.props;
        
        const keyButtons = keys.map(key => (
            key.shortKey ? '/' : key.key
        ));

        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle,
        } = BUTTON_GROUP_STYLE;

        return(
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text h3>Key</Text>
                <Text h1 style={{marginBottom: 2}}>{keys[selectedKeyIndex].key}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectKeyIndex(index)}
                    selectedIndex={selectedKeyIndex}
                    buttons={keyButtons}

                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    selectedTextStyle={selectedTextStyle}
                />
            </View>     
        )
    }
}

// state => props       "reducers"                  "props from state.xxx"
const mapStateToProps = ({keys, selectedValues}) => ({keys, selectedValues});
// props actions
const dispatchToProps = { selectKeyIndex };

export default connect(mapStateToProps, dispatchToProps)(KeyButtons);