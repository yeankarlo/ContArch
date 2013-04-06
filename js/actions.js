$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		//Contactos
		// ---crear contacto
		$('cSend').tap(function(){
			var nom = $('#cNom').val();
			var tel = $('#cTel').val();
			var mov = $('#cMov').val();
			var mail = $('#cMail').val();
			// ------crear el objeto de contacto para llenarlo con los datos
			var nueCont = navigator.contacts.create();
			nueCont.displayname = nom;
			nueCont.nickname = nom;
			// -----crear objeto para nombre del contacto; propiedad NAME del objeto de CONTACTOS
			var nombre = new ContactName();
			nombre.givenName = nom;
			nueCont.name = nombre;
			// ------crear el arreglo de telefonos; propiedad 
			var telefonos = [];
			telefonos[0] = new ContactField('home', tel, false);
			telefonos[1] = new ContactField('mobile', mov, true); // preferred number
			nueCont.phoneNumbers = telefonos;
			// ------crear el arreglo para correos electrónicos
			var correos = [];
			correos[0] = new ContactField('home',mail,true); // preferred number
			nueCont.emails = correos;
			// ------guardar el contacto
			nueCont.save(function(){
				$('#cNom,#cTel,#cMov,#cMail').val('');
				navigator.notification.alert('Creado satisfactoriamente', function(){
						history.back();
					},'Contacto OK', 'Aceptar');
			}, function(err){
				navigator.notification.alert(err.code, null,'Error al crear el contacto', 'Aceptar');	
			});
		});	
	}, false);
});