export default class Car {
    // 1. Types of the car object
    id: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    // 2. Ctor
    constructor(id: number, name: string = 'name', picture: string = 'http://...', types: Array<string> = ['Normal'], created: Date = new Date() ) {
      // 3. car object initialisation
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created; }
}