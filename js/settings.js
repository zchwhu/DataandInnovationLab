/**
 * Created by Administrator on 2016/12/13 0013.
 */
$(function () {
    $(document).on("click",".tag-remove",function () {
        if(confirm("Are you sure you want to delete this tag？")){
            var $ele = $(this);
            $ele.parent(".tag").fadeOut(500,function () {
                $ele.parent(".tag").remove();
            })
        }
    })
})