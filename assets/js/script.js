const sobre=document.querySelector("#about");
const formulario=document.querySelector("#formulario");
const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGitHub(){
    try{
        const dadosPerfil=await fetch(`https://api.github.com/users/Beatriz-Rodrigues-P`);
        const perfil=await dadosPerfil.json();

        let conteudo= `<article id="about_imagem" class="about_content">
            <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}"
            >
            </article>

            <article id="about_texto" class="about_content">
                <h1>Sobre mim</h1>
                <p>Formada em jornalismo, migrei para a tecnologia durante a pandemia. Comecei com Front-End na PrograMaria, aprendendo HTML, CSS e JavaScript. Atualmente, curso Desenvolvimento Full Stack JavaScript na Generation Brasil, focando em TypeScript, SQL, Node.js e React.</p>
                <p>Essa transição é desafiadora e gratificante. Estou determinada a construir uma carreira sólida na tecnologia, contribuindo para projetos inovadores. 🚀</p>
                <p>Para conhecer meus projetos, acesse meu GitHub!</p>

                <div id="about_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao">Github</a>

                    <p>🙋 ${perfil.followers} Seguidores</p>
                    <p>📁 ${perfil.public_repos} Repositórios</p>
                </div>
            </article>`

        sobre.innerHTML+=conteudo;

    }catch(error){
        console.error(error);
    }
    
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const campoNome=document.querySelector("#nome");
    const txtNome=document.querySelector("#txtNome")

    if(campoNome.value.length<3){
        txtNome.innerHTML="O nome deve ter no mínimo 3 caracteres."
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML="";
    }

    const campoEmail=document.querySelector("#email");
    const txtEmail=document.querySelector("#txtEmail")

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML="Digite um e-mail válido."
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML="";
    }

    const campoAssunto=document.querySelector("#assunto");
    const txtAssunto=document.querySelector("#txtAssunto")

    if(campoAssunto.value.length<5){
        txtAssunto.innerHTML="O assunto deve ter no mínimo 5 caracteres."
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML="";
    }

    formulario.submit();
})

getApiGitHub();