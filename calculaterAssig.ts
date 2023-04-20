// Take input from user 


function marks(a: number, b: number, c: number) {
    var avg: number = (a+b+c) / 3;

    if (avg <= 70) {
        return `Grade C (${avg})`;        
    } else if (avg > 70 && avg < 90) 
    {
        return `Grade B (${avg})`;   
    } else {
        return `Grade A (${avg})`;   
    }
}
var math = Number(prompt(`Enter the math marks`)) ;
var physics = Number(prompt(`Enter the physics marks`)) ;
var chemistry = Number(prompt(`Enter the chemistry marks`)) ;

console.log(marks(math, physics, chemistry));
// let math : number;
// math=75; 
// let physics : number; 
// physics= 80;
// let chem : number; 
// chem= 50;

// const result1 =prompt( `math mark enter here`);
// const result2 =prompt( `physics mark enter here`);
// const result3 = prompt( `chem mark enter here`);

// const avg= (result1+result2+result3);
// console.log(avg);
//  const mean = avg/3;
//  console.log(mean);

//  if (avg<70) {
//     console.log(`Grade C`);

//  };
// if (avg>70 && avg <90) {
//     console.log(`Grade B`);
// };
// if (avg>90) {
//     console.log(`Grade A`);
    
    
// };

