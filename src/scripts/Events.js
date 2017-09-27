let myEvents = [
    {
        'title': 'Morten Birthday',
        'allDay': true,
        'start': new Date(2017, 8, 29),
        'end': new Date(2017, 8, 30)
    },
    {
        'title': 'Silje Birthday',
        'allDay': true,
        'start': new Date(2017, 9, 14),
        'end': new Date(2017, 9, 14)
    }
];

export function addEvent(title, allDay, startDate, endDate) {
    myEvents.push({'title': title, 'allDay': allDay, 'startDate': startDate, 'endDate': endDate});
}

export default myEvents;