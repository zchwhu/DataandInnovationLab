/**
 * Created by Administrator on 2016/12/11 0011.
 */
$(function () {
    $(document).on("change","#userAvatar",function (e) {
        imgPreview($(".user-avatar img"),e);
    })
})