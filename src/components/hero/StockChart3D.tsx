'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Line } from '@react-three/drei'
import { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'

// Stock data points for the chart
const generateStockData = (points: number) => {
  const data = []
  let price = 100
  for (let i = 0; i < points; i++) {
    const change = (Math.random() - 0.5) * 10
    price += change
    data.push({
      x: i * 0.5,
      y: price,
      z: 0
    })
  }
  return data
}

// Animated stock chart line
function AnimatedChart() {
  const meshRef = useRef<THREE.Group>(null)
  const [dataPoints, setDataPoints] = useState(generateStockData(20))
  
  // Update data points periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(generateStockData(20))
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  // Create line points for the chart
  const linePoints = useMemo(() => {
    return dataPoints.map(point => new THREE.Vector3(point.x - 5, (point.y - 100) * 0.05, point.z))
  }, [dataPoints])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })
  
  return (
    <group ref={meshRef}>
      {/* Chart Line */}
      <Line
        points={linePoints}
        color="#10b981"
        lineWidth={3}
        segments
      />
      
      {/* Data Points */}
      {dataPoints.map((point, index) => (
        <mesh key={index} position={[point.x - 5, (point.y - 100) * 0.05, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
      ))}
      
      {/* Grid Lines */}
      {Array.from({ length: 5 }, (_, i) => (
        <Line
          key={`grid-${i}`}
          points={[new THREE.Vector3(-5, i - 2, 0), new THREE.Vector3(5, i - 2, 0)]}
          color="#374151"
          lineWidth={1}
        />
      ))}
    </group>
  )
}

// Floating trading cards
function TradingCard({ position, color, text }: { position: [number, number, number], color: string, text: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })
  
  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 0.8, 0.1]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  )
}

// Animated background particles
function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
          count={200}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#3b82f6" transparent opacity={0.6} />
    </points>
  )
}

export function StockChart3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Particles />
        <AnimatedChart />
        
        {/* Floating Trading Cards */}
        <TradingCard position={[-3, 2, 2]} color="#10b981" text="PROFIT +25%" />
        <TradingCard position={[3, -1, 1]} color="#3b82f6" text="BUY SIGNAL" />
        <TradingCard position={[-2, -2, -1]} color="#f59e0b" text="TREND UP" />
        <TradingCard position={[2, 3, -2]} color="#ef4444" text="STOP LOSS" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}