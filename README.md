## Description

Make an algorithm that reads a N-element vector and swaps the positions of its elements so that the first element becomes the last and the last the first, the second the penultimate, and so on, and prints that vector.

## Usage

```Javascript

   let Array=require("./Array").Array;
 let newarray=[];
for(let i=1;i<100;i++)
{
    newarray.push(i);
}
let objarr=new Array(newarray);
console.log(newarray)
console.log(objarr.swap_position());

```