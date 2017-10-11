export function loadEvents() {
    let events = [];
    let inputString = JSON.parse(localStorage.getItem("events"));
    for(let i = 0; i < inputString.length; i++) {
        let start = parseDate(inputString[i].start);
        let end = parseDate(inputString[i].end);
        let event = {
            title: inputString[i].title,
            allDay: inputString[i].allDay,
            start: start,
            end: end
        };
        events.push(event);
    }
    return events;
}

function parseDate(dateinfo) {
    dateinfo = dateinfo.split('T');
    dateinfo = dateinfo[0].replace('"', '');
    dateinfo = dateinfo.split('-');
    return new Date(dateinfo[0], parseInt(dateinfo[1])-1, parseInt(dateinfo[2])+1);
}

export function storeEvents(events) {
    localStorage.setItem("events", JSON.stringify(events));
}
