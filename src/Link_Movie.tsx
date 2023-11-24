import { Html } from "@react-three/drei"

const Link_to_Movie = () => {

    return (
        <mesh>
            <Html
                scale={0.01}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
                transform
                pointerEvents={'none'}
            >
                <div
                    onWheel={(e) => e.stopPropagation()}
                    style={{
                        pointerEvents: 'auto',
                        cursor: 'pointer',
                        width: '6000px',
                        height: '1500px',
                        fontSize: '1000px',
                        fontWeight: 100,
                        background: 'black',
                        color: '#f0f0f0',
                        padding: '20px 100px',
                        borderRadius: '200px',
                        letterSpacing: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '50px'
                    }}
                >
                    <a
                        href="https://www.google.com" target="_blank" rel="noopener noreferrer"
                    >動画へ</a>
                </div>
            </Html>
        </mesh>
    )
}

export default Link_to_Movie