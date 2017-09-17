import React, {Component} from 'react';
import {
    View,
} from 'react-native';

// libraries
import{
    Text,
    ButtonGroup,
} from 'react-native-elements';

// styles
import { BUTTON_GROUP_STYLE } from '../constants';


// redux
import { connect } from 'react-redux';
// actions
import { selectCapo } from '../actions';


const CAPO_POSITIONS = ['1','2','3','4','5','6','7','8','9','10','11'];

class CapoButtons extends Component{

    render(){

        const { selectedCapo } = this.props.selectedValues;

        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle,
        } = BUTTON_GROUP_STYLE;

        return(
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text h3>Capo</Text>
                <Text h1 style={{marginBottom:2}}>{selectedCapo}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectCapo(index + 1)}
                    selectedIndex={selectedCapo - 1}
                    buttons={CAPO_POSITIONS}

                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    selectedTextStyle={selectedTextStyle}
                />
            </View>
        )
    }
}

// state => props       "reducers"                  "props from state.xxx"
const mapStateToProps = ({selectedValues}) => ({selectedValues})
// props actions
const dispatchToProps = { selectCapo };

export default connect(mapStateToProps, dispatchToProps)(CapoButtons);