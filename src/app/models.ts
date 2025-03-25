export interface Suggestion{
    activity: string,
    reps: string,
    description: string
}

export interface SuggestionList{
    suggestionList: Suggestion[]
}


export interface UserDetail{
    email: string,
    telegram_id: string,
    mon: boolean,
    tue: boolean,
    wed: boolean,
    thu: boolean,
    fri: boolean,
    sat: boolean,
    sun: boolean,
    frequency: number,
    epoch_date: string,
    task_detail: string,
    misc: string

}

export interface TASK_ID{
    task_id: string
}

