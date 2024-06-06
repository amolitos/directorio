import Alpine from 'alpinejs';
import confetti from 'canvas-confetti';
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

  document.querySelectorAll('[data-js-fireworks]').forEach((el) => {
    const duration = 30 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 20, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  });
});
