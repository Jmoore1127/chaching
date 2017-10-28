import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Camera from "react-native-camera";

export default class CameraPage extends React.Component {

    // takePicture = () => {
    //     if(!this.camera) {
    //         return;
    //     }
    //     this.camera.capture({metadata: {}})
    //         .then((data) => console.log(data))
    //         .catch((err) => {console.log(err);})
    // };

    render() {
        return (
        <View style={styles.container}>
            {/*<Camera*/}
                {/*ref={(cam) =>{*/}
                    {/*this.camera = cam;*/}
                {/*}}*/}
                {/*aspect={Camera.constants.Aspect.fill}*/}
            {/*>*/}
                {/*<Text onPress={this.takePicture}>[CAPTURE]</Text>*/}
            {/*</Camera>*/}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});