import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useEffect } from "react"
import { Vector3 } from "three"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"
import Bear_Pretty_Latest from "./Model/Bear_Pretty"
import { Button_Click } from "./Bear_atom"
import { useRecoilState } from "recoil"
import Link_to_Movie from "./Link_Movie"
// import * as THREE from "three"
// import { RippleRenderer } from "./Distortion"

export const Field = () => {
    const [a_u_pushed,] = useRecoilState(Button_Click)
    const { camera } = useThree()
    const viewinfo = window.document
    useEffect(() => {
        camera.lookAt(new Vector3(0, 1, 0))
    }, [camera])

    const hide_geometry = new THREE.PlaneGeometry(.1, .1)
    const hide_material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.0
    })

    return (
        <Suspense fallback={null}>
            <OrbitControls
                minDistance={0.6}
                maxDistance={5}
                target={new Vector3(0, 0.6, 0)}
                enablePan={false}
                enableZoom={a_u_pushed ? true : false}
                domElement={viewinfo.documentElement}
            />
            <PerspectiveCamera makeDefault position={[1, 1, 1]} />

            <Bear_Pretty_Latest position={[0, 0, 0]} />
            <mesh geometry={hide_geometry} material={hide_material} scale={0.2} position={[-0.16, 1.12, 0]}>
                <Link_to_Movie ></Link_to_Movie>
            </mesh>

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

// const animationRunning = false
// const texture = new THREE.Texture()
// const rippleEffect = new RippleRenderer(texture)

// const animate = () => {
//     rippleEffect.update(renderer, uniform)

//     if (animationRunning) {
//         requestAnimationFrame(animate);
//     }
// }

// const handleClick = () => {
//     if (!animationRunning) {
//         animationRunning = true
//         animate()
//     }
// }