/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
class Dado {
    /**
   * Construtor da classe Dado.
   * @param {number} [face=1] - O valor inicial da face do dado.
   */
    constructor(face = 1) {
        this._face = face;
    }

    /**
   * Retorna o valor atual da face do dado.
   * @returns {number} O valor do dado.
   */
    get face() {
        return this._face;
    }

    /**
   * Método para atualizar o valor do dado.
   */
    jogar() {
        this._face = Math.floor(Math.random() * 6) + 1;
    }
}

// Restante do código...
const dado1 = new Dado();
const dado2 = new Dado();
const dado3 = new Dado();
const dado4 = new Dado();
const dado5 = new Dado();
const dado6 = new Dado();
const dados = [dado1, dado2, dado3, dado4, dado5, dado6];

const botton = document.querySelector('#roll-button');
const todasAsJogadas = [];
const lados = {
    lado1: 1,
    lado2: 2,
    lado3: 3,
    lado4: 4,
    lado5: 5,
    lado6: 6,
};
console.log(lados);
botton.addEventListener('click', function() {
    const dices = document.querySelectorAll('.dice-alter');
    dices.forEach((dice, index) => {
        dados[index].jogar();
        dice.src = `/src/img/die${dados[index].face}.png`;
        todasAsJogadas.push(dados[index].face);
    });

    const count1 = todasAsJogadas.filter((item) => item === lados.lado1).length;
    const count2 = todasAsJogadas.filter((item) => item === lados.lado2).length;
    const count3 = todasAsJogadas.filter((item) => item === lados.lado3).length;
    const count4 = todasAsJogadas.filter((item) => item === lados.lado4).length;
    const count5 = todasAsJogadas.filter((item) => item === lados.lado5).length;
    const count6 = todasAsJogadas.filter((item) => item === lados.lado6).length;

    for (let i = 1; i <= 6; i++) {
        const freqs = document.querySelector(`#freq-${i}`);
        freqs.textContent = `${eval('count' + i)}`;
        const percs = document.querySelector(`#perc-${i}`);
        percs.textContent = `${(eval('count' + i) / todasAsJogadas.length) * 100}`;
    }
});
