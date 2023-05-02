function checkUser (username, pw) {
    var usernameDB = "angga1";
    var pwDB = "123w4";
    var validasi = username == usernameDB && pw == pwDB;

    if(username == usernameDB) {
        if(pw == pwDB) {
            alert("berhasil login");
        } else {
            alert("password salah");
        }
        alert("Username sesuai");
    } else {
        alert("Username salah");
    }
   
}