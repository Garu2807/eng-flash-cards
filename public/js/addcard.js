
const addCardForm = document.getElementById('add-card-form');
const topicContainer = document.getElementById('topic-container');

addCardForm.addEventListener('submit', async (event) => {
  // отменить стандартное поведение формы при сабмите
  // не перезагружать страницу и не отправлять запрос на сервер
  event.preventDefault();


  const { word, translate, topic } = addCardForm;


  const response = await fetch('/api/card', {
    method: 'POST',
    body: JSON.stringify({
      word: word.value,
      translate : translate .value,
      topicId: topic.value
    }),
    headers: {
      // говорим серверу, что данные в теле запроса в JSON-формате
      'Content-Type': 'application/json',
    },
  });

  // получаем ответ в формате json
  const result = await response.json();

  // вставляем html в начало контейнера
  topicContainer.insertAdjacentHTML('afterbegin', result.html);
});