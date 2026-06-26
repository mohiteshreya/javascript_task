var ptr=""
for(var i=1;i<=10;i++)
{
    for(var j=1;j<=10;j++)
    {
        if(i==1||i==5||i==10||(j==1 && i<=5)||(j==10&&i>5))
        {
            ptr+="*"
        }
        else
        {
            ptr+=" "
        }
    }
    ptr+="\n"
}
console.log(ptr)