import React, { Component } from 'react';
import {
    View
} from 'react-native';

// libraries
import {
    Button
} from 'react-native-elements';

// redux
import { connect } from 'react-redux';
// actions
import { openChordsModal } from '../actions';


class ViewChordsButton extends Component{

    render(){

        return(
            <View style={this.props.style}>
                <Button 
                    onPress={() => this.props.openChordsModal()}
                    raised
                    icon={{name: 'library-music'}}
                    title="View Transposed Chords"
                    backgroundColor="#2196F3"
                />
            </View>
        )
    }
}

// props actions
const dispatchToProps = { openChordsModal };

export default connect(null, dispatchToProps)(ViewChordsButton);
