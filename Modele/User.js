export default class User {
    
    constructor(firstname, lastName, login, email, password, type) {
        this.firstname=firstname
        this.lastName=lastName
        this.login=login
        this.email=email
        this.password=password
        this.type=type
    }

    getPrenom=()=>this.firstname
    getNom=()=>this.lastName
    getUsername=()=>this.login
    getEmail=()=>this.email
    getPrenom=()=>this.password
    getType=()=>this.type
    





  }
