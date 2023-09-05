export interface FilterProps {
    muscle?: string;
    difficulty?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface ExercisesProps {
    isDataEmpty: boolean;
    allExercises: Array<ExerciseProps>;
}

export interface ExerciseProps {
    name: string;
    type: string;
    muscle: string;
    equipment: string;
    difficulty: string;
    instructions: string;
}
