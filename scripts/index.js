fetch('data/recipes.json')
  .then(res => res.json())
  .then(data => renderRecipeList(data.recipes));

function renderRecipeList(recipes) {
  const container = document.getElementById('recipe-list');
  recipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe';

    card.innerHTML = `
      ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.title}" class="recipe-img"/>` : ''}
      <h2>${recipe.title}</h2>
      <p>${recipe.description}</p>
      <p><strong>Duración:</strong> ${recipe.durationMinutes} min</p>
      <p><strong>Dificultad:</strong> ${recipe.difficulty}</p>
      <p><strong>Porciones:</strong> ${recipe.servings}</p>
      <a href="recipe.html?id=${recipe.id}">Ver receta</a>
    `;

    container.appendChild(card);
  });
}
