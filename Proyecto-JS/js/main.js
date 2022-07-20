$(document).ready(function(){

  //Slider

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth:1200,
        responsive:true  
      });

      //Posts
      var posts=[
        {
          title:"Prueba de titulo 1",
          date:'Publicado el dia '+ moment().date()+ " de "+ moment().format("MMMM")+" del "+moment().format("YYYY"),
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          title:"Prueba de titulo 2",
          date:'Publicado el dia '+ moment().date()+ " de "+ moment().format("MMMM")+" del "+moment().format("YYYY"),
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },

        {
          title:"Prueba de titulo 3",
          date:'Publicado el dia '+ moment().date()+ " de "+ moment().format("MMMM")+" del "+moment().format("YYYY"),
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          title:"Prueba de titulo 4",
          date:'Publicado el dia '+ moment().date()+ " de "+ moment().format("MMMM")+" del "+moment().format("YYYY"),
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },

        {
          title:"Prueba de titulo 5",
          date:'Publicado el dia '+ moment().date()+ " de "+ moment().format("MMMM")+" del "+moment().format("YYYY"),
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },

        {
          title:"Prueba de titulo 6",
          date:'Publicado el dia '+ moment().date()+ " de "+ moment().format("MMMM")+" del "+moment().format("YYYY"),
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
      ];

      posts.forEach((item,index)=>{
        var post=`
        <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer mas</a>
                    </article>
                    `;
        $("#posts").append(post);
      });
      
      //Selector de temas
      var theme=$("#theme");
      
      $("#to-green").click(function(){
        theme.attr("href","css/green.css");
      });

      $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
      });

      $("#to-red").click(function(){
        theme.attr("href","css/red.css");
      });


      //Scroll arriba de la web
      $('.subir').click(function(e){
          e.preventDefault();

        $('html,body').animate({
            scrollTop:0
        },500);

        return false;
      });
    });
