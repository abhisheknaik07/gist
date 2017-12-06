/* Write a program in JS that prints numbers 1 to 100.
For every multiple of 3, print "Earth". For every multiple of 5, print "Jupiter". For every multiple of 9, print "Pluto". */

function PrintNumbers(num)
        {        
        if(i%3===0)
                return "Earth";
         if(i%5===0)
                return "Jupiter";    
        if(i%9===0)
                return "Pluto";              
         return i;
      
} 
for(i=1;i<=100;i++)
{
        console.log(PrintNumbers(i));
}

