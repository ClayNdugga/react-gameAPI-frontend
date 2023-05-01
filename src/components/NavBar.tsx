import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo2.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


interface Props {
  onSearch: (searchText: string) => void
}


const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent='space-between'  padding='10px'>
        <Image src={logo} width="60px"/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar


//API key: 286957b11d4148b58e35f1fe5e883e62