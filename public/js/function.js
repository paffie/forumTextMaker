    function make(){
    let level = $('input[name="level"]').val();
    let name = $('input[name="name"]').val();
    let rank = $('input[name="rank"]').val();
    let content = $('textarea[name="content"]').val();
    let list = ["lv1杯茶泡龙", "lv2腌笃鲜龙", "lv3水煮龙鲈", "lv4月桂龙虾", "lv5仙祖面蜕", "lv6灶王帝君"];
    let out = level + "楼 " + name + "旅行者 " + list[rank - 1] + "\n" + content + "\r\n";
    let oldOut = $('textarea[name="output"]').val();
    $('textarea[name="output"]').val(oldOut+out);
    $('input[name="nowlevel"]').val("目前"+level+"楼");
    level++;
    $('input[name="level"]').val(level);

    console.log(out);
}
    function copy(){
    let input = $('textarea[name="output"]');
    input.select();
    document.execCommand("copy");
    alert("复制成功");
}
    function clean(){
    $('input[name="level"]').val("");
    $('input[name="name"]').val("");
    $('input[name="rank"]').val("");
    $('textarea[name="content"]').val("");
    $('textarea[name="output"]').val("");
    $('input[name="nowlevel"]').val("");
}
    function clear(){
    $('textarea[name="content"]').val("");
}
