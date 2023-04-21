// class Employee {
//     public firstName : string;
//     public lastName : string;
//     public age : number;
//     public education : string;
// constructor(firstName :  string,lastName : string,age : number,education : string) {
//    this.firstName=firstName;
//    this.lastName=lastName;
//    this.age=age;
//    this.education=education;
// }
// }
// const emp1 = new Employee (`Sachin`,`Tendulkar`,48,`Secondary School`);
// console.log(`------------------- To create class in Typescript ----------------`);
// console.log(emp1);
//--------- Class parameter ----------------------
// .
// .
// .
// .
// .
// .
//......................................................
console.log("---------------- Remove duplicate ele ---------------");
var inputArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
// var sortArray=inputArray.sort(); // sortting
// function removeDuplicates(sortArray) {
//     return [...new Set(sortArray)]; // set method (usinng spread oprater)
// }
// console.log(removeDuplicates(sortArray));
function uniqeElementByMap(inputArray) {
    var map = new Map();
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var item = inputArray_1[_i];
        map.set(item, item);
    }
    return Array.from(map.values());
}
