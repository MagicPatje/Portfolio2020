export interface ISkill {
    id: string;
    skill: string;
    lastYearUsed: string|number;
    years: string|number;
    category: string;
}

export const skillCategory = [
    "Programmeren", 
    "Versie beheer",
    "Atlassian pakket",
    "UX / UI",
    "Adobe pakket",
    "Methode",
    "Low code"
]