/*Write a program to check whether a given number is a negative, positive or a zero*/
{
let number=0
parseInt(number)
if(number>0)
{
    console.log((number+" is positive number"));
}
if (number<0)
 {
    console.log((number+" is a negative number"));
    
} 
if(number===0)
{
    console.log((number+" is a zero"));
}



}
/*Use a loop to display the numbers in the range 0 to 20 
that are multiples of 3*/
{

for (let index = 1; index <20; index++) 
{
   
    let multiple=index*3;
    console.log(multiple);
}
}
/*Write a JavaScript loop that will iterate from 0 to 15,
for each iteration, it checks if the current number is a even or odd number*/
{
    for (let index = 0; index < 14; index++) 
    {
       
       if(index%2===0)
       {
        console.log(index+" "+"Even number");
       } 
       else{
        console.log(index+" "+"Odd number");
       }
    }
}
/*Write a JavaScript program that displays numbers from 1 t0 10 except 6 and 9*/
{
    for (let index = 1; index <11; index++)
     {
       if(index===6||index===9)
       {
        continue
       }
        else
        {
            console.log(index);
        }
    }
}


