import { Canvas } from "@react-three/fiber"
import { Field } from "./Field"
import { Loader } from "@react-three/drei"
import Zoom_ON_OFF from "./Zoom_Button"
import { useCallback, useEffect, useRef, useState } from "react"
import { Bear_Hovered } from "./Bear_atom"
import { useRecoilState } from "recoil"

function App() {
  const loaderStyle = { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }

  const [ripple_trigger,] = useRecoilState(Bear_Hovered)
  const [count, setCount] = useState(0)
  const canvasRef = useRef<HTMLDivElement>(null)

  const getRandomColor = () => {
    const minColorValue = 100
    const red = Math.floor(Math.random() * (256 - minColorValue) + minColorValue)
    const green = Math.floor(Math.random() * (256 - minColorValue) + minColorValue)
    const blue = Math.floor(Math.random() * (256 - minColorValue) + minColorValue)
    const alpha = 0.5
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
  }

  const createRippleEffect = useCallback((): HTMLElement => {
    const ripple = document.createElement("span")
    ripple.style.position = 'fixed'
    ripple.style.borderRadius = '50%'
    ripple.style.transform = 'scale(0)'
    ripple.style.animation = 'ripple-effect 600ms linear'
    ripple.style.backgroundColor = getRandomColor()

    return ripple
  }, [])

  const handleCanvasClick = useCallback((event: MouseEvent) => {
    if (ripple_trigger) {
      setCount(count + 1)
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      // 複数の波紋を生成
      for (let i = 0; i < 8; i++) {
        const ripple = createRippleEffect();
        ripple.style.width = ripple.style.height = `${1 + i * 20}px`
        ripple.style.left = `${x - (50 + i * 10)}px`
        ripple.style.top = `${y - (50 + i * 10)}px`

        canvas.appendChild(ripple)

        setTimeout(() => {
          ripple.remove()
        }, 600 + i * 100)
      }
    }
  }, [createRippleEffect, ripple_trigger, count])

  useEffect(() => {
    const styleSheet = document.createElement("style")
    if (count % 2 == 0) {
      // スタイルシートの追加
      styleSheet.textContent = `
      @keyframes ripple-effect {
        from {opacity: 0;transform: scale(8);}
        to {opacity: Math.random() * 0.8;transform: scale(0);}
      }`
    } else {
      // スタイルシートの追加
      styleSheet.textContent = `
        @keyframes ripple-effect {
          from {opacity: Math.random() * 0.8;transform: scale(0);}
          to {opacity: 0;transform: scale(8);}
        }`
    }
    document.head.appendChild(styleSheet)

    // スタイルシートとイベントリスナーの設定
    const canvas = canvasRef.current
    if (canvas) {
      canvas.addEventListener('click', handleCanvasClick)
    }
    return () => {
      // イベントリスナーのクリーンアップ
      if (canvas) {
        canvas.removeEventListener('click', handleCanvasClick)
        document.head.removeChild(styleSheet)
      }
    }
  }, [handleCanvasClick, ripple_trigger, count])

  return (
    <div className="Bear_Precious" ref={canvasRef} style={{ position: 'relative' }}>
      <Zoom_ON_OFF />
      <Canvas>
        <Field></Field>
      </Canvas>
      <Loader innerStyles={loaderStyle} />
    </div >
  )
}

export default App