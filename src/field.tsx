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
            <OrbitControls
                minDistance={0.6}
                maxDistance={5}
                target={new Vector3(0, 0.4, 0)}
            />
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

// const onw = () => {
//     console.log(onwheel)
// }

// window.addEventListener('wheel', function () {
//     onw()
//     //????
// }, { passive: false })

//参考
//https://www.uriports.com/blog/easy-fix-for-unable-to-preventdefault-inside-passive-event-listener/
//https://qiita.com/teamhimeH/items/d5c3e3dfcc6cb63456c6
//https://stackoverflow.com/questions/42101723/unable-to-preventdefault-inside-passive-event-listener
//https://blog.jxck.io/entries/2016-06-09/passive-event-listeners.html