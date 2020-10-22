export interface IWork {
    id: string;
    year: string;
    company: string;
    employer?: string;
    function: string;
    project: string;
    briefing: string;
    role: string;
    task: ITask[];
    result: string;
    tools: ITechnique[];
    image: IImage[];
}

export interface ITask {
    task: string;
}

export interface ITechnique {
    tech: string;
}

export interface IImage{
    img: string;
    alt: string;
}