    /*CLASES */
    class Usuario {
        constructor(nombre,apellido,dni,telefono,email,contrasenia,membresia){

            this.nombre=nombre;
            this.apellido=apellido;
            this.dni=dni;
            this.telefono=telefono;
            this.email=email;
            this.contrasenia=contrasenia;
            this.membresia=membresia;
        }

        valido(usuarioIngresado,contraseniaIngresado){
            if(this.email == usuarioIngresado && this.contrasenia == contraseniaIngresado){
               
                return true;
            }
                return false;
        }
        
    }
    /*DECLARACION DE VARIABLES */
    let cantidadUsuariosConectados=100;
    let nombreIngresado,apellidoIngresado,dniIngresado,telefonoIngresado,usuarioIngresado,contraseniaIngresado;
    let sumar = (a,b)=> a+b;
    let sliderDes = document.querySelector(".contenedorDestacados");
    let sectionsDes = document.querySelectorAll(".sectionDestacados");
    const btnRightDestacados = document.querySelector("#btn-right-destacados");
    const btnLeftDestacados = document.querySelector("#btn-left-destacados");
    let sectionLastDes = sectionsDes[sectionsDes.length - 1];
    sliderDes.insertAdjacentElement('afterbegin',sectionLastDes);
    let sliderNov = document.querySelector(".contenedorNovedades");
    let sectionsNov = document.querySelectorAll(".sectionNovedades");
    const btnRightNovedades = document.querySelector("#btn-right-novedades");
    const btnLeftNovedades = document.querySelector("#btn-left-novedades");
    let sectionLastNov = sectionsNov[sectionsNov.length - 1];
    sliderNov.insertAdjacentElement('afterbegin',sectionLastNov);
    const usuario1 = new Usuario("mario","lopez",40904941,1564564211,"admin@gmail.com","admin","platino");
    const usuario2 = new Usuario("carla","sanchez",43200180,1564464211,"carla23@gmail.com","contrasenia12","oro");
    const usuario3 = new Usuario("juan","solazo",41546480,1564564231,"juan2323@gmail.com","contrasenia123","oro");
    const usuarios=[];
    usuarios.push(usuario1,usuario2,usuario3);
    let productosDes,productosNov,productos;
    let carrito=[];
    let modalCarrito = document.getElementById("carrito");
    let containerTotal = document.getElementById("Totalcarrito");
    /*FUNCIONES */
    function bienvenida(nombreIngresado){
        document.getElementById("btnAcceder").innerHTML=`<img src="images/usuario.png" alt="Iniciar Sesion/Registrarte">
        <p>${nombreIngresado}</p>`;
        document.getElementById("btnAccederRes").innerHTML=`<img src="images/usuario.png" alt="Iniciar Sesion/Registrarte">
        <p>${nombreIngresado}</p>`;
        cantidadUsuariosConectados= sumar(cantidadUsuariosConectados,1);
        console.log("Es el usuario: "+cantidadUsuariosConectados); 
        let logIn = document.getElementsByClassName("fade");
        logIn[0].parentNode.removeChild(logIn[0]);
        Swal.fire(
            `¡Bienvenido ${nombreIngresado}!`,
            'Inicio sesion con exito',
            'success'
          )
    }
    function cancelarRegistro(){
        let titulo= document.getElementById("exampleModalLabel");
        titulo.innerHTML="INICIAR SESION";
        let formulario= document.getElementById("formularioRegistrarLogin");
        formulario.innerHTML=`<div>
                                <h2>Ya soy cliente</h2>
                              </div>
                              <div id="modal-body--input">
                                    <label for="">Correo electrónico</label>
                                    <br>
                                    <input type="email" name="_replyto" id="email_login" placeholder="Ingrese su correo electrónico">
                              </div>
                              <div id="modal-body--input">
                                    <label for="">Contraseña</label>
                                    <br>
                                    <input type="password" name="pass_login" id="pass_login" placeholder="Ingrese su contraseña">
                              </div>
                              <div class="modal-body--button">
                                    <input type="button" value="INGRESAR" id="btnAceptar_LogIn" data-bs-dismiss="modal" onClick="iniciarSesion()"> 
                              </div> `;
        let botones=document.getElementById("modalFooter");
        botones.innerHTML=`<input type="button" value="Registrar nueva cuenta" class="backgroundRegistrarse" onClick="crearInterfazRegistro()">
        <input type="button" value="Continuar con Facebook" class="backgroundFacebook" onClick="location.href='https://www.facebook.com/';" >
        <input type="button" value="Continuar con Google +" class="backgroundGoogle" onClick="location.href='https://accounts.google.com/';"> `;
    }
    function crearInterfazRegistro(){
        let titulo= document.getElementById("exampleModalLabel");
        titulo.innerHTML="REGISTRARSE";
        let formulario= document.getElementById("formularioRegistrarLogin");
        formulario.innerHTML=`<div>
                                <h2>Nuevo Cliente</h2>
                            </div>
                            <div id="modal-body--input">
                                <label for="">Nombre</label>
                                <br>
                                <input type="text" name="nombreRegistro" id="nombre_Registro" placeholder="  Ingresa tu nombre">
                            </div>
                            <div id="modal-body--input">
                                <label for="">Apellido</label>
                                <br>
                                <input type="text" name="apellidoRegistro" id="apellido_Registro" placeholder="  Ingresa tu apellido">
                            </div>
                            <div id="modal-body--input">
                                <label for="">DNI</label>
                                <br>
                                <input type="number" name="dniRegistro" id="dni_Registro" placeholder="  Ingresa tu DNI">
                            </div>
                            <div id="modal-body--input">
                                <label for="">telefóno</label>
                                <br>
                                <input type="number" name="telefonoRegistro" id="telefono_Registro" placeholder="  Ingrese numero con 15">
                            </div>
                            <div id="modal-body--input">
                                <label for="">Correo electrónico</label>
                                <br>
                                <input type="email" name="emailRegistro" id="email_Registro">
                            </div>
                            <div id="modal-body--input">
                                <label for="">Contraseña</label>
                                <br>
                                <input type="password" name="passRegistro" id="pass_Registro">
                            </div> `;
        let botones=document.getElementById("modalFooter");
        
        botones.innerHTML=`<input type="button" value="Registrarse" class="backgroundRegistrarse" id="btn_Registro" onClick='registrarUsuario()' data-bs-dismiss="modal">
                           <input type="button" value="Cancelar" class="backgroundGoogle" onClick="cancelarRegistro()">`;

    }
    function finalizarCompra(){
        carrito=[];
        actualizarCarrito();
        Swal.fire(
            `N° de Orden: 564165456`,
            `¡Muchas gracias por su compra!
            En 24hs estará en camino :)`,
            'success'
          )
    }
    function obtenerListProductos(){
        const URL_LOCAL = 'json/data.json';
        $.getJSON(URL_LOCAL, function (respuesta,estado){
            if(estado == "success"){
                productos = respuesta.productos;
            }
        });
    }
    function actualizarCarrito(){
        let total= 0;
        modalCarrito.innerHTML="";
        containerTotal.innerHTML="";
        if(carrito.length > 0 )
        {
            carrito.forEach((producto,indice)=>{
                total = total + producto.precio * producto.cantidad;
                const containerCarrito = document.createElement("div");
                containerCarrito.innerHTML=`
                            <div class="cardCarrito">
                                <img src="${producto.imagen}" alt="">
                                <h3>${producto.descripcion}</h3>
                                <div class="cardCarrito__info">
                                    <h4>Cantidad: ${producto.cantidad}</h4>
                                    <div class="cardCarrito__info-Precio">
                                        <h5>Precio Web</h5>
                                        <h6>$ ${producto.precio}.00</h6>
                                    </div>  
                                </div>
                                <button onClick="removerProdCarrito(${indice})">Eliminar</button>  
                            </div>
                `;
                modalCarrito.appendChild(containerCarrito); 

            });
            
            const infoTotal = document.createElement("h3");
            infoTotal.innerHTML= `Total: $ ${total}`;
            const btnFinalizar = document.createElement("button");
            btnFinalizar.setAttribute('onClick','finalizarCompra()');
            btnFinalizar.innerHTML=`FINALIZAR COMPRA`;
            containerTotal.appendChild(infoTotal);
            containerTotal.appendChild(btnFinalizar);
        }
        else{
            const infoTotal = document.createElement("h3");
            infoTotal.innerHTML= `TU CARRITO ESTA VACIO...`;
            containerTotal.appendChild(infoTotal);
        }

    }
    function removerProdCarrito(indiceProd){
        carrito.splice(indiceProd,1);
        actualizarCarrito();

    }
    function agregarProdCarrito(idProducto){
        const indiceEncontradoCarrito = carrito.findIndex((prod)=>{ return prod.id === idProducto;});
        const indiceEncotradoProd = productos.findIndex((prod)=>{return prod.id === idProducto});
        if(indiceEncontradoCarrito=== -1){
            const prodAgregar = productos[indiceEncotradoProd];
            prodAgregar.cantidad=1;
            carrito.push(prodAgregar);
            Swal.fire(
                `Art. ${prodAgregar.id}`,
                '¡Se agrego al carrito con exito!',
                'success'
              )
            actualizarCarrito();
        }else
        {
            carrito[indiceEncontradoCarrito].cantidad+=1;
            Swal.fire(
                `Art. ${carrito[indiceEncontradoCarrito].id}`,
                '¡Se agrego al carrito con exito!',
                'success'
              )
            actualizarCarrito();
        }

    }
    function agregarProdCarrusel(){
        const URL_LOCAL = 'json/data.json';
        $.getJSON(URL_LOCAL, function (respuesta,estado){
            if(estado == "success"){
                productosDes = respuesta.destacados;
                let contadorCard=0;
                let limiteCard=3;
                let sections= document.querySelectorAll(".sectionDestacados");
                for (const section of sections) {
                    console.log(section);
                    for (let i = contadorCard; i < limiteCard; i++) {
                        $(section).prepend(`
                        <div class="containerCarruselProd--List_card">
                                <img src="${productosDes[i].imagen}" alt="Carrucel de imagenes">
                                <h4> ${productosDes[i].descripcion}</h4>
                                <div class="card__info-button">
                                    <div class="card__info">
                                        <h5>Precio Web</h5>
                                        <h6>$ ${productosDes[i].precio}.00</h6>
                                    </div>  
        
                                    <div>
                                        
                                        <button onClick="agregarProdCarrito(${productosDes[i].id})">Comprar</button>
                                    </div>  
                                </div>  
                            </div>
                        `);
                    }
                    contadorCard = contadorCard+3;
                    limiteCard= limiteCard + 3;
                }
            }
        });
        contadorCard=0;
        limiteCard=3;
        $.getJSON(URL_LOCAL, function (respuesta,estado){
            if(estado == "success"){
                productosNov = respuesta.novedades;
                let contadorCard=0;
                let limiteCard=3;
                let sections= document.querySelectorAll(".sectionNovedades");
                for (const section of sections) {
                    console.log(section);
                    for (let i = contadorCard; i < limiteCard; i++) {
                        $(section).prepend(`
                        <div class="containerCarruselProd--List_card">
                                <img src="${productosNov[i].imagen}" alt="Carrucel de imagenes">
                                <h4> ${productosNov[i].descripcion}</h4>
                                <div class="card__info-button">
                                    <div class="card__info">
                                        <h5>Precio Web</h5>
                                        <h6>$ ${productosNov[i].precio}.00</h6>
                                    </div>  
        
                                    <div>
                                        
                                        <button onClick="agregarProdCarrito(${productosNov[i].id})">Comprar</button>
                                    </div>  
                                </div>  
                            </div>
                        `);
                    }
                    contadorCard = contadorCard+3;
                    limiteCard= limiteCard + 3;
                }
            }
        });
    }
   
    function next(slider,section){
        let sliderSectionFirst= document.querySelectorAll(section)[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 0.5s";
        setTimeout(function(){   
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend',sliderSectionFirst);
            slider.style.marginLeft = "-100%";
        },500);
        return slider;
    }
    function prev(slider,section){
        let sliderSection= document.querySelectorAll(section);
        let sliderSectionLast = sliderSection[sliderSection.length - 1];
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin',sliderSectionLast);
            slider.style.marginLeft = "-100%";
        },500);
        return slider;
    }
    function botonesCarrusel(){
        btnRightDestacados.addEventListener('click',function (){
            sliderDes =next(sliderDes,".sectionDestacados");
        } );
        btnLeftDestacados.addEventListener('click',function (){
            sliderDes =prev(sliderDes,".sectionDestacados");
        });
        btnRightNovedades.addEventListener('click',function (){
            sliderNov =next(sliderNov,".sectionNovedades");
        } );
        btnLeftNovedades.addEventListener('click',function (){
            sliderNov =prev(sliderNov,".sectionNovedades");
        });
    }
    function carruselAutomatico(){
        setInterval(function (){
            sliderDes =next(sliderDes,".sectionDestacados");
        },7000);
        setInterval(function (){
            sliderNov =next(sliderNov,".sectionNovedades");
        },9000);
    }
    function registrarUsuario(){
        nombreIngresado=document.getElementById("nombre_Registro").value;
        apellidoIngresado=document.getElementById("apellido_Registro").value;
        dniIngresado=document.getElementById("dni_Registro").value;
        telefonoIngresado=document.getElementById("telefono_Registro").value;
        usuarioIngresado=document.getElementById("email_Registro").value;
        contraseniaIngresado=document.getElementById("pass_Registro").value;
        if(validarDatosRegistro(nombreIngresado,apellidoIngresado,dniIngresado,telefonoIngresado,usuarioIngresado,contraseniaIngresado)){
            if(!existeUsuario(usuarioIngresado)){
                usuarios.push(new Usuario(nombreIngresado,apellidoIngresado,dniIngresado,telefonoIngresado,usuarioIngresado,contraseniaIngresado,"plata"));               
                document.getElementById("nombre_Registro").value="";
                document.getElementById("apellido_Registro").value="";
                document.getElementById("dni_Registro").value="";
                document.getElementById("telefono_Registro").value="";
                document.getElementById("email_Registro").value="";
                document.getElementById("pass_Registro").value="";
                bienvenida(nombreIngresado);
                listaNombresUsuarios();
            }
            else{
                Swal.fire(
                    `¡Ya esta registrado el email!`,
                    '',
                    'info'
                  )
                document.getElementById("nombre_Registro").value="";
                document.getElementById("apellido_Registro").value="";
                document.getElementById("dni_Registro").value="";
                document.getElementById("telefono_Registro").value="";
                document.getElementById("email_Registro").value="";
                document.getElementById("pass_Registro").value="";
                
            }
        }
        
        
    }
    function existeUsuario(usuarioIngresado){
        const usuariosAux= usuarios.filter(usuario=> usuario.email == usuarioIngresado);
        if(usuariosAux.length == 1){
            return true;
        }
        return false;
    }
    function validarDatosRegistro(nombre,apellido,dni,telefono,email,contraseña){
        if(nombre=="" || apellido=="" || dni=="" || telefono=="" || email=="" || contraseña==""){
            Swal.fire(
                `¡Oops...`,
                'Debe completar todos los campos',
                'error'
              )
            return false;
        }
        return true;
    }
    function iniciarSesion(){
        usuarioIngresado=document.getElementById("email_login").value;
        contraseniaIngresado=document.getElementById("pass_login").value;
        const usuariosAux= usuarios.filter(usuario =>usuario.valido(usuarioIngresado,contraseniaIngresado));
        if(usuariosAux.length == 1){
            document.getElementById("email_login").value="";
            document.getElementById("pass_login").value="";
            bienvenida(usuariosAux[0].nombre);
        }
        else{
            document.getElementById("email_login").value="";
            document.getElementById("pass_login").value="";
            Swal.fire(
                `¡Oops...`,
                '¡DATOS INVALIDOS!',
                'error'
              )
        }
    }
    function usuariosSegunMembresia(usuarios,membresia){
        console.log(usuarios.filter(usuario=> usuario.membresia == membresia));
    }
    function ordenarAlfabeticamente(usuarios){
       const usuariosAux= usuarios.map(usuario => usuario.nombre).sort()
        console.log(usuariosAux);
    }
    function listaNombresUsuarios(){
        for (let i = 0; i < usuarios.length; i++) {
            console.log(usuarios[i].nombre);
            
        }
    }
    function btnLogIn(){
        $('#btnAceptar_LogIn').on("click",iniciarSesion);
    }
    /*MAIN */
    usuariosSegunMembresia(usuarios,"oro");
    ordenarAlfabeticamente(usuarios);
    listaNombresUsuarios();
    obtenerListProductos();
    btnLogIn();
    botonesCarrusel();
    carruselAutomatico();
    agregarProdCarrusel();
    
    


   
    