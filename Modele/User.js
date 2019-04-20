export default class User {
    
    constructor(firstname, lastName, login, email, tel, password, type) {
        this.firstname=firstname
        this.lastName=lastName
        this.telepone=tel
        this.login=login
        this.email=email
        this.password=password
        this.type=type
    }

    getTel=()=>this.telepone
    getPrenom=()=>this.firstname
    getNom=()=>this.lastName
    getUsername=()=>this.login
    getEmail=()=>this.email
    getPassword=()=>this.password
    getType=()=>this.type
    





  }
