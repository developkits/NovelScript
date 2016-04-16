/**
 * Created by Ian on 2016/2/27.
 */

ns.ui.frame = function () {
    var width = ns.$frame.width();
    var height = ns.$frame.height();
    // mainstage
    var stage = {};

    stage.$main = $("<div></div>")
        .css(ns.controls.theme.mainstageStyle);

    stage.$bg = $("<div></div>")
        .css({
            width: width,
            height: height,
            transition: "all 0.5s"
        })
        .appendTo(stage.$main);

    stage.$figure = $("<div></div>").css(ns.controls.theme.figureStyle)
        .appendTo(stage.$main);

    stage.$content = $("<div></div>")
        .css(ns.controls.theme.contentStyle)
        .appendTo(stage.$main);

    stage.$dialogue = $("<div></div>")
        .css(ns.controls.theme.dialogueStyle)
        .appendTo(stage.$content);

    stage.$speaker = $("<h2></h2>")
        .css(ns.controls.theme.speakerStyle)
        .html("武也")
        .appendTo(stage.$content);

    stage.$dial = $("<p></p>")
        .css(ns.controls.theme.dialStyle)
        .html("那样就更差劲了吧，<br>一辈子都不要忘了自己惹哭过的少女的模样啊！")
        .appendTo(stage.$content);

    return stage
};

ns.stage = {};