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
    title?: string,
    text?: string,
    href?: string,
}

export interface IExperiance {
    title?: string,
    company?: NamedCurve,
    isworkingNow?: boolean,
    start?: Date,
    end?: Date,
    location?: string,
    Description?: string,
}

export interface IEducation {
    title?: string,
    degree?: string,
    fieldOfStudy?: string,
    start?: Date,
    end?: Date,
    grade?: string,
}

export interface ISkil {
    title?: string;
    count?: number; // 0-100%
}