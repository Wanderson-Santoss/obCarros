function Carro(marca, modelo, ano) {
    if (new.target === Carro) {
        throw new TypeError("Cannot construct Carro instances directly");
    }
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

Carro.prototype.descricao = function() {
    console.log(`Este é um ${this.marca} ${this.modelo}, ano ${this.ano}.`);
}

function Sedan(marca, modelo, ano, tipoDeCombustivel) {
    Carro.call(this, marca, modelo, ano);
    this.tipoDeCombustivel = tipoDeCombustivel;
}

Sedan.prototype = Object.create(Carro.prototype);
Sedan.prototype.constructor = Sedan;

Sedan.prototype.descricao = function() {
    Carro.prototype.descricao.call(this);
    console.log(`É um Sedan que usa ${this.tipoDeCombustivel}.`);
}

function SUV(marca, modelo, ano, tracao) {
    Carro.call(this, marca, modelo, ano);
    this.tracao = tracao;
}

SUV.prototype = Object.create(Carro.prototype);
SUV.prototype.constructor = SUV;

SUV.prototype.descricao = function() {
    Carro.prototype.descricao.call(this);
    console.log(`É um SUV com tração ${this.tracao}.`);
}

const sedan1 = new Sedan('Toyota', 'Corolla', 2020, 'Gasolina');
const sedan2 = new Sedan('Honda', 'Civic', 2019, 'Diesel');
const suv1 = new SUV('Jeep', 'Cherokee', 2021, '4x4');

sedan1.descricao();
sedan2.descricao();
suv1.descricao();