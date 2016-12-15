/**
 * Created by Administrator on 2016/12/15 0015.
 */
$(function () {
    $(document).on("click",".pub-add-btn",function () {
        $(".pub-add-modal").modal();
    }).on("click",".pub-edit-btn",function () {
        $(".pub-edit-modal").modal();
    }).on("click",".pub-del-btn",function () {
        if(confirm("Are you sure that you want to delete this publication?")){
            $(this).parents(".pub-item").remove();
        }
    })

    $('.pub-add-modal').on('hidden.bs.modal', function (e) {
        $(this).find(":input").val('');
    })

    $('.pub-edit-modal').on('hidden.bs.modal', function (e) {
        $(this).find(":input").val('');
    })
})