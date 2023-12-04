/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\Bear_Pretty.glb -t 
*/

import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useRecoilState } from 'recoil'
import { Bear_Hovered } from '../Bear_atom'

type GLTFResult = GLTF & {
  nodes: {
    Cube003: THREE.SkinnedMesh
    Cube003_1: THREE.SkinnedMesh
    Cube003_2: THREE.SkinnedMesh
    Cube003_3: THREE.SkinnedMesh
    Cube003_4: THREE.SkinnedMesh
    eyes: THREE.SkinnedMesh
    sewing: THREE.SkinnedMesh
    Root_Bone: THREE.Bone
    Arm_Controller_L: THREE.Bone
    Arm_Controller_R: THREE.Bone
    Leg_Controller_L: THREE.Bone
    Leg_Controller_R: THREE.Bone
    Tail_02001: THREE.Bone
    Head_Controller: THREE.Bone
    Knee_Controller_L: THREE.Bone
    Knee_Controller_R: THREE.Bone
    Elbow_Controller_L: THREE.Bone
    Elbow_Controller_R: THREE.Bone
  }
  materials: {
    Bear_base: THREE.MeshStandardMaterial
    Striped_Pattern: THREE.MeshStandardMaterial
    Nose: THREE.MeshStandardMaterial
    Striped_Pattern_Right: THREE.MeshStandardMaterial
    Striped_Pattern_Left: THREE.MeshStandardMaterial
    Eye: THREE.MeshStandardMaterial
    Sewing_shader: THREE.MeshStandardMaterial
  }
  animation: GLTFAction[]
}

type ActionName = 'No_Motion' | 'Standby_Motion'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

// type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

const Bear_Pretty_Latest = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/Bear_Pretty.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)

  const [ismoving, setIsMoving] = useState(true)
  const [isClicked,] = useState(false)
  const [, setIsHovered] = useRecoilState(Bear_Hovered)

  const moved = () => {
    if (actions['Standby_Motion'] == null) {
      throw new Error("This is not GLTFResult")
    }
    if (ismoving) {
      actions['Standby_Motion'].play()
      setIsMoving(false)
    } else {
      actions['Standby_Motion'].stop()
      setIsMoving(true)
    }
  }

  const stoped = () => { }

  return (
    <group ref={group} {...props} dispose={null} onClick={isClicked ? stoped : moved} onPointerOver={() => { setIsHovered(true), console.log('e') }} onPointerLeave={() => { setIsHovered(false),console.log('o') }}>
      <group name="Scene">
        <group name="Armature" position={[0, 0.159, -0.193]} rotation={[Math.PI / 2, 0, 0]} scale={0.161}>
          <primitive object={nodes.Root_Bone} />
          <primitive object={nodes.Arm_Controller_L} />
          <primitive object={nodes.Arm_Controller_R} />
          <primitive object={nodes.Leg_Controller_L} />
          <primitive object={nodes.Leg_Controller_R} />
          <primitive object={nodes.Tail_02001} />
          <primitive object={nodes.Head_Controller} />
          <primitive object={nodes.Knee_Controller_L} />
          <primitive object={nodes.Knee_Controller_R} />
          <primitive object={nodes.Elbow_Controller_L} />
          <primitive object={nodes.Elbow_Controller_R} />
          <group name="Bear_Pretty" >
            <skinnedMesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials.Bear_base} skeleton={nodes.Cube003.skeleton} />
            <skinnedMesh name="Cube003_1" geometry={nodes.Cube003_1.geometry} material={materials.Striped_Pattern} skeleton={nodes.Cube003_1.skeleton} />
            <skinnedMesh name="Cube003_2" geometry={nodes.Cube003_2.geometry} material={materials.Nose} skeleton={nodes.Cube003_2.skeleton} />
            <skinnedMesh name="Cube003_3" geometry={nodes.Cube003_3.geometry} material={materials.Striped_Pattern_Right} skeleton={nodes.Cube003_3.skeleton} />
            <skinnedMesh name="Cube003_4" geometry={nodes.Cube003_4.geometry} material={materials.Striped_Pattern_Left} skeleton={nodes.Cube003_4.skeleton} />
          </group>
          <skinnedMesh name="eyes" geometry={nodes.eyes.geometry} material={materials.Eye} skeleton={nodes.eyes.skeleton} />
          <skinnedMesh name="sewing" geometry={nodes.sewing.geometry} material={materials.Sewing_shader} skeleton={nodes.sewing.skeleton} />
        </group>
      </group>
    </group>
  )
}

export default Bear_Pretty_Latest
useGLTF.preload('/Bear_Pretty.glb')
