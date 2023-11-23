import { ContactShadows, Environment, OrbitControls, OrbitControlsChangeEvent, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useEffect } from "react"
import { Vector3 } from "three"
import { ThreeEvent, useThree } from "@react-three/fiber"
import Bear_Pretty_Latest from "./Model/Bear_Pretty"
// import * as THREE from "three"
// import { RippleRenderer } from "./Distortion"

export const Field = () => {
    const { camera } = useThree()
    const viewinfo = window.document
    useEffect(() => {
        camera.lookAt(new Vector3(0, 1, 0))
    }, [camera])

    interface ExtendedOrbitControlsProps {
        id: string;
        minDistance: number
        maxDistance: number
        target: Vector3
        enablePan: boolean
        domElement: HTMLElement
        onChange: ((e: OrbitControlsChangeEvent | undefined) => void) | undefined
        onWheel: ((event: ThreeEvent<WheelEvent>) => void) | undefined
    }

    const ExtendedOrbitControls: React.FC<ExtendedOrbitControlsProps> = ({ ...props }) => {
        return <OrbitControls {...props} />
    }

    const WheelAction = document.getElementById('test')
    const Wheelpool = () => {
        WheelAction?.addEventListener('wheel', function OnMouseWheel(event: WheelEvent) {
            event.preventDefault()
        }, { passive: true })
    }

    return (
        <Suspense fallback={null}>
            <ExtendedOrbitControls
                id={"test"}
                minDistance={0.6}
                maxDistance={5}
                target={new Vector3(0, 0.4, 0)}
                enablePan={false}
                domElement={viewinfo.documentElement}
                onChange={() => { Wheelpool }}
                onWheel={() => { Wheelpool }}
            />
            <PerspectiveCamera makeDefault position={[1, 1, 1]}>
            </PerspectiveCamera>

            <Bear_Pretty_Latest position={[0, 0, 0]} ></Bear_Pretty_Latest>

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