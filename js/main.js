$(function(){
  const window_width = $('body').width();
  const place_max = $('.nav li').length;
  const place_id = location.search.replace('?id=','');

  let slide_page = 1;
  let slide_position = 0;

  function mySlide(type){
    if(type === 'prev'){
      slide_page --;
      slide_position -= window_width;
      if(slide_page === 1){
        $('[data-slide="prev"]').fadeOut();
      }
    }
    if(type === 'next'){
      slide_page ++;
      slide_position += window_width;
      if(slide_page <= place_max){
        $('[data-slide="prev"]').fadeIn();
      }
      if(slide_page > place_max){
        slide_page = 1;
        slide_position = 0;
        $('[data-slide="prev"]').fadeOut();
      }
    }
    $('.main').animate({
      scrollLeft:slide_position
    });
    $('.nav li a').removeClass('is-active');
    $('.nav li a').eq(slide_page - 1).addClass('is-active');
  }

  if(window_width <= 768){
    

    $('.sp-on').click(function(){
      let slide_type = $(this).attr('data-slide');
      mySlide(slide_type);
    });

  }else{
    setInterval(function(){
      $('.thumbnail li a').removeClass('is-active');
      let ramdom = Math.floor( Math.random() * place_max );
      $('.thumbnail li a').eq(ramdom).addClass('is-active');
      },2000)
  }
  if( $('body').attr('id') === 'page-place' ){
    $('.place-img img').attr('src','img/place/' + place_id + '.jpg');
    $('[data-place]').each(function(index,el){
      let key_place = $(this).attr('data-place');
      if($(this)[0].tagName === 'A'){
        $(this).attr('href',place[place_id - 1][key_place]);
      }else{
        $(this).text(place[place_id - 1][key_place]);

      }
    });

  }


});
