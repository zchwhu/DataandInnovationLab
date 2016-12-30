/**
 * Created by Administrator on 2016/12/18 0018.
 */
$(function () {
    // 消除输入框错误提示信息
    $("input[type='text'],input[type='password'],input[type='number'],.wangEditor-txt").focus(function () {
        if($(this).parents(".form-group").next(".help-block").length>0){
            $(this).parents(".form-group").next(".help-block").remove();
        }
    })

    // 消除下拉选择框错误提示信息
    $("select").change(function () {
        if($(this).find("option:selected").index()>0){
            if($(this).parents(".form-group").next(".help-block").length>0){
                $(this).parents(".form-group").next(".help-block").remove();
            }
        }
    })

    //消除上传图片部分错误提示信息
    $("input[type='file']").change(function () {
        if($(this).val().length>0){
            if($(this).parents(".form-group").next(".help-block").length>0){
                $(this).parents(".form-group").next(".help-block").remove();
            }
        }
    })

    // 消除多选框错误提示信息
    $("input[type='checkbox']").change(function () {
        if($(this).is(":checked")){
            if($(this).parents(".form-group").next(".help-block").length>0){
                $(this).parents(".form-group").next(".help-block").remove();
            }
        }
    })
})