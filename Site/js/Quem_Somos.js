const urlParams = new URLSearchParams(window.location.search);

let tags = ['div', 'ímg', 'texto', 'button', 'div1', 'div3', 'div4', 'a', 'div5', 'h1']
let listarTags = []
let body = document.querySelector('body')


tags.forEach(Tag => {
    let TagNova = CriarTags(Tag)
    listarTags.push(TagNova)
});



//Adicionando uma imagem 

const Imagem = document.createElement('img');
Imagem.src = 'imagem/Quem_Somos.png';

listarTags[1].appendChild(Imagem);
listarTags[1].classList.add('form-image');


//Adicionando um texto

listarTags[2].textContent = "Somos alunos da Etec Cidade Tiradentes do Curso Desenvolvimento de Sistemas do 3 ano do ensino médio. Desenvolvemos Programas, Sites, Apps entre outros."

listarTags[9].textContent = "Nicolly Chaves Erick Chaves"

//Adicionando um texto para o botão

listarTags[7].textContent = "Voltar"



//Adicionando a div no DOM

body.appendChild(listarTags[0])
listarTags[0].classList.add('container')

body.appendChild(listarTags[2])
listarTags[2].classList.add('text')

body.appendChild(listarTags[9])
listarTags[9].classList.add('h1')

body.appendChild(listarTags[5])
listarTags[5].classList.add('form')

body.appendChild(listarTags[6])
listarTags[6].classList.add('form-header')

//Div da imagem

body.appendChild(listarTags[1])
listarTags[1].classList.add('form-image')

body.appendChild(listarTags[4])
listarTags[4].classList.add('form-image')


body.appendChild(listarTags[8])
listarTags[8].classList.add('Voltar-button')


//Dentro das divs as tags

//Dento do container

listarTags[0].appendChild(listarTags[2])

listarTags[0].appendChild(listarTags[4])

listarTags[0].appendChild(listarTags[1])

listarTags[0].appendChild(listarTags[8])

listarTags[0].appendChild(listarTags[9])

listarTags[0].appendChild(listarTags[5])

//Dentro da div form-image

listarTags[4].appendChild(listarTags[1])

//Dentro do form

listarTags[5].appendChild(listarTags[6])

//Dentro do form-header

listarTags[6].appendChild(listarTags[2])

listarTags[6].appendChild(listarTags[3])

listarTags[6].appendChild(listarTags[8])

listarTags[6].appendChild(listarTags[9])

listarTags[8].appendChild(listarTags[3])

listarTags[3].appendChild(listarTags[7])

listarTags[3].addEventListener('click', function(event){

    console.log(event.target)
    window.location.href = `http://127.0.0.1:5500/index.html`


})

//Metodo

function CriarTags(Tag) {
    let NovaTag = document.createElement(Tag)
    return NovaTag
}