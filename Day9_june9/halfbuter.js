let n = 4;
let ptr = "";

// Upper half
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        ptr += "*";
    }
    ptr += "\n";
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        ptr += "*";
    }
    ptr += "\n";
}

console.log(ptr);