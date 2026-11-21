import { Component, Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html, MeshDistortMaterial } from '@react-three/drei'
import './Hero3D.css'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- Central glowing core ---------- */
function Core({ reduced }) {
  const mesh = useRef()
  const shell = useRef()

  useFrame((_, delta) => {
    if (reduced) return
    mesh.current.rotation.y += delta * 0.22
    mesh.current.rotation.x += delta * 0.08
    shell.current.rotation.y -= delta * 0.12
    shell.current.rotation.z += delta * 0.06
  })

  return (
    <Float speed={reduced ? 0 : 1.5} rotationIntensity={0.25} floatIntensity={0.9}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.2, 10]} />
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#4c1d95"
          emissiveIntensity={0.55}
          roughness={0.22}
          metalness={0.75}
          distort={reduced ? 0 : 0.36}
          speed={1.6}
        />
      </mesh>

      <mesh ref={shell} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#c4b5fd" wireframe transparent opacity={0.26} />
      </mesh>
    </Float>
  )
}

/* ---------- Orbit ring with a labelled tech node ---------- */
function OrbitRing({ radius, tilt, speed, label, phase = 0, reduced }) {
  const group = useRef()

  useFrame((_, delta) => {
    if (!reduced) group.current.rotation.z += delta * speed
  })

  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.008, 12, 160]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.4} />
      </mesh>

      <group ref={group} rotation={[0, 0, phase]}>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.09, 24, 24]} />
          <meshStandardMaterial color="#ede9fe" emissive="#a78bfa" emissiveIntensity={1.4} />
          <Html center distanceFactor={9} zIndexRange={[10, 0]} className="tech-label-wrap">
            <span className="tech-label">{label}</span>
          </Html>
        </mesh>
      </group>
    </group>
  )
}

/* ---------- Particle field ---------- */
function Particles({ count, reduced }) {
  const points = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (!reduced) points.current.rotation.y += delta * 0.025
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#c4b5fd"
        size={0.028}
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  )
}

/* ---------- Mouse parallax rig ---------- */
function Rig({ children, reduced }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (reduced) return
    const { x, y } = state.pointer
    const k = 1 - Math.exp(-delta * 3)
    group.current.rotation.y += (x * 0.55 - group.current.rotation.y) * k
    group.current.rotation.x += (-y * 0.35 - group.current.rotation.x) * k
  })

  return <group ref={group}>{children}</group>
}

function Scene({ reduced }) {
  const count = useMemo(
    () => (typeof window !== 'undefined' && window.innerWidth < 800 ? 350 : 900),
    []
  )

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 4, 5]} intensity={55} color="#c4b5fd" />
      <pointLight position={[-5, -3, -2]} intensity={30} color="#6366f1" />

      <Rig reduced={reduced}>
        <Core reduced={reduced} />
        <OrbitRing radius={2.35} tilt={[1.15, 0.2, 0]} speed={0.45} label="React" reduced={reduced} />
        <OrbitRing radius={2.9} tilt={[0.5, -0.5, 0.3]} speed={-0.32} label="Node.js" phase={2} reduced={reduced} />
        <OrbitRing radius={3.4} tilt={[1.6, 0.6, -0.2]} speed={0.22} label="Python" phase={4} reduced={reduced} />
        <Particles count={count} reduced={reduced} />
      </Rig>
    </>
  )
}

/* ---------- Fallback if WebGL is unavailable ---------- */
class SceneBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? <div className="hero-canvas-fallback" /> : this.props.children
  }
}

export default function Hero3D() {
  const reduced = prefersReducedMotion()

  return (
    <div className="hero-canvas" aria-hidden="true">
      <SceneBoundary>
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 7.2], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          frameloop={reduced ? 'demand' : 'always'}
        >
          <Suspense fallback={null}>
            <Scene reduced={reduced} />
          </Suspense>
        </Canvas>
      </SceneBoundary>
    </div>
  )
}