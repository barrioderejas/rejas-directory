// Datos simulados iniciales de negocios
const businesses = [
    {
        id: 1,
        name: "Panadería La Tahona",
        category: "tiendas",
        categoryLabel: "Tienda",
        description: "Pan artesanal horneado a leña cada mañana. Bollería, tartas por encargo y empanadas caseras con sabor a tradición.",
        address: "Calle de las Rejas, 12",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Bar El Encuentro",
        category: "restauracion",
        categoryLabel: "Restaurante",
        description: "El punto de reunión del barrio. Tapas variadas, raciones abundantes y un magnífico menú del día económico.",
        address: "Plaza Central, 4",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Clínica Dental Sonrisas",
        category: "servicios",
        categoryLabel: "Salud",
        description: "Odontología integral para toda la familia con la última tecnología y el trato más cercano que mereces.",
        address: "Av. Principal, 45",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Supermercado Vecino",
        category: "tiendas",
        categoryLabel: "Alimentación",
        description: "Fruta fresca de temporada, carnicería de calidad y todos los productos esenciales a un paso de tu casa.",
        address: "Calle Mayor, 8",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Pizzería La Mamma",
        category: "restauracion",
        categoryLabel: "Pizzería",
        description: "Auténtica pizza napolitana y pastas frescas. Contamos con reparto rápido a domicilio en todo el barrio.",
        address: "Calle de la Fuente, 3",
        image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Taller Mecánico MotorRejas",
        category: "servicios",
        categoryLabel: "Taller",
        description: "Reparación del automóvil, revisiones ITV, cambios de aceite y neumáticos. Máxima confianza y rapidez.",
        address: "Polígono Sur, Nave 2",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

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
            
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${business.image}" alt="${business.name}" loading="lazy">
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
