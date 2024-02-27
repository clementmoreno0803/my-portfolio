interface Projet {
    id: number,
    title: string,
    languages: language[],
    gallery: gallery[],
    presentation: string,
    image: string,
    presTitle: string,
    presDesc: string, 
    description : string
}

interface language {
    name: string
}

interface gallery {
    img: string
}


export default Projet