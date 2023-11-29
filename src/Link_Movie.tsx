import { Html } from "@react-three/drei"

const Link_to_Movie = () => {

    return (
        <mesh>
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