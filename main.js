document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });

    // $(function(){
    //     $("#load-data").load("overview.html"); 
    //   });

    $(document).ready(function() {
        $('#siteA').DataTable(
          {"pageLength": 5,
          lengthMenu: [5, 10, 20, 50, 100]}
        );
        $('#siteB').DataTable(
          {"pageLength": 5,
          lengthMenu: [5, 10, 20, 50, 100]}
        );
    } );


    var temparature= [];
    var timestamp=[];
    var turbidity=[];
    $("table#siteA tr td:nth-child(2)").each(function(index,value){
         var val = $(this).text();
         temparature.push(val);
    });
    $("table#siteA tr td:first-child").each(function(index,value){
        var val = $(this).text();
        timestamp.push(val);
   });
   $("table#siteB tr td:nth-child(4)").each(function(index,value){
    var val = $(this).text();
    turbidity.push(val);
});


  charts = document.getElementById("charts");//html canvas
  siteBchart =  document.getElementById("siteBchart");
  //create a line chart
  new Chart(charts, {
      type: 'line', 
      data: {
      labels: timestamp, //x-axes data 
      datasets: [{
          label:"site A data",
      data: temparature, //y-axes data 
      backgroundColor: 'black',
      }]
      },
      options:{
          legend: {display:false},
      }
     });
     new Chart(siteBchart, {
      type: 'bar', 
      data: {
      labels: timestamp, //x-axes data 
      datasets: [{
          label:"site B data",
      data: turbidity, //y-axes data 
      backgroundColor: 'black',
      }]
      },
      options:{
          legend: {display:false},
      }
     });
    
     let map;
      
     async function initMap() {
       const { Map } = await google.maps.importLibrary("maps");
       map = new Map(document.getElementById("map"), {
         center: { lat: 37.0, lng: 121.0 },
         zoom: 8,
       });
     }
     
     initMap();


     $(document).ready(function () {
      $('#map').hide();
      $('.main-content').click(function (event) {
        if($('#section-siteA')) {
          $('#map').hide();
        }
         $('.tab-content').hide();
        var content = $(this).attr('href');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(content).show();
        $(content).siblings('.main-content').hide();
      });
        $('.tab-content:not(:first)').hide();
        $('.nav_list a').click(function (event) {
          $('#map').hide();
            var content = $(this).attr('href');
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
            $(content).show();
            $(content).siblings('.tab-content').hide();
        });
    });
