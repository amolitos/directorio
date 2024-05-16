import Alpine from 'alpinejs';
import './components/App';

window.Alpine = Alpine;
Alpine.start();

addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.navbar').forEach((navbar) => {
    const menu = navbar.querySelector('.navbar-menu');
    const btnToggle = navbar.querySelector('#navbar-toggle');
    btnToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
    });
  });

  document.querySelectorAll('[data-js-input-password]').forEach((el) => {
    const input = el.querySelector('input');
    const btnIcon = el.querySelector('i');

    btnIcon.addEventListener('click', () => {
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btnIcon.classList.toggle('fa-eye', isPassword);
      btnIcon.classList.toggle('fa-eye-slash', !isPassword);
    });
  });

  document.querySelectorAll('[data-js-show]').forEach((el) => {
    const time = el.dataset.jsShow;
    setTimeout(() => {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        el.style.display = 'block';
        el.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, 3000);
      }, 500);
    }, time);
  });

  document.querySelectorAll('[data-js-countdown]').forEach((el) => {
    const currentDate = new Date();
    const endDate = currentDate.setMinutes(currentDate.getMinutes() + 10);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endDate - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      el.innerHTML = `<p>${minutes} minutos ${seconds} segundos</p>`;

      if (distance <= 0) {
        clearInterval(timer);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
  });
});
