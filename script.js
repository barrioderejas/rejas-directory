// Datos reales de negocios del Barrio de Rejas extraídos de la búsqueda
const businesses = [


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
    },
    {
        id: 11,
        name: "Centro de Salud Rejas",
        category: "servicios",
        categoryLabel: "Centro de Salud",
        description: "Centro de atención primaria del Servicio Madrileño de Salud. De lunes a viernes (08:00 - 21:00). Requiere cita previa.",
        address: "Calle Euterpe, 12, 28022 Madrid",
        phone: "913 20 22 84",
        mapUrl: "https://maps.google.com/?q=Centro+de+Salud+Rejas,+Calle+Euterpe,+12,+Madrid",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "CEIP Ciudad Pegaso",
        category: "servicios",
        categoryLabel: "Colegio Público",
        description: "Colegio Público de Educación Infantil y Primaria bilingüe en el barrio de Rejas.",
        address: "Avenida Séptima, 12, 28022 Madrid",
        phone: "917 41 20 17",
        email: "cp.ciudadpegaso.madrid@educa.madrid.org",
        mapUrl: "https://maps.google.com/?q=CEIP+Ciudad+Pegaso,+Avenida+Septima,+12,+Madrid",
        image: "https://images.unsplash.com/photo-1546410531-bea5aad131d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "IES Jane Goodall",
        category: "servicios",
        categoryLabel: "Instituto Público",
        description: "Instituto de Educación Secundaria de la Comunidad de Madrid situado en el barrio de Rejas.",
        address: "Calle de Deyanira, s/n, 28022 Madrid",
        phone: "917 01 13 51",
        email: "ies.janegoodall.madrid@educa.madrid.org",
        mapUrl: "https://maps.google.com/?q=IES+Jane+Goodall,+Calle+de+Deyanira,+Madrid",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        name: "Escuela Infantil Las Leandras",
        category: "servicios",
        categoryLabel: "Escuela Infantil",
        description: "Escuela Infantil Municipal del Ayuntamiento de Madrid ubicada en el distrito de San Blas-Canillejas.",
        address: "Calle de Deyanira, s/n (esquina Estación de O'Donnell), 28022 Madrid",
        phone: "917 42 12 17",
        email: "eilasleandras@madrid.es",
        mapUrl: "https://maps.google.com/?q=Escuela+Infantil+Las+Leandras,+Calle+de+Deyanira,+Madrid",
        image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        name: "Escuela Infantil Las Mercedes",
        category: "servicios",
        categoryLabel: "Escuela Infantil",
        description: "Centro educativo público de primer ciclo de Educación Infantil, perteneciente al Ayuntamiento de Madrid.",
        address: "Calle de Samaniego, 22, 28022 Madrid",
        phone: "917 47 08 78",
        email: "eilasmercedes@madrid.es",
        mapUrl: "https://maps.google.com/?q=Escuela+Infantil+Las+Mercedes,+Calle+de+Samaniego,+22,+Madrid",
        image: "https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        name: "Escuela Infantil El Mundo de Mozart",
        category: "servicios",
        categoryLabel: "Escuela Infantil",
        description: "Centro educativo privado de primer ciclo de Educación Infantil (0 a 3 años).",
        address: "Calle Nanclares de Oca, 14, 28022 Madrid",
        phone: "917 47 09 71",
        email: "info@elmundodemozart.com",
        mapUrl: "https://maps.google.com/?q=El+Mundo+de+Mozart,+Calle+Nanclares+de+Oca,+14,+Madrid",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 17,
        name: "Papelería El Rincón de la Lectura",
        category: "tiendas",
        categoryLabel: "Papelería",
        description: "Papelería, librería, copistería y servicios de impresión en Ciudad Pegaso.",
        address: "Calle Once, 4, 28022 Madrid",
        phone: "917 47 57 71",
        email: "imprerincon@gmail.com",
        mapUrl: "https://maps.google.com/?q=El+Rincon+de+la+Lectura,+Calle+Once,+4,+Madrid",
        image: "https://images.unsplash.com/photo-1583508104875-52b8004f2603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 18,
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
        id: 19,
        name: "Menta & Cilantro Resto-Bar",
        category: "restauracion",
        categoryLabel: "Restaurante",
        description: "Bar-restaurante de cocina venezolana auténtica y hamburguesas gourmet. Dispone de terraza.",
        address: "Calle de Nanclares de Oca, 1, 28022 Madrid",
        phone: "910 71 52 99",
        mapUrl: "https://maps.google.com/?q=Menta+y+Cilantro,+Calle+Nanclares+de+Oca,+1,+Madrid",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 20,
        name: "Farmacia Plenilunio",
        category: "tiendas",
        categoryLabel: "Farmacia",
        description: "Farmacia situada dentro del Centro Comercial Plenilunio. Amplio horario todos los días de la semana.",
        address: "C.C. Plenilunio, Calle Arrastaria s/n, 28022 Madrid",
        phone: "917 47 32 01",
        mapUrl: "https://maps.google.com/?q=Farmacia+Centro+Comercial+Plenilunio+Madrid",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 21,
        name: "Farmacia Martínez Jiménez",
        category: "tiendas",
        categoryLabel: "Farmacia",
        description: "Farmacia de barrio en Ciudad Pegaso, atención cercana y personalizada.",
        address: "Plaza San Cristóbal, s/n, 28022 Madrid",
        phone: "917 42 62 48",
        mapUrl: "https://maps.google.com/?q=Farmacia+Martinez+Jimenez+Plaza+San+Cristobal+Madrid",
        image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 22,
        name: "Farmacia Campezo",
        category: "tiendas",
        categoryLabel: "Farmacia",
        description: "Farmacia actual situada en el Parque Empresarial Las Mercedes. Disponen de atención vía telefónica y WhatsApp.",
        address: "Calle de Campezo, 14, 28022 Madrid",
        phone: "914 15 27 04",
        email: "contacto@farmaciacampezo.com",
        mapUrl: "https://maps.google.com/?q=Farmacia+Campezo+14+Madrid",
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 23,
        name: "Farmacia María del Carmen López Velasco",
        category: "tiendas",
        categoryLabel: "Farmacia",
        description: "Farmacia con servicios de homeopatía, dietética y dermocosmética ubicada muy cerca de la Papelería El Rincón de la Lectura.",
        address: "Calle Once, 2 (Local 7), 28022 Madrid",
        phone: "917 41 00 75",
        email: "info@farmapromocion.es",
        mapUrl: "https://maps.google.com/?q=Farmacia+Calle+Once,+2,+Madrid",
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 24,
        name: "Farmacia María Magdalena Ballesteros Jiménez",
        category: "tiendas",
        categoryLabel: "Farmacia",
        description: "Farmacia de trato cercano en la zona de Rejas (San Blas-Canillejas).",
        address: "Calle Pirra, 14, 28022 Madrid",
        phone: "914 13 77 00",
        mapUrl: "https://maps.google.com/?q=Farmacia+Calle+Pirra,+14,+Madrid",
        image: "https://images.unsplash.com/photo-1549480117-7422b4eb1dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 25,
        name: "Farmacia Ortopedia Oca (Isabel Coma)",
        category: "tiendas",
        categoryLabel: "Farmacia",
        description: "Farmacia especializada en ortopedia, dermocosmética y dietética. Titular: Isabel Coma.",
        address: "Calle Nanclares de Oca, 10, 28022 Madrid",
        phone: "917 82 03 85",
        mapUrl: "https://maps.google.com/?q=Farmacia+Ortopedia+Oca,+Calle+Nanclares+de+Oca,+10,+Madrid",
        image: "https://images.unsplash.com/photo-1550130635-1811bb1f26ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 26,
        name: "Clínica Veterinaria Los Cachorros",
        category: "servicios",
        categoryLabel: "Veterinario",
        description: "Clínica veterinaria para animales de compañía y exóticos. Consulta, cirugía, peluquería y laboratorio.",
        address: "Calle Aramayona, 5 (Local 4A), 28022 Madrid",
        phone: "918 31 19 95",
        mapUrl: "https://maps.google.com/?q=Clinica+Veterinaria+Los+Cachorros+Madrid",
        image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 27,
        name: "Hospital Veterinario Veterios",
        category: "servicios",
        categoryLabel: "Urgencias 24h",
        description: "Hospital veterinario de referencia. Dispone de urgencias presenciales 24 horas y especialidades médicas.",
        address: "Calle Arrastaria, 23 (Plenilunio), 28022 Madrid",
        phone: "912 90 06 40",
        mapUrl: "https://maps.google.com/?q=Hospital+Veterinario+Veterios+Madrid",
        image: "https://images.unsplash.com/photo-1549232371-55fe46033486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
