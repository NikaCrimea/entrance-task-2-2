$(document).ready(function(){
        //Скрыть PopUp при загрузке страницы
        PopUpHide();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
        $('#bg_layer').animate({
        opacity: 0.5
    });
  };
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }
