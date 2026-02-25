// =============================================
// ESTILIZAÇÃO E INTERATIVIDADE COM JAVASCRIPT
// =============================================

// 1. EFEITOS AO CARREGAR A PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    aplicarEstilosDinamicos();
    adicionarInteratividade();
    animarElementos();
    ativarNavegacao();
});

// 2. ESTILOS DINÂMICOS
function aplicarEstilosDinamicos() {
    // Estilizar seções principais
    const secoes = document.querySelectorAll('section');
    secoes.forEach((secao, index) => {
        secao.style.padding = '60px 20px';
        secao.style.transition = 'all 0.3s ease';
        
        // Alternância de cores de fundo
        if (index % 2 === 0) {
            secao.style.backgroundColor = '#fff5f7';
        } else {
            secao.style.backgroundColor = '#ffffff';
        }
    });

    // Estilizar títulos h2
    const titulos = document.querySelectorAll('h2');
    titulos.forEach(titulo => {
        titulo.style.color = '#d4226f';
        titulo.style.fontSize = '32px';
        titulo.style.marginBottom = '30px';
        titulo.style.textAlign = 'center';
        titulo.style.fontWeight = 'bold';
        titulo.style.textShadow = '2px 2px 4px rgba(212, 34, 111, 0.1)';
    });

    // Estilizar cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundColor = '#ffffff';
        card.style.borderRadius = '12px';
        card.style.padding = '20px';
        card.style.boxShadow = '0 4px 15px rgba(212, 34, 111, 0.15)';
        card.style.transition = 'all 0.3s ease';
        card.style.border = '2px solid #f0a8d4';
        card.style.cursor = 'pointer';

        // Efeito ao passar o mouse
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 8px 25px rgba(212, 34, 111, 0.3)';
            card.style.borderColor = '#d4226f';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 4px 15px rgba(212, 34, 111, 0.15)';
            card.style.borderColor = '#f0a8d4';
        });
    });

    // Estilizar grid de cards
    const cardsGrid = document.querySelector('.cards-grid');
    if (cardsGrid) {
        cardsGrid.style.display = 'grid';
        cardsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
        cardsGrid.style.gap = '25px';
        cardsGrid.style.marginTop = '20px';
    }

    // Estilizar tabela
    const tabela = document.querySelector('.tabela-horarios');
    if (tabela) {
        tabela.style.width = '100%';
        tabela.style.borderCollapse = 'collapse';
        tabela.style.marginTop = '20px';
        tabela.style.backgroundColor = '#fff5f7';
        tabela.style.borderRadius = '8px';
        tabela.style.overflow = 'hidden';
        tabela.style.boxShadow = '0 4px 15px rgba(212, 34, 111, 0.15)';

        // Estilizar cabeçalho
        const thead = tabela.querySelector('thead');
        if (thead) {
            const thCells = thead.querySelectorAll('th');
            thCells.forEach(th => {
                th.style.backgroundColor = '#d4226f';
                th.style.color = 'white';
                th.style.padding = '15px';
                th.style.textAlign = 'center';
                th.style.fontWeight = 'bold';
                th.style.fontSize = '14px';
            });
        }

        // Estilizar corpo
        const tbody = tabela.querySelector('tbody');
        if (tbody) {
            const rows = tbody.querySelectorAll('tr');
            rows.forEach((row, index) => {
                row.style.transition = 'background-color 0.3s ease';
                
                row.addEventListener('mouseenter', () => {
                    row.style.backgroundColor = '#f0a8d4';
                });

                row.addEventListener('mouseleave', () => {
                    row.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#ffe8f5';
                });

                if (index % 2 === 0) {
                    row.style.backgroundColor = '#ffffff';
                } else {
                    row.style.backgroundColor = '#ffe8f5';
                }

                const cells = row.querySelectorAll('td');
                cells.forEach(cell => {
                    cell.style.padding = '12px 15px';
                    cell.style.textAlign = 'center';
                    cell.style.borderBottom = '1px solid #f0a8d4';
                });
            });
        }
    }

    // Estilizar lista de objetivos
    const listaObjetivos = document.querySelector('.lista-objetivos');
    if (listaObjetivos) {
        listaObjetivos.style.listStyle = 'none';
        listaObjetivos.style.padding = '20px';
        const lis = listaObjetivos.querySelectorAll('li');
        lis.forEach(li => {
            li.style.padding = '12px 20px';
            li.style.margin = '10px 0';
            li.style.backgroundColor = '#fff5f7';
            li.style.borderLeft = '4px solid #d4226f';
            li.style.borderRadius = '4px';
            li.style.fontSize = '16px';
            li.style.transition = 'all 0.3s ease';
            li.style.cursor = 'pointer';

            li.addEventListener('mouseenter', () => {
                li.style.backgroundColor = '#f0a8d4';
                li.style.transform = 'translateX(10px)';
                li.style.boxShadow = '0 4px 10px rgba(212, 34, 111, 0.2)';
            });

            li.addEventListener('mouseleave', () => {
                li.style.backgroundColor = '#fff5f7';
                li.style.transform = 'translateX(0)';
                li.style.boxShadow = 'none';
            });
        });
    }

    // Estilizar barras de progresso
    const barrasProgresso = document.querySelectorAll('.progresso-item');
    barrasProgresso.forEach(item => {
        item.style.padding = '20px';
        item.style.margin = '15px 0';
        item.style.backgroundColor = '#fff5f7';
        item.style.borderRadius = '8px';
        item.style.boxShadow = '0 4px 10px rgba(212, 34, 111, 0.1)';

        const barra = item.querySelector('.barra-progresso');
        if (barra) {
            barra.style.width = '100%';
            barra.style.height = '25px';
            barra.style.backgroundColor = '#e8e8e8';
            barra.style.borderRadius = '12px';
            barra.style.overflow = 'hidden';
            barra.style.margin = '10px 0';

            const preenchimento = barra.querySelector('.progresso-bar');
            if (preenchimento) {
                preenchimento.style.backgroundColor = '#d4226f';
                preenchimento.style.height = '100%';
                preenchimento.style.transition = 'width 1s ease';
            }
        }
    });

    // Estilizar rodapé
    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.backgroundColor = '#d4226f';
        footer.style.color = 'white';
        footer.style.padding = '40px 20px';
        footer.style.textAlign = 'center';
        footer.style.marginTop = '40px';
    }
}

// 3. ADICIONAR INTERATIVIDADE
function adicionarInteratividade() {
    // Botão "Começar"
    const btnPrimary = document.querySelector('.btn-primary');
    if (btnPrimary) {
        btnPrimary.style.backgroundColor = '#d4226f';
        btnPrimary.style.color = 'white';
        btnPrimary.style.border = 'none';
        btnPrimary.style.padding = '12px 30px';
        btnPrimary.style.fontSize = '16px';
        btnPrimary.style.fontWeight = 'bold';
        btnPrimary.style.borderRadius = '25px';
        btnPrimary.style.cursor = 'pointer';
        btnPrimary.style.transition = 'all 0.3s ease';
        btnPrimary.style.marginTop = '20px';
        btnPrimary.style.boxShadow = '0 4px 15px rgba(212, 34, 111, 0.3)';

        btnPrimary.addEventListener('mouseenter', () => {
            btnPrimary.style.backgroundColor = '#b01955';
            btnPrimary.style.transform = 'scale(1.05)';
            btnPrimary.style.boxShadow = '0 6px 20px rgba(212, 34, 111, 0.4)';
        });

        btnPrimary.addEventListener('mouseleave', () => {
            btnPrimary.style.backgroundColor = '#d4226f';
            btnPrimary.style.transform = 'scale(1)';
            btnPrimary.style.boxShadow = '0 4px 15px rgba(212, 34, 111, 0.3)';
        });

        btnPrimary.addEventListener('click', () => {
            alert('🎓 Vamos começar sua jornada de aprendizado!');
            document.querySelector('#disciplinas').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Status ativo
    const statusAtivo = document.querySelectorAll('.status-ativo');
    statusAtivo.forEach(status => {
        status.style.backgroundColor = '#d4226f';
        status.style.color = 'white';
        status.style.padding = '4px 12px';
        status.style.borderRadius = '20px';
        status.style.fontSize = '12px';
        status.style.fontWeight = 'bold';
    });

    // Descanso na tabela
    const celulasDescanso = document.querySelectorAll('.descanso');
    celulasDescanso.forEach(celula => {
        celula.style.backgroundColor = '#d4e5d4';
        celula.style.color = '#2d5a2d';
        celula.style.fontWeight = 'bold';
    });
}

// 4. ANIMAR ELEMENTOS AO FAZER SCROLL
function animarElementos() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Aplicar animação ao carregar
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        secao.style.opacity = '0';
        secao.style.transform = 'translateY(30px)';
        secao.style.transition = 'all 0.6s ease';
        observer.observe(secao);
    });

    // Animar imediatamente a primeira seção
    const primeiraSecao = document.querySelector('section');
    if (primeiraSecao) {
        primeiraSecao.style.opacity = '1';
        primeiraSecao.style.transform = 'translateY(0)';
    }
}

// 5. ATIVAR NAVEGAÇÃO SUAVE
function ativarNavegacao() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Destaque do link ativo ao scroll
    window.addEventListener('scroll', () => {
        let atual = '';
        const secoes = document.querySelectorAll('section');
        
        secoes.forEach(secao => {
            const topoSecao = secao.offsetTop;
            if (scrollY >= topoSecao - 200) {
                atual = secao.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.style.color = 'white';
            link.style.fontWeight = '500';
            
            if (link.getAttribute('href').slice(1) === atual) {
                link.style.color = '#ffff99';
                link.style.textDecoration = 'underline';
                link.style.fontWeight = 'bold';
            }
        });
    });
}

// 6. ADICIONAR CONTADOR DE PROGRESSO ANIMADO
function animarBarrasProgresso() {
    const barras = document.querySelectorAll('.progresso-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const barra = entry.target;
                const largura = barra.style.width;
                barra.style.width = '0%';
                
                setTimeout(() => {
                    barra.style.width = largura;
                }, 100);
                
                observer.unobserve(barra);
            }
        });
    }, { threshold: 0.1 });

    barras.forEach(barra => observer.observe(barra));
}

// Chamar animação de barras ao carregar
window.addEventListener('load', animarBarrasProgresso);

// 7. EFEITO DE GLOW NO HOVER DO HEADER
const header = document.querySelector('header');
if (header) {
    header.addEventListener('mouseenter', () => {
        header.style.boxShadow = '0 8px 20px rgba(212, 34, 111, 0.4)';
    });

    header.addEventListener('mouseleave', () => {
        header.style.boxShadow = 'none';
    });
}

console.log('✨ Study Time - Estilização com JavaScript carregada com sucesso!');
