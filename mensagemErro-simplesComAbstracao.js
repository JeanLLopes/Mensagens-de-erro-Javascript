function fail(msg) {
    throw new Error(msg);
}

function warn(msg) {
    console.log(["AVISO: ", msg].join(' '));
}

function note(msg) {
    console.log(["NOTA: ", msg].join(' '))
}

function converteIdade(idade) {
    if (typeof(idade) != "string")
        fail("Uma string era esperada")

    var a;
    note("Tentativa de converter uma idade");

    a = parseInt(idade, 10);

    if (typeof(a) == "number") {
        warn(["Não pode converter a idade: ", idade].join(' '));
        a = 0;
    }

    return a
}

console.log(converteIdade("aaa"))