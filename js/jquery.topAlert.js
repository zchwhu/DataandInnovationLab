/**
 * Created by Administrator on 2016/12/15 0015.
 */
;(function ($) {
    $.extend({
        topAlert:function (options) {
            var defaults = {
                text:'',
                autoHide:true,
                type:"default",
                time:2000
            };
            options = $.extend({},defaults, options);

            if($('.top-alert').length>0){
                $('.top-alert').remove();
            }
            var $tpl = $("<div class='top-alert'><a href='#' class='top-alert-inner'>"+options.text+"</a></div>").appendTo(document.body);
            switch(options.type){
                case 'success':{
                    $tpl.addClass("top-success-alert");
                    break;
                }
                case 'fail':{
                    $tpl.addClass("top-warn-alert");
                    break;
                }
                default:{
                    break;
                }
            }

            $tpl.show();
            $tpl.addClass("top-alert-show");

            if(options.autoHide){
                setTimeout(function () {
                   $tpl.removeClass("top-alert-show");
                },options.time)
            }else{
                $(document).on("click",function () {
                    $tpl.removeClass("top-alert-show");
                })
            }
        }
    })
})($);