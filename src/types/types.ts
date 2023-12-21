export interface IPerson {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    "hair_color": string;
    "eye_color": string;
    "skin_color": string;
    homeworld: string;
    species: string;
    url: string;
    films: string[];
    vehicles: string[];

}

export interface IPeopleStore {
    people: IPerson[];
    person?: IPerson;
    foundedPersons: IPerson[];
    count: number;
    isLoading: boolean;
    errors: string | undefined;
    fetchPeople: (n: number) => void;
    fetchPersonById: (id: number) => void;
    fetchFoundPeople: (name: string) => void;
}

export interface IPagination {
    changePageNo: (number: number) => void;
    amountOfData: number;
    dataPerPage: number;
    currentPage: number;
}
