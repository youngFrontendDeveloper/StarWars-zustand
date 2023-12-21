import {create} from "zustand";
import {IPeopleStore, IPerson,} from "../types/types";
import {devtools, persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

export const usePeopleStore = create<IPeopleStore>()(persist(devtools(immer((set) => ({
    people: [],
    person: {
        name: "",
        gender: "",
        birth_year: "",
        height: "",
        mass: "",
        "hair_color": "",
        "eye_color": "",
        "skin_color": "",
        homeworld: "",
        species: "",
        url: "",
        films: [],
        vehicles: [],

    },
    foundedPersons: [],
    count: 0,
    isLoading: false,
    isSearchLoading: false,
    errors: "",
    searchErrors: "",
    fetchPeople: async (n: number) => {
        try {
            set({isLoading: true})
            const result = await fetch(`https://swapi.dev/api/people/?page=${n}`)
            const json = await result.json()
            set({people: json.results as IPerson[], count: json.count, isLoading: false})

        } catch (err: any) {
            console.log(err)
            set({errors: err.message})
            set({isLoading: false})
        }


    },
    fetchPersonById: async (id: number) => {
        set({isLoading: true})
        const result = await fetch(`https://swapi.dev/api/people/${id}`)
        const json = await result.json() as IPerson
        set({isLoading: false, person: json})
    },
    fetchFoundPeople: async (name: string) => {
        try{
            set({isSearchLoading: true})
            const result = await fetch(`https://swapi.dev/api/people?search=${name}`)
            const json = await result.json()
            set({foundedPersons: json.results as IPerson[], isSearchLoading: false})
        }catch(err: any){
            console.log(err)
            set({searchErrors: err})
        }

    },
    foundPersons: (personsName: IPerson[]) => set(state => {
        state.foundedPersons = [...personsName]
    })

}))), {name: "PeopleStore", version: 1}))



