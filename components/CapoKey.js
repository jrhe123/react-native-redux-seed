import React, { Component } from 'react';
import {
    View,
} from 'react-native';

// libraries
import {
    Text,
} from 'react-native-elements';

// redux
import { connect } from 'react-redux';


class CapoKey extends Component{

    render(){

        const {
            keys,
            selectedValues: {capoKeyIndex}
        } = this.props;

        return(
            <View style={{alignItems: 'center'}}>
                <Text h4>Capo Key = Key + Capo</Text>
                <Text h1>{keys[capoKeyIndex].key}</Text>
            </View>
        )
    }
}

// state => props       "reducers"                  "props from state.xxx"
const mapStateToProps = ({keys, selectedValues}) => ({keys, selectedValues});


export default connect(mapStateToProps, null)(CapoKey);