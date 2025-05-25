   // Typing Effect for Logo
   document.addEventListener("DOMContentLoaded", function() {
                    const text = "Abijith C G";
                    const logo = document.getElementById("typing-logo");
                    let i = 0;
                    function type() {
                        logo.innerHTML = text.substring(0, i) + (i < text.length ? '<span class="cursor-blink">|</span>' : '');
                        if (i < text.length) {
                            i++;
                            setTimeout(type, 120);
                        } else {
                            logo.innerHTML = text.substring(0, text.indexOf(" ")) + "<span> C G</span>";
                        }
                    }
                    type();
                });

 // Typing Effect for Hero Section
  document.addEventListener("DOMContentLoaded", function() {
                const text = "Abijith C G";
                const typingHero = document.getElementById("typing-hero");
                let i = 0;
                let typing = true;

                function type() {
                    if (typing) {
                        typingHero.innerHTML = text.substring(0, i) + (i < text.length ? '<span class="cursor-blink">|</span>' : '');
                        if (i < text.length) {
                            i++;
                            setTimeout(type, 120);
                        } else {
                            typing = false;
                            setTimeout(type, 1200);
                        }
                    } else {
                        typingHero.innerHTML = text.substring(0, i) + '<span class="cursor-blink">|</span>';
                        if (i > 0) {
                            i--;
                            setTimeout(type, 60);
                        } else {
                            typing = true;
                            setTimeout(type, 400);
                        }
                    }
                }
                type();
            });   
   
   
   // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Add slight delay to follower for smooth effect
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Cursor hover effects
        document.querySelectorAll('a, button, .project-card, .skill-card, .certification-flip').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
                cursorFollower.classList.add('active');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
                cursorFollower.classList.remove('active');
            });
        });
        
        // Special effect for buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                cursor.classList.add('hover-btn');
                cursorFollower.classList.add('hover-btn');
            });
            
            btn.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover-btn');
                cursorFollower.classList.remove('hover-btn');
            });
        });
        
        // Three.js 3D Background
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas-container').appendChild(renderer.domElement);
        
        // Particles for background
        const particlesGeometry = new THREE.BufferGeometry();
        const particleCount = 2000;
        
        const posArray = new Float32Array(particleCount * 3);
        
        for(let i = 0; i < particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0x6c5ce7,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        
        camera.position.z = 3;
        
        // Hero Section 3D Model (Laptop)
        const heroScene = new THREE.Scene();
        const heroCamera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
        const heroRenderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        });
        heroRenderer.setSize(300, 300);
        document.getElementById('hero-model').appendChild(heroRenderer.domElement);
        
        // Create a simple laptop model
        const laptopBaseGeometry = new THREE.BoxGeometry(2, 0.2, 1.5);
        const laptopScreenGeometry = new THREE.BoxGeometry(1.8, 1.2, 0.05);
        
        const material = new THREE.MeshPhongMaterial({ 
            color: 0x333333,
            specular: 0x111111,
            shininess: 30
        });
        
        const screenMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x000000,
            transparent: true,
            opacity: 0.8
        });
        
        const base = new THREE.Mesh(laptopBaseGeometry, material);
        const screen = new THREE.Mesh(laptopScreenGeometry, screenMaterial);
        
        screen.position.y = 0.7;
        screen.position.z = -0.1;
        screen.rotation.x = -0.5;
        
        heroScene.add(base);
        heroScene.add(screen);
        
        // Add light to hero model
        const heroLight = new THREE.PointLight(0x6c5ce7, 1, 10);
        heroLight.position.set(0, 0, 3);
        heroScene.add(heroLight);
        
        heroCamera.position.z = 3;
        
        // Skills Section 3D Model (Code Brackets)
        const skillsScene = new THREE.Scene();
        const skillsCamera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
        const skillsRenderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        });
        skillsRenderer.setSize(300, 300);
        document.getElementById('skills-model').appendChild(skillsRenderer.domElement);
        
        // Create code brackets
        const leftBracketGeometry = new THREE.BoxGeometry(0.2, 1.5, 0.2);
        const rightBracketGeometry = new THREE.BoxGeometry(0.2, 1.5, 0.2);
        const topBracketGeometry = new THREE.BoxGeometry(1, 0.2, 0.2);
        const bottomBracketGeometry = new THREE.BoxGeometry(1, 0.2, 0.2);
        
        const bracketMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x00cec9,
            emissive: 0x00cec9,
            emissiveIntensity: 0.2
        });
        
        const leftBracket = new THREE.Mesh(leftBracketGeometry, bracketMaterial);
        const rightBracket = new THREE.Mesh(rightBracketGeometry, bracketMaterial);
        const topBracket = new THREE.Mesh(topBracketGeometry, bracketMaterial);
        const bottomBracket = new THREE.Mesh(bottomBracketGeometry, bracketMaterial);
        
        leftBracket.position.x = -0.6;
        rightBracket.position.x = 0.6;
        topBracket.position.y = 0.8;
        bottomBracket.position.y = -0.8;
        
        skillsScene.add(leftBracket);
        skillsScene.add(rightBracket);
        skillsScene.add(topBracket);
        skillsScene.add(bottomBracket);
        
        // Add light to skills model
        const skillsLight = new THREE.PointLight(0x00cec9, 1, 10);
        skillsLight.position.set(0, 0, 3);
        skillsScene.add(skillsLight);
        
        skillsCamera.position.z = 3;
        
        // Projects Section 3D Model (Rocket)
        const projectsScene = new THREE.Scene();
        const projectsCamera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
        const projectsRenderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        });
        projectsRenderer.setSize(300, 300);
        document.getElementById('projects-model').appendChild(projectsRenderer.domElement);
        
        // Create simple rocket
        const rocketBodyGeometry = new THREE.ConeGeometry(0.3, 1, 32);
        const rocketTipGeometry = new THREE.ConeGeometry(0.15, 0.5, 32);
        const rocketFinGeometry = new THREE.BoxGeometry(0.4, 0.1, 0.8);
        
        const rocketMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xfd79a8,
            specular: 0x111111,
            shininess: 30
        });
        
        const rocketBody = new THREE.Mesh(rocketBodyGeometry, rocketMaterial);
        const rocketTip = new THREE.Mesh(rocketTipGeometry, rocketMaterial);
        const rocketFin1 = new THREE.Mesh(rocketFinGeometry, rocketMaterial);
        const rocketFin2 = new THREE.Mesh(rocketFinGeometry, rocketMaterial);
        
        rocketBody.rotation.x = Math.PI;
        rocketTip.rotation.x = Math.PI;
        rocketTip.position.y = -0.75;
        
        rocketFin1.position.y = 0.3;
        rocketFin1.position.x = 0.3;
        rocketFin1.rotation.z = Math.PI / 4;
        
        rocketFin2.position.y = 0.3;
        rocketFin2.position.x = -0.3;
        rocketFin2.rotation.z = -Math.PI / 4;
        
        projectsScene.add(rocketBody);
        projectsScene.add(rocketTip);
        projectsScene.add(rocketFin1);
        projectsScene.add(rocketFin2);
        
        // Add light to projects model
        const projectsLight = new THREE.PointLight(0xfd79a8, 1, 10);
        projectsLight.position.set(0, 0, 3);
        projectsScene.add(projectsLight);
        
        projectsCamera.position.z = 3;
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            // Background particles animation
            particlesMesh.rotation.x += 0.0005;
            particlesMesh.rotation.y += 0.0005;
            
            // Hero model animation
            base.rotation.y += 0.01;
            screen.rotation.x = -0.5 + Math.sin(Date.now() * 0.001) * 0.1;
            
            // Skills model animation
            leftBracket.rotation.z = Math.sin(Date.now() * 0.001) * 0.2;
            rightBracket.rotation.z = Math.sin(Date.now() * 0.001) * 0.2;
            
            // Projects model animation
            rocketBody.rotation.y += 0.02;
            rocketTip.rotation.y += 0.02;
            rocketFin1.rotation.y += 0.02;
            rocketFin2.rotation.y += 0.02;
            
            renderer.render(scene, camera);
            heroRenderer.render(heroScene, heroCamera);
            skillsRenderer.render(skillsScene, skillsCamera);
            projectsRenderer.render(projectsScene, projectsCamera);
        }
        
        animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            // Background
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            // Hero model
            heroCamera.aspect = 300 / 300;
            heroCamera.updateProjectionMatrix();
            
            // Skills model
            skillsCamera.aspect = 300 / 300;
            skillsCamera.updateProjectionMatrix();
            
            // Projects model
            projectsCamera.aspect = 300 / 300;
            projectsCamera.updateProjectionMatrix();
        });
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });