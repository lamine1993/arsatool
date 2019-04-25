import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Slider,
    TouchableWithoutFeedback,
    Dimensions,
    Image
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { RNCamera } from 'react-native-camera';
import { dirPicutures } from './dirStorage';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton
} from 'react-native-popup-dialog';
import RNFetchBlob from 'react-native-fetch-blob'
import moment from "moment";
import {
    uiShowError,
    uiUnshowError
} from '../../Store/actions/actionIndex';
import {Platform} from "react-native";
import { connect } from 'react-redux'
//import RNFS from  'react-native-fs'
const RNFS = require('react-native-fs');
const flashModeOrder = {
    off: 'on',
    on: 'auto',
    auto: 'torch',
    torch: 'off',
};
const wbOrder = {
    auto: 'sunny',
    sunny: 'cloudy',
    cloudy: 'shadow',
    shadow: 'fluorescent',
    fluorescent: 'incandescent',
    incandescent: 'auto',
};

const landmarkSize = 2;

const createFormData = (photo, body) => {
    const data = new FormData();

    data.append("file", photo);
    data.append("agriculteur", JSON.stringify(body))

    return data;
};

const moveAttachment = async (filePath, newFilepath) => {
    return new Promise((resolve, reject) => {
        filePath=filePath.replace('file://', '');
        RNFS.mkdir(dirPicutures, { intermediates: true })
            .then(() => {
                RNFS.moveFile(filePath, newFilepath)
                    .then(() => {
                        console.log('FILE MOVED', filePath, newFilepath);
                        resolve(true);
                    })
                    .catch(error => {
                        console.log('moveFile error', error);
                        reject(error);
                    });
            })
            .catch(err => {
                console.log('mkdir error', err);
                reject(err);
            });
    });
};

//move the attachment to app folder

class CameraScreen extends React.Component {
    state = {
        showPop:false,
        showImage: false,
        path: '',
        photo:null,
        base64Img:null,
        flash: 'off',
        zoom: 0,
        autoFocus: 'on',
        autoFocusPoint: {
            normalized: { x: 0.5, y: 0.5 }, // normalized values required for autoFocusPointOfInterest
            drawRectPosition: {
                x: Dimensions.get('window').width * 0.5 - 32,
                y: Dimensions.get('window').height * 0.5 - 32,
            },
        },
        depth: 0,
        type: 'back',
        whiteBalance: 'auto',
        ratio: '16:9',
        recordOptions: {
            mute: false,
            maxDuration: 5,
            quality: RNCamera.Constants.VideoQuality['288p'],
        },
        isRecording: false,
        canDetectFaces: false,
        faces: [],
    };
    _displayMGS=(msg)=> {
        return (
            <Dialog
                dialogTitle={
                    <DialogTitle
                        title="MESSAGE"
                        hasTitleBar={false}
                        style={{alignItems:'center', justifyContent:'center', height:60}}
                        textStyle={{ color: '#fff'}}
                    />
                }
                backgroundStyle={styles.customBackgroundDialog}
                footer={[
                    <DialogFooter key="button-1">
                        <DialogButton
                            text="CANCEL"
                            onPress={() => this.setState({showPop:false})}
                        />
                    </DialogFooter>,
                ]}
                visible={this.state.showPop}
            >
                <DialogContent>
                    <Text>{msg}</Text>
                </DialogContent>
            </Dialog>

        );
    }
    componentDidUpdate(){
        //console.log('base64Img ', this.state.base64Img);
    }

    toggleFocus() {
        this.setState({
            autoFocus: this.state.autoFocus === 'on' ? 'off' : 'on',
        });
    }

    touchToFocus(event) {
        const { pageX, pageY } = event.nativeEvent;
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;
        const isPortrait = screenHeight > screenWidth;

        let x = pageX / screenWidth;
        let y = pageY / screenHeight;
        // Coordinate transform for portrait. See autoFocusPointOfInterest in docs for more info
        if (isPortrait) {
            x = pageY / screenHeight;
            y = -(pageX / screenWidth) + 1;
        }

        this.setState({
            autoFocusPoint: {
                normalized: { x, y },
                drawRectPosition: { x: pageX, y: pageY },
            },
        });
    }

    zoomOut() {
        this.setState({
            zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1,
        });
    }

    zoomIn() {
        this.setState({
            zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1,
        });
    }

    setFocusDepth(depth) {
        this.setState({
            depth,
        });
    }

    takePicture = async function() {
        if (this.camera) {
            const data = await this.camera.takePictureAsync();

            let base64Img = data.uri;
            RNFS.readFile(Platform.OS === 'android'? base64Img.replace('file://', ''): base64Img, "base64")  //substring(7) -> to remove the file://
                .then(res =>{
                    this.setState({base64Img: res})
                })
                .catch(err => console.error(err))

            this.setState({ path: data.uri, photo: data, showImage:true })
        }
    }


    saveImage =  () => {
       // if(this.props.session)
            this.storePicture(this.props.user)
    };
    toggle = value => () => this.setState(prevState => ({ [value]: !prevState[value] }));

    facesDetected = ({ faces }) => this.setState({ faces });

    storePicture(user){
      /*  if (this.state.path) {
            var url = 'http://10.42.0.1:8080/api/imageEnvoye'

            const userData={
                    "id": null, //form
                    "agriculteurId": 1,
                    "urlImage": null,
                    "dateValidation": null,
                    "dateDAjout": null,
                    "flag": true
            };
            const data = new FormData();

            data.append("file", this.state.photo);
            data.append("agriculteur", JSON.stringify(userData))
            console.log(JSON.stringify(data._parts))
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                        //'Authorization': '<your auth>'
                    },
                    body: JSON.stringify(data)

                })
                .then((responseData) => {
                    console.log(responseData);
                })
                .catch(err => {
                    console.log(err);
                })
        }*/
        const userData={
                "id": null, //form
                "agriculteurId": 1,
                "urlImage": null,
                "dateValidation": null,
                "dateDAjout": null,
                "flag": true
        };
        RNFetchBlob.fetch('POST', 'http://10.42.0.1:8080/api/imageEnvoye', {
            // this is required, otherwise it won't be process as a multipart/form-data request
            'Content-Type' : 'multipart/form-data',
        }, [
            // append field data from file path
            {
                name : 'file',
                filename :'avatar.jpg',
                // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
                // Or simply wrap the file path with RNFetchBlob.wrap().
                data: RNFetchBlob.wrap(this.state.path)
            },
            {name:'agriculteur', data : JSON.stringify({
                    "id": null, //form
                    "agriculteurId": 1,
                    "urlImage": null,
                    "dateValidation": null,
                    "dateDAjout": null,
                    "flag": true
                })
            }
        ]).then((resp) => {
            //console.log("response")
            if(resp.respInfo.status===201){
                this.setState({showPop:true})

                console.log(this.state.showPop)

                this._displayMGS("Photo envoyee")
            }

            //console.log(resp.respInfo.status)
        }).catch((err) => {
            console.log(err)
        })
    }


    renderFace = ({ bounds, faceID, rollAngle, yawAngle }) => (
        <View
            key={faceID}
            transform={[
                { perspective: 600 },
                { rotateZ: `${rollAngle.toFixed(0)}deg` },
                { rotateY: `${yawAngle.toFixed(0)}deg` },
            ]}
            style={[
                styles.face,
                {
                    ...bounds.size,
                    left: bounds.origin.x,
                    top: bounds.origin.y,
                },
            ]}
        >
            <Text style={styles.faceText}>ID: {faceID}</Text>
            <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
            <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
        </View>
    );

    renderLandmarksOfFace(face) {
        const renderLandmark = position =>
            position && (
                <View
                    style={[
                        styles.landmark,
                        {
                            left: position.x - landmarkSize / 2,
                            top: position.y - landmarkSize / 2,
                        },
                    ]}
                />
            );
        return (
            <View key={`landmarks-${face.faceID}`}>
                {renderLandmark(face.leftEyePosition)}
                {renderLandmark(face.rightEyePosition)}
                {renderLandmark(face.leftEarPosition)}
                {renderLandmark(face.rightEarPosition)}
                {renderLandmark(face.leftCheekPosition)}
                {renderLandmark(face.rightCheekPosition)}
                {renderLandmark(face.leftMouthPosition)}
                {renderLandmark(face.mouthPosition)}
                {renderLandmark(face.rightMouthPosition)}
                {renderLandmark(face.noseBasePosition)}
                {renderLandmark(face.bottomMouthPosition)}
            </View>
        );
    }

    renderFaces = () => (
        <View style={styles.facesContainer} pointerEvents="none">
            {this.state.faces.map(this.renderFace)}
        </View>
    );

    viewImage(){
        return(
            <Dialog
                backgroundStyle={styles.customBackgroundDialog}
                footer={[
                    <DialogFooter key="button-1">
                        <DialogButton
                            text="CANCEL"
                            onPress={() => this.setState({ showImage: false })}
                        />
                        <DialogButton
                            text="SAVE"
                            onPress={() => {
                                this.saveImage(this.state.path)
                                this.setState({ showImage: false})
                            }}
                        />
                    </DialogFooter>,
                ]}
                visible={this.state.showImage}
            >
                <DialogContent>
                        <Image
                            source={{ uri: this.state.path }}
                            style={styles.preview}
                        />

                </DialogContent>
            </Dialog>
        )
    }
    renderCamera() {
        const { canDetectFaces } = this.state;

        const drawFocusRingPosition = {
            top: this.state.autoFocusPoint.drawRectPosition.y - 32,
            left: this.state.autoFocusPoint.drawRectPosition.x - 32,
        };
        return (
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                }}
                type={this.state.type}
                flashMode={this.state.flash}
                autoFocus={this.state.autoFocus}
                autoFocusPointOfInterest={this.state.autoFocusPoint.normalized}
                zoom={this.state.zoom}
                whiteBalance={this.state.whiteBalance}
                ratio={this.state.ratio}
                focusDepth={this.state.depth}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                faceDetectionLandmarks={
                    RNCamera.Constants.FaceDetection.Landmarks
                        ? RNCamera.Constants.FaceDetection.Landmarks.all
                        : undefined
                }
                onFacesDetected={canDetectFaces ? this.facesDetected : null}
            >
                <View style={StyleSheet.absoluteFill}>
                    <View style={[styles.autoFocusBox, drawFocusRingPosition]} />
                    <TouchableWithoutFeedback onPress={this.touchToFocus.bind(this)}>
                        <View style={{ flex: 1 }} />
                    </TouchableWithoutFeedback>
                </View>
                <View
                    style={{
                        flex: 0.5,
                        height: 72,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >

                </View>
                <View style={{ bottom: 0 }}>
                    <View
                        style={{
                            height: 20,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                        }}
                    >
                        <Slider
                            style={{ width: 150, marginTop: 15, alignSelf: 'flex-end' }}
                            onValueChange={this.setFocusDepth.bind(this)}
                            step={0.1}
                            disabled={this.state.autoFocus === 'on'}
                        />
                    </View>
                    <View
                        style={{
                            height: 56,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                        }}
                    >
                    </View>
                    {this.state.zoom !== 0 && (
                        <Text style={[styles.flipText, styles.zoomText]}>Zoom: {this.state.zoom}</Text>
                    )}
                    <View
                        style={{
                            height: 56,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                        }}
                    >
                        <TouchableOpacity
                            style={[styles.flipButton, { flex: 0.1, alignSelf: 'flex-end' }]}
                            onPress={this.zoomIn.bind(this)}
                        >
                            <Text style={styles.flipText}> + </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.flipButton, { flex: 0.1, alignSelf: 'flex-end' }]}
                            onPress={this.zoomOut.bind(this)}
                        >
                            <Text style={styles.flipText}> - </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.flipButton, { flex: 0.25, alignSelf: 'flex-end' }]}
                            onPress={this.toggleFocus.bind(this)}
                        >
                            <Text style={styles.flipText}> AF : {this.state.autoFocus} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.flipButton, styles.picButton, { flex: 0.3, alignSelf: 'flex-end' }]}
                            onPress={this.takePicture.bind(this)}
                        >
                            <Text style={styles.flipText}> CAPTURE </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {!canDetectFaces && this.renderFaces()}
            </RNCamera>
        );
    }


    render() {
        return (
        <View style={styles.container}>
            {this.renderCamera()}

            {this.viewImage()}
        </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#000',
    },
    flipButton: {
        flex: 0.3,
        height: 40,
        marginHorizontal: 2,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    autoFocusBox: {
        position: 'absolute',
        height: 64,
        width: 64,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'white',
        opacity: 0.4,
    },
    flipText: {
        color: 'white',
        fontSize: 15,
    },
    zoomText: {
        position: 'absolute',
        bottom: 70,
        zIndex: 2,
        left: 2,
    },
    picButton: {
        backgroundColor: 'darkseagreen',
    },
    facesContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
    },
    face: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 2,
        position: 'absolute',
        borderColor: '#FFD700',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    landmark: {
        width: landmarkSize,
        height: landmarkSize,
        position: 'absolute',
        backgroundColor: 'red',
    },
    faceText: {
        color: '#FFD700',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'transparent',
    },
    text: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 2,
        position: 'absolute',
        borderColor: '#F00',
        justifyContent: 'center',
    },
    textBlock: {
        color: '#F00',
        position: 'absolute',
        textAlign: 'center',
        backgroundColor: 'transparent',
    },


    customBackgroundDialog: {
        backgroundColor: '#f00',
    },
    preview: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width:300
    },
});

const mapStateToProps = state => {
    //console.log(state);
    return {
        user:state.connexion.user,
        session:state.connexion.session,
        error: state.ui.error,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        resetError: ()=>dispatch(uiUnshowError()),
        setError: ()=>dispatch(uiShowError())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen)