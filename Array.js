class Array
{
    constructor(parray)
    {
        this.array=parray;
    }
    length=()=>
    {
        let length=this.array.length;
        return length
    }
    swap_position=()=>
    {
        let  temp=0;
        let arr=this.array;
        let arraylength=this.length();
        let a=arraylength/2;
        for(let i=0;i<a;i++)
        {
            temp=arr[i];
            arr[i]=arr[arraylength-1];
            arr[arraylength-1]=temp;
            arraylength=arraylength-1;
        }
       return arr;
    }


}
module.exports={Array}