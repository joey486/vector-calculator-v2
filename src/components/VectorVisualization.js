import React, { useRef, useEffect } from 'react';

const VectorVisualization = ({ vector1, vector2, is3D }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Projection helper function
    function project({ x, y, z }) {
      const angle = Math.PI / 4; // 45 degrees
      const scale = 0.5; // Shrink z for visual clarity
      if (is3D) {
        return {
          x: x + (z || 0) * scale * Math.cos(angle),
          y: y + (z || 0) * scale * Math.sin(angle),
        };
      }
      return { x, y };
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // --- AUTO SCALE LOGIC ---

    // Project both vectors
    const projectedVectors = [vector1, vector2].map(project);

    // Find maximum vector length (from origin)
    const maxLength = Math.max(
      ...projectedVectors.map(v => Math.sqrt(v.x * v.x + v.y * v.y))
    );

    // Also consider axes length (ensure axes aren't clipped)
    const baseAxis = [project({ x: 1, y: 0, z: 0 }), project({ x: 0, y: 1, z: 0 })];
    const axesLength = baseAxis.map(a => Math.sqrt(a.x * a.x + a.y * a.y));
    const allMaxLength = Math.max(maxLength, ...axesLength);

    // Leave margin
    const margin = 20;
    const maxPossibleLength = (Math.min(canvas.width, canvas.height) / 2) - margin;

    // Auto-calculate drawScale
    const drawScale = allMaxLength > 0 ? maxPossibleLength / allMaxLength : 1;

    // --- AXES ---
    function drawAxis(axisVec, color, label) {
      const proj = project(axisVec);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + proj.x * drawScale, centerY - proj.y * drawScale);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Draw label at the end
      ctx.font = '13px sans-serif';
      ctx.fillStyle = color;
      ctx.fillText(
        label,
        centerX + proj.x * drawScale * 1.1 - 7,
        centerY - proj.y * drawScale * 1.1 + 4
      );
    }

    drawAxis({ x: maxLength, y: 0, z: 0 }, '#666', 'X');
    drawAxis({ x: 0, y: maxLength, z: 0 }, '#666', 'Y');
    if (is3D) {
      drawAxis({ x: 0, y: 0, z: maxLength }, '#666', 'Z');
    }

    // --- DRAW VECTORS ---
    const drawVector = (v, color) => {
      const projected = project(v);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + projected.x * drawScale, centerY - projected.y * drawScale);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Arrowhead
      const len = Math.sqrt(projected.x * projected.x + projected.y * projected.y);
      if (len > 0.1) {
        const normX = projected.x / len;
        const normY = projected.y / len;
        const arrowLength = 5; // pixels
        ctx.beginPath();
        ctx.moveTo(centerX + projected.x * drawScale, centerY - projected.y * drawScale);
        ctx.lineTo(
          centerX + (projected.x - 0.2 * normX) * drawScale + arrowLength * (-normY),
          centerY - (projected.y - 0.2 * normY) * drawScale + arrowLength * (normX)
        );
        ctx.moveTo(centerX + projected.x * drawScale, centerY - projected.y * drawScale);
        ctx.lineTo(
          centerX + (projected.x - 0.2 * normX) * drawScale - arrowLength * (-normY),
          centerY - (projected.y - 0.2 * normY) * drawScale - arrowLength * (normX)
        );
        ctx.stroke();
      }
    };

    drawVector(vector1, 'red');
    drawVector(vector2, 'blue');
  }, [vector1, vector2, is3D]);

  return (
    <div className="visual-box">
      <h3>Vector Visualization</h3>
      <canvas id="vectorCanvas" width="300" height="300" ref={canvasRef}></canvas>
    </div>
  );
};

export default VectorVisualization;