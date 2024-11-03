window.addEventListener('scroll', function() {
    var home = document.getElementById("home")
    var sobreMim = document.getElementById("sobreMim")
    var experiencia = document.getElementById("botao2PC")
    var experienciaM = document.getElementById("botao2Mobile")
    var projetos = document.getElementById("botao3PC")
    var projetosM = document.getElementById("botao3Mobile")
    if(window.scrollY == 0 && window.scrollY < 600) {
        home.style.background ="#251166"
        sobreMim.style.background = 'transparent'
        experiencia.style.background = 'transparent'
        projetos.style.background = 'transparent'
    }
    else if(window.scrollY > 600 && window.scrollY < 1150) {
        sobreMim.style.background = "#251166"
        experiencia.style.background = "#251166"
        experienciaM.style.background = "transparent"
        projetos.style.background = 'transparent'
        home.style.background = 'transparent'

    }
    else if(window.scrollY > 1150 && window.scrollY < 1700) {
        projetos.style.background = "#251166"
        experienciaM.style.background = "#251166"
        projetosM.style.background = "transparent"
        home.style.background = 'transparent'
        experiencia.style.background = 'transparent'
        sobreMim.style.background = 'transparent'
    }
    else if(window.scrollY > 1700) {
        projetosM.style.background = "#251166"
        experienciaM.style.background = "transparent"
        home.style.background = 'transparent'
        experiencia.style.background = 'transparent'
        sobreMim.style.background = 'transparent'
    }
})


function clicar() {
    window.scrollTo(0, 0)
}
function clicar1() {
    window.scrollTo(0, 650)
}
function clicar2() {
    window.scrollTo(0, 650)
}
function clicar3() {
    window.scrollTo(0, 1200)
}
function clicar4() {
    window.scrollTo(0, 1200)
}
function clicar5() {
    window.scrollTo(0, 1750)
}