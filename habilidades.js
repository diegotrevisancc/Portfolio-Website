var icones = document.querySelectorAll(".hab-icon");

for (var i = 0; i<icones.length; i++) {
        icones[i].addEventListener("click", function () {
        var iconeAtual = this.id;
        switch(iconeAtual) {
            case "javascript":
                document.querySelector(".hab-desc").innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
                break;
            
            case "nodejs":
                document.querySelector(".hab-desc").innerHTML = "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web."
                break;
            
            case "html":
                document.querySelector(".hab-desc").innerHTML = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores."
                break;
            
            case "css":
                document.querySelector(".hab-desc").innerHTML = "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web."
                break;
            
            case "python":
                document.querySelector(".hab-desc").innerHTML = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte."
                break;

            case "react":
                document.querySelector(".hab-desc").innerHTML = "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
                break;
                
            case "bootstrap":
                document.querySelector(".hab-desc").innerHTML = "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web."
                break;
                
            case "git":
                document.querySelector(".hab-desc").innerHTML = "o Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
                break;
        }
    })       
}
