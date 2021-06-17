  let Array=require("./Array").Array;
 let newarray=[];
for(let i=1;i<100;i++)
{
    newarray.push(i);
}
let objarr=new Array(newarray);
console.log(newarray)
console.log(objarr.swap_position());
