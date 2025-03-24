const params = new URLSearchParams(window.location.search);
const recipeId = params.get('id');

fetch('data/recipes.json')
  .then(res => res.json())
  .then(data => {
    const recipe = data.recipes.find(r => r.id === recipeId);
    if (recipe) renderRecipe(recipe);
    else document.getElementById('recipe-details').innerText = 'Recipe not found';
  });

function renderRecipe(recipe) {
  const container = document.getElementById('recipe-details');
  container.innerHTML = `
    ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.title}" class="recipe-img"/>` : ''}
    <h2>${recipe.title}</h2>
    <p><strong>Description:</strong> ${recipe.description}</p>
    <p><strong>Duration:</strong> ${recipe.durationMinutes} min</p>
    <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
    <p><strong>Servings:</strong> ${recipe.servings}</p>
    <h3>Ingredients:</h3>
    <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    <h3>Steps:</h3>
    ${recipe.steps.map(step => `
      <div class="step">
        <h4>${step.title}</h4>
        <p>${step.instruction}</p>
        ${step.tips && step.tips.length ? `<p><em>Tips:</em> ${step.tips.join('; ')}</p>` : ''}
        ${step.image ? `<img src="${step.image}" alt="${step.title}" />` : ''}
      </div>
    `).join('')}
  `;
}
