let inputTitulo = document.querySelector('#titulo')
let inputData = document.querySelector('#ano')
let inputAutor = document.querySelector('#autor')
let botaoaddlivro = document.querySelector("#botao")
let conteudoTabela = document.querySelector("#conteudoTabela")
let mensagem = document.querySelector("#mensagem")

let livros = []
getLivros()
renderizarTabela()

function getLivros(){
    livros = JSON.parse(localStorage.getItem("livros")) || []
}

function setLivros(){
    localStorage.setItem("livros",JSON.stringify(livros))
}

function addLivro(titulo,autor,ano){
    
    let livro ={
       
        titulo:titulo, 
        data:ano, 
        autor:autor 
        
    }
    livros.push(livro)
    setLivros()
    mostrarMensagem("Livro adicionado")
}

botaoaddlivro.addEventListener('click',function(e){
    e.preventDefault()
    addLivro(inputTitulo.value,inputData.value,inputAutor.value)
    console.table(livros)
    limparFormulario()
    renderizarTabela()

})

function limparFormulario(){
    inputTitulo.value = ""
    inputAutor.value = ""
    inputData.value = ""
    inputTitulo.focus()
}

function renderizarTabela(){
    conteudoTabela.innerHTML = `
    <table>
        <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Data</th>
           </tr>
            ${livros.map(livro =>
                `<tr>
                    <td>${livro.titulo}</td>
                    <td>${livro.autor}</td>
                    <td>${livro.data}</td>
               </tr> `
            ).join('')}
    </table>
`
}


function mostrarMensagem(texto){
    
    mensagem.style.display = 'block'
    mensagem.innerHTML = texto

    setTimeout(function() {
        mensagem.style.display = 'none'
        mensagem.innerHTML = ''
    },3000)
}