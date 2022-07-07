     // "let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//                              {name: 'Baba', id: 101, marks : 23 },
//                              {name: 'yaga', id: 200, marks : 45 },
//                              {name: 'Wick', id: 115, marks : 75 } ] "
// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']

let names = studentRecords.map( stu => stu.name.toUpperCase());
console.log(names); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]


// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

let names = studentRecords.filter(stu => stu.marks > 50);
console.log(names);

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let names = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
console.log(names);


// Question 4: Consider the same scenario we have discussed above, 
// but this time we would like to know the sum total of the marks of the students.


let totalMarks = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0)
console.log(totalMarks);

// Question 5: This time we want to get only the names of the students who 
// scored more than 50 marks from the same dataset used above.

let names = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(names);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.
let totalMarks = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
console.log(totalMarks); 

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a
// . grace of 15 marks has been added to those students who scored less than 50.

let totalMarks = studentRecords.map(function(stu){ 
    if(stu.marks < 50){
        stu.marks += 15;}
    return stu;
}).filter(stu => stu.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);
console.log(totalMarks); 

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let Object=[
    {name:'Naveen',class:6,roll:25},
    {name:'Sachin',class:6,roll:36},
    {name:'Pramod',class:7,roll:42},
    {name:'sharath',class:8,roll:27},
    {name:'Arjun',class:9,roll:16},
    {name:'Roith',class:10,roll:17}
]
