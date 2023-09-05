import { FilterProps } from "@types";

export async function fetchExercises(filters: FilterProps) {
    let { muscle, difficulty } = filters 

    const headers: HeadersInit = {
        'X-RapidAPI-Key': 'be7341c748msha23cb198513a30fp135649jsn2ff8d3bd8f22',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=${difficulty}&muscle=${muscle}`, {
            headers: headers
        }
    )

    const result = await response.json()

    return result
}


		

