const urlParams = new URLSearchParams(window.location.search);


let tags = ['div', 'div1', 'div2', 'div3', 'ímg', 'h1', 'button', 'a', 'div4', 'button2', 'a2']
let listarTags = []
let body = document.querySelector('body')


//Criando as tags

tags.forEach(Tag => {
    let TagNova = CriarTags(Tag)
    listarTags.push(TagNova)
});


//Adicionando a imagem

const Imagem = document.createElement('img');
Imagem.src = 'imagem/undraw_projections_re_ulc6.svg';

listarTags[4].appendChild(Imagem);
listarTags[4].classList.add('form-image');

//Adicionando um titulo

listarTags[5].textContent = "Curriculando.com"

//Adicionando um texto para o botão

listarTags[7].textContent = "Criar Currículo"

listarTags[10].textContent = "Quem Somos"


//Adicionando a div no DOM

body.appendChild(listarTags[0])
listarTags[0].classList.add('container')

//Div da imagem

body.appendChild(listarTags[4])
listarTags[4].classList.add('form-image')

body.appendChild(listarTags[1])
listarTags[1].classList.add('form-image')

body.appendChild(listarTags[2])
listarTags[2].classList.add('login-button')

body.appendChild(listarTags[3])
listarTags[3].classList.add('h1')



//Dentro das divs as tags

//Divs dentro do container

listarTags[0].appendChild(listarTags[1])

listarTags[1].appendChild(listarTags[4])

listarTags[0].appendChild(listarTags[2])

listarTags[2].appendChild(listarTags[6])

listarTags[2].appendChild(listarTags[9])

listarTags[6].appendChild(listarTags[7])

listarTags[9].appendChild(listarTags[10])

listarTags[0].appendChild(listarTags[3])

listarTags[3].appendChild(listarTags[5])







listarTags[6].addEventListener('click', function(event){

    console.log(event.target)
    window.location.href = `http://127.0.0.1:5500/cadastrar_dados.html`
  
  
})


listarTags[9].addEventListener('click', function(event){

    console.log(event.target)
    window.location.href = `http://127.0.0.1:5500/quem_Somos.html`
  
  
})


//Metodo

function CriarTags(Tag) {
    let NovaTag = document.createElement(Tag)
    return NovaTag
}