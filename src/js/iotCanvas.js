/**
 * Interactive HTML5 Canvas - IoT & Tech Connected Node Network Graph
 */

export function initIoTCanvas() {
  const canvas = document.getElementById('iotCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.clientWidth);
  let height = (canvas.height = canvas.parentElement.clientHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.clientWidth;
    height = canvas.height = canvas.parentElement.clientHeight;
  });

  const nodeNames = [
    { label: "IoT Sensor Node", type: "Sensor" },
    { label: "Moderation Engine", type: "Logic" },
    { label: "Sentiment Analyzer", type: "Analytics" },
    { label: "MQTT Data Bus", type: "Protocol" },
    { label: "Cloud Dashboard", type: "Interface" },
    { label: "Microcontroller", type: "Hardware" }
  ];

  const nodes = nodeNames.map((item, idx) => ({
    x: Math.random() * (width - 120) + 60,
    y: Math.random() * (height - 120) + 60,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    radius: 7,
    label: item.label,
    type: item.type,
    pulse: Math.random() * Math.PI * 2
  }));

  const particles = [];
  for (let i = 0; i < 15; i++) {
    particles.push({
      fromNode: Math.floor(Math.random() * nodes.length),
      toNode: Math.floor(Math.random() * nodes.length),
      progress: Math.random(),
      speed: 0.005 + Math.random() * 0.01
    });
  }

  let mouse = { x: -1000, y: -1000 };

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw Grid Lines Background
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Update Nodes
    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      node.pulse += 0.03;

      if (node.x < 40 || node.x > width - 40) node.vx *= -1;
      if (node.y < 40 || node.y > height - 40) node.vy *= -1;

      // Mouse attraction
      const dx = mouse.x - node.x;
      const dy = mouse.y - node.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        node.x += dx * 0.02;
        node.y += dy * 0.02;
      }
    });

    // Draw Links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.35 * (1 - dist / 180)})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw Data Pulses
    particles.forEach(p => {
      p.progress += p.speed;
      if (p.progress >= 1) {
        p.progress = 0;
        p.fromNode = Math.floor(Math.random() * nodes.length);
        p.toNode = Math.floor(Math.random() * nodes.length);
      }

      const n1 = nodes[p.fromNode];
      const n2 = nodes[p.toNode];
      const px = n1.x + (n2.x - n1.x) * p.progress;
      const py = n1.y + (n2.y - n1.y) * p.progress;

      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw Nodes
    nodes.forEach(node => {
      const pulseSize = node.radius + Math.sin(node.pulse) * 2;

      ctx.fillStyle = '#0066ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Label
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText(node.label, node.x + 12, node.y + 4);
    });

    requestAnimationFrame(draw);
  }

  draw();
}
