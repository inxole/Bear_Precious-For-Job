import { Canvas } from "@react-three/fiber"
import { Field } from "./Field"
import { Loader } from "@react-three/drei"
import Zoom_ON_OFF from "./Zoom_Button"
import { useCallback, useEffect, useRef } from "react"
import { Bear_Hovered, Model_in_Action } from "./Bear_atom"
import { useRecoilState } from "recoil"

const rippleStyle = {
  position: 'fixed',
  borderRadius: '50%',
  width: '130px',
  height: '130px',
  backgroundColor: 'rgba(148, 217, 255, 0.7)',
  transform: 'scale(0)',
  animation: 'ripple-effect 0.5s linear',
}
// 拡大 expansion
const ExpansionStyles = `
  @keyframes ripple-effect {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(10);
      opacity: 0;
    }
  }
`
// 縮小 reduction
const ReductionStyles = `
  @keyframes ripple-effect {
    from {
      transform: scale(10);
      opacity: 0;
    }
    to {
      transform: scale(0);
      opacity: 0.8;
    }
  }
`
class Ripple {
  element: HTMLDivElement
  constructor(x: number, y: number) {
    this.element = document.createElement('div')
    Object.assign(this.element.style, rippleStyle)
    this.element.style.left = `${x - 65}px`
    this.element.style.top = `${y - 65}px`
    this.element.addEventListener('animationend', () => {
      this.element.remove()
    })
  }
}

function App() {
  const [inaction,] = useRecoilState(Model_in_Action)
  const [ishovered,] = useRecoilState(Bear_Hovered)
  const loaderStyle = { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
  const canvasRef = useRef<HTMLDivElement>(null)
  const NonRef = useRef(null)

  const canvasClick = useCallback((e: MouseEvent) => {
    const container = canvasRef.current
    if (!container || !ishovered) return

    const x = e.clientX
    const y = e.clientY
    const ripple = new Ripple(x, y)
    container.appendChild(ripple.element)
  }, [ishovered])


  useEffect(() => {
    const styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = inaction ? ExpansionStyles : ReductionStyles
    document.head.appendChild(styleSheet)

    const container = canvasRef.current
    if (!container) return

    container.addEventListener('click', canvasClick)
    return () => {
      container.removeEventListener('click', canvasClick)
      document.head.removeChild(styleSheet)
    }
  }, [inaction, canvasClick])

  return (
    <div className="Bear_Precious" ref={ishovered ? canvasRef : NonRef} style={{ position: 'relative' }} >
      <Zoom_ON_OFF />
      <Canvas>
        <Field />
      </Canvas>
      <Loader innerStyles={loaderStyle} />
    </div >
  )
}

export default App