const urlParams = new URLSearchParams(window.location.search);


const nome = urlParams.get("nome") 
const area = urlParams.get("area")
const telefone = urlParams.get("telefone") 
const objetivo = urlParams.get("objetivo")
const formacao = urlParams.get("formacao") 
const experiencias = urlParams.get("experiencias")
const habilidades = urlParams.get("habilidades") 
const email = urlParams.get("email")
const rua = urlParams.get("rua") 
const numcasa = urlParams.get("numcasa")
const bairro = urlParams.get("bairro") 
const cidade = urlParams.get("cidade")
const uf = urlParams.get("uf") 
const pais = urlParams.get("pais")


console.log(nome)
console.log(area)
console.log(telefone)
console.log(objetivo)
console.log(email)
console.log(formacao)
console.log(experiencias)
console.log(rua)
console.log(habilidades)
console.log(numcasa)
console.log(bairro)
console.log(cidade)
console.log(uf)
console.log(pais)


let tags = ['div', 'div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9', 'div10', 'div11', 'div12', 'div13', 'button', 'button2', 'a', 'a2', 'ímg', 'ímg2', 'ímg3', 'label', 'label2', 'label3', 'label4', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12']
let listarTags = []
let body = document.querySelector('body')


//Criando as tags

tags.forEach(Tag => {
    let TagNova = CriarTags(Tag)
    listarTags.push(TagNova)
});


//Adicionando uma imagem 

const Imagem = document.createElement('img');
Imagem.src = 'imagem/telefone.png';

listarTags[18].appendChild(Imagem);
listarTags[18].classList.add('img');


const Imagem2 = document.createElement('img');
Imagem2.src = 'imagem/e-mail.png';

listarTags[19].appendChild(Imagem2);
listarTags[19].classList.add('img2');


const Imagem3 = document.createElement('img');
Imagem3.src = 'imagem/endereco.png';

listarTags[20].appendChild(Imagem3);
listarTags[20].classList.add('img3');



//Adicionando um texto

listarTags[21].textContent = "OBJETIVO \n" + objetivo

listarTags[22].textContent = "FORMAÇÃO \n" + formacao

listarTags[23].textContent = "EXPERIÊNCIAS \n" + experiencias

listarTags[24].textContent = "HABILIDADES \n" + habilidades



//Adicionando um texto para o botão

listarTags[16].textContent = "Imprimir"

listarTags[17].textContent = "Voltar"




//Adicionando a div no DOM

body.appendChild(listarTags[0])
listarTags[0].classList.add('container')


body.appendChild(listarTags[1])
listarTags[1].classList.add('color-block')


body.appendChild(listarTags[3])
listarTags[3].classList.add('Linha')

body.appendChild(listarTags[4])
listarTags[4].classList.add('Linha2')

body.appendChild(listarTags[5])
listarTags[5].classList.add('Linha3')

body.appendChild(listarTags[6])
listarTags[6].classList.add('Linha4')


body.appendChild(listarTags[10])
listarTags[10].classList.add('button')

body.appendChild(listarTags[11])
listarTags[11].classList.add('button2')


//Divs das informações das imagens, endereço, telefone e email

body.appendChild(listarTags[25])
listarTags[25].classList.add('a3')

body.appendChild(listarTags[26])
listarTags[26].classList.add('a4')

body.appendChild(listarTags[27])
listarTags[27].classList.add('a5')

body.appendChild(listarTags[28])
listarTags[28].classList.add('a6')

body.appendChild(listarTags[29])
listarTags[29].classList.add('a7')

body.appendChild(listarTags[30])
listarTags[30].classList.add('a8')

body.appendChild(listarTags[31])
listarTags[31].classList.add('a9')

body.appendChild(listarTags[32])
listarTags[32].classList.add('a10')

body.appendChild(listarTags[33])
listarTags[33].classList.add('a11')

body.appendChild(listarTags[34])
listarTags[34].classList.add('a12')



//Div da imagem

body.appendChild(listarTags[18])
listarTags[18].classList.add('img')

body.appendChild(listarTags[7])
listarTags[7].classList.add('img')

////

body.appendChild(listarTags[19])
listarTags[19].classList.add('img2')

body.appendChild(listarTags[8])
listarTags[8].classList.add('img2')

/////

body.appendChild(listarTags[20])
listarTags[20].classList.add('img3')

body.appendChild(listarTags[9])
listarTags[9].classList.add('img3')

////


/*body.appendChild(listarTags[7])
listarTags[7].classList.add('label')*/



//Dentro das divs as tags

//Divs dentro do container

listarTags[0].appendChild(listarTags[1])




listarTags[0].appendChild(listarTags[3])

listarTags[0].appendChild(listarTags[4])

listarTags[0].appendChild(listarTags[5])

listarTags[0].appendChild(listarTags[6])

//Imagens dentro do container

listarTags[0].appendChild(listarTags[7])

listarTags[0].appendChild(listarTags[8])

listarTags[0].appendChild(listarTags[9])

//listarTags[0].appendChild(listarTags[10])

//listarTags[0].appendChild(listarTags[11])

//Botão 

listarTags[10].appendChild(listarTags[14])

listarTags[11].appendChild(listarTags[15])

listarTags[14].appendChild(listarTags[16])

listarTags[15].appendChild(listarTags[17])

//Linhas

listarTags[3].appendChild(listarTags[21])

listarTags[4].appendChild(listarTags[22])

listarTags[5].appendChild(listarTags[23])

listarTags[6].appendChild(listarTags[24])


//Imagens

listarTags[7].appendChild(listarTags[18])

listarTags[8].appendChild(listarTags[19])

listarTags[9].appendChild(listarTags[20])


//Divs das informações

listarTags[18].appendChild(listarTags[25])

listarTags[19].appendChild(listarTags[26])

listarTags[20].appendChild(listarTags[27])

listarTags[20].appendChild(listarTags[28])

listarTags[20].appendChild(listarTags[29])

listarTags[20].appendChild(listarTags[30])

listarTags[20].appendChild(listarTags[31])

listarTags[20].appendChild(listarTags[32])

listarTags[0].appendChild(listarTags[33])

listarTags[0].appendChild(listarTags[34])



//Apresentando os textos 

listarTags[25].textContent =  telefone

listarTags[26].textContent =  email

listarTags[27].textContent =  rua

listarTags[28].textContent =  cidade

listarTags[29].textContent =  numcasa

listarTags[30].textContent =  uf

listarTags[31].textContent = bairro

listarTags[32].textContent =  pais

listarTags[33].textContent =  nome

listarTags[34].textContent =  area



listarTags[16].addEventListener('click', function(event){

    window.print();
  
  
  })

listarTags[15].addEventListener('click', function(event){

    console.log(event.target)
    window.location.href = `http://127.0.0.1:5500/index.html`
  
  
  })




//Metodo

function CriarTags(Tag) {
    let NovaTag = document.createElement(Tag)
    return NovaTag
}