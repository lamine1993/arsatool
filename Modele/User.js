export default class User {
    
    constructor(nom, prenom) {
        this.prenom=prenom;
        this.nom=nom
    }
  }



  export default class Agriculteur extends User {
    
    constructor(nom, prenom, type='Agriculteur') {
        super(nom, prenom)
        this.type=type
    }
  }

  export default class Cheucheur extends User {
    
    constructor(nom, prenom, type='Chercheur') {
        super(nom, prenom)
        this.type=type
    }
  }