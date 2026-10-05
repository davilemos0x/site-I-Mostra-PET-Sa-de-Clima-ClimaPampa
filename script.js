/**
 * I Mostra PET Saúde Clima - ClimaPampa | UNIPAMPA (Campus Uruguaiana)
 * - Contagem Regressiva para a Abertura em 27 de Novembro de 2026 às 08:00
 * - Abas da Programação dos 2 Dias (Sexta 27/11 e Sábado 28/11)
 * - Acordeão de Dúvidas Frequentes (FAQ)
 * - Menu Mobile Responsivo
 * - Header Dinâmico com Efeito no Scroll
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MENU MOBILE (HAMBÚRGUER)
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const toggleIcon = document.getElementById('toggleIcon');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      if (isOpen) {
        toggleIcon.classList.remove('ph-list');
        toggleIcon.classList.add('ph-x');
      } else {
        toggleIcon.classList.remove('ph-x');
        toggleIcon.classList.add('ph-list');
      }
    });

    // Fecha o menu ao clicar em qualquer link de navegação
    navMenu.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleIcon.classList.remove('ph-x');
        toggleIcon.classList.add('ph-list');
      });
    });
  }

  /* ==========================================================================
     2. HEADER DINÂMICO NO SCROLL
     ========================================================================== */
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     3. CONTAGEM REGRESSIVA (27 de Novembro de 2026 às 08:00)
     ========================================================================== */
  const eventDate = new Date('2026-11-27T08:00:00').getTime();

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ==========================================================================
     4. ABAS DA PROGRAMAÇÃO (SEXTA 27/11 E SÁBADO 28/11)
     ========================================================================== */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-tab');

      // Desmarca abas anteriores
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Marca a aba atual
      button.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     5. FAQ ACORDEÃO (DÚVIDAS FREQUENTES)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha outros itens para foco visual limpo
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     6. ABAS DE SUBMISSÃO (TRABALHOS CIENTÍFICOS / MOSTRA FOTOGRÁFICA / CRONOGRAMA)
     ========================================================================== */
  const subNavButtons = document.querySelectorAll('.sub-nav-btn');
  const subPanes = document.querySelectorAll('.sub-pane');

  subNavButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetPaneId = button.getAttribute('data-subtab');

      subNavButtons.forEach(btn => btn.classList.remove('active'));
      subPanes.forEach(pane => pane.classList.remove('active'));

      button.classList.add('active');
      const targetPane = document.getElementById(targetPaneId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     7. ABAS DA COMISSÃO ORGANIZADORA
     ========================================================================== */
  const comTabButtons = document.querySelectorAll('.com-tab-btn');
  const comPanes = document.querySelectorAll('.com-pane');

  comTabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetPaneId = button.getAttribute('data-comtab');

      comTabButtons.forEach(btn => btn.classList.remove('active'));
      comPanes.forEach(pane => pane.classList.remove('active'));

      button.classList.add('active');
      const targetPane = document.getElementById(targetPaneId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

});

