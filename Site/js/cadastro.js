const urlParams = new URLSearchParams(window.location.search);


let tags = ['div', 'div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'ímg', 'h1', 'button', 'a', 'label', 'input', 'form', 'ladoA', 'ladoB']
let listarTags = []
let body = document.querySelector('body')


//Criando as tags

tags.forEach(Tag => {
    let TagNova = CriarTags(Tag)
    listarTags.push(TagNova)
});


//Adicionando uma imagem 

const Imagem = document.createElement('img');
Imagem.src = 'imagem/undraw_shopping_re_hdd90.svg';

listarTags[8].appendChild(Imagem);
listarTags[8].classList.add('form-image');

//Adicionando um titulo

listarTags[9].textContent = "Cadastrar seu Currículo"

//Adicionando um texto para o botão

listarTags[11].textContent = "Cadastrar"


//Adicionando a div no DOM

body.appendChild(listarTags[0])
listarTags[0].classList.add('container')

//Div da imagem

body.appendChild(listarTags[8])
listarTags[8].classList.add('form-image')

body.appendChild(listarTags[1])
listarTags[1].classList.add('form-image')


//Div do form

body.appendChild(listarTags[2])
listarTags[2].classList.add('form')

body.appendChild(listarTags[3])
listarTags[3].classList.add('form-header')

//Div titulo

body.appendChild(listarTags[4])
listarTags[4].classList.add('titulo')

body.appendChild(listarTags[5])
listarTags[5].classList.add('login-button')

//Inputs 

body.appendChild(listarTags[6])
listarTags[6].classList.add('input-group')

body.appendChild(listarTags[7])
listarTags[7].classList.add('input-box')

//listarTags[0].appendChild(listarTags[6])
//listarTags[6].classList.add('input-box input')

//Criando os lados para separar as inputs

body.appendChild(listarTags[15])
listarTags[15].classList.add('ladoA')

body.appendChild(listarTags[16])
listarTags[16].classList.add('ladoB')


//Dentro das divs as tags

//Divs dentro do container

listarTags[0].appendChild(listarTags[1])

listarTags[0].appendChild(listarTags[2])

listarTags[0].appendChild(listarTags[3])

listarTags[0].appendChild(listarTags[4])

listarTags[0].appendChild(listarTags[5])

listarTags[0].appendChild(listarTags[6])

listarTags[0].appendChild(listarTags[7])

//os lados A e B

listarTags[0].appendChild(listarTags[15])

listarTags[0].appendChild(listarTags[16])

//Divs outras div

listarTags[1].appendChild(listarTags[8])


listarTags[6].appendChild(listarTags[15])

listarTags[6].appendChild(listarTags[16])

//Divs dentro do form

listarTags[2].appendChild(listarTags[3])



listarTags[2].appendChild(listarTags[6])

listarTags[2].appendChild(listarTags[7])

//Divs dentro do form-header

listarTags[3].appendChild(listarTags[9])

listarTags[3].appendChild(listarTags[4])

listarTags[3].appendChild(listarTags[5])

listarTags[4].appendChild(listarTags[9])

//Outras divs

listarTags[4].appendChild(listarTags[9])

listarTags[5].appendChild(listarTags[10])

listarTags[6].appendChild(listarTags[7])

//Divs dentro da input-box

/*listarTags[7].appendChild(listarTags[12])

listarTags[7].appendChild(listarTags[13])*/

listarTags[10].appendChild(listarTags[11])

listarTags[6].appendChild(listarTags[12])


//Lado A

const terceiroElementoA = document.querySelectorAll('*')[13].appendChild(listarTags[7]).appendChild(listarTags[6]).appendChild(listarTags[15]);
const LabelElementoA = document.querySelector('ladoA');

const inputNamesA = ['Nome Completo', 'Área', 'Telefone', 'Objetivo', 'Formação', 'Experiências', 'Habilidades'];

//Criando as inputs e as labels e dando nome para cada uma label

for (let i = 0; i < 7; i++) {

  //label

  const labelA = document.createElement('label');
  labelA.setAttribute('for', `input-${i}`);
  labelA.innerHTML = `Input ${i+1}:`;

  LabelElementoA.appendChild(labelA);

  // Cria as inputs

  const inputA = document.createElement('input');
  inputA.setAttribute('type', 'text');
  inputA.setAttribute('name', `input-${i}`);
  terceiroElementoA.appendChild(inputA);


  //Dando nomes para as inputs

    labelA.innerText = `${inputNamesA[i]}:`;
    inputA.name = inputNamesA[i];
  
}


//Lado B


const terceiroElementoB = document.querySelectorAll('*')[13].appendChild(listarTags[7]).appendChild(listarTags[6]).appendChild(listarTags[16]);
const LabelElementoB = document.querySelector('ladoB');

const inputNamesB = ['E-mail', 'Rua', 'Número casa', 'Bairro','Cidade', 'Uf', 'País'];





//Criando as inputs e as labels e dando nome para cada uma label

for (let i = 0; i < 7; i++) {

  //label

  const labelB = document.createElement('label');
  labelB.setAttribute('for', `input-${i}`);
  labelB.innerHTML = `Input ${i+1}:`;

  LabelElementoB.appendChild(labelB);

  // Cria as inputs

  const inputB = document.createElement('input');
  inputB.setAttribute('type', 'text');
  inputB.setAttribute('name', `input-${i}`);
  terceiroElementoB.appendChild(inputB);


  //Dando nomes para as inputs

    labelB.innerText = `${inputNamesB[i]}:`;
    inputB.name = inputNamesB[i];
  
}

listarTags[10].addEventListener('click', function(event) {
  event.preventDefault();
  
  let inputs = document.querySelectorAll('input')
  let inputName = inputs[0].value
  let inputArea = inputs[1].value
  let inputTelefone = inputs[2].value
  let inputObjetivo = inputs[3].value
  let inputFormacao = inputs[4].value
  let inputExperiencias = inputs[5].value
  let inputHabilidades = inputs[6].value
  let inputEmail = inputs[7].value
  let inputRua = inputs[8].value
  let inputNumCasa = inputs[9].value
  let inputBairro = inputs[10].value
  let inputCidade = inputs[11].value
  let inputUf = inputs[12].value
  let inputPais = inputs[13].value

  window.location.href = `http://127.0.0.1:5500/curriculo.html?nome=${inputName}&area=${inputArea}&telefone=${inputTelefone}&objetivo=${inputObjetivo}&formacao=${inputFormacao}&experiencias=${inputExperiencias}&habilidades=${inputHabilidades}&email=${inputEmail}&rua=${inputRua}&numcasa=${inputNumCasa}&bairro=${inputBairro}&cidade=${inputCidade}&uf=${inputUf}&pais=${inputPais}`

   
    console.log(values);
  }

);


//Metodo

function CriarTags(Tag) {
    let NovaTag = document.createElement(Tag)
    return NovaTag
}