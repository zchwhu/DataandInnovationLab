/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(document).on("change","#newsAvatar",function (e) {
    imgPreview($(".news-avatar img"),e);
})

var editor = new wangEditor('newsEditor');

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