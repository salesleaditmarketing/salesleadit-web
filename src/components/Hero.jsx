import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import * as THREE from 'three'
import gsap from 'gsap'

export default function Hero() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(container.offsetWidth, container.offsetHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, container.offsetWidth / container.offsetHeight, 0.1, 1000)
    camera.position.z = 400

    // Create particle geometry
    const count = window.innerWidth < 768 ? 150 : 500
    const positions = new Float32Array(count * 3)
    const velocities = []

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 800
      positions[i * 3 + 1] = (Math.random() - 0.5) * 600
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200
      velocities.push({ x: (Math.random() - 0.5) * 0.3, y: Math.random() * 0.2 + 0.1 })
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 2, transparent: true, opacity: 0.35 })
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Mouse parallax
    let mouse = { x: 0, y: 0 }
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 30
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 20
    }

    if (window.innerWidth >= 768) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    // Animation loop
    let frameId
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const pos = geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += velocities[i].y
        if (pos[i * 3 + 1] > 300) pos[i * 3 + 1] = -300
      }
      geometry.attributes.position.needsUpdate = true
      points.rotation.y += 0.0003
      camera.position.x += (mouse.x - camera.position.x) * 0.03
      camera.position.y += (mouse.y - camera.position.y) * 0.03
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      renderer.setSize(container.offsetWidth, container.offsetHeight)
      camera.aspect = container.offsetWidth / container.offsetHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    // GSAP entrance
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.3
      })
    }, container)

    return () => {
      ctx.revert()
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen bg-sli-bg px-4 pt-4 pb-0">
      <div ref={containerRef} className="relative rounded-card-lg overflow-hidden bg-sli-navy min-h-[90vh] flex items-end lg:items-center">
        
        {/* Three.js canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

        {/* Hero image — right half */}
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
          crossOrigin="anonymous"
          className="absolute right-0 top-0 h-full w-1/2 object-cover object-center hidden lg:block"
          alt="Team working"
        />
        
        {/* Gradient fade */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-sli-navy via-sli-navy/60 to-transparent hidden lg:block z-10" />

        {/* Content Wrapper */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pointer-events-none">
          <div className="py-20 lg:py-0 w-full lg:w-1/2 flex flex-col lg:items-start lg:justify-center text-left pointer-events-auto lg:pr-12">
            {/* Badge */}
            <div className="hero-anim inline-flex items-center gap-2 bg-sli-orange text-white text-xs font-mono font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 lg:self-start">
              <img src="https://cdn.prod.website-files.com/688d31d885372b14ca5e3d8b/6890bee0bc046268f9b1496c_magic-wand.svg" className="w-4 h-4" alt="" />
              Lead Generation Agency
            </div>

            {/* H1 */}
            <h1 className="hero-anim text-left">
              <span className="block font-sans font-extrabold text-white leading-tight"
                    style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)' }}>
                We help small businesses
              </span>
              <span className="block font-serif italic text-sli-orange leading-none"
                    style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}>
                grow like family.
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-anim mt-6 text-white/75 text-lg leading-relaxed max-w-lg lg:ml-0 text-left font-sans">
              We're a Surrey-based team of families who understand your struggle.
              We've cracked the code on getting you consistent local customers and
              making sure they bring their neighbours too.
            </p>

            {/* CTAs */}
            <div className="hero-anim mt-8 flex flex-wrap gap-4 lg:justify-start">
              <Link to="/get-started"
                className="relative overflow-hidden group rounded-full px-8 py-4 bg-sli-orange text-white font-sans font-semibold flex items-center gap-2">
                <span className="absolute inset-0 bg-sli-orange2 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/688d31d885372b14ca5e3d8b/688fd96b8386df55b73b8d7d_Call.svg" className="w-5 h-5" alt="" />
                  Get My Free Audit
                </span>
              </Link>
              <a href="#services"
                className="relative overflow-hidden group rounded-full px-8 py-4 bg-transparent border-2 border-white/50 text-white font-sans font-semibold flex items-center gap-2 hover:border-white/80 hover:-translate-y-[1px] transition-all duration-200">
                See How It Works
                <img src="https://cdn.prod.website-files.com/688d31d885372b14ca5e3d8b/688fdea99c92801291dd0db4_Arrow%20White.svg" className="w-4 h-4" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sentinel for IntersectionObserver */}
      <div id="hero-sentinel" className="absolute bottom-0 left-0 w-full h-px" />

      {/* Bottom scrolling ticker */}
      <div className="overflow-hidden bg-sli-navy mt-0 py-4">
        <div className="marquee-r flex gap-12 whitespace-nowrap font-mono text-white/60 text-sm">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span>Lead Generation</span>
              <span>•</span>
              <span>Business Directory</span>
              <span>•</span>
              <span>Local SEO</span>
              <span>•</span>
              <span>Google & Meta Ads</span>
              <span>•</span>
              <span>Social Media Growth</span>
              <span>•</span>
              <span>Web Design</span>
              <span>•</span>
              <span>Surrey · Coquitlam · Langley · Vancouver</span>
              <span>•</span>
              <span>Family-First Agency</span>
              <span>•</span>
              <span>Zero Setup Fee</span>
              <span>•</span>
              <span>Exclusive Leads</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
