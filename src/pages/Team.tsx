import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Innovations: React.FC = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.z = 20;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      // Add Wireframe Torus
      const geometry = new THREE.TorusGeometry(5, 1.5, 16, 100);
      const material = new THREE.MeshBasicMaterial({ color: 0x00E5FF, wireframe: true });
      const torus = new THREE.Mesh(geometry, material);
      scene.add(torus);

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        controls.update();
        renderer.render(scene, camera);
      };

      animate();

      // Handle Window Resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section id=\"innovations\" className=\"innovations-section\">
      <canvas ref={canvasRef} aria-hidden=\"true\"></canvas>
      <div className=\"innovations-content\" data-aos=\"fade-up\">
        <h2 className=\"section-title\">Our Innovations</h2>
        <p className=\"text-lg mb-4\">Exploring cutting-edge technologies to shape the future.</p>
      </div>
    </section>
  );
};

export default Innovations;
