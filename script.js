// Conectando ao DOM
const share = document.querySelector('#share-container')
const button = document.querySelector('button')
const icon = document.querySelector('#icon-share')

button.addEventListener("click", () => {
    // Verificando status do botão
    if(button.dataset.active === "false"){
        // Trocando estilo do botão
        button.style.backgroundColor = "var(--color-dark-blue)"
        icon.src = "./assets/images/icon-share-light.svg"

        // Fazendo aparecer a janela
        //share.style.display = "flex"
        share.style.opacity = 100

        // Trocando status do botão
        button.dataset.active = "true"
        
    }else{
        // Trocando estilo do botão
        button.style.backgroundColor = "var(--color-light-blue)"
        icon.src = "./assets/images/icon-share.svg"

        // Fazendo desaparecer a janela
        //share.style.display = "none"
        share.style.opacity = 0

        // Trocando status do botão
        button.dataset.active = "false"
    }
})
