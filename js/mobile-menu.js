(() => {
  const refs = {
    mobMenuBtnOpen: document.querySelector('[data-menu-btn-open]'),
    mobMenuBtnClose: document.querySelector('[data-menu-btn-close]'),
    mobMenuWnd: document.querySelector('[data-menu-wnd]')
  };

  refs.mobMenuBtnOpen.addEventListener('click', toggleModal);
  refs.mobMenuBtnClose.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobMenuWnd.classList.toggle('is-open');
  }
})();