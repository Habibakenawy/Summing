
var x;
var total=0;
do
{
x=prompt("Please enter a number");
    total=total+Number(x);
}while(x!=0);
document.write("The sum is ",total);