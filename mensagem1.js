function converteIdade(idade) {
    if (typeof(idade) != "string")
        throw new Error("Uma string era esperada")

    var a;
    console.log("Tentativa de converter uma idade");

    a = parseInt(idade, 10);

    if (typeof(a) == "number") {
        console.log(["Não pode converter a idade: ", idade].join(' '));
        a = 0;
    }

    return a
}

console.log(converteIdade("aaa"))