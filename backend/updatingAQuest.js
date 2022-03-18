
//code to use XHTML request from https://www.geeksforgeeks.org/delete-request-using-xmlhttprequest-by-making-custom-http-library/
function easyHTTP(){
    this.http = new XMLHttpRequest();
}
easyHTTP.prototype.delete = function (url, callback){
    this.http.open("PATCH", url, true);

    let self = this;
    this.http.onload = function(){
        if(self.http.status === 204) {
            callback(null, "Quest was updated in the database");
        } else if(self.http.status === 400) {
            callback(null, "Route herold does not match the Quest\'s herold in the database");
        } else{
            callback("Hero of Quest was not found for given IDs" + self.http.status);
        }
    };
    this.http.send();
}; 