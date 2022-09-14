
export type IProfileSocials = {
    label: string,
    link: string,
}

export interface IProfile {
    userId: string,
    city: string,
    languages: String[],
    social: IProfileSocials[],
}

export interface INews {
    id: number
    title: string,
    text: string,
}
export interface IUser {
    isAutorized: boolean,
    userId: string,
    loginError: string,
    isLoading: boolean,
    profile: object,
    news: INews[],
}