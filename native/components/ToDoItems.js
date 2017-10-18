import React from 'react';
import {AsyncStorage, Keyboard, Text, View, TextInput, Button, StyleSheet, ListView, Dimensions} from 'react-native';
import {Constants} from 'expo';
import {Icon} from 'native-base';
console.disableYellowBox = true;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ToDoItems extends React.Component {
    constructor(props) {
        super(props);
        // using ListViews' DataSource to set the data for the list of todo items
        const ds = new ListView.DataSource(
            {rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {
            todoData:ds.cloneWithRows([]),
            text: ''
        };
        this.handleDelete = this.handleDelete.bind(this);
    }
    static navigationOptions = {
        title: 'Todo List'
    };

    componentDidMount() {
        this.updateList();
    }

    // retrieves todoitems from asyncstorage
    async updateList() {
        let response = await AsyncStorage.getItem('todoData');
        let todoData = await JSON.parse(response) || [];
        this.setState({
            todoData: this.state.todoData.cloneWithRows(todoData)
        });
    }

    // stores todoitems in asyncstorage
    addToStorage(data) {
        AsyncStorage.setItem('todoData', JSON.stringify(data));
    }

    // figures out what item to remove and makes sure its removed from both the state and asyncstorage
    handleDelete = (id) => {
        this.setState((a) => {
            const newItem = a.todoData._dataBlob.s1
                .filter((item, i) => (parseInt(id) !== i));
            this.addToStorage(newItem);
            return {
                todoData: this.state.todoData.cloneWithRows(newItem)
            }
        });
    };

    // makes sure new todoitems are added to both state and asyncstorage
    handleAdd = ()=> {
        if(!this.state.text) {
            return;
        }
        const textArray = this.state.todoData._dataBlob.s1;
        textArray.push(this.state.text);
        this.setState(()=>({
            todoData: this.state.todoData.cloneWithRows(textArray),
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
                        placeholder="Enter todo item here!"
                        onChangeText={(text)=> this.setState({text})}
                    />
                    <Button
                        onPress={this.handleAdd}
                        title="Add"
                        color="#E3D9CA"
                    />
                </View>
                <ListView
                    style={styles.listView}
                    dataSource={this.state.todoData}
                    renderRow={(rowData, sectionID, rowID) =>{
                        const handleDelete = () => {
                            return this.handleDelete(rowID);
                        };
                        return(
                            <View style={styles.todoItem}>
                                <Text style={styles.todoText}>{rowData}</Text>
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
        height: 60,
        padding: 8,
        marginBottom: 8,
    },
    todoItem: {
        alignItems: 'center',
        padding: 8,
        width: width,
        borderBottomWidth: 1.5,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    todoData: {
      flex: 1,
    },
    icon: {
      fontSize: 25,
    },
});
