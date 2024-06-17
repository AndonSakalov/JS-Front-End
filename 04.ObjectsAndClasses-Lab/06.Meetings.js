function manageMeetings(meetingRequests){
    function addMeeting(day,client){
        if (meetingsDictionary.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }else{
            meetingsDictionary[day] = client;
            console.log(`Scheduled for ${day}`);
        }
    }

    let meetingsDictionary = {

    };

    for (const request of meetingRequests) {
        let currentRequest = request.split(' ');
        let day = currentRequest[0];
        let clientName = currentRequest[1];
        addMeeting(day, clientName);
    }

    for (const key in meetingsDictionary) {
        console.log(`${key} -> ${meetingsDictionary[key]}`);
    }
}

manageMeetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);