function login(user,password) {
    switch (true) {
        case user == "admin" && password == 1234:
            console.log ('Bienvenido a nuestro sitio');   
            break;
        case user =="admin" && password != 1234 :
            console.log ("Contraseña incorrecta") ;
            break;
        case user!="admin" && password==1234:
            console.log ("Usuario incorrecto");
            break;
        case user!="admin" && password!=1234 && user!=null && password!=null:
            console.log ("Usuario y Contraseña incorrectos");
            break;
        case user==null && password==null:
            console.log ("Debe ingresar los datos requeridos");
            break;
        }
    }
    login("admin",1234)
    login("admin",123)
    login("a",1234)
    login("a",123)
    login()