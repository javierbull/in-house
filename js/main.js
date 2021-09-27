// "use strict";

$(document).ready(function() {

  $('.all').on('click', function(e) {
    $this = this;
    $.each($(this).parents('ul').find('input'), function(i, item) {
      $(item).prop('checked', $this.checked);
    });
  });

  $(".select2").select2({
    theme: 'bootstrap4',
  });

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // END SHOW-HIDE PASSWORD

  $("#radioShow").click(function() {
    $(".form-plazos").show();
  });

  $("#radioHide").click(function() {
    $(".form-plazos").hide();
  });



  // DATE PICKER =======================



  try {

    moment.locale('es');

    $('.js-datepicker-simple').daterangepicker({
      "singleDatePicker": true,
      locale: {
        format: 'DD/MM/YYYY',
        currentText: 'Hoy',
        weekHeader: 'Sm',
      },
    });

    $('.js-datepicker').daterangepicker({
      "singleDatePicker": true,
      "showDropdowns": true,
      "autoUpdateInput": false,
      locale: {
        format: 'DD/MM/YYYY',
        currentText: 'Hoy',
        weekHeader: 'Sm',
      },
    });

    var myCalendar = $('.js-datepicker');
    var isClick = 0;

    $(window).on('click', function() {
      isClick = 0;
    });

    $(myCalendar).on('apply.daterangepicker', function(ev, picker) {
      isClick = 0;
      $(this).val(picker.startDate.format('DD/MM/YYYY'));

    });

    $('.js-btn-calendar').on('click', function(e) {
      e.stopPropagation();

      if (isClick === 1) isClick = 0;
      else if (isClick === 0) isClick = 1;

      if (isClick === 1) {
        myCalendar.focus();
      }
    });

    $(myCalendar).on('click', function(e) {
      e.stopPropagation();
      isClick = 1;
    });

    $('.daterangepicker').on('click', function(e) {
      e.stopPropagation();
    });


  } catch (er) {
    console.log(er);
  }


  // FIN DATE PICKER

  // DATE RANGE PICKER
  // $('#date_range').daterangepicker();

  $('.rangePicker').daterangepicker({
    "locale": {
      "format": "DD-MM-YYYY",
      "separator": " - ",
      "applyLabel": "Guardar",
      "cancelLabel": "Cancelar",
      "fromLabel": "Desde",
      "toLabel": "Hasta",
      "customRangeLabel": "Personalizar",
      "daysOfWeek": [
        "Do",
        "Lu",
        "Ma",
        "Mi",
        "Ju",
        "Vi",
        "Sa"
      ],
      "monthNames": [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Setiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      "firstDay": 1
    },
    "opens": "right"
  });
  // RANGE DATE PICKER



  $(".nav-search .input-group > input").focus(function(e) {
    $(this).parent().addClass("focus");
  }).blur(function(e) {
    $(this).parent().removeClass("focus");
  });

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    layoutsColors();
  });

  function layoutsColors() {
    if ($('.sidebar').is('[data-background-color]')) {
      $('html').addClass('sidebar-color');
    } else {
      $('html').removeClass('sidebar-color');
    }

    if ($('body').is('[data-image]')) {
      $('body').css('background-image', 'url("' + $('body').attr('data-image') + '")');
    } else {
      $('body').css('background-image', '');
    }
  }

  $('.btn-refresh-card').on('click', function() {
    var e = $(this).parents(".card");
    e.length && (e.addClass("is-loading"), setTimeout(function() {
      e.removeClass("is-loading")
    }, 3e3))
  })

  var scrollbarDashboard = $('.sidebar .scrollbar');
  if (scrollbarDashboard.length > 0) {
    scrollbarDashboard.scrollbar();
  }

  var contentScrollbar = $('.main-panel .content-scroll');
  if (contentScrollbar.length > 0) {
    contentScrollbar.scrollbar();
  }

  var messagesScrollbar = $('.messages-scroll');
  if (messagesScrollbar.length > 0) {
    messagesScrollbar.scrollbar();
  }

  var tasksScrollbar = $('.tasks-scroll');
  if (tasksScrollbar.length > 0) {
    tasksScrollbar.scrollbar();
  }

  var quickScrollbar = $('.quick-scroll');
  if (quickScrollbar.length > 0) {
    quickScrollbar.scrollbar();
  }

  var messageNotifScrollbar = $('.message-notif-scroll');
  if (messageNotifScrollbar.length > 0) {
    messageNotifScrollbar.scrollbar();
  }

  var notifScrollbar = $('.notif-scroll');
  if (notifScrollbar.length > 0) {
    notifScrollbar.scrollbar();
  }

  var quickActionsScrollbar = $('.quick-actions-scroll');
  if (quickActionsScrollbar.length > 0) {
    quickActionsScrollbar.scrollbar();
  }

  var userScrollbar = $('.dropdown-user-scroll');
  if (userScrollbar.length > 0) {
    userScrollbar.scrollbar();
  }

  $('.scroll-bar').draggable();

  $('#search-nav').on('shown.bs.collapse', function() {
    $('.nav-search .form-control').focus();
  });

  var toggle_sidebar = false,
    toggle_quick_sidebar = false,
    toggle_topbar = false,
    minimize_sidebar = false,
    toggle_page_sidebar = false,
    toggle_overlay_sidebar = false,
    nav_open = 0,
    quick_sidebar_open = 0,
    topbar_open = 0,
    mini_sidebar = 0,
    page_sidebar_open = 0,
    overlay_sidebar_open = 0;


  if (!toggle_sidebar) {
    var toggle = $('.sidenav-toggler');

    toggle.on('click', function() {
      if (nav_open == 1) {
        $('html').removeClass('nav_open');
        toggle.removeClass('toggled');
        nav_open = 0;
      } else {
        $('html').addClass('nav_open');
        toggle.addClass('toggled');
        nav_open = 1;
      }
    });
    toggle_sidebar = true;
  }

  if (!quick_sidebar_open) {
    var toggle = $('.quick-sidebar-toggler');

    toggle.on('click', function() {
      if (nav_open == 1) {
        $('html').removeClass('quick_sidebar_open');
        $('.quick-sidebar-overlay').remove();
        toggle.removeClass('toggled');
        quick_sidebar_open = 0;
      } else {
        $('html').addClass('quick_sidebar_open');
        toggle.addClass('toggled');
        $('<div class="quick-sidebar-overlay"></div>').insertAfter('.quick-sidebar');
        quick_sidebar_open = 1;
      }
    });

    $('.wrapper').mouseup(function(e) {
      var subject = $('.quick-sidebar');

      if (e.target.className != subject.attr('class') && !subject.has(e.target).length) {
        $('html').removeClass('quick_sidebar_open');
        $('.quick-sidebar-toggler').removeClass('toggled');
        $('.quick-sidebar-overlay').remove();
        quick_sidebar_open = 0;
      }
    });

    $(".close-quick-sidebar").on('click', function() {
      $('html').removeClass('quick_sidebar_open');
      $('.quick-sidebar-toggler').removeClass('toggled');
      $('.quick-sidebar-overlay').remove();
      quick_sidebar_open = 0;
    });

    quick_sidebar_open = true;
  }

  if (!toggle_topbar) {
    var topbar = $('.topbar-toggler');

    topbar.on('click', function() {
      if (topbar_open == 1) {
        $('html').removeClass('topbar_open');
        topbar.removeClass('toggled');
        topbar_open = 0;
      } else {
        $('html').addClass('topbar_open');
        topbar.addClass('toggled');
        topbar_open = 1;
      }
    });
    toggle_topbar = true;
  }

  if (!minimize_sidebar) {
    var minibutton = $('.toggle-sidebar');
    if ($('.wrapper').hasClass('sidebar_minimize')) {
      mini_sidebar = 1;
      minibutton.addClass('toggled');
      minibutton.html('<i class="icon-menu"></i>');
    }

    minibutton.on('click', function() {
      if (mini_sidebar == 1) {
        $('.wrapper').removeClass('sidebar_minimize');
        minibutton.removeClass('toggled');
        minibutton.html('<i class="icon-menu"></i>');
        mini_sidebar = 0;
      } else {
        $('.wrapper').addClass('sidebar_minimize');
        minibutton.addClass('toggled');
        minibutton.html('<i class="icon-menu"></i>');
        mini_sidebar = 1;
      }
      $(window).resize();
    });
    minimize_sidebar = true;
  }

  if (!toggle_page_sidebar) {
    var pageSidebarToggler = $('.page-sidebar-toggler');

    pageSidebarToggler.on('click', function() {
      if (page_sidebar_open == 1) {
        $('html').removeClass('pagesidebar_open');
        pageSidebarToggler.removeClass('toggled');
        page_sidebar_open = 0;
      } else {
        $('html').addClass('pagesidebar_open');
        pageSidebarToggler.addClass('toggled');
        page_sidebar_open = 1;
      }
    });

    var pageSidebarClose = $('.page-sidebar .back');

    pageSidebarClose.on('click', function() {
      $('html').removeClass('pagesidebar_open');
      pageSidebarToggler.removeClass('toggled');
      page_sidebar_open = 0;
    });

    toggle_page_sidebar = true;
  }

  if (!toggle_overlay_sidebar) {
    var overlaybutton = $('.sidenav-overlay-toggler');
    if ($('.wrapper').hasClass('is-show')) {
      overlay_sidebar_open = 1;
      overlaybutton.addClass('toggled');
      overlaybutton.html('<i class="icon-menu"></i>');
    }

    overlaybutton.on('click', function() {
      if (overlay_sidebar_open == 1) {
        $('.wrapper').removeClass('is-show');
        overlaybutton.removeClass('toggled');
        overlaybutton.html('<i class="icon-menu"></i>');
        overlay_sidebar_open = 0;
      } else {
        $('.wrapper').addClass('is-show');
        overlaybutton.addClass('toggled');
        overlaybutton.html('<i class="icon-menu"></i>');
        overlay_sidebar_open = 1;
      }
      $(window).resize();
    });
    minimize_sidebar = true;
  }

  $('.sidebar').hover(function() {
    if ($('.wrapper').hasClass('sidebar_minimize')) {
      $('.wrapper').addClass('sidebar_minimize_hover');
    }
  }, function() {
    if ($('.wrapper').hasClass('sidebar_minimize')) {
      $('.wrapper').removeClass('sidebar_minimize_hover');
    }
  });

  // addClass if nav-item click and has subnav

  $(".nav-item a").on('click', (function() {
    if ($(this).parent().find('.collapse').hasClass("show")) {
      $(this).parent().removeClass('submenu');
    } else {
      $(this).parent().addClass('submenu');
    }
  }));

  //form-group-default active if input focus
  $(".form-group-default .form-control").focus(function() {
    $(this).parent().addClass("active");
  }).blur(function() {
    $(this).parent().removeClass("active");
  });

  // SHOW ACTIVE FOCUS TABLE ROW
  $('.row-table').on('click', function() {
    $('.row-table').removeClass('active2');
    $(this).toggleClass('active2');
  })

  // DATATABLES
  $('.dtable').DataTable({
    // "scrollX": true,
    //para cambiar el lenguaje a español
    "language": {
      "lengthMenu": "Mostrar _MENU_ filas",
      "zeroRecords": "No se encontraron resultados",
      "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
      "infoFiltered": "(filtrado de un total de _MAX_ registros)",
      "sSearch": "Buscar:",
      "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
      },
      "sProcessing": "Procesando...",
    }

  });

  // FIN DATATABLES

  // ACCORDION MODAL

  // SELECT ALL CHECKBOXES

  $(".selectAll").click(function() {
    $(".input-checkbox").prop("checked", $(this).prop("checked"));
  });

  $(".input-checkbox").click(function() {
    if (!$(this).prop("checked")) {
      $(".selectAll").prop("checked", false);
    }
  });

  // FIN SELECT ALL CHECKBOXES

  $(function() {
    $('.card-header').click(function(e) {
      $('.card-header').removeClass('tab-bg-gold');
      var collapsCrnt = $(this).find('.collapse-controle').attr('aria-expanded');
      if (collapsCrnt != 'true') {
        $(this).addClass('tab-bg-gold');
      }
    });
  })
  // FIN ACCORDION MODAL


  // CUSTOM FILE INPUT
  // Add the following code if you want the name of the file appear on select
  $(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });
  // FIN CUSTOM FILE INPUT

  // SHOW - HIDE CONTENEDORES
  $("#btn-agregarSede").click(function() {
    $("#empresa").hide();
    $("#sede").show();
  });

  $("#volverEmpresa").click(function() {
    $("#sede").hide();
    $("#empresa").show();
  });

  $("#btn-nuevaProgramacion").click(function() {
    $("#programaciones").hide();
    $("#nueva-programacion").show();
  });

  $(".volverProgramaciones").click(function() {
    $("#nueva-programacion").hide();
    $("#programaciones").show();
  });
  // END SHOW - HIDE CONTENEDORES

 // MÓDULO PROGRAMACIONES
  $("#radioShowProgramacion").click(function() {
    $(".content-btn-editar-productos").show();
  });

  $("#radioHideProgramacion").click(function() {
    $(".content-btn-editar-productos").hide();
  });

  $("#radioShowProgramacion2").click(function() {
    $(".content-btn-editar-productos2").show();
  });

  $("#radioHideProgramacion2").click(function() {
    $(".content-btn-editar-productos2").hide();
  });

  // Modal checkboxed anidados

  // Para evitar que se abra el accordion al dar click en el checkbox
  $(".content-checkbox").click(function(){
    event.stopPropagation();
  });

  // Fin checkboxes anidados


  // FIN MÓDULO PROGRAMACIONES

});


// ==============================
// Tab link - Tab link - Tab link
// ==============================

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// =============================

// SIDEBAR ITEMS ACTIVE TOGGLE
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("sb-active");
    current[0].className = current[0].className.replace(" sb-active", "");
    this.className += " sb-active";
  });
};

// =====================
