import { Html } from "@react-three/drei"
import { useRecoilState } from "recoil"
import { Text_Hovered } from "./Bear_atom"

const Link_to_Movie = () => {

    const [, setIsHovered] = useRecoilState(Text_Hovered)

    return (
        <Html
            onPointerOver={() => { setIsHovered(true) }} onPointerOut={() => { setIsHovered(false) }}
            scale={0.01}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[1.5, 3, 0]}
            transform
            occlude>
            <div
                onPointerOver={() => { setIsHovered(true) }} onPointerOut={() => { setIsHovered(false) }}
                style={{
                    cursor: 'pointer',
                    width: '2000px',
                    height: '600px',
                    fontSize: '300px',
                    fontWeight: 300,
                    background: 'black',
                    color: '#f0f0f0',
                    padding: '2px 10px',
                    borderRadius: '200px',
                    letterSpacing: '1px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >動画ULR</div>
        </Html>
    )
}

export default Link_to_Movie