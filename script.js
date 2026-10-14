document.addEventListener("DOMContentLoaded",() => {

// idioma
window.MudarIdioma = function(lang){
  const pt = document.querySelectorAll('.pt');
  const en = document.querySelectorAll('.en');

  localStorage.setItem('lang', lang);

  if (lang === 'pt') {
    pt.forEach(el => el.classList.remove('hidden'));
    en.forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('[data-placeholder-en]').forEach(el => {
      el.placeholder = el.dataset.placeholderPt;
    });
    document.querySelectorAll('[data-alt-en]').forEach(el => {
      el.alt = el.dataset.altPt;
    });
  } else {
    pt.forEach(el => el.classList.add('hidden'));
    en.forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('[data-placeholder-en]').forEach(el => {
      el.placeholder = el.dataset.placeholderEn;
    });
    document.querySelectorAll('[data-alt-en]').forEach(el => {
      el.alt = el.dataset.altEn;
    });
  }
};

// carregar idioma
window.onload =() => {
    MudarIdioma(localStorage.getItem('lang') || 'pt');
};


// animacao scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.fade').forEach(el => observer.observe(el));

// formulario
function enviarForm(e) {
    e.preventDefault();
    alert("mensagem enviada!");
}

//------------------------//
// Site em Construcao
//------------------------//

// se o visitanteb ja clicou no aviso, nao mostrar novamente
// se o aviso ja tiver sido mostrado, nao mostrar novamente
if (sessionStorage.getItem('siteEmConstrucao') === 'true') {
    return;
}

//cria o fundo escuro que fica por cima de todo o site.
const overlay = document.createElement('div');
overlay.className = 'Construction-Overlay';

//cria caixa central
const box = document.createElement('div');
box.className = 'Construction-Box';

//imagem do aviso
const image = document.createElement('img');
image.src = 'assets/icons/site-em-construcao.png';
image.alt = 'Site em Construção';
image.className = 'Construction-Image';

//botao real e clicavel
const button = document.createElement('button');
button.className = 'Construction-Button';
button.textContent = 'Entrar no Site';


//quando o botao for clicado, remove o aviso desaparece
button.addEventListener('click', function() {
        sessionStorage.setItem('siteEmConstrucao', 'true');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Permitir rolagem novamente
});

box.appendChild(image);
box.appendChild(button);
overlay.appendChild(box);
document.body.appendChild(overlay);
// Impede a rolagem do site enquanto o aviso estiver ativo
document.body.style.overflow = 'hidden';
});

//CSS para funcionar em todas as paginas
const constructionStyle = document.createElement('style');
constructionStyle.textContent = `
     .Construction-Overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        padding: 20px;
    }
    .Construction-Box {
        text-align: center;
        max-width: 520px;
        width: 100%;
    }
    .Construction-Image {
        width: 100%;
        max-width: 420px;
        height: auto;
        display: block;
        margin: 0 auto 25px auto;
    }
    .Construction-Button {
        background:#111;
        color: #fff;
        border: 2px solid #f6b700;
        padding: 14px 35px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 0 18px  rgba(246, 183, 0, 0.45);
        transition: all 0.3s ease;  
    }
    .Construction-Button:hover {
        background: #f6b700;
        color: #111;
        transform: scale(1.05);
        box-shadow: 0 0 25px  rgba(246, 183, 0, 0.75)
    }
        @media (max-width: 600px) {
        .Construction-image {
            max-width: 300px;
    }
        .Construction-Button {
            font-size: 16px;
            padding: 12px 30px;
        }
    }   
`;
document.head.appendChild(constructionStyle);
