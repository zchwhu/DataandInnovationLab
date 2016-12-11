/**
 * Created by Administrator on 2016/12/11 0011.
 */
$(function () {
    $(document).on("change","#userAvatar",function (e) {
        imgPreview($(".user-avatar img"),e);
    })

    var editor = new wangEditor('userEditor');

    editor.config.menus = [
        'source',
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        'bgcolor',
        'quote',
        'fontfamily',
        'fontsize',
        'head',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        'link',
        'unlink',
        'table',
        'img',
        'undo',
        'redo',
        'fullscreen'
    ];

    editor.create();
})