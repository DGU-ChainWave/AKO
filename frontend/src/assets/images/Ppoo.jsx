/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ppoo.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/ppoo.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Sphere004_1.geometry} material={materials['cloth.002']} />
        <mesh geometry={nodes.Sphere004_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Sphere004_3.geometry} material={materials['skin.001']} />
        <mesh geometry={nodes.Sphere004_4.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Sphere004_5.geometry} material={materials['eye.002']} />
        <mesh geometry={nodes.Sphere004_6.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Sphere004_7.geometry} material={materials['cloth.003']} />
        <mesh geometry={nodes.Sphere004_8.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Sphere004_9.geometry} material={materials['eye.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/ppoo.glb')
