import { Calendar } from 'react-native-calendars'; // 1.5.3
import { View } from 'react-native';
import React from 'react';

export default class Example extends React.Component {
  static navigationOptions={
    title: 'Calendar'
  };

  render() {
    return (
      <View style={{flex: 1 }}>
        <Calendar theme={{
    backgroundColor: 'red',}}
          // Initially visible month. Default = Date()
          //current={'2017-10-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          //minDate={'2017-10-1'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          //maxDate={'2018-01-01'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
      </View>

    );
  }
}
