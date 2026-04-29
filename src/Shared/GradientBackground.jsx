import  { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);

        camera.position.z = 20;
        camera.position.y = 2;

        // Create a central glowing sphere (core)
        const coreGeometry = new THREE.SphereGeometry(1.5, 64, 64);
        const coreMaterial = new THREE.MeshStandardMaterial({
            color: 0x8b5cf6,
            emissive: 0x8b5cf6,
            emissiveIntensity: 0.8,
            metalness: 0.9,
            roughness: 0.1
        });
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        scene.add(core);

        // Create orbiting code rings
        const createCodeRing = (radius, color, speed, tilt = 0) => {
            const ringGeometry = new THREE.TorusGeometry(radius, 0.08, 128, 200);
            const ringMaterial = new THREE.MeshStandardMaterial({
                color: color,
                emissive: color,
                emissiveIntensity: 0.3,
                metalness: 0.8,
                roughness: 0.2
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.userData = { speed, radius, tilt };
            ring.rotation.x = tilt;
            ring.rotation.z = tilt * 0.5;
            return ring;
        };

        const rings = [
            createCodeRing(3.5, 0x8b5cf6, 0.005, 0),
            createCodeRing(4.5, 0xec4899, -0.003, Math.PI / 4),
            createCodeRing(5.5, 0x06b6d4, 0.004, Math.PI / 3),
            createCodeRing(6.5, 0x10b981, -0.002, Math.PI / 2),
            createCodeRing(7.5, 0xf59e0b, 0.003, Math.PI / 5),
            createCodeRing(8.5, 0xef4444, -0.004, Math.PI / 2.5),
        ];

        rings.forEach(ring => scene.add(ring));

        // Create floating code blocks (binary/hex digits)
        const codeBlocks = [];
        const languages = [
            { name: '</>', color: 0x8b5cf6, size: 0.4 },
            { name: '{}', color: 0xec4899, size: 0.35 },
            { name: '[]', color: 0x06b6d4, size: 0.35 },
            { name: '()', color: 0x10b981, size: 0.35 },
            { name: '=>', color: 0xf59e0b, size: 0.4 },
            { name: '⚛️', color: 0x61dafb, size: 0.45 },
            { name: '🐍', color: 0x34d399, size: 0.45 },
            { name: '☕', color: 0xef4444, size: 0.45 },
        ];

        // Create canvas textures for text
        const createTextSprite = (text, color) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 256;
            canvas.height = 256;

            ctx.fillStyle = 'rgba(0,0,0,0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = `Bold ${140}px "Courier New", monospace`;
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);

            const texture = new THREE.CanvasTexture(canvas);
            const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
            const sprite = new THREE.Sprite(material);
            return sprite;
        };

        // Create orbiting code sprites
        for (let i = 0; i < 60; i++) {
            const lang = languages[i % languages.length];
            const sprite = createTextSprite(lang.name, `#${lang.color.toString(16)}`);
            const radius = 5 + Math.random() * 5;
            const angle = (i / 60) * Math.PI * 2;
            const yOffset = (Math.random() - 0.5) * 6;

            sprite.position.x = Math.cos(angle) * radius;
            sprite.position.z = Math.sin(angle) * radius;
            sprite.position.y = yOffset;
            sprite.scale.set(lang.size, lang.size, 1);

            sprite.userData = {
                radius,
                angle,
                yOffset,
                speed: 0.005 + Math.random() * 0.005,
                originalY: yOffset
            };

            scene.add(sprite);
            codeBlocks.push(sprite);
        }

       
        const techLogos = [];
        const techStack = [
            { name: 'React', color: 0x61dafb, pos: [-4, 3, -3], size: 0.8 },
            { name: 'Node', color: 0x68a063, pos: [4, 2.5, -2], size: 0.8 },
            { name: 'MongoDB', color: 0x47a248, pos: [-3, -2, 4], size: 0.7 },
            { name: 'Python', color: 0x3776ab, pos: [3, -2.5, 3.5], size: 0.7 },
            { name: 'Docker', color: 0x2496ed, pos: [5, -1, -2], size: 0.7 },
            { name: 'GraphQL', color: 0xe10098, pos: [-5, 1, 2], size: 0.7 },
            { name: 'TypeScript', color: 0x3178c6, pos: [2, 4, -1], size: 0.7 },
            { name: 'Tailwind', color: 0x38b2ac, pos: [-2, -3, -4], size: 0.7 },
        ];

        techStack.forEach(tech => {
            const geometry = new THREE.IcosahedronGeometry(tech.size, 0);
            const material = new THREE.MeshStandardMaterial({
                color: tech.color,
                metalness: 0.8,
                roughness: 0.2,
                emissive: tech.color,
                emissiveIntensity: 0.2
            });
            const logo = new THREE.Mesh(geometry, material);
            logo.position.set(tech.pos[0], tech.pos[1], tech.pos[2]);
            logo.userData = {
                originalPos: new THREE.Vector3(tech.pos[0], tech.pos[1], tech.pos[2]),
                floatSpeed: 0.5 + Math.random(),
                rotationSpeed: 0.005 + Math.random() * 0.005
            };
            scene.add(logo);
            techLogos.push(logo);
        });

        // Create particle system as "code rain" effect
        const particleCount = 4000;
        const particleGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);
        const particleColors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            particlePositions[i * 3] = (Math.random() - 0.5) * 50;
            particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
            particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10;

            const colors = [0x8b5cf6, 0xec4899, 0x06b6d4, 0x10b981, 0xf59e0b];
            const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
            particleColors[i * 3] = color.r;
            particleColors[i * 3 + 1] = color.g;
            particleColors[i * 3 + 2] = color.b;
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

        const particleMaterial = new THREE.PointsMaterial({
            size: 0.08,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        // Create floating binary numbers
        const binaryCount = 200;
        const binarySprites = [];

        for (let i = 0; i < binaryCount; i++) {
            const binary = Math.random() > 0.5 ? '1' : '0';
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 64;
            canvas.height = 64;
            ctx.fillStyle = 'rgba(0,0,0,0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = '24px monospace';
            ctx.fillStyle = `rgba(139, 92, 246, ${0.3 + Math.random() * 0.5})`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(binary, canvas.width / 2, canvas.height / 2);

            const texture = new THREE.CanvasTexture(canvas);
            const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
            const sprite = new THREE.Sprite(material);

            sprite.position.x = (Math.random() - 0.5) * 30;
            sprite.position.y = (Math.random() - 0.5) * 20;
            sprite.position.z = (Math.random() - 0.5) * 20;
            sprite.scale.set(0.3, 0.3, 1);
            sprite.userData = {
                speedY: 0.005 + Math.random() * 0.01,
                originalY: sprite.position.y
            };

            scene.add(sprite);
            binarySprites.push(sprite);
        }

        // Create a glowing halo around the core
        const haloGeometry = new THREE.SphereGeometry(2.2, 32, 32);
        const haloMaterial = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide
        });
        const halo = new THREE.Mesh(haloGeometry, haloMaterial);
        scene.add(halo);

        // Add lightning effect lines
        const lightningLines = [];
        for (let i = 0; i < 30; i++) {
            const points = [];
            const startAngle = Math.random() * Math.PI * 2;
            const endAngle = startAngle + (Math.random() - 0.5) * Math.PI;
            const radius = 3 + Math.random() * 6;

            for (let j = 0; j <= 10; j++) {
                const t = j / 10;
                const angle = startAngle + (endAngle - startAngle) * t;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                const y = (Math.random() - 0.5) * 4;
                points.push(new THREE.Vector3(x, y, z));
            }

            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({
                color: 0x8b5cf6,
                transparent: true,
                opacity: 0.3
            });
            const line = new THREE.Line(geometry, material);
            scene.add(line);
            lightningLines.push(line);
        }

        // Lights
        const ambientLight = new THREE.AmbientLight(0x1a1a2e);
        scene.add(ambientLight);

        const mainLight = new THREE.PointLight(0x8b5cf6, 1.5, 40);
        mainLight.position.set(0, 2, 4);
        scene.add(mainLight);

        const fillLight = new THREE.PointLight(0xec4899, 0.8, 40);
        fillLight.position.set(-3, -1, 5);
        scene.add(fillLight);

        const backLight = new THREE.PointLight(0x06b6d4, 0.6, 40);
        backLight.position.set(2, 1, -6);
        scene.add(backLight);

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetRotationX = 0;
        let targetRotationY = 0;

        const handleMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = (event.clientY / window.innerHeight) * 2 - 1;
            targetRotationX = mouseY * 0.5;
            targetRotationY = mouseX * 0.5;
        };

        window.addEventListener('mousemove', handleMouseMove);

        let time = 0;

        // Animate
        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.01;

            // Rotate rings
            rings.forEach(ring => {
                ring.rotation.y += ring.userData.speed;
                ring.rotation.x = ring.userData.tilt + Math.sin(time * 0.5) * 0.1;
            });

            // Animate core
            core.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
            halo.scale.setScalar(1 + Math.sin(time * 2) * 0.03);
            halo.material.opacity = 0.15 + Math.sin(time * 2) * 0.05;

            // Animate orbiting code blocks
            codeBlocks.forEach(block => {
                block.userData.angle += block.userData.speed;
                block.position.x = Math.cos(block.userData.angle) * block.userData.radius;
                block.position.z = Math.sin(block.userData.angle) * block.userData.radius;
                block.position.y = block.userData.originalY + Math.sin(time * 2) * 0.2;
            });

            // Animate tech logos
            techLogos.forEach(logo => {
                logo.rotation.x += logo.userData.rotationSpeed;
                logo.rotation.y += logo.userData.rotationSpeed * 1.5;
                logo.position.y = logo.userData.originalPos.y + Math.sin(time * logo.userData.floatSpeed) * 0.2;
            });

            // Animate binary sprites (falling effect)
            binarySprites.forEach(sprite => {
                sprite.position.y -= sprite.userData.speedY;
                if (sprite.position.y < -10) {
                    sprite.position.y = 10;
                    const binary = Math.random() > 0.5 ? '1' : '0';
                    const canvas = sprite.material.map.image;
                    const ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = `rgba(139, 92, 246, ${0.3 + Math.random() * 0.5})`;
                    ctx.fillText(binary, canvas.width / 2, canvas.height / 2);
                    sprite.material.map.needsUpdate = true;
                }
            });

            // Rotate particles
            particles.rotation.y += 0.002;
            particles.rotation.x += 0.001;

            // Mouse follow with smooth interpolation
            camera.position.x += (targetRotationX * 2 - camera.position.x) * 0.05;
            camera.position.y += (targetRotationY * 1.5 - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);

            // Animate lights
            mainLight.intensity = 1.2 + Math.sin(time * 2) * 0.4;
            fillLight.intensity = 0.6 + Math.cos(time * 1.7) * 0.3;
            backLight.intensity = 0.5 + Math.sin(time * 2.3) * 0.3;

            // Animate lightning lines
            lightningLines.forEach((line, idx) => {
                line.material.opacity = 0.2 + Math.sin(time * 3 + idx) * 0.2;
            });

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={containerRef} className="fixed  inset-0 -z-10" />;
};

export default ThreeDBackground; 