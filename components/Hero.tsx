'use client'
import { Flex, Heading, Text, Button } from "@chakra-ui/react"
import styles from './Hero.module.css'

import Link from 'next/link'

const Hero = () => {
  return (
    <Flex
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        height='60vh'
    >
        <Flex
            direction='column'
            pl='2rem'
            width='70%'
        >
            <Heading as='h1' size='xl' noOfLines={1}>
                BodyHero
            </Heading>
            <Text mt='1rem'>Reach your fitness goals with our premium exercise library.</Text>
            <Link href="#searchBar">
                <Button mt="1rem" colorScheme="messenger">Search exercises</Button>
            </Link>
        </Flex>
        <div className={styles.heroImage}></div>
    </Flex>
  )
}

export default Hero