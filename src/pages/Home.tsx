import React, { useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Three.js Scene Setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      camera.position.z = 40;

      // Orbit Controls for Camera Interactivity
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      // Ambient Light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);

      // Directional Light
      const directionalLight = new THREE.DirectionalLight(0x00E5FF, 1);
      directionalLight.position.set(5, 10, 7.5).normalize();
      scene.add(directionalLight);

      // Rotating Sphere Animation
      const sphereGeometry = new THREE.SphereGeometry(10, 64, 64);
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0x9EFF00,
        transparent: true,
        opacity: 0.8,
        wireframe: true,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);

      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.005;
        sphere.rotation.x += 0.003;
        controls.update();
        renderer.render(scene, camera);
      };

      animate();

      // Resize Handling
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // Cleanup Three.js Resources
      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    }
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);

  return (
    <section id="hero" className="intro-section">
      <canvas ref={canvasRef} id="hero-canvas" aria-hidden="true"></canvas>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#a3ff12" },
            links: { color: "#a3ff12", distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: { direction: "none", enable: true, speed: 1, outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
      <div className="intro__content" data-aos="fade-up">
        <h1 className="section-title">Crafting the Future of Digital Experiences</h1>
        <p className="intro__description">Innovative. Futuristic. Unforgettable.</p>
        <Link to="/services" className="cta-button">Explore Our Approach</Link>
      </div>
    </section>
  );
};

export default Home;
