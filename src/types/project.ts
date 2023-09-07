interface Projet {
    id: number,
    title: string,
    languages: language[],
    image: string,
    description : string
}

interface language {
    name: string
}

export default Projet