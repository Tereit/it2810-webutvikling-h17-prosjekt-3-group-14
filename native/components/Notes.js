import React from 'react';
import {AsyncStorage, Keyboard, Text, View, TextInput, Button, StyleSheet, ListView, Dimensions} from 'react-native';
import {Constants} from 'expo';
import {Icon} from 'native-base';
console.disableYellowBox = true;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Notes extends React.Component {
    constructor(props) {
        super(props);

        // using ListViews' DataSource to set the data for the list of Notes
        const ds = new ListView.DataSource(
            {rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {
            noteData:ds.cloneWithRows([]),
            text: ''
        };
        this.handleDelete = this.handleDelete.bind(this);
    }
    static navigationOptions = {
        title: 'Note List'
    };

    componentDidMount() {
        this.updateList();
    }


    // retrieves notes from asyncstorage

    async updateList() {
        let response = await AsyncStorage.getItem('noteData');
        let noteData = await JSON.parse(response) || [];
        this.setState({
            noteData: this.state.noteData.cloneWithRows(noteData)
        });
    }

    // stores notes in asyncstorage
    addToStorage(data) {
        AsyncStorage.setItem('noteData', JSON.stringify(data));
    }

    // figures out what item to remove and makes sure its removed from both the state and asyncstorage
    handleDelete = (id) => {
        this.setState((a) => {
            const newItem = a.noteData._dataBlob.s1
                .filter((item, i) => (parseInt(id) !== i));
            this.addToStorage(newItem);
            return {
                noteData: this.state.noteData.cloneWithRows(newItem)
            }
        });
    };

    // makes sure new notes are added to both state and asyncstorage
    handleAdd = ()=> {
        if(!this.state.text) {
            return;
        }
        const textArray = this.state.noteData._dataBlob.s1;
        textArray.push(this.state.text);
        this.setState(()=>({
            noteData: this.state.noteData.cloneWithRows(textArray),
            text: ''
        }));
        this.addToStorage(textArray);
        Keyboard.dismiss();
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formView}>
                    <TextInput
                        style={styles.inputForm}
                        value={this.state.text}
                        placeholder="Write your note here..."
                        onChangeText={(text)=> this.setState({text})}
                        multiline={true}
                        numberOfLiner={4}
                    />
                    <Button
                        color="#95A792"
                        onPress={this.handleAdd}
                        title="Add Note"

                    />
                </View>
                <ListView
                    style={styles.listView}
                    dataSource={this.state.noteData}
                    renderRow={(rowData, sectionID, rowID) =>{
                        const handleDelete = () => {
                            return this.handleDelete(rowID);
                        };
                        return(
                            <View style={styles.noteItem}>
                                <Text style={styles.noteText}>{rowData}</Text>
                                <Icon
                                    ios='ios-trash-outline'
                                    android="md-trash"
                                    style={styles.icon}
                                    title="Delete"
                                    onPress={handleDelete}
                                />
                            </View>
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#FFFFFF',
    },
    formView: {
        paddingBottom: 8,
    },
    inputForm: {
        backgroundColor: '#fff',
        width: width,
        height: 200,
        padding: 8,
        marginBottom: 8,
    },
    noteItem: {
        alignItems: 'center',
        padding: 8,
        width: width,
        borderBottomWidth: 1.5,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
    },
    noteText: {
        flex: 1,
    },
    icon: {
      fontSize: 30
    }
});
