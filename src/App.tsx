import { Canvas } from "@react-three/fiber"
import { Field } from "./Field"
import { Loader } from "@react-three/drei"
import Zoom_ON_OFF from "./Zoom_Button"
import { useEffect, useRef } from "react"
import '../rippleEffect.css'

class Ripple {
  element: HTMLDivElement
  animationDuration: number = 600 // アニメーションの持続時間

  constructor(x: number, y: number) {
    this.element = document.createElement('div')
    this.element.classList.add('ripple')
    this.element.style.left = `${x}px`
    this.element.style.top = `${y}px`

    this.element.addEventListener('animationend', () => {
      this.element.remove()
    })
  }
}

function App() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = canvasRef.current
    if (!container) return

    const canvasClick = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      const ripple = new Ripple(x, y)
      container.appendChild(ripple.element)
    };

    container.addEventListener('click', canvasClick)

    return () => {
      container.removeEventListener('click', canvasClick)
    }
  }, [])

  const loaderStyle = { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
  return (
    <div className="Bear_Precious" ref={canvasRef} style={{ position: 'relative' }} >
      <Zoom_ON_OFF />
      <Canvas>
        <Field></Field>
      </Canvas>
      <Loader innerStyles={loaderStyle} />
    </div >
  )
}

export default App