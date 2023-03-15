export interface Icv {
    id: number,
    title: string,
    img?: File,
    fullName?: string,
    jobIntention?: string,
    informations?: IInformation[],
    about?: string,
    experiance?: IExperiance[],
    Education?: IEducation[],
    skils?: ISkils[]
}

export interface IInformation {
    icon?: string,
    title: string,
    text: string,
    href?: string,
}

export interface IExperiance {
    title: string,
    company: NamedCurve,
    isworkingNow: boolean,
    start: Date,
    end: Date,
    location: string,
    Description: string,
}

export interface IEducation {
    title: string,
    degree: string,
    fieldOfStudy: string,
    start: Date,
    end: Date,
    Grade: string,
}

export interface ISkils {
    title: string;
    count: number; // 0-100%
}