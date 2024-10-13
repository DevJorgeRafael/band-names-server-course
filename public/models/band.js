const { v4: uuidV4 } = required('uuid');


class Band {
    constructor( name = 'no-name' ) {

        this.id = uuidV4(); // Genera un id unico
        this.name = name;
        this.votes = 0;

    }
}

module.exports = Band;