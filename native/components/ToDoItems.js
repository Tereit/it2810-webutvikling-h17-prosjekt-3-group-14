import React from 'react';
import {AsyncStorage, Keyboard, Text, View, TextInput, Button, StyleSheet, ListView} from 'react-native';
import {Constants} from 'expo';
console.disableYellowBox = true;

export default class ToDoItems extends React.Component {
    constructor(props) {
        super(props);
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

    async updateList() {
        let response = await AsyncStorage.getItem('todoData');
        let todoData = await JSON.parse(response) || [];
        this.setState({
            todoData: this.state.todoData.cloneWithRows(todoData)
        });
    }

    addToStorage(data) {
        AsyncStorage.setItem('todoData', JSON.stringify(data));
    }

    handleDelete = (id) => {
        this.setState((a) => {
            const newItem = a.todoData._dataBlob.s1
                .filter((item, i) => (parseInt(id) !== i));
            return {
                todoData: this.state.todoData.cloneWithRows(newItem)
            }
        });
    };

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
                                <Button
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
        backgroundColor: '#eee',
    },
    formView: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 8,
    },
    inputForm: {
        backgroundColor: '#fff',
        width: 320,
        height: 40,
        padding: 8,
        marginBottom: 8,
    },
    todoItem: {
        alignItems: 'center',
        padding: 8,
        width: 320,
        borderBottomWidth: 1.5,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
    },
    todoText: {
        flex: 1,
    },
});