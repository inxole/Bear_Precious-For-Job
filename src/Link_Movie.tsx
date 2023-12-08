import { Html } from "@react-three/drei"
import { useEffect, useState } from "react"
import { Vector3 } from "three"
import * as THREE from "three"

const Link_to_Movie = () => {
    const hide_geometry = new THREE.PlaneGeometry(0.5, 0.5)
    const hide_material = new THREE.MeshBasicMaterial({
        color: 0xffff00, side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.0
    })

    const posiVector = new Vector3(-0.16, 1.12, 0)
    const [position, setPosition] = useState(posiVector)
    useEffect(() => {
        const isIphone = /iPhone/i.test(navigator.userAgent)
        const isFirefox = navigator.userAgent.includes("Firefox")
        if (isIphone) {
            if (isFirefox) {
                setPosition(new Vector3(-0.66, 1.25, -0.3))
            } else {
                setPosition(new Vector3(-0.33, 1.25, 0.0))
            }
        } else {
            setPosition(new Vector3(-0.16, 1.12, 0.0))
        }
    }, [])

    return (
        <mesh geometry={hide_geometry} material={hide_material} scale={0.2} position={position}>
            <Html
                scale={0.1}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                transform
                pointerEvents={'none'}
            >
                <div
                    onWheel={(e) => e.stopPropagation()}
                    style={{
                        position: 'absolute',
                        pointerEvents: 'auto',
                        cursor: 'pointer',
                        width: '600px',
                        height: '150px',
                        left: '50%',
                        top: '50%',
                        fontSize: '100px',
                        fontWeight: 100,
                        background: 'black',
                        color: '#f0f0f0',
                        padding: '2px 10px',
                        borderRadius: '20px',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '5px'
                    }}
                >
                    <a
                    // href={"https://www.google.com"} target={"_blank"} rel={"noopener noreferrer"}
                    >
                        動画へ
                    </a>
                </div>
            </Html>
        </mesh >
    )
}

export default Link_to_Movie