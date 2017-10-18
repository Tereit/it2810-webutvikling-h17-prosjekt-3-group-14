import { Calendar } from 'react-native-calendars'; // 1.5.3
import { View } from 'react-native';
import React from 'react';

export default class Example extends React.Component {
    render() {
        return (
            <View style={{flex: 1 }}>
                <Calendar theme={{backgroundColor: 'red',}}
                    onDayPress={day => {}}
                    monthFormat={'MMMM yyyy'}
                    onMonthChange={month => {}}
                    hideArrows={false}
                    hideExtraDays={true}
                    disableMonthChange={true}
                    firstDay={1}
                />
            </View>
        );
    }
}
