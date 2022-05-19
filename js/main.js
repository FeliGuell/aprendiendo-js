$(document).ready(function(){
    
            if(window.location.href.indexOf('index')> -1){

            
            //Slider
            $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
            });




            // Posts
            var posts = [
                {
                    title: 'Prueba título 1',
                    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure iusto consequatur tenetur non mollitia libero exercitationem nemo ipsam, vitae repellendus reprehenderit ab odit Obcaecati adipisci, explicabo architecto eius'
                },
                {
                    title: 'Prueba título 2',
                    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure iusto consequatur tenetur non mollitia libero exercitationem nemo ipsam, vitae repellendus reprehenderit ab odit Obcaecati adipisci, explicabo architecto eius'
                },
                {
                    title: 'Prueba título 3',
                    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure iusto consequatur tenetur non mollitia libero exercitationem nemo ipsam, vitae repellendus reprehenderit ab odit Obcaecati adipisci, explicabo architecto eius'
                },
                {
                    title: 'Prueba título 4',
                    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure iusto consequatur tenetur non mollitia libero exercitationem nemo ipsam, vitae repellendus reprehenderit ab odit Obcaecati adipisci, explicabo architecto eius'
                },
                {
                    title: 'Prueba título 5',
                    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure iusto consequatur tenetur non mollitia libero exercitationem nemo ipsam, vitae repellendus reprehenderit ab odit Obcaecati adipisci, explicabo architecto eius'
                },

            ];

            posts.forEach((item, index) => {

                var post =  `
                <article class="post">
                            <h2> ${item.title} </h2>
                            <span class="date"> ${item.date} </span>
                                <p>
                                    ${item.content}
                                </p>
                                <a href="#" class="button-more">Leer más</a>
                </article>
                `;
            
                $("#posts").append(post);
            
            });

        }


            //Selector de temas

            var theme = $("#theme");

            $("#to-green").click(function(){
                theme.attr("href", "css/green.css")
            });

            $("#to-red").click(function(){
                theme.attr("href", "css/red.css")
            });

            $("#to-blue").click(function(){
                theme.attr("href", "css/blue.css")
            });
            

            //Scroll para subir 

            $("#subir").click(function(e){
                e.preventDefault();


                $("html, body").animate({
                    scrollTop: 0
                }, 500);

                return false;
            });


            //Login falso

            $("#login form").submit(function(){
                var form_name = $("#form_name").val();

                localStorage.setItem("form_name", form_name);
            });

                var form_name = localStorage.getItem("form_name");

                if(form_name != null && form_name != undefined){
                    var about_p= $("#about p");

                    
                    about_p.html("<br><strong> Bienvenidos " + form_name + "</strong>");
                    about_p.append("<br><a href='#' id='logout'> Cerrar Sesión </a>");

                    $("#logout").click(function(){
                        localStorage.clear();
                        location.reload();
                    });
                    
                    $("#login").hide();
                        
                };

            //Acordeon
                
            if(window.location.href.indexOf('about') > -1){
                    $('#acordeon').accordion();
            };

            //Reloj
            if(window.location.href.indexOf('reloj') > -1){

                setInterval(function(){
                    var reloj = moment().format('h:mm:ss a');
                    $("#reloj").html(reloj)
                }, 1000);

              
            };

           // Validación
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}

});





