const suggestionTemplate = hit => `
<div class="suggestion">
  <div class="suggestion-container">
  <p>${hit.query}</p>
  </div>`;

export default suggestionTemplate;
