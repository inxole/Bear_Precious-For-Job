import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"

export const field = () => {
    return (
        <div>
            <Suspense>
                <OrbitControls />
                <PerspectiveCamera />
                <group name='light_01' position={[100, 100, 100]} rotation={[-Math.PI / 1, 1, 1]}>
                    <pointLight intensity={1} /></group>
                <group name='light_02' position={[-100, -100, -100]} rotation={[-Math.PI / 1, 1, 1]}>
                    <pointLight intensity={1} /></group>

                <></>

                <ambientLight />
            </Suspense>
        </div>
    )
}