/**
 * Created by Administrator on 2016/12/14 0014.
 */
$(function () {
    $(document).on("change","#uploadImg",function (e) {
        imgPreview($("#carouselPreview img"),e);
    })
})