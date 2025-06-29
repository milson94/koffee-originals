document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar Toggle Functionality ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');

    function toggleMenu() {
        document.body.classList.toggle('menu-open');
    }

    menuToggle.addEventListener('click', toggleMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (document.body.classList.contains('menu-open')) {
                toggleMenu();
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && document.body.classList.contains('menu-open')) {
            toggleMenu();
        }
    });

    // --- Comic Data for Modals ---
    const comicsData = [
        {
            id: 'galactic-guardians',
            title: 'Galactic Guardians: The Cosmic Nexus',
            image: 'images/Galactic-Guardians.jpg',
            summary: `In the farthest reaches of the Andromeda galaxy, a new threat emerges from the void: the Nihil, an ancient race bent on consuming all light and life. The Galactic Guardians, a diverse team of interstellar heroes—Captain Nova, the telekinetic powerhouse; Kael, the master of cosmic energy; Lyra, the agile alien scout; and Jax, the cybernetically enhanced strategist—find themselves on the front lines of a war that could unravel the very fabric of existence. Their latest mission leads them to the Cosmic Nexus, a legendary artifact rumored to hold the key to universal balance, but also the power to accelerate the Nihil's destructive agenda. As they navigate treacherous nebulae, evade Nihil fleets, and confront their own inner demons, the Guardians must forge an unbreakable bond to protect the cosmos. This issue delves deep into the origins of the Cosmic Nexus and reveals a shocking betrayal that threatens to tear the team apart from within. Can they harness the Nexus's power before the Nihil plunge the universe into eternal darkness, or will their quest lead to their ultimate demise?`
        },
        {
            id: 'chronos-rangers',
            title: 'Chronos Rangers: Echoes of Time',
            image: 'images/Chronos-Rangers.jpg',
            summary: `The fabric of time is tearing, and only the Chronos Rangers can mend it. Led by the enigmatic Dr. Aris Thorne, a team of temporal specialists—Sergeant Kaito, the disciplined warrior; Dr. Lena Petrova, the brilliant chronoscientist; and young Jax, the intuitive temporal empath—are tasked with correcting anomalies that threaten to rewrite history. In "Echoes of Time," a rogue temporal agent from a dystopian future, known only as 'The Anomaly', begins to erase pivotal moments, starting with the invention of clean energy in the 21st century. The Rangers must chase The Anomaly through various historical periods, from the bustling streets of ancient Rome to the chaotic battlefields of World War II, all while battling paradoxes and temporal distortions. Each jump through time reveals more about The Anomaly's tragic past and their desperate, misguided attempt to prevent a future catastrophe by destroying the past. The Rangers face their toughest challenge yet: can they preserve the timeline without sacrificing their own existence, or will they become mere echoes in the annals of a forgotten history?`
        },
        {
            id: 'aether-knights',
            title: 'Aether Knights: First Flight: A New Era',
            image: 'images/Aether-Knights.jpg',
            summary: `In a world where magic and technology intertwine, the Aether Knights are the last line of defense against the encroaching Shadow Blight. For centuries, they have guarded the celestial city of Aeridor, powered by the mystical Aetherium crystals. This inaugural issue introduces Elara, a young, untested Aether Knight, whose latent powers are far greater than anyone suspects. When a devastating attack by the Shadow Blight threatens to shatter Aeridor's protective shield, Elara is forced to confront not only the monstrous creatures but also the skepticism of the elder Knights. Accompanied by her loyal Griffin companion, Zephyr, and guided by the wise but weary Grand Master Valerius, Elara embarks on a perilous journey to reactivate ancient Aetherium conduits scattered across the fallen lands below. As she faces trials of courage and self-doubt, Elara uncovers a conspiracy that reaches into the very heart of Aeridor, revealing that the Shadow Blight might not be the only enemy they face. This is the story of her first flight, a tale of destiny, sacrifice, and the dawn of a new era for the Aether Knights.`
        },
        {
            id: 'void-wanderers',
            title: 'Void Wanderers: The Whispers of Xylos',
            image: 'images/Void-Wanderers.jpg',
            summary: `Beyond the known galaxies lies the Void, a vast, uncharted expanse filled with cosmic wonders and unimaginable horrors. The Void Wanderers, a crew of intrepid explorers aboard the starship 'Odyssey', are humanity's pioneers into this mysterious realm. Captain Eva Rostova, the stoic leader; Dr. Arlo Finch, the xenobotanist; and Lieutenant Commander Zara, the skilled pilot, embark on a mission to investigate a strange energy signature emanating from the planet Xylos, a world long thought to be barren. Upon arrival, they discover Xylos is not dead, but teeming with a unique, sentient flora that communicates through psychic whispers. These whispers, initially benign, soon turn sinister, revealing ancient secrets and driving the crew to the brink of madness. As the 'Odyssey' becomes entangled in Xylos's strange ecosystem, the Wanderers must decipher the planet's true intentions before they become permanent residents of its mind-bending landscape. Is Xylos a new form of life, a cosmic trap, or a gateway to something far more profound and terrifying? This issue pushes the boundaries of space exploration and psychological horror.`
        },
        {
            id: 'cyberpunk-shadows',
            title: 'Cyberpunk Shadows: Origin Story: Neo-Tokyo',
            image: 'images/Cyberpunk-Shadows.jpg',
            summary: `In the sprawling, neon-drenched metropolis of Neo-Tokyo, where corporate power reigns supreme and augmented reality blurs the lines of perception, a new kind of hero emerges from the shadows. Kaito, a street-smart hacker with a past he can't outrun, finds himself caught between the iron grip of the monolithic Arasaka Corporation and the burgeoning underground resistance. This origin story plunges into the gritty underbelly of Neo-Tokyo, where advanced cybernetics are commonplace, but humanity is a luxury. Kaito's journey begins when he stumbles upon a corporate conspiracy involving a new neuro-implant that promises ultimate control but secretly siphons the consciousness of its users. Teaming up with a rogue ex-military cyborg, 'Ghost', and a charismatic leader of the digital resistance, 'Echo', Kaito must use his hacking prowess to expose Arasaka's dark agenda. But in a city where every shadow hides a secret and every connection can be severed, trust is a dangerous game. Can Kaito dismantle the system before he becomes another casualty of the cyberpunk shadows, or will Neo-Tokyo consume him entirely?`
        },
        {
            id: 'quantum-leap',
            title: 'Quantum Leap: One-Shot Special',
            image: 'images/Quantum-Leap.jpg',
            summary: `Dr. Evelyn Reed, a brilliant but reckless quantum physicist, believes she's on the verge of a breakthrough: instantaneous teleportation. But during her experimental 'Quantum Leap' device's maiden voyage, something goes terribly wrong. Instead of simply moving from point A to point B, Evelyn finds herself unstuck in time and space, leaping through random moments in history and alternate realities. This one-shot special follows Evelyn's frantic attempts to return to her own timeline. She lands in a dinosaur-infested prehistoric era, then a fantastical medieval kingdom, a futuristic alien city, and even a reality where she never existed. Each leap is a race against time, as she tries to gather fragments of energy to stabilize her device, all while avoiding dangers unique to each reality. Along the way, she encounters echoes of her past, glimpses of possible futures, and the unsettling realization that her 'leap' might have unintended consequences for the entire multiverse. Can Evelyn find her way home, or is she destined to be a perpetual wanderer across the infinite possibilities of the Quantum Leap?`
        }
    ];

    // --- Modal Elements ---
    const comicModal = document.getElementById('comicModal');
    const closeButton = comicModal.querySelector('.close-button');
    const modalBgImage = comicModal.querySelector('.modal-bg-image');
    const modalComicTitle = comicModal.querySelector('#modalComicTitle');
    const modalComicSummary = comicModal.querySelector('#modalComicSummary');
    const slideItems = document.querySelectorAll('.slide-item'); // Get all clickable comic items

    // Function to open the modal
    function openModal(comic) {
        modalBgImage.style.backgroundImage = `url(${comic.image})`;
        modalComicTitle.textContent = comic.title;
        modalComicSummary.textContent = comic.summary;
        document.body.classList.add('modal-open'); // Prevent background scroll
        comicModal.classList.add('active'); // Show modal
    }

    // Function to close the modal
    function closeModal() {
        comicModal.classList.remove('active'); // Hide modal
        document.body.classList.remove('modal-open'); // Re-enable background scroll
    }

    // Event listeners for opening modal
    slideItems.forEach(item => {
        item.addEventListener('click', () => {
            const comicId = item.dataset.comicId; // Get the ID from data-comic-id
            const comic = comicsData.find(c => c.id === comicId); // Find matching comic data
            if (comic) {
                openModal(comic);
            }
        });
    });

    // Event listeners for closing modal
    closeButton.addEventListener('click', closeModal);

    // Close modal if user clicks outside the modal content
    comicModal.addEventListener('click', (event) => {
        if (event.target === comicModal) { // Check if the click was directly on the modal background
            closeModal();
        }
    });

    // --- Slider Carousel Functionality (Existing Code - no changes needed here) ---
    function initializeSlider(sliderId) {
        const sliderContainer = document.getElementById(sliderId);
        if (!sliderContainer) return;

        const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
        const prevBtn = sliderContainer.querySelector('.prev-btn');
        const nextBtn = sliderContainer.querySelector('.next-btn');
        const slideItems = sliderWrapper.querySelectorAll('.slide-item');

        let currentIndex = 0;
        let slidesPerView = 3;
        let totalSlides = slideItems.length;

        function updateSlidesPerView() {
            if (window.innerWidth <= 768) {
                slidesPerView = 1;
            } else if (window.innerWidth <= 992) {
                slidesPerView = 2;
            } else {
                slidesPerView = 3;
            }
        }

        function getSlideItemWidth() {
            const item = slideItems[0];
            const itemWidth = item.offsetWidth;
            const style = getComputedStyle(sliderWrapper);
            const gap = parseFloat(style.gap);
            return itemWidth + gap;
        }

        function updateSlider() {
            const slideWidth = getSlideItemWidth();
            const offset = -currentIndex * slideWidth;
            sliderWrapper.style.transform = `translateX(${offset}px)`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex >= totalSlides - slidesPerView) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex === 0) {
                currentIndex = totalSlides - slidesPerView;
                if (currentIndex < 0) currentIndex = 0;
            } else {
                currentIndex--;
            }
            updateSlider();
        });

        const debouncedUpdate = debounce(() => {
            updateSlidesPerView();
            currentIndex = 0;
            updateSlider();
        }, 250);

        window.addEventListener('resize', debouncedUpdate);

        updateSlidesPerView();
        updateSlider();
    }

    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }

    initializeSlider('featured-slider');
    initializeSlider('new-releases-slider');
});