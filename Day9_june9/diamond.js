let ptr=""
for(let i = 1; i <= 6; i++) {
    for(let space = 5; space >= i; space--) {
        ptr += " ";
    }
    for(let k = 1; k <= i * 2 - 1; k++) {
        
            ptr+="*"
        
    }
    ptr += "\n";
}


for(let i = 5; i >= 1; i--) {
    for(let space = 5; space >= i; space--) {
        ptr += " ";
    }
    for(let k = 1; k <= i * 2 - 1; k++) {
       
            ptr+="*"
        
    }
    ptr += "\n";
}

console.log(ptr);

