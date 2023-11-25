import { Canvas } from "@react-three/fiber"
import { Field } from "./Field"
import { Loader } from "@react-three/drei"
import { Button, styled } from "@mui/material"

const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #ffa000 30%, #ffc107 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 160, 0, 0.3);
`

function App() {
  const loaderStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
  return (
    <div className="Bear_Precious" style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden'
    }}
    >
      <GradientButton
        variant="contained"
        sx={{
          position: 'fixed',
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          background: "linear-gradient(45deg, #64B5F6 30%, #2196F3 90%)",
          borderRadius: "3px",
          border: 3,
          color: "white",
          height: "48px",
          width: '100px',
          padding: "0 30px",
          boxShadow: "0 3px 5px 2px rgba(255, 51, 102, 0.3)",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >Zoom</GradientButton>
      <Canvas>
        <Field></Field>
      </Canvas>
      <Loader innerStyles={loaderStyle} />
    </div>
  )
}

export default App
