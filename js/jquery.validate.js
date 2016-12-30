/**
 * Created by Administrator on 2016/12/17 0017.
 */
;(function ($) {
    $.extend({
        validate:function (form,fields) {
            var $errcount = 0;
            var $form = form;
            for(k in fields){
                var $formcontrol = $form.find('[name="'+k+'"]'),
                    $parent = fields[k].parent || $formcontrol.parents(".form-group"),
                    $validators = fields[k].validators;
                    for(var p in $validators){
                        switch(p){
                            case 'notEmpty':{
                                switch ($formcontrol.attr("type")){
                                    case 'file':
                                    case 'text':
                                    case 'password':
                                    case 'number':
                                    case 'textarea':{
                                        if($formcontrol.val().trim().length==0){
                                            if($parent.next(".help-block").length==0){
                                                $("<small class='help-block'>"+$validators[p].message+"</small>")
                                                    .insertAfter($parent);
                                            }
                                            $errcount++;
                                        }
                                        break;
                                    }
                                    case 'checkbox':{
                                        if(!$formcontrol.is(":checked")){
                                            if($parent.next(".help-block").length==0){
                                                $("<small class='help-block'>"+$validators[p].message+"</small>")
                                                    .insertAfter($parent);
                                            }
                                            $errcount++;
                                        }
                                        break;
                                    }
                                    case 'select':{
                                        if($formcontrol.find("option:selected").index()==0){
                                            if($parent.next(".help-block").length==0){
                                                $("<small class='help-block'>"+$validators[p].message+"</small>")
                                                    .insertAfter($parent);
                                            }
                                            $errcount++;
                                        }
                                        break;
                                    }
                                }
                                break;
                            }
                            case 'isEqual':{
                                if($formcontrol.val()!==$form.find('[name="'+$validators[p].target+'"]').val()){
                                    if($parent.next(".help-block").length==0){
                                        $("<small class='help-block'>"+$validators[p].message+"</small>")
                                            .insertAfter($parent);
                                    }
                                    $errcount++;
                                }
                                break;
                            }
                            case 'isEmail':{
                                var $rex = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                                if(!$rex.test($formcontrol.val())){
                                    if($parent.next(".help-block").length==0){
                                        $("<small class='help-block'>"+$validators[p].message+"</small>")
                                            .insertAfter($parent);
                                    }
                                    $errcount++;
                                }
                                break;
                            }
                            case 'isURL':{
                                var $rex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
                                if(!$rex.test($formcontrol.val())){
                                    if($parent.next(".help-block").length==0){
                                        $("<small class='help-block'>"+$validators[p].message+"</small>")
                                            .insertAfter($parent);
                                    }
                                    $errcount++;
                                }
                                break;
                            }
                            case 'isNumber':{
                                var $rex = /^[0-9]+.?[0-9]*$/;
                                if(!$rex.test($formcontrol.val())){
                                    if($parent.next(".help-block").length==0){
                                        $("<small class='help-block'>"+$validators[p].message+"</small>")
                                            .insertAfter($parent);
                                    }
                                    $errcount++;
                                }
                                break;
                            }
                            case 'lengthLimit':{
                                var $min = $validators[p].min,
                                    $max = $validators[p].max;
                                if($min!==undefined&&$max==undefined){
                                    if($formcontrol.val().length<$min){
                                        if($parent.next(".help-block").length==0){
                                            $("<small class='help-block'>"+$validators[p].message+"</small>")
                                                .insertAfter($parent);
                                        }
                                        $errcount++;
                                    }
                                }else if($min==undefined&&$max==!undefined){
                                    if($formcontrol.val().length>$max){
                                        if($parent.next(".help-block").length==0){
                                            $("<small class='help-block'>"+$validators[p].message+"</small>")
                                                .insertAfter($parent);
                                        }
                                        $errcount++;
                                    }
                                }else{
                                    if($formcontrol.val().length<$min||$formcontrol.val().length>$max){
                                        if($parent.next(".help-block").length==0){
                                            $("<small class='help-block'>"+$validators[p].message+"</small>")
                                                .insertAfter($parent);
                                        }
                                        $errcount++;
                                    }
                                }
                                break;
                            }
                        }
                    }
            }
            return !($errcount>0);
        }
    })
})($);