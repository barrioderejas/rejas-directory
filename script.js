<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Directorio de Negocios - Barrio de Rejas</title>
    <meta name="description" content="Directorio de comercios, tiendas y servicios de la asociación del Barrio de Rejas.">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="hero">
        <div class="hero-content">
            <h1>Barrio de Rejas</h1>
            <p>Descubre el comercio local y los servicios que dan vida a nuestro vecindario.</p>
        </div>
        <!-- Wave shape divider -->
        <div class="custom-shape-divider-bottom" aria-hidden="true">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,130.83,123.63,195.38,107.41,239.52,96.34,281.33,70.53,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </header>

    <main class="container">
        <section class="controls">
            <div class="search-bar">
                <input type="text" id="searchInput" placeholder="¿Qué estás buscando? (Ej. panadería, taller...)">
                <button aria-label="Buscar" class="btn-search">🔍</button>
            </div>
            
            <nav class="filters" aria-label="Categorías de negocios">
                <button class="filter-btn active" data-category="all">Todos</button>
                <button class="filter-btn" data-category="restauracion">Restauración</button>
                <button class="filter-btn" data-category="tiendas">Tiendas</button>
                <button class="filter-btn" data-category="servicios">Servicios</button>
            </nav>
        </section>

        <section class="results">
            <div id="business-grid" class="business-grid">
                <!-- Cards will be injected via JS -->
            </div>
            
            <div id="no-results" class="no-results hidden">
                <p>No se encontraron negocios con esos términos. ¡Intenta con otras palabras!</p>
            </div>
        </section>
        
        <section class="map-section">
            <div class="map-header">
                <h2>Ubicación</h2>
                <p>Encuentra todos estos negocios en el corazón del Barrio de Rejas.</p>
            </div>
            <div class="map-container">
                <iframe 
                    src="https://maps.google.com/maps?q=Barrio%20de%20Rejas,%20Madrid&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="400" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Mapa del Barrio de Rejas">
                </iframe>
            </div>
        </section>
    </main>

    <footer class="main-footer">
        <p>Asociación del Barrio de Rejas &copy; 2026</p>
        <p>Apoyando el comercio de proximidad y el espíritu comunitario.</p>
    </footer>

    <script src="script.js?v=2"></script>
</body>
</html>
