"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Node class for neural network visualization
    class Node {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      connections: Node[];

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 2;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.connections = [];
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(74, 144, 226, 0.6)';
        ctx.fill();

        // Draw connections
        this.connections.forEach(node => {
          const distance = Math.hypot(this.x - node.x, this.y - node.y);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(node.x, node.y);
            ctx.strokeStyle = `rgba(74, 144, 226, ${0.2 - distance / 500})`;
            ctx.stroke();
          }
        });
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const numNodes = 50;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    for (let i = 0; i < numNodes; i++) {
      const node = new Node(
        Math.random() * width,
        Math.random() * height
      );
      nodes.push(node);
    }

    // Connect nodes
    nodes.forEach(node => {
      const numConnections = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < numConnections; i++) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (randomNode !== node) {
          node.connections.push(randomNode);
        }
      }
    });

    // Animation loop
    function animate() {
      if (ctx) ctx.clearRect(0, 0, width, height);
      
      nodes.forEach(node => {
        node.update(width, height);
        if (ctx) node.draw(ctx);
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
}