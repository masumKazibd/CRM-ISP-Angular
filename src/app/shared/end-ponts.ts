export class EndPoints{
    apiUrl = 'http://192.168.0.105:19419/api/';
    fetchAreaEndPoint = this.apiUrl + "Areas";
    postAreaEndPoint = this.apiUrl + "Areas";
    getCities = this.apiUrl + "Cities";
    saveCity = this.apiUrl + "Cities";
    getIspPackages = this.apiUrl + "Packages";
    saveIspPackage = this.apiUrl + "Packages";
    getRoles = this.apiUrl + "Roles";
    saveRole = this.apiUrl + "Roles";
    getUsers = this.apiUrl + "Auth/getUsers";
    addUser = this.apiUrl + "Auth/addUser";
}