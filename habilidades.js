var icones = document.querySelectorAll(".hab-icon");
var descricao = document.querySelector(".hab-desc");
for (var i = 0; i<icones.length; i++) {
        icones[i].addEventListener("mouseover", function () {
        var iconeAtual = this.id;
        switch(iconeAtual) {
            case "javascript":
                descricao.innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
                break;
            
            case "nodejs":
                descricao.innerHTML = "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web."
                break;
            
            case "html":
                descricao.innerHTML = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores."
                break;
            
            case "css":
                descricao.innerHTML = "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web."
                break;
            
            case "python":
                descricao.innerHTML = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte."
                break;

            case "react":
                descricao.innerHTML = "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
                break;
                
            case "bootstrap":
                descricao.innerHTML = "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web."
                break;
                
            case "git":
                descricao.innerHTML = "o Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
                break;
        }
    })       
}
