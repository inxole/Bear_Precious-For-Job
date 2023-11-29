import { useState, useEffect } from 'react'
import App from './App'

function checkWebGLCapabilities() {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

    if (!gl) {
        return false // WebGLが利用不可
    }

    const webgl = gl as WebGLRenderingContext

    const maxRenderBufferSize = webgl.getParameter(webgl.MAX_RENDERBUFFER_SIZE)
    const maxTextureSize = webgl.getParameter(webgl.MAX_TEXTURE_SIZE)

    // WebGLの能力が一定の基準以下かどうかをチェック
    const capabilityThreshold = 16000
    return maxRenderBufferSize >= capabilityThreshold && maxTextureSize >= capabilityThreshold
}

// eslint-disable-next-line react-refresh/only-export-components
const FallbackComponent = () => {
    return (
        <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            backgroundColor: 'white'
        }}>
            <group>
                <p style={{ fontSize: '25px', color: 'red', fontWeight: 'bold' }}>GPUを使用していない可能性があります。</p>
                <p >Chromeを使用している場合は、「設定」⇒「システム」に進み</p>
                <p >「ハードウェア アクセラレーションが使用可能な場合は使用する」を有効にしてください。</p>
                <p style={{ fontSize: '20px' }}>もしくは</p>
                <p >Firefoxを使用している場合は、「設定」⇒「一般」⇒「パフォーマンス」を探し</p>
                <p >「推奨のパフォーマンス設定を使用する」を有効にしてください。</p>
            </group>
        </div>
    )
}

const Check_webGL = () => {
    const [webGLCapable, setWebGLCapable] = useState(false)
    useEffect(() => {
        setWebGLCapable(checkWebGLCapabilities())
    }, [])

    return (
        <div>
            {webGLCapable ? <App /> : <FallbackComponent />}
        </div>
    )
}

export default Check_webGL