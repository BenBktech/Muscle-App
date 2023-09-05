'use client'
import { Flex, Button } from '@chakra-ui/react'
import Image from 'next/image'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <Flex
        justifyContent='space-between'
        alignItems='center'
        px="2rem"
        py="1rem"
        className={styles.navbar}
    >
        <Image 
            src='/logo.svg'
            alt='logo'
            width={60}
            height={46}
            className='object-contain'
        />
        <Button colorScheme='messenger'>Connexion</Button>
    </Flex>
  )
}

export default Navbar