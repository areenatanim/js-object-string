let college = {
        "name": "Harvard",
        class : [11, 12],
        Events : [ 'science fair', '12 feb',
                "sports day" ],
        unique : {
                color: "blue",
                location: "Boston",
                result :{
                        gpa : 5,
                        merit : 'tope most'
                }
        }      

}
console.log(college.unique.result);
console.log(college.Events);
college.unique.result.merit = "top from last"
console.log(college.unique.result.merit);
college.Events.push("sports day");
console.log(college.Events);
college.Events[1]='16 dec';
console.log(college.Events);
college.Events[0] = 'sports day';
console.log(college.Events);
console.log(college.Events[3]);
console.log(college);




