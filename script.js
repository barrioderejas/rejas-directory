// Datos reales de negocios del Barrio de Rejas extraídos de la búsqueda
const businesses = [
    {
        id: 1,
        name: "Frutería Julio Del Castillo",
        category: "tiendas",
        categoryLabel: "Frutería",
        description: "Productos frescos de la mejor calidad, fruta de temporada y atención personalizada a los vecinos del barrio.",
        address: "Barrio de Rejas",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Restaurante Trinchea",
        category: "restauracion",
        categoryLabel: "Restaurante",
        description: "Especializado en excelentes carnes al carbón, con cocina basada en productos de temporada y parrilla tradicional. ¡Ideal para eventos!",
        address: "Barrio de Rejas",
        image: "https://images.unsplash.com/photo-1544025162-8315ea07525c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Mercadona",
        category: "tiendas",
        categoryLabel: "Supermercado",
        description: "Tu supermercado de cercanía con todas las secciones de panadería, carnicería, pescadería y artículos de primera necesidad.",
        address: "Barrio de Rejas",
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Restaurante Copete",
        category: "restauracion",
        categoryLabel: "Restaurante",
        description: "Descubre nuestra deliciosa cocina casera, mediterránea y tradicional. El ambiente perfecto y tranquilo para comer en familia.",
        address: "Calle Enero (Rejas)",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Decathlon City Plenilunio",
        category: "tiendas",
        categoryLabel: "Deportes",
        description: "Toda la ropa, accesorios y equipamiento deportivo para mantenerte activo, a un paso dentro del barrio.",
        address: "C.C. Plenilunio",
        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Mesón Licinio",
        category: "restauracion",
        categoryLabel: "Mesón",
        description: "Restaurante de gran trayectoria familiar con cocina tradicional española y un maravilloso enfoque creativo de la zona.",
        address: "Barrio de Rejas",
        image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Asador 7 de Julio",
        category: "restauracion",
        categoryLabel: "Asador",
        description: "Reconocido por su espectacular comida, cortes asados y la altísima amabilidad de nuestro personal.",
        address: "Barrio de Rejas",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "AB Textil",
        category: "tiendas",
        categoryLabel: "Textil",
        description: "Establecimiento comercial de artículos textiles y moda ubicado en Ciudad Pegaso.",
        address: "C. Ocho, San Blas-Canillejas, 28022 Madrid",
        phone: "917 41 15 38",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        mapUrl: "http://goo.gl/maps/vuyPAEWRn972Ka8b7"
    },
    {
        id: 9,
        name: "Centro Cultural Ciudad Pegaso",
        category: "servicios",
        categoryLabel: "Centro Cultural",
        description: "Instalación accesible para personas con movilidad reducida.",
        address: "Avenida Séptima, 11, 28022 Madrid",
        phone: "917 41 58 52",
        email: "cccpegaso@madrid.es",
        image: "https://lh3.googleusercontent.com/notebooklm/ANHLwAw1qGteK2-WVfC8FjcKwKPguAfbqoHUKMwnUckFgl-fnyybHTwbuYbVis8qh9yadH6nk-tu_48T75WsZQBAezp3IH73_RrbAPNbT_3Ymvg2ywPkgl0wBg5EY2lJRiBMltkYUZ2ehw=w278-h204-v0"
    },
    {
        id: 10,
        name: "Centro Cultural José Luis López Vázquez",
        category: "servicios",
        categoryLabel: "Centro Cultural",
        description: "Instalación parcialmente accesible para personas con movilidad reducida. La entrada está a pie de calle pero hay un bordillo de una acera al acceder al centro.",
        address: "Calle Febrero, 4, 28022 Madrid",
        phone: "913 29 39 00",
        email: "ccjllopezvazquez@madrid.es",
        image: "https://lh3.googleusercontent.com/notebooklm/ANHLwAyeTQcgLFzPRFUONfvAgF1XOV9hAneGRDbWdPqFeytBWUpEuVCCkeJ1l8so8EQOBmxZWa8TbsSfPP_rbVqd0ooc5DkPGFBhOlaY7BaJDNmkWBAd7Cks_cy9vpkq9uqRJnkCI-ob=w260-h168-v0"
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
                        ${business.mapUrl ? `<a href="${business.mapUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">${business.address}</a>` : `<span>${business.address}</span>`}
                    </div>
                    ${business.phone ? `
                    <div class="card-meta" style="margin-top: 5px;">
                        <span class="icon">📞</span>
                        <a href="tel:${business.phone.replace(/\s+/g, '')}" style="color: inherit; text-decoration: none;">${business.phone}</a>
                    </div>` : ''}
                    ${business.email ? `
                    <div class="card-meta" style="margin-top: 5px;">
                        <span class="icon">✉️</span>
                        <a href="mailto:${business.email}" style="color: inherit; text-decoration: none;">${business.email}</a>
                    </div>` : ''}
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
