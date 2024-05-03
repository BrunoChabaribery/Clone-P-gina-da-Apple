const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'Verde-Cipreste', 
    pasta: 'imagens-verde-cipreste'
}
const azulInverno = {
    nome: 'Azul-Inverno', 
    pasta: 'imagens-azul-inverno'
}
const meiaNoite = {
    nome: 'Meia-Noite', 
    pasta: 'imagens-meia-noite'
}
const estelar = {
    nome: 'Estelar', 
    pasta: 'imagens-estelar'
}
const rosaClaro = {
    nome: 'Rosa-Claro', 
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    // Selecione o elemento que contenha o atributo 'name="opcao-imagem"' com checked, depois pegue o id desse elemento e o primeiro caractere desse id.
    const idImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idImagemSelecionada.charAt(0);
    
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
}

function trocarTamanho() {
    //Atualizar a variável de controle do tamanho da caixa
    const idTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0);

    //Alterar o título do produto
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];

    //Alternar as duas opções de tamanho
    if (opcoesTamanho[tamanhoSelecionado] === opcoesTamanho[0]) {
        imagemVisualizacao.setAttribute('class', 'caixa-pequena');
    } else {
        imagemVisualizacao.removeAttribute('class', 'caixa-pequena');
    }
}

function trocarCor() {
    // Atualizar variável de controle de acordo com o id da cor selecionada
    const idCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idCorSelecionada.charAt(0);

    // Trocar título da página de acordo com a seleção
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];

    // Trocar o nome da cor
    nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;

    // Trocar as imagens das miniaturas
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';

    // Trocar as imagens de visualização
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}
