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
      <p><strong>Duration:</strong> ${recipe.durationMinutes} min</p>
      <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
      <p><strong>Servings:</strong> ${recipe.servings}</p>
      <a href="recipe.html?id=${recipe.id}">View Recipe</a>
    `;

    container.appendChild(card);
  });
}
