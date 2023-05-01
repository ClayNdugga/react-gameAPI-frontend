import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize="60px"/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar


//API key: 286957b11d4148b58e35f1fe5e883e62