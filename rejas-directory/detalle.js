document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener ID de la URL (ej: detalle.html?id=12)
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    
    const TitleEl = document.getElementById('b-name');
    const CardEl = document.getElementById('detail-card');

    if (!idParam) {
        TitleEl.textContent = "Negocio no encontrado";
        CardEl.innerHTML = `<div style="padding:40px; text-align:center;">No se ha proporcionado un ID válido.</div>`;
        return;
    }

    // 2. Buscar en el array pre-cargado de data.js
    const businessId = parseInt(idParam, 10);
    const business = businesses.find(b => b.id === businessId);

    if (!business) {
        TitleEl.textContent = "Negocio no encontrado";
        CardEl.innerHTML = `<div style="padding:40px; text-align:center;">No pudimos encontrar este local en nuestro directorio.</div>`;
        return;
    }

    // 3. Pintar en el DOM
    document.title = `${business.name} - Barrio de Rejas`;
    TitleEl.textContent = business.name;

    const imagePath = business.image.startsWith('http') ? business.image : `fotos/${business.image}`;

    CardEl.innerHTML = `
        <img src="${imagePath}" alt="${business.name}" class="detail-img">
        <div class="detail-body">
            <span class="detail-badge">${business.categoryLabel}</span>
            <p class="detail-desc">${business.description}</p>
            
            <div class="contact-grid">
                <div class="contact-item">
                    <span class="contact-icon">📍</span>
                    <div class="contact-text">
                        <strong>Dirección</strong>
                        ${business.mapUrl 
                            ? `<a href="${business.mapUrl}" target="_blank" rel="noopener noreferrer">${business.address}</a>` 
                            : `<span>${business.address}</span>`
                        }
                    </div>
                </div>
                
                ${business.phone ? `
                <div class="contact-item">
                    <span class="contact-icon">📞</span>
                    <div class="contact-text">
                        <strong>Teléfono</strong>
                        <a href="tel:${business.phone.replace(/\\s+/g, '')}">${business.phone}</a>
                    </div>
                </div>` : ''}
                
                ${business.email ? `
                <div class="contact-item">
                    <span class="contact-icon">✉️</span>
                    <div class="contact-text">
                        <strong>Email</strong>
                        <a href="mailto:${business.email}">${business.email}</a>
                    </div>
                </div>` : ''}
            </div>
        </div>
    `;
});
