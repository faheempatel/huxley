var json = '{"Monday":[{"module":"Algorithms and Data Structures","start time":"10:00","end time":"12:00","location":"Law Building Laws 2.10","type":"Lecture"},{"module":"Algorithms and Data Structures","start time":"13:00","end time":"15:00","location":"ITL","type":"Lab"},{"module":"Algorithms and Data Structures","start time":"15:00","end time":"17:00","location":"ITL","type":"Lab"}],"Tuesday":[{"module":"Software Engineering","start time":"09:00","end time":"11:00","location":"ITL","type":"Lab"},{"module":"Software Engineering","start time":"11:00","end time":"13:00","location":"ITL","type":"Lab"},{"module":"Software Engineering","start time":"14:00","end time":"16:00","location":"ARTS2 Lecture Theatre","type":"Lecture"},{"module":"Software Engineering","start time":"16:00","end time":"18:00","location":"ITL","type":"Lab"}],"Wednesday":[{"module":"Internet Protocols and Applications","start time":"10:00","end time":"12:00","location":"People\'s Palace Skeel Lecture Theatre","type":"Lecture"},{"module":"Probability and Matrices","start time":"12:00","end time":"13:00","location":"Bancroft Building FB2.40","type":"Lecture"}],"Thursday":[{"module":"Probability and Matrices","start time":"11:00","end time":"12:00","location":"Mathematics Building Maths Lecture Theatre","type":"Lecture"},{"module":"Algorithms and Data Structures","start time":"12:00","end time":"13:00","location":"GE Fogg Building Fogg Lecture Theatre","type":"Lecture"},{"module":"Internet Protocols and Applications","start time":"13:00","end time":"14:00","location":"ARTS2 Lecture Theatre","type":"Lecture"},{"module":"Internet Protocols and Applications","start time":"14:00","end time":"16:00","location":"ITL","type":"Lab"},{"module":"Internet Protocols and Applications","start time":"16:00","end time":"18:00","location":"ITL","type":"Lab"}],"Friday":[{"module":"Internet Protocols and Applications","start time":"12:00","end time":"14:00","location":"ITL","type":"Lab"},{"module":"Probability and Matrices","start time":"14:00","end time":"15:00","location":"Engineering Building Eng 3.25","type":"Tutorial"},{"module":"Probability and Matrices","start time":"15:00","end time":"16:00","location":"Engineering Building Eng 3.25","type":"Tutorial"}]}';

var timetable = JSON.parse(json);
var days = [
      "Sunday"
    , "Monday"
    , "Tuesday"
    , "Wednesday"
    , "Thursday"
    , "Friday"
    , "Saturday"
];

$(document).ready(function() {
    var contentTemplate = $('#content-template').html();
    var today = new Date();
    var day = days[today.getDay()];

    var html = ""
    $('#day').append('<p><strong>' + day + '</strong></p>');
    for(var info in timetable[day]) {
        html += Mustache.to_html(contentTemplate, timetable[day][info]);
    }
    $('#day').append(html);
});
