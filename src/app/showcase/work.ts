export interface IWork {
    year: string;
    company: string;
    fuction: string;
    project: string;
    briefing: string;
    role: string;
    task: string[];
    result: string;
    tools: string[];
    image: IImage[];
}

export interface IImage{
    url: string;
    alt: string;
}