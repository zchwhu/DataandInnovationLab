/**
 * Created by Administrator on 2016/12/11 0011.
 */
var imgPreview = function(target,event) {
    var files = event.target.files,
        reader = new FileReader();
    if(/image/.test(files[0].type)){
        reader.readAsDataURL(files[0]);
    }
    reader.onload = function () {
        target.attr("src",reader.result);
    }
}