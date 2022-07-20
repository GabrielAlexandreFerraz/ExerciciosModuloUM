function criarVariasDivseTextos(lista = []){
    const divTextos = document.getElementById('textos')
    for (var [indice,text] of lista.entries()){
        const texto4 = document.createElement('div')
        texto4.classList.add('test'+indice);
        texto4.innerHTML = text
        divTextos.append(texto4)
    }
    
}
criarVariasDivseTextos(["texto 01","texto 02","texto 03","texto 04","texto 05"])