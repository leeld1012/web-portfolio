// πλ©λ΄ νμ±ν μ€μ νκΈ°

$(function () {

  //μμΉ μ²΄ν¬νκΈ° offset().μμΉ
  const homePos = $('#home').offset().top;
  const aboutPos = $('#about').offset().top;
  const skillsPos = $('#skills').offset().top;
  const worksPos = $('#works').offset().top;
  const contactPos = $('#contact').offset().top;


  $(window).scroll(function () {
    let scrollPos = $(window).scrollTop();

    const allMenu = $('.gnb li a');
    const homeMenu = $('#home-menu');
    const aboutMenu = $('#about-menu');
    const skillsMenu = $('#skills-menu');
    const worksMenu = $('#works-menu');
    const contactMenu = $('#contact-menu');

    console.log('scrollPos: ' + scrollPos);
    console.log('homePos :' + homePos + '/ aboutPos: ' + aboutPos);
    console.log('skillsPos :' + skillsPos + '/ worksPos: ' + worksPos);
    console.log('contactPos: ' + contactPos);

    if (homePos < (scrollPos + 100)) {
      allMenu.removeClass('menu-act');
      homeMenu.addClass('menu-act');
    }

    if (aboutPos < (scrollPos + 400)) {
      allMenu.removeClass('menu-act');
      aboutMenu.addClass('menu-act');
    }

    if (skillsPos < (scrollPos + 400)) {
      allMenu.removeClass('menu-act');
      skillsMenu.addClass('menu-act');
    }

    if (worksPos < (scrollPos + 400)) {
      allMenu.removeClass('menu-act');
      worksMenu.addClass('menu-act');
    }

    if (contactPos < (scrollPos + 400)) {
      allMenu.removeClass('menu-act');
      contactMenu.addClass('menu-act');

    }

  });


  // πμλ¨ λ©λ΄ ν΄λ¦­μ λΆλλ¬μ΄ μμ§μ λ§λ€κΈ°
  var menuItem = $('.gnb a');

  
  // λμ΄ κ° μ‘°μ 
  menuItem.click(function (e) {
    const windowWidth = $(window).width();
    var el = $(this).attr('href');
    var elWrap = $(el);

    if(windowWidth < 768){
      scrollMove(elWrap, 60);
    } else {
      scrollMove(elWrap, 0);
    }

    e.preventDefault();
  });


  // λΆλλ¬μ΄ μμ§μ ν¨μ λ§λ€κΈ°
  function scrollMove(el, navHight) {
    var offset = el.offset().top;
    var totalPos = offset - navHight;

    $('html, body').animate({
      'scrollTop': totalPos
    }, 800)
  };

});