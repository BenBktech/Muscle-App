'use client'
import styles from './Searchbar.module.css'
import { Flex, Select, Button } from '@chakra-ui/react'
import { useState } from 'react'

import { difficulties, muscles } from '@constants'

import { useRouter } from 'next/navigation'

const Searchbar = () => {

    const [muscle, setMuscle] = useState('')
    const [difficulty, setDifficulty] = useState('')

    const router = useRouter()

    function formatDifficulty(input: string) {
        return input.charAt(0).toUpperCase() + input.slice(1)
    }

    function formatMuscleName(input: string) {
        const words = input.split('_');
        const formattedWords = words.map(word => {
            const firstLetter = word.charAt(0).toUpperCase()
            const restOfWord = word.slice(1).replace(/_/g, ' ')
            return firstLetter + restOfWord
        })
        return formattedWords.join(' ')
    }

    const handleSearch = () => {
        if(difficulty.trim() === "" && muscle.trim() === "") {
            return alert('Please provide some input')
        }

        updateSearchParams(difficulty, muscle)
    }

    const updateSearchParams = (difficulty: string, muscle: string) => {
        const searchParams = new URLSearchParams(window.location.search)

        if(difficulty) {
            searchParams.set('difficulty', difficulty)
        }
        else {
            searchParams.delete('difficulty')
        }

        if(muscle) {
            searchParams.set('muscle', muscle)
        }
        else {
            searchParams.delete('muscle')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname)
    }

    return (
        <div className={styles.searchbar} id="searchBar">
            <Flex
                justifyContent='center'
                alignItems='center'
                flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
            >
                <Select
                    placeholder='Difficulty'
                    width={['100%', '100%', '100%', '20%']}
                    mx='.5rem'
                    mb={['.5rem', '.5rem', '.5rem', '0']}
                    bg='white'
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                >
                    <option value=''>None</option>
                    {difficulties.map(difficulty => (
                        <option value={difficulty}>{formatDifficulty(difficulty)}</option>
                    ))}
                </Select>
                <Select
                    placeholder='Muscle'
                    width={['100%', '100%', '100%', '20%']}
                    mx='.5rem'
                    mb={['.5rem', '.5rem', '.5rem', '0']}
                    bg='white'
                    onChange={(e) => setMuscle(e.target.value)}
                    value={muscle}
                >
                    <option value=''>None</option>
                    {muscles.map(muscle => (
                        <option value={muscle}>{formatMuscleName(muscle)}</option>
                    ))}
                </Select>
                <Button
                    mx=".5rem"
                    width={['100%', '100%', '100%', '20%']}
                    colorScheme='messenger'
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Flex>
        </div>
    )
}

export default Searchbar