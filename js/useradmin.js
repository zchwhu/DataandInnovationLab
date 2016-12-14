/**
 * Created by Administrator on 2016/12/13 0013.
 */
$(function () {
    $(document).on("click",".user-add-btn",function () {
        $(".user-add-modal").modal();
    }).on("mouseover",".admin-tooltip",function () {
        $(this).tooltip("show");
    }).on("click",".user-bind-btn",function () {
        $(".user-bind-modal").modal();
    }).on("click",".user-del-btn",function () {
        if(confirm("Are you sure you want to delete the user?")){
            $(this).parents("tr").remove();
        }
    }).on("click",".user-edit-btn",function () {
        var $username = $(this).parents("td").siblings("td:first-child").text();
        $(".user-edit-modal").find("input[name='username']").val($username);
        $(".user-edit-modal").modal();
    });

    $('.user-add-modal').on('hidden.bs.modal', function (e) {
        $(this).find(":input").val('');
    })

    $('.user-edit-modal').on('hidden.bs.modal', function (e) {
        $(this).find(":input").val('');
    })

    $('.user-bind-modal').on('hidden.bs.modal', function (e) {
        $(this).find("input[type='radio']").prop("checked",false);
    })
})