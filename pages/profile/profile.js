import { auth } from '../../lib/auth.js';

export default () => {
  const fileProfile = document.createElement('section');
  const contentProfile = `
    <div>
        <header class='headerFeed'>
        <img src='img/logoTranp.png' class='loginhoFeed' alt='Logo Peq Wanderlust'>
        </header>
        <nav class='navBar'>
        <ul class='sectionSobreEperfil'>
            <a class='btnSIgnInOut' id='logOut'><img src='img/btnSair.png' alt='seta para sair'</a>
            <a href='#sobre' class='sobrepageFeed'>SOBRE</a>
            <a href='#feed' class='perfilFeed'>FEED</a>
            <a href='#perfil' class='perfilFeed'>PERFIL</a>
        </ul>
        </nav>
        <div class='containerProfile'>
          <img src=${auth.currentUser.photoURL} alt='User' class='photoCurrentUser'>
          <p class='nameUserProfile'>Nome</p>
          <p class='nameUserLogado'>${auth.currentUser.displayName}</p>
          <p class='emailUserProfile'>Email</p>
          <p class='emailUserLogado'>${auth.currentUser.email}</p>
          <p class=''>
            <a href='#recuperarsenha'>Redefinir minha senha</a>
          </p>
          <img src='img/constrution.png' class='constrution' alt='Site em construção'>
          <p>Esta página está em construção...</p>         
        </div>
    </div>`;
  fileProfile.innerHTML = contentProfile;

  const btnGoOut = fileProfile.querySelector('#logOut');
  btnGoOut.addEventListener('click', () => {
    window.location.hash = '#home';
  });
  return fileProfile;
};
