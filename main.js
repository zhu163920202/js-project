var board = new Array()
$(function(){
    newgame();
});
function newgame() {
    // 初始化棋盘格
    init();
    // 随机两个格子生成数字
    generateOneNumber();
    generateOneNumber();
}
function init(){
    for (var i=0;i<4;i++) {
        //定义一个二维数组
        board[i] = new Array();
        for(var j=0;j<4;j++){
            //初始化小格子值为0
            board[i][j] = 0;
            var gridCell = $("#grid-cell-"+i+"-"+j);
            gridCell.css("top",getPosTop(i,j));
            gridCell.css("left",getPosLeft(i,j));
        };
    };
}
function updataBoardView(){
    $(".grid-cell").remove();
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){

        }
    }
}
