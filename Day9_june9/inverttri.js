var ptr=""
for( var i=1;i<=6;i++)
{
    for( var space=5;space>=i;space--)
    {
        ptr+=" "
    }
    for( var k=1;k<=i;k++)
    {
        if(i==1||i==6||k==1||k==i)
        {
        ptr+="* "
        }
        else{
           ptr+="  "
        }
    }
    ptr+="\n"
    
}
console.log(ptr)