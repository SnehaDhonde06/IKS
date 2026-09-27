const cardGrid = document.getElementById('cardGrid');
const searchInput = document.getElementById('searchInput');
const filterChips = document.querySelectorAll('.chip');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

let activeCategory = "All";

function renderCards(list) {
  cardGrid.innerHTML = "";
  if (list.length === 0) {
    cardGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#6b7280;">No techniques found. Try a different search.</p>`;
    return;
  }
  list.forEach(t => {
    const card = document.createElement('div');
    card.className = 'technique-card';
    card.innerHTML = `
      <div class="card-icon">${t.icon}</div>
      <span class="card-category">${t.category}</span>
      <h3>${t.title}</h3>
      <p class="region">📍 ${t.region}</p>
      <p class="desc">${t.description}</p>
    `;
    card.addEventListener('click', () => openModal(t));
    cardGrid.appendChild(card);
  });
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  const filtered = techniques.filter(t => {
    const matchesCategory = activeCategory === "All" || t.category === activeCategory;
    const matchesSearch =
      t.title.toLowerCase().includes(query) ||
      t.region.toLowerCase().includes(query) ||
      t.ingredients.join(" ").toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  renderCards(filtered);
}

filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeCategory = chip.dataset.category;
    applyFilters();
  });
});

searchInput.addEventListener('input', applyFilters);

function openModal(t) {
  modalContent.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="card-category">${t.category}</span>
    <h2>${t.icon} ${t.title}</h2>
    <p class="modal-region">📍 ${t.region}</p>
    <p>${t.description}</p>
    <h4>Process</h4>
    <ol>${t.process.map(step => `<li>${step}</li>`).join("")}</ol>
    <h4>Ingredients</h4>
    <div class="tags">${t.ingredients.map(i => `<span class="tag">${i}</span>`).join("")}</div>
    <h4>Historical Note</h4>
    <p>${t.history}</p>
  `;
  modalOverlay.classList.add('show');
}

function closeModal() {
  modalOverlay.classList.remove('show');
}

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.getElementById('totalCount').textContent = techniques.length;

renderCards(techniques);