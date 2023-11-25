import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useEffect } from "react"
import { Vector3 } from "three"
import { useThree } from "@react-three/fiber"
import Bear_Pretty_Latest from "./Model/Bear_Pretty"
import { Button_Click } from "./Bear_atom"
import { useRecoilState } from "recoil"
// import * as THREE from "three"
// import { RippleRenderer } from "./Distortion"

export const Field = () => {
    const [a_u_pushed,] = useRecoilState(Button_Click)
    const { camera } = useThree()
    const viewinfo = window.document
    useEffect(() => {
        camera.lookAt(new Vector3(0, 1, 0))
    }, [camera])

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

//https://www.uriports.com/blog/easy-fix-for-unable-to-preventdefault-inside-passive-event-listener/
//https://qiita.com/teamhimeH/items/d5c3e3dfcc6cb63456c6
//https://stackoverflow.com/questions/42101723/unable-to-preventdefault-inside-passive-event-listener
//https://blog.jxck.io/entries/2016-06-09/passive-event-listeners.html