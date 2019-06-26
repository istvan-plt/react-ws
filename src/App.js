/* eslint-disable no-unused-vars */
import React from 'react'
import { Demo1Hook, Demo1Class } from './demos/Demo1'
import { Demo2Hook, Demo2Class } from './demos/Demo2'
import { Demo3Hook, Demo3Class } from './demos/Demo3'
import { Demo4Hook, Demo4Class } from './demos/Demo4'
import { Demo5Hook, Demo5Class, withWindowWidth, useWindowWidth } from './demos/Demo5'
import { useHover, withHover } from './demos/Demo6'

export default function App() {
  return <Demo1Hook />
}