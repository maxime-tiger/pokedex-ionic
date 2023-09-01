export class Pokemon {
    name: string;
    imageUrl: string;
    types: string[] = [];
    id: string;

    constructor(name: string = '', imageUrl: string = '', types: string[] = [], id: string = '') {
      this.name = name;
      this.imageUrl = imageUrl;
      this.types = types;
      this.id = id;
    }
}
