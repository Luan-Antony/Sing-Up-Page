const form = document.querySelector(".formulario")
const campos = document.querySelectorAll(".campo")
const spans = document.querySelectorAll(".erro")


form.addEventListener('submit', (event) => {
    event.preventDefault()
    validarCampos()
})

function validarCampos() {
    campos.forEach((campo, index) => {
        if (campo.value === '') {
            mostrarInvalido(index)
        } else {
            mostrarValido(index)
        }
    })
}

function mostrarInvalido(index) {
    campos[index].classList.add('invalido')
    campos[index].classList.remove('valido')
    spans[index].style.display = 'block'
}

function mostrarValido(index) {
    campos[index].classList.add('valido')
    campos[index].classList.remove('invalido')
    spans[index].style.display = 'none'
}
