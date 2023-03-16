export interface Icv {
    id: number,
    title: string,
    img?: File,
    fullName?: string,
    jobIntention?: string,
    socials: ISocial[],
    about?: string,
    experiance: IExperiance[],
    education: IEducation[],
    skils: ISkil[]
}

export interface ISocial {
    id: number,
    // icon?: string,
    title?: string,
    text?: string,
    href?: string,
}

export interface IExperiance {
    id: number,
    title?: string,
    company?: NamedCurve,
    isworkingNow?: boolean,
    start?: Date,
    end?: Date,
    location?: string,
    Description?: string,
}

export interface IEducation {
    id: number,
    title?: string,
    degree?: string,
    fieldOfStudy?: string,
    start?: Date,
    end?: Date,
    grade?: string,
}

export interface ISkil {
    id: number,
    title?: string;
    count?: number; // 0-100%
}