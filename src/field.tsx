import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"
import Bear_Precious_Baked from "./Model/Bear_Pretty_Bake"

export const Field = () => {
    return (
        <Suspense fallback={null}>
            <OrbitControls />
            <PerspectiveCamera makeDefault position={[1.0, 0.6, 1.0]} />
            <group name='light_01' position={[0.2, 0.5, 0.2]} rotation={[-Math.PI / 1, 1, 1]}>
                <pointLight intensity={1} /></group>
            <group name='light_02' position={[-0.2, -0.5, -0.2]} rotation={[-Math.PI / 1, 1, 1]}>
                <pointLight intensity={1} /></group>

            <Bear_Precious_Baked position={[0, -0.25, 0]}></Bear_Precious_Baked>

            <Environment preset="city" />
        </Suspense>
    )
}