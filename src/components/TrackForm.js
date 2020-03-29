import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {

    const { state: { name, recording, locations },
            startRecording,
            stopRecording,
            changeName
          } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    
    return (
        <>
            <Spacer>
                { recording
                    ? <Button title="STOP RECORDING" buttonStyle={{ borderColor: 'black', width: 200, alignSelf: "center" }}
                                titleStyle={{ color: 'black' }} type="outline" onPress={stopRecording}/>

                    : <Button title="RECORD" buttonStyle={{ borderColor: 'black', width: 150, alignSelf: "center" }}
                    titleStyle={{ color: 'black' }} type="outline" onPress={startRecording}/>
                }
            </Spacer>
            {
                !recording && locations.length
                ?   <>
                    <Spacer>
                        <Input
                            placeholder="TRACK NAME"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={changeName}
                            value={name}
                        />
                    </Spacer>
                    <Button title="SAVE TRACK" buttonStyle={{ borderColor: 'black', width: 150, alignSelf: "center", backgroundColor: "black", marginTop: 10 }}
                        titleStyle={{ color: 'white' }} onPress={saveTrack}/>
                        </>
                : null
            }
        </>
    );
};

export default TrackForm;