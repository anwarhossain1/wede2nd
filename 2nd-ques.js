let notifications = [	{message: 'Lorem', read: true},
{message: 'Ipsum', read: true},
{message: 'Dolor', read: true},
{message: 'Sit', read: false},
{message: 'Amet', read: true}
];
let allRead = true;

//if (notifications.every(checkIfFalse)) {
    //console.log(allRead).value;
//}

const aa=(value) =>{
    return (value.read==true)
};
allRead=notifications.every(aa);
console.log(allRead);

//function checkIfFalse(value, index) {
    //if(value[read]==false){
       // return false;

 //   }
    
//console.log(notifications);

//}
