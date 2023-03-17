export interface Icv {
    id: number,
    title: string,
    img?: File,
    fullName?: string,
    jobIntention?: string,
    phone?: string,
    socials: ISocial[],
    address?: IAddress
    about?: string,
    experiance: IExperiance[],
    education: IEducation[],
    skils?: ISkil[],
    tag?: ITag[],
}

export interface ISocial {
    title?: string,
    text?: string,
    href?: string,
}

export interface IAddress {
    country?: string,
    city?: string,
    street?: string,
}

export interface ITag {
    title?: string,
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