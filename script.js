// Datos de negocios están ahora en data.js

// Elementos del DOM
const grid = document.getElementById('business-grid');

const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('no-results');

let currentGroup = 'all';

// Función para renderizar tarjetas
function renderBusinesses(list) {
    grid.innerHTML = '';

    if (list.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');

        list.forEach((business, index) => {
            const delay = index * 0.05; // Escalonar animación de entrada
            const card = document.createElement('article');
            card.className = 'card';
            card.style.animationDelay = `${delay}s`;

            // Si la imagen es un enlace externo se usa tal cual, si no, se asume que está en la carpeta fotos
            const imagePath = business.image.startsWith('http') ? business.image : `fotos/${business.image}`;

            card.innerHTML = `
                <a href="detalle.html?id=${business.id}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;">
                    <div class="card-img-wrapper">
                        <img src="${imagePath}" alt="${business.name}" loading="lazy">
                        <span class="category-badge">${business.categoryLabel}</span>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${business.name}</h3>
                        <p class="card-desc">${business.description}</p>
                        <div class="card-meta">
                            <span class="icon">📍</span>
                            <span>${business.address}</span>
                        </div>
                    </div>
                </a>
            `;
            grid.appendChild(card);
        });
    }
}

// Lógica de Filtrado y Búsqueda
function filterData() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filtered = businesses.filter(b => {
        const matchesSearch = b.name.toLowerCase().includes(searchTerm) || b.description.toLowerCase().includes(searchTerm);
        const matchesCategory = currentGroup === 'all' || b.category === currentGroup;
        return matchesSearch && matchesCategory;
    });

    renderBusinesses(filtered);
}

// Event Listeners para Filtros Múltiples
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Actualizar clase activa
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        // Asignar grupo actual y refiltrar
        currentGroup = e.target.getAttribute('data-category');
        filterData();
    });
});

// Event Listener para Buscador de Texto
searchInput.addEventListener('input', filterData);

// Inicializar renderizado inicial
renderBusinesses(businesses);
