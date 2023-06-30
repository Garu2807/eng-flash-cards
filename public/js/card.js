const cardContainer = document.querySelector('.cards-container');
cardContainer.addEventListener('click', (event) => {
  // мы проверяем на чем именно сработал клик
  if (event.target.classList.contains('translate-btn')) {
    const btn = event.target;

    // находим ближайшего родителя с определенным классом
    const fliperParent = btn.closest('.flipper');
    console.log('translate');
    // что-то с ним делаем
    fliperParent.classList.remove('flipper-rotate-undo');
    fliperParent.classList.add('flipper-rotate');
  }
  if (event.target.classList.contains('back-btn')) {
    const btn = event.target;
    console.log('back');
    const fliperParent = btn.closest('.flipper');
    fliperParent.classList.remove('flipper-rotate');
    fliperParent.classList.add('flipper-rotate-undo');
  }
});
cardContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('studied-btn')) {
    event.preventDefault();
    const { cardId } = event.target.closest('div .flipper').dataset;
    console.log(cardId);
    const response = await fetch(`/topic/cards/upd`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ cardId }),
    });
    const data = await response.json();

    if (data.message === 'ok') {
      event.target.closest('div .flipper').remove();
    }
  }
});
