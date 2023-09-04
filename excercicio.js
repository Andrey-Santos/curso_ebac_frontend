function Veiculo(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo        = modelo;
    this.fabricante    = fabricante;
    this.anoModelo     = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.motorLigado;

    this.ligar= function() {
        console.log('Motor Ligado');
        this.motorLigado = true;
    }

    this.desligar= function() {
        console.log('Motor Desligado');
        this.motorLigado = false;
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao, cambio) {
    Veiculo.call(this, modelo, fabricante, anoModelo, anoFabricacao);
    this.cambio = cambio;
}

function Moto(modelo, fabricante, anoModelo, anoFabricacao, cilindradas) {
    Veiculo.call(this, modelo, fabricante, anoModelo, anoFabricacao);
    this.cilindradas = cilindradas;
}

const carroDoAndrey = new Carro('Marea', 'Fiat', 1999, 1999, 'Manual');
const motoDoAndrey  = new Moto('GS 500', 'Suzuki', 2004, 2004, 500);
const motoDoGabriel = new Moto('CG Manca mix', 'Honda', 2010, 2010, 150);

console.log(carroDoAndrey);
console.log(motoDoAndrey);
console.log(motoDoGabriel);
