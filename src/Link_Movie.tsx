import { Html } from "@react-three/drei"
import { useRecoilState } from "recoil"
import { Text_Hovered } from "./Bear_atom"

const Link_to_Movie = () => {
    const [, setIsHovered] = useRecoilState(Text_Hovered)

    return (
        <mesh>
            <Html
                onPointerOver={() => { setIsHovered(true) }} onPointerOut={() => { setIsHovered(false) }}
                scale={0.1}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0.5, 1, -4.5]}
                transform
            >
                <div
                    onWheel={(e) => e.stopPropagation()}
                    onPointerOver={() => { setIsHovered(true) }} onPointerOut={() => { setIsHovered(false) }}
                    style={{
                        cursor: 'pointer',
                        width: '600px',
                        height: '150px',
                        fontSize: '100px',
                        fontWeight: 100,
                        background: 'black',
                        color: '#f0f0f0',
                        padding: '2px 10px',
                        borderRadius: '20px',
                        letterSpacing: '1px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    <a 
                    // href="https://www.google.com" target="_blank" rel="noopener noreferrer"
                    >動画へ</a>
                </div>
            </Html>
        </mesh>
    )
}

export default Link_to_Movie