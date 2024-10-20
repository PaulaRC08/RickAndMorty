class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    //type: string;
    gender: string;
    //origin: ILocation;
    location: ILocation;
    image: string;
    episode: number[];
    //url: string;
    //created: string;

    constructor(){
        this.id = 0;
        this.name = "";
        this.status = "";
        this.species = "";
        //this.type = "";
        this.gender = "";
        //this.origin = {name: "", url: ""};
        this.location = {name: ""};
        this.image = "";
        this.episode = [];
        //this.url = "";
        //this.created = "";
    }
}