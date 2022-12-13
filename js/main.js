const cards = document.querySelector('.cards');

const catCardTemplate = cat => {
  return `
  <div class="card">
    <img src="${cat.image}" class="card__img" alt="${cat.name}" />
    <div class="card__title">${cat.name}</div>
    <div class="card__description">${cat.description}</div>
  </div>
`;
};

fetch('https://cats.petiteweb.dev/api/single/lastwhitedance/show/')
  .then(res => res.json())
  .then(data => {
    cards.insertAdjacentHTML(
      'afterbegin',
      data.map(cat => catCardTemplate(cat)).join('')
    );
  });
