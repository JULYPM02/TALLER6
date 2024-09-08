let mensage = "insolito"

function parOImpar(n) {
    if (n % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

console.log(parOImpar(9));  // Impar
console.log(parOImpar(6));  // Par

function sumarParesHasta50() {
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }
    return suma;
}

console.log(sumarParesHasta50());