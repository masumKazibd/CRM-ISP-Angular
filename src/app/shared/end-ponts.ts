export class EndPoints{
    apiUrl = 'http://localhost:19419/api/';
    fetchAreaEndPoint = this.apiUrl + "Areas";
    postAreaEndPoint = this.apiUrl + "Areas";
    getCities = this.apiUrl + "Cities";
    saveCity = this.apiUrl + "Cities";
    getIspPackages = this.apiUrl + "Packages";
    getIspPackageById = this.apiUrl + "Packages/";
    saveIspPackage = this.apiUrl + "Packages";
    getRoles = this.apiUrl + "Roles";
    saveRole = this.apiUrl + "Roles";
    getUsers = this.apiUrl + "Auth/getUsers";
    addUser = this.apiUrl + "Auth/addUser";
    getTotalUser = this.apiUrl + "Auth/getTotalUsers";
}