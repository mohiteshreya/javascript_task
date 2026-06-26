var ptr=""
for(var i=1;i<=6;i++)
{
    for(var s=1;s<=i;s++)
    {
        ptr+=" "
    }
    for(var k=6;k>=i;k--)
    {
        
            ptr+=" *"
        
        
    }
    ptr+="\n"
}
for(var i=2;i<=6;i++)
{
    for(var s=6;s>=i;s--)
    {
        ptr+=" "
    }
    for(var k=1;k<=i;k++)
    {
        
            ptr+=" *"
    }
    
    ptr+="\n"
}
console.log(ptr)