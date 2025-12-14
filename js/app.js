// ==========================================
// DONNÉES DES EXPÉRIENCES PROFESSIONNELLES
// ==========================================
const experiencesData = {
  'mobelite': {
    title: 'Stage PFE - Développeur Full-Stack & IA',
    subtitle: 'Mobelite Tunisie',
    description: 'Développement d\'une plateforme mobile intelligente pour l\'analyse des avis clients en temps réel. Le système utilise l\'intelligence artificielle et le traitement du langage naturel (NLP) pour extraire, analyser et classifier automatiquement les avis provenant de différentes sources.',
    date: 'Février 2025 - Août 2025 (7 mois)',
    tasks: [
      'Développement d\'une application mobile cross-platform avec React Native pour iOS et Android',
      'Création d\'un dashboard temps réel avec Redux pour la gestion d\'état et synchronisation offline-first',
      'Conception et développement d\'une architecture microservices avec Node.js et Express',
      'Mise en place de l\'authentification sécurisée avec JWT et système OTP pour la validation',
      'Développement d\'un système de scraping automatisé pour collecter les avis depuis différentes plateformes',
      'Intégration de modèles de classification NLP développés en Python avec TensorFlow',
      'Implémentation d\'Apache Kafka pour la communication inter-services et le traitement asynchrone',
      'Configuration de l\'architecture pour assurer la scalabilité horizontale',
      'Conteneurisation de l\'application avec Docker pour faciliter le déploiement',
      'Tests unitaires et d\'intégration, optimisation des performances'
    ],
    tech: ['React Native', 'Node.js', 'Express.js', 'Python', 'TensorFlow', 'NLP', 'Apache Kafka', 'MongoDB', 'Redux', 'JWT', 'OTP', 'Cheerio', 'Docker', 'REST APIs', 'Git', 'GitLab CI/CD', 'Figma', 'Jira'],
    results: 'Plateforme opérationnelle permettant l\'analyse de milliers d\'avis en temps réel avec une précision de classification élevée. L\'architecture microservices assure une scalabilité optimale et une maintenance facilitée. Le système offline-first garantit une expérience utilisateur fluide même sans connexion internet.',
    links: []
  },

  'ml-international': {
    title: 'Développeur Full-Stack',
    subtitle: 'M&L International',
    description: 'Développement d\'un module de gestion des litiges pour l\'application Docutrans. Ce module permet aux clients de soumettre des réclamations concernant leurs commandes, avec upload de documents et photos justificatives, suivi du statut de traitement et workflow d\'approbation.',
    date: 'Juin 2024 - Décembre 2024 (7 mois)',
    tasks: [
      'Développement de l\'interface web responsive avec Angular et de l\'application mobile avec Ionic',
      'Création d\'un système de gestion des réclamations clients avec upload multimédia (photos, documents)',
      'Implémentation de la validation des données côté client et serveur',
      'Développement du workflow d\'approbation avec différents niveaux de validation',
      'Conception et développement de l\'API RESTful avec Symfony',
      'Mise en place de la gestion sécurisée des fichiers uploadés',
      'Intégration avec la base de données MariaDB',
      'Configuration du pipeline CI/CD avec GitLab pour les tests automatisés et le déploiement continu',
      'Suivi du projet en méthodologie Agile avec Jira',
      'Documentation technique et formation des utilisateurs'
    ],
    tech: ['Angular', 'Ionic', 'Symfony', 'PHP', 'MariaDB', 'REST API', 'GitLab CI/CD', 'Jira', 'HTML/CSS', 'TypeScript'],
    results: 'Module opérationnel intégré dans l\'application Docutrans, permettant une gestion efficace des réclamations clients. Amélioration significative du temps de traitement des litiges et de la satisfaction client grâce à un suivi transparent du statut des réclamations.',
    links: []
  },

  'ibs-outsourcing': {
    title: 'Développeur Full-Stack',
    subtitle: 'IBS Outsourcing',
    description: 'Développement d\'un module de gestion des tâches internes pour optimiser le workflow de l\'entreprise. L\'application permet la création, l\'assignation et le suivi des tâches entre les différents membres de l\'équipe.',
    date: 'Mai 2023 - Juillet 2023 (3 mois)',
    tasks: [
      'Développement de l\'interface utilisateur avec Angular et TypeScript',
      'Création du backend avec Spring Boot en architecture MVC',
      'Implémentation des opérations CRUD pour la gestion des tâches',
      'Développement du système d\'assignation des tâches aux utilisateurs',
      'Création du tableau de bord pour le suivi des tâches en cours et terminées',
      'Intégration avec la base de données pour la persistance des données',
      'Utilisation de GitLab pour le contrôle des versions',
      'Gestion du projet avec Jira en méthodologie Agile',
      'Tests fonctionnels et débogage'
    ],
    tech: ['Spring Boot', 'Java', 'Angular', 'TypeScript', 'MVC', 'REST API', 'SQL', 'GitLab', 'Jira', 'HTML/CSS'],
    results: 'Module fonctionnel permettant une meilleure organisation et un suivi efficace des tâches au sein de l\'entreprise. Amélioration de la productivité et de la collaboration entre les équipes.',
    links: []
  }
};

// =====================================
// DONNÉES DES PROJETS FREELANCE
// =====================================
const projectsData = {
  'surface-sport': {
    title: 'Surface Sport – Plateforme E-commerce',
    subtitle: 'Projet Freelance - Site E-commerce de Chaussures de Sport',
    description: 'Développement complet d\'une plateforme e-commerce pour la vente de chaussures de sport. Le site comprend une interface client moderne pour la navigation et l\'achat, ainsi qu\'un panneau d\'administration complet pour la gestion du catalogue, des commandes et des utilisateurs.',
    date: 'Projet Freelance - 2023',
    tasks: [
      'Développement de l\'interface client responsive avec Vue.js',
      'Création du panneau d\'administration avec Laravel',
      'Implémentation du système de gestion des produits (CRUD complet)',
      'Développement du système de gestion des commandes avec suivi du statut',
      'Mise en place du système de gestion des utilisateurs et des rôles',
      'Intégration d\'un système de panier dynamique',
      'Développement du système de recherche et de filtrage des produits',
      'Optimisation SEO pour améliorer le référencement',
      'Optimisation des performances et du temps de chargement',
      'Déploiement sécurisé sur serveur de production',
      'Formation du client à l\'utilisation du panneau admin'
    ],
    tech: ['Laravel', 'PHP', 'Vue.js', 'JavaScript', 'MySQL', 'HTML/CSS', 'Bootstrap', 'SEO', 'Git'],
    features: [
      'Interface Client : Navigation fluide, recherche avancée, filtres par catégories, panier dynamique, suivi des commandes',
      'Interface Admin : Gestion complète des produits (ajout, modification, suppression), gestion des stocks',
      'Gestion des commandes avec changement de statut (en attente, en cours, livrée)',
      'Gestion des utilisateurs avec attribution de rôles (admin, client)',
      'Tableau de bord avec statistiques de ventes',
      'Design responsive adapté à tous les écrans',
      'Optimisation SEO pour un meilleur référencement Google',
      'Système de sécurité robuste avec protection CSRF et validation des données'
    ],
    results: 'Site e-commerce opérationnel et performant, actuellement en production sur surface-sport.com. Le client peut gérer son catalogue et ses commandes de manière autonome grâce au panneau d\'administration intuitif.',
    links: [
      { text: 'Visiter le site', url: 'https://surface-sport.com/', icon: 'fas fa-external-link-alt' }
    ]
  },

  'event-platform': {
    title: 'Plateforme de Gestion d\'Événements',
    subtitle: 'Projet Freelance - Système Complet de Gestion d\'Événements',
    description: 'Développement d\'une plateforme web complète pour la gestion et l\'organisation d\'événements. Le système permet aux organisateurs de créer et gérer des événements, tandis que les participants peuvent s\'inscrire et suivre les événements auxquels ils participent.',
    date: 'Projet Freelance - 2024',
    tasks: [
      'Conception de l\'architecture de l\'application avec modélisation UML',
      'Développement du backend robuste avec Symfony et API Platform',
      'Création d\'une API RESTful documentée pour toutes les fonctionnalités',
      'Développement de l\'interface utilisateur moderne avec Angular',
      'Implémentation du système de gestion des événements (création, modification, suppression)',
      'Développement du système d\'inscription des participants',
      'Création du tableau de bord pour les organisateurs',
      'Mise en place de l\'authentification et de la gestion des rôles',
      'Conteneurisation de l\'application avec Docker',
      'Configuration de Docker Compose pour l\'environnement de développement',
      'Tests de l\'API et de l\'interface utilisateur',
      'Documentation technique complète du projet'
    ],
    tech: ['Symfony', 'API Platform', 'PHP', 'Angular', 'TypeScript', 'Docker', 'Docker Compose', 'PostgreSQL', 'REST API', 'UML', 'Git', 'HTML/CSS'],
    features: [
      'Création et gestion d\'événements (titre, description, date, lieu, capacité)',
      'Système d\'inscription en ligne pour les participants',
      'Tableau de bord organisateur avec liste des participants inscrits',
      'Gestion des différents types d\'événements (conférences, workshops, séminaires)',
      'Système de notifications pour les mises à jour d\'événements',
      'Interface utilisateur intuitive et responsive',
      'API RESTful complète et documentée',
      'Authentification sécurisée avec gestion des rôles (organisateur, participant)',
      'Architecture modulaire et scalable',
      'Environnement conteneurisé facilitant le déploiement'
    ],
    results: 'Plateforme fonctionnelle permettant une gestion efficace des événements de A à Z. L\'architecture basée sur API Platform offre une grande flexibilité et permet des intégrations futures. La conteneurisation avec Docker facilite le déploiement et la maintenance.',
    links: []
  }
};

// =====================================
// GESTION DE LA NAVIGATION
// =====================================

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Effet de scroll sur la navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// =====================================
// GESTION DU FORMULAIRE DE CONTACT
// =====================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    const formData = {
      name: this.querySelector('input[type="text"]').value,
      email: this.querySelector('input[type="email"]').value,
      message: this.querySelector('textarea').value
    };

    // OPTION WHATSAPP (ACTIVÉE) - Envoyer directement via WhatsApp
    const phoneNumber = '21653819634'; // Votre numéro au format international (sans + ni espaces)
    const whatsappMessage = `*Nouveau message du portfolio*\n\n` +
      `👤 *Nom:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n\n` +
      `💬 *Message:*\n${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappURL, '_blank');

    // Réinitialiser le formulaire
    this.reset();

    // Message de confirmation
    alert('✅ Vous allez être redirigé vers WhatsApp !');

    /*
    // OPTION 2: Utiliser EmailJS (Recommandé pour les emails)
    // 1. Inscrivez-vous sur https://www.emailjs.com/
    // 2. Créez un service email
    // 3. Créez un template
    // 4. Remplacez YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "bilelbenghalba@outlook.com"
    }, "YOUR_PUBLIC_KEY")
    .then(function(response) {
      alert('✅ Message envoyé avec succès !');
      contactForm.reset();
    }, function(error) {
      alert('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
      console.error('Erreur:', error);
    });
    */

    /*
    // OPTION 3: Envoyer vers votre propre serveur PHP
    fetch('send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if(data.success) {
        alert('✅ Message envoyé avec succès !');
        this.reset();
      } else {
        alert('❌ Erreur lors de l\'envoi.');
      }
    })
    .catch(error => {
      alert('❌ Erreur lors de l\'envoi.');
      console.error('Erreur:', error);
    });
    */

    /*
    // OPTION 4: Ouvrir le client email par défaut
    const subject = encodeURIComponent('Contact depuis le portfolio');
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:bilelbenghalba@outlook.com?subject=${subject}&body=${body}`;
    this.reset();
    */
  });
}

// =====================================
// GESTION DE LA MODAL
// =====================================

const modal = document.getElementById('detailsModal');
const closeModalBtn = document.querySelector('.close-modal');

// Ouvrir la modal pour les EXPÉRIENCES
document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const experienceId = this.getAttribute('data-experience');
    openExperienceModal(experienceId);
  });
});

// Ouvrir la modal pour les PROJETS
document.querySelectorAll('.project-card').forEach(card => {
  // Clic sur la carte entière
  card.addEventListener('click', function(e) {
    // Ne pas ouvrir si on clique sur le lien "Visiter le site"
    if (e.target.closest('.project-link-visit')) {
      return;
    }
    e.preventDefault();
    const projectId = this.getAttribute('data-project');
    openProjectModal(projectId);
  });

  // Clic spécifique sur le bouton "Voir détails"
  const detailsBtn = card.querySelector('.project-link-details');
  if (detailsBtn) {
    detailsBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      const projectId = card.getAttribute('data-project');
      openProjectModal(projectId);
    });
  }
});

// Fonction pour ouvrir la modal avec les détails d'une EXPÉRIENCE
function openExperienceModal(experienceId) {
  const experience = experiencesData[experienceId];

  if (!experience) {
    console.error('Expérience non trouvée:', experienceId);
    return;
  }

  // Remplir les informations
  document.getElementById('modal-title').textContent = experience.title;
  document.getElementById('modal-subtitle').textContent = experience.subtitle;
  document.getElementById('modal-description').textContent = experience.description;
  document.getElementById('modal-date').textContent = experience.date;

  // Remplir les tâches/responsabilités
  const tasksList = document.getElementById('modal-tasks');
  tasksList.innerHTML = '';
  experience.tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    tasksList.appendChild(li);
  });

  // Remplir les technologies
  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = '';
  experience.tech.forEach(tech => {
    const span = document.createElement('span');
    span.textContent = tech;
    techContainer.appendChild(span);
  });

  // Cacher la section fonctionnalités (pour les expériences)
  document.getElementById('modal-features-section').style.display = 'none';

  // Afficher les résultats
  const resultsSection = document.getElementById('modal-results-section');
  resultsSection.style.display = 'block';
  document.getElementById('modal-results').textContent = experience.results;

  // Gérer les liens
  const linksSection = document.getElementById('modal-links-section');
  if (experience.links && experience.links.length > 0) {
    linksSection.style.display = 'block';
    const linksContainer = document.getElementById('modal-links');
    linksContainer.innerHTML = '';
    experience.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.target = '_blank';
      a.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
      linksContainer.appendChild(a);
    });
  } else {
    linksSection.style.display = 'none';
  }

  // Afficher la modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fonction pour ouvrir la modal avec les détails d'un PROJET
function openProjectModal(projectId) {
  const project = projectsData[projectId];

  if (!project) {
    console.error('Projet non trouvé:', projectId);
    return;
  }

  // Remplir les informations
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-subtitle').textContent = project.subtitle;
  document.getElementById('modal-description').textContent = project.description;
  document.getElementById('modal-date').textContent = project.date;

  // Remplir les tâches/responsabilités
  const tasksList = document.getElementById('modal-tasks');
  tasksList.innerHTML = '';
  project.tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    tasksList.appendChild(li);
  });

  // Remplir les technologies
  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = '';
  project.tech.forEach(tech => {
    const span = document.createElement('span');
    span.textContent = tech;
    techContainer.appendChild(span);
  });

  // Afficher les fonctionnalités (pour les projets)
  const featuresSection = document.getElementById('modal-features-section');
  if (project.features && project.features.length > 0) {
    featuresSection.style.display = 'block';
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  } else {
    featuresSection.style.display = 'none';
  }

  // Afficher les résultats
  const resultsSection = document.getElementById('modal-results-section');
  resultsSection.style.display = 'block';
  document.getElementById('modal-results').textContent = project.results;

  // Gérer les liens
  const linksSection = document.getElementById('modal-links-section');
  if (project.links && project.links.length > 0) {
    linksSection.style.display = 'block';
    const linksContainer = document.getElementById('modal-links');
    linksContainer.innerHTML = '';
    project.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.target = '_blank';
      a.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
      linksContainer.appendChild(a);
    });
  } else {
    linksSection.style.display = 'none';
  }

  // Afficher la modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fermer la modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Événements pour fermer la modal
closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeModal();
  }
});

// Fermer avec la touche Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// =====================================
// ANIMATIONS AU SCROLL
// =====================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observer les items de la timeline
document.querySelectorAll('.timeline-item').forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(30px)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(item);
});

// Observer les cartes de projets
document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Observer les catégories de compétences
document.querySelectorAll('.skill-category').forEach(skill => {
  skill.style.opacity = '0';
  skill.style.transform = 'translateY(30px)';
  skill.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(skill);
});
