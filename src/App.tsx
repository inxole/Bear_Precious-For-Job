import { Canvas } from "@react-three/fiber"
import { Field } from "./Field"
import { Loader } from "@react-three/drei"
import Zoom_ON_OFF from "./Zoom_Button"

function App() {
  const loaderStyle = { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }

  return (
    <div className="Bear_Precious">
      <Zoom_ON_OFF />
      <Canvas>
        <Field></Field>
      </Canvas>
      <Loader innerStyles={loaderStyle} />
    </div >
  )
}

export default App
