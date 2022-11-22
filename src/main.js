import home from './pages/home/home.js';
import register from './pages/register/register.js';
import password from './pages/password/password.js';
import about from './pages/about/about.js';
import feed from './pages/feed/feed.js';
import perfil from './pages/profile/profile.js';

const main = document.querySelector('#root');

const routes = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(home());
        break;
      case '#recuperarsenha':
        main.appendChild(password());
        break;
      case '#paracadastro':
        main.appendChild(register());
        break;
      case '#sobre':
        main.appendChild(about());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      case '#perfil':
        main.appendChild(perfil());
        break;
      default:
        main.appendChild(home());
    }
  });
};
window.addEventListener('load', () => {
  window.location.hash = '';
  main.appendChild(home());
  routes();
});
