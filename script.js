document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling untuk menu navigasi
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // GSAP: Animasi header saat scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            gsap.to(header, { backgroundColor: "#CCE4FFBF", duration: 0.5 });
        } else {
            gsap.to(header, { backgroundColor: "transparent", duration: 0.5 });
        }
    });

    // AutoAnimate: Efek hover pada item biotik dan abiotik
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            gsap.to(item, { scale: 1.05, duration: 0.3 });
        });
        item.addEventListener("mouseout", () => {
            gsap.to(item, { scale: 1, duration: 0.3 });
        });
    });

    // Lightbox untuk dokumentasi
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close">&times;</span>
                    <img src="${img.src}" alt="Dokumentasi">
                </div>
            `;
            document.body.appendChild(lightbox);

            // Animasi muncul
            gsap.fromTo(".lightbox-content", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4 });

            // Tutup lightbox
            document.querySelector(".close").addEventListener("click", () => {
                gsap.to(".lightbox-content", { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => lightbox.remove() });
            });

            // Klik luar untuk menutup
            lightbox.addEventListener("click", (e) => {
                if (e.target === lightbox) {
                    gsap.to(".lightbox-content", { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => lightbox.remove() });
                }
                document.addEventListener("DOMContentLoaded", function () {
                    gsap.registerPlugin(ScrollTrigger);
                
                    // Animasi masuk dari bawah untuk semua section saat di-scroll
                    gsap.utils.toArray("section").forEach(section => {
                        gsap.from(section, {
                            opacity: 0,
                            y: 50,
                            duration: 1,
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none reverse"
                            }
                        });
                    });
                
                    // Animasi teks header
                    gsap.from("header h1", {
                        opacity: 0,
                        x: -50,
                        duration: 1,
                        ease: "power2.out"
                    });
                
                    // Animasi navbar muncul dari atas
                    gsap.from("nav ul li", {
                        opacity: 0,
                        y: -30,
                        duration: 1,
                        stagger: 0.2,
                        ease: "power2.out"
                    });
                
                    // Animasi gambar di beranda
                    gsap.from(".biotik-image img", {
                        opacity: 0,
                        scale: 0.8,
                        duration: 1,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: ".biotik-image img",
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    });
                
                    // Animasi gambar di abiotik
                    gsap.from(".abiotik-image img", {
                        opacity: 0,
                        scale: 0.8,
                        duration: 1,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: ".abiotik-image img",
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    });
                
                    // Animasi untuk item grid (Benda Abiotik)
                    gsap.utils.toArray(".grid-container .item").forEach(item => {
                        gsap.from(item, {
                            opacity: 0,
                            y: 50,
                            duration: 0.8,
                            stagger: 0.2,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: item,
                                start: "top 90%",
                                toggleActions: "play none none reverse"
                            }
                        });
                    });
                
                    // Animasi untuk gambar dokumentasi
                    gsap.utils.toArray(".gallery img").forEach(img => {
                        gsap.from(img, {
                            opacity: 0,
                            scale: 0.8,
                            duration: 1,
                            ease: "back.out(1.5)",
                            scrollTrigger: {
                                trigger: img,
                                start: "top 90%",
                                toggleActions: "play none none reverse"
                            }
                        });
                    });
                });
                
            });
        });
    });
});
