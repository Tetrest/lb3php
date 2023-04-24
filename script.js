$(function() {

  function showDateEx1(code) {
    if(code == 0){
      $('.ex1').text('Не  має записів по таким даним!');
    }
    else{
      $('.ex1').text('');
      code.forEach(element => {
        let oldtext = $('.ex1').text();
        $('.ex1').text(`${oldtext} Дата работи: ${element['date']} Опис завдання: ${element['description']}`);
      });
    }
  }
  
  function showDateEx2(code) {
    if(code == 0){
      $('.ex2').text('Не  має записів по таким даним!');
    }
    else{
      $('.ex2').text('');
      code.forEach(element => {
        let oldtext = $('.ex2').text();
        $('.ex2').text(`${oldtext} Дата початку проекту: ${element['time_start']}  Дата закінчення проекту: ${element['time_end']}`);
      });
    }
  }
  
  function showDateEx3(code) {
    if(code == 0){
      $('.ex3').text('Не  має записів по таким даним!');
    }
    else{
      $('.ex3').text(`Кількість співробітників: ${code}`);
    }
  }

  $('.btn1').on('click', function(e){
    e.preventDefault();

    let date = $('.date').val();
    let projectname = $('.project-name-ex1').val(); 

    $.ajax({
      url: 'controller/Controller.php',
      type: 'POST',
      data: {type: 'ex1', pjname: projectname, date: date},
      dataType: 'json',
      success: function (res) {
        console.log(res);
        showDateEx1(res.code);
      },
      error: function() {
        alert('Error');
      }
    })
  })

  $('.btn2').on('click', function(e){
    e.preventDefault();
    
    let projectname = $('.project-name-ex2').val();

    $.ajax({
      url: 'controller/Controller.php',
      type: 'POST',
      data: {type: 'ex2', pjname: projectname},
      dataType: 'json',
      success: function (res) {
        console.log(res);
        showDateEx2(res.code);
      },
      error: function() {
        alert('Error');
      }
    })
  })

  $('.btn3').on('click', function(e){
    e.preventDefault();
    
    let head = $('.project-name-ex3').val();
    // alert(head);

    $.ajax({
      url: 'controller/Controller.php',
      type: 'POST',
      data: {type: 'ex3', chief: head},
      dataType: 'json',
      success: function (res) {
        console.log(res);
        showDateEx3(res.code['count']);
      },
      error: function() {
        alert('Error');
      }
    })
  
  })

});