(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Navbar : fond au scroll ---------- */
    const nav = document.getElementById('mainNav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Apparition des éléments au scroll ---------- */
    const reveals = document.querySelectorAll('.reveal');
    if (reduceMotion) {
        reveals.forEach(el => el.classList.add('is-visible'));
    } else {
        const revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        reveals.forEach(el => revealObserver.observe(el));
    }

    /* ---------- Compteurs animés ---------- */
    const animateCount = el => {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        if (reduceMotion) {
            el.textContent = target + suffix;
            return;
        }
        const duration = 1600;
        const start = performance.now();
        const step = now => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

    /* ---------- Lien actif dans la navbar ---------- */
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link =>
                    link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id)
                );
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));

    /* ---------- Fermer le menu mobile après un clic ---------- */
    const collapseEl = document.getElementById('navMenu');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (collapseEl.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
            }
        });
    });

    /* ---------- Effet spotlight sur les cartes ---------- */
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('pointermove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
            card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
        });
    });

    /* ---------- Défilement infini : duplication des pistes ---------- */
    document.querySelectorAll('.marquee-track').forEach(track => {
        track.style.setProperty('--speed', (track.dataset.speed || 30) + 's');
        track.innerHTML += track.innerHTML;
    });
})();
