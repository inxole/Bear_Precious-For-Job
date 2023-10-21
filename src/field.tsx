import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useEffect } from "react"
import Bear_Precious_Baked from "./Model/Bear_Pretty_Bake"
import { Vector3 } from "three"
import { useThree } from "@react-three/fiber"

export const Field = () => {
    const { camera } = useThree()

    useEffect(() => {
        camera.lookAt(new Vector3(0, 1, 0))
    }, [camera])
    return (
        <Suspense fallback={null}>
            <OrbitControls target={new Vector3(0, 0.4, 0)} />
            <PerspectiveCamera makeDefault position={[1, 1, 1]}>
            </PerspectiveCamera>

            <Bear_Precious_Baked position={[0, 0, 0]}></Bear_Precious_Baked>

            <ContactShadows
                opacity={0.5}
                blur={0.1}
                far={10}
                resolution={1024}
                color="red"
                position={[0, 0, 0]} />
            <Environment preset='forest' />
        </Suspense>
    )
}