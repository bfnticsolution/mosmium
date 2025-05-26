// Données des applications
const apkStore = [
    {
        id: 1,
        name: "Canva Pro",
        version: "2.175.0",
        price: 1000,
        category: "Design",
        description: "Version premium de Canva avec accès à tous les modèles pro, éléments premium et fonctionnalités avancées de conception graphique.",
        image: "img/canva-pro.jpeg",
        paymentLink: "https://votre-lien-de-paiement.com/canva-pro",
        features: [
            "50+ millions d'images premium",
            "100 000+ modèles professionnels",
            "Suppression automatique de fond",
            "Résolution d'image augmentée",
            "Espace de stockage 100GB"
        ]
    },
    {
        id: 2,
        name: "CapCut Pro",
        version: "9.5.0",
        price: 2000,
        category: "Vidéo",
        description: "Montage vidéo professionnel sans watermark avec tous les effets premium et assets exclusifs.",
        image: "img/capcut-pro.jpg",
        paymentLink: "https://votre-lien-de-paiement.com/capcut-pro",
        features: [
            "Suppression du watermark",
            "100+ effets exclusifs",
            "Assets premium illimités",
            "Export 4K/60fps",
            "Pas de publicité"
        ]
    },
    {
        id: 3,
        name: "Telegram Premium",
        version: "9.7.4",
        price: 2000,
        category: "Communication",
        description: "Accédez à toutes les fonctionnalités premium de Telegram pour une expérience de messagerie améliorée.",
        image: "img/telegram-premium.jpg",
        paymentLink: "https://votre-lien-de-paiement.com/telegram-premium",
        features: [
            "Limite de chat augmentée",
            "Taille de fichier 4GB",
            "Vitesse de téléchargement max",
            "Badge premium",
            "Stickers animés exclusifs"
        ]
    },
    {
        id: 4,
        name: "KineMaster Pro",
        version: "4.17.2",
        price: 3000,
        category: "Vidéo",
        description: "Application de montage vidéo professionnelle avec toutes les fonctionnalités premium débloquées.",
        image: "img/kinemaster-pro.jpg",
        paymentLink: "https://votre-lien-de-paiement.com/kinmaster-pro",
        features: [
            "Suppression du filigrane",
            "Tous les effets premium",
            "Assets exclusifs",
            "Export en qualité maximale",
            "Pas de limitation"
        ]
    },
    {
        id: 5,
        name: "Photoroom Pro",
        version: "1.9.3",
        price: 1500,
        category: "Photo",
        description: "Éditeur photo AI avancé avec suppression de fond professionnelle et outils premium.",
        image: "img/photoroom-pro.jpg",
        paymentLink: "https://votre-lien-de-paiement.com/photoroom-pro",
        features: [
            "Suppression de fond instantanée",
            "100+ filtres professionnels",
            "Outils de retouche avancés",
            "Pas de watermark",
            "Résolution HD"
        ]
    },
    {
        id: 6,
        name: "YouTube Premium",
        version: "18.23.35",
        price: 5000,
        category: "Média",
        description: "Profitez de YouTube sans publicités, avec lecture en arrière-plan et accès à YouTube Music.",
        image: "img/youtube-premium.webp",
        paymentLink: "https://votre-lien-de-paiement.com/youtube-premium",
        features: [
            "Zéro publicité",
            "Lecture en arrière-plan",
            "Téléchargement offline",
            "Accès à YouTube Music",
            "Qualité maximale"
        ]
    },
    {
        id: 7,
        name: "TeraBox Pro",
        version: "3.14.1",
        price: 2000,
        category: "Stockage",
        description: "Stockage cloud premium avec 2TB d'espace et transfert à haute vitesse sans limitations.",
        image: "img/terabox-pro.png",
        paymentLink: "https://votre-lien-de-paiement.com/terabox-pro",
        features: [
            "2TB de stockage cloud",
            "Transfert haute vitesse",
            "Fichiers jusqu'à 20GB",
            "Synchronisation automatique",
            "Protection par mot de passe"
        ]
    },
    {
        id: 8,
        name: "XRecorder Pro",
        version: "2.3.8",
        price: 1000,
        category: "Utilitaires",
        description: "Enregistreur d'écran premium sans filigrane ni limitation de durée avec qualité 4K.",
        image: "img/xrecorder-pro.avif",
        paymentLink: "https://votre-lien-de-paiement.com/xrecorder-pro",
        features: [
            "Enregistrement 4K/60fps",
            "Pas de filigrane",
            "Durée illimitée",
            "Éditeur vidéo intégré",
            "Pas de publicité"
        ]
    },
    {
        id: 9,
        name: "YouCut Pro",
        version: "1.181.2",
        price: 2000,
        category: "Vidéo",
        description: "Éditeur vidéo tout-en-un avec toutes les fonctionnalités premium débloquées.",
        image: "img/youcut-pro.jpg",
        paymentLink: "https://votre-lien-de-paiement.com/youcut-pro",
        features: [
            "Tous les effets premium",
            "Suppression du watermark",
            "Export 4K sans perte",
            "100+ transitions",
            "Outils avancés"
        ]
    },
    {
        id: 10,
        name: "PixelLab Pro",
        version: "3.4.9",
        price: 1000,
        category: "Design",
        description: "Éditeur de texte et graphique premium avec toutes les polices et effets débloqués.",
        image: "img/pixellab-pro.jpg",
        paymentLink: "https://votre-lien-de-paiement.com/pixellab-pro",
        features: [
            "1000+ polices premium",
            "Effets de texte avancés",
            "Pas de watermark",
            "Outils 3D",
            "Export HD"
        ]
    },
    {
        id: 11,
        name: "Adobe Photoshop Pro",
        version: "7.1.72",
        price: 2000,
        category: "Photo",
        description: "Version mobile complète de Photoshop avec tous les outils professionnels débloqués.",
        image: "img/photoshop-pro.jpg",
        paymentLink: "https://votre-lien-de-paiement.com/photoshop-pro",
        features: [
            "Tous les outils pro",
            "Calques illimités",
            "Filtres premium",
            "Prise en charge PSD",
            "Export sans perte"
        ]
    }
];

// Nouvelle fonction pour afficher les catégories
function renderCategories() {
    const categories = [...new Set(apkStore.map(app => app.category))];
    const categoriesContainer = document.createElement('div');
    categoriesContainer.className = 'categories';
    
    // Bouton "Tous"
    const allButton = document.createElement('button');
    allButton.textContent = 'Tous';
    allButton.className = 'category-btn active';
    allButton.onclick = () => {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        allButton.classList.add('active');
        renderApps();
    };
    categoriesContainer.appendChild(allButton);
    
    // Boutons par catégorie
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'category-btn';
        button.onclick = () => {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterAppsByCategory(category);
        };
        categoriesContainer.appendChild(button);
    });
    
    appsGrid.parentNode.insertBefore(categoriesContainer, appsGrid);
}

// Filtrer les apps par catégorie
function filterAppsByCategory(category) {
    const filteredApps = apkStore.filter(app => app.category === category);
    renderFilteredApps(filteredApps);
}

// Afficher les apps filtrées
function renderFilteredApps(apps) {
    appsGrid.innerHTML = '';
    
    if (apps.length === 0) {
        appsGrid.innerHTML = '<p class="no-apps">Aucune application dans cette catégorie.</p>';
        return;
    }
    
    apps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.innerHTML = `
            <div class="app-image">
                <img src="${app.image}" alt="${app.name}" loading="lazy">
            </div>
            <div class="app-info">
                <h3>${app.name}</h3>
                <p>${app.description}</p>
                <div class="app-meta">
                    <span class="price">FCFA${app.price.toFixed(2)}</span>
                    <span class="version">v${app.version}</span>
                    <span class="category">${app.category}</span>
                </div>
                <button class="btn" onclick="openModal(${app.id})">Acheter Maintenant</button>
            </div>
        `;
        appsGrid.appendChild(appCard);
    });
}

// Modifier la fonction renderApps initiale pour utiliser renderFilteredApps
function renderApps() {
    renderFilteredApps(apkStore);
}

// Initialisation mise à jour
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderApps();
    
    // Animation au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.app-card, .feature');
        
        elements.forEach(el => {
            const elPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elPosition < screenPosition) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial state for animation
    const cards = document.querySelectorAll('.app-card, .feature');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});

// DOM Elements
const appsGrid = document.querySelector('.apps-grid');
const modal = document.getElementById('appModal');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');

// Afficher les applications
function renderApps() {
    appsGrid.innerHTML = '';
    
    apkStore.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.innerHTML = `
            <div class="app-image">
                <img src="${app.image}" alt="${app.name}">
            </div>
            <div class="app-info">
                <h3>${app.name}</h3>
                <p>${app.description}</p>
                <div class="app-meta">
                    <span class="price">FCFA${app.price.toFixed(2)}</span>
                    <span class="version">v${app.version}</span>
                </div>
                <button class="btn" onclick="openModal(${app.id})">Acheter Maintenant</button>
            </div>
        `;
        appsGrid.appendChild(appCard);
    });
}

// Ouvrir le modal avec les détails de l'application
function openModal(appId) {
    const app = apkStore.find(a => a.id === appId);
    
    if (app) {
        modalBody.innerHTML = `
            <h2>${app.name}</h2>
            <div class="app-modal-content">
                <img src="${app.image}" alt="${app.name}" style="width:100%; border-radius:8px; margin-bottom:20px;">
                <p><strong>Version:</strong> ${app.version}</p>
                <p><strong>Prix:</strong> FCFA${app.price.toFixed(2)}</p>
                <h3>Fonctionnalités:</h3>
                <ul style="margin-bottom:20px;">
                    ${app.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <a href="${app.paymentLink}" class="btn" style="display:block; text-align:center;">Procéder au paiement</a>
            </div>
        `;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Fermer le modal
function closeModalFunc() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Événements
closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    renderApps();
    
    // Animation au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.app-card, .feature');
        
        elements.forEach(el => {
            const elPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elPosition < screenPosition) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial state for animation
    const cards = document.querySelectorAll('.app-card, .feature');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load
});

// Simulation de recherche (pour extension future)
function searchApps(query) {
    const filteredApps = apkStore.filter(app => 
        app.name.toLowerCase().includes(query.toLowerCase()) || 
        app.description.toLowerCase().includes(query.toLowerCase())
    );
    
    appsGrid.innerHTML = '';
    
    if (filteredApps.length === 0) {
        appsGrid.innerHTML = '<p style="grid-column:1/-1; text-align:center;">Aucune application trouvée.</p>';
        return;
    }
    
    filteredApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.innerHTML = `
            <div class="app-image">
                <img src="${app.image}" alt="${app.name}">
            </div>
            <div class="app-info">
                <h3>${app.name}</h3>
                <p>${app.description}</p>
                <div class="app-meta">
                    <span class="price">FCFA${app.price.toFixed(2)}</span>
                    <span class="version">v${app.version}</span>
                </div>
                <button class="btn" onclick="openModal(${app.id})">Acheter Maintenant</button>
            </div>
        `;
        appsGrid.appendChild(appCard);
    });
}

// Pour ajouter une barre de recherche plus tard:
// <input type="text" id="searchInput" placeholder="Rechercher des applications...">
// document.getElementById('searchInput').addEventListener('input', (e) => {
//     searchApps(e.target.value);
// });