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
          title:"Prueba de titulo1",
          date:'Publicado el día '+ moment().format("MMM dddd YYYY"),
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          title:"Prueba de titulo2",
          date:new Date(),
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },

        {
          title:"Prueba de titulo3",
          date:new Date(),
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          title:"Prueba de titulo4",
          date:new Date(),
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
      ];

      console.log(posts);
      
    });
