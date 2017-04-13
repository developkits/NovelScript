/**
 * Created by yan on 2017/4/13.
 */

/**
 * ns.panel returns a $div obj on the stage, during the process of the game,
 * where informations or options are displayed
 * @param name: str, name of the panel
 * @param options: array of $ obj
 * @param tmp: boolean, true if the panel and all its children elements are generated only when it shows and killed when it closes
 */
ns.panel = function (name, options, tmp) {
    name = name || "Menu";
    options = options || [];
    // init $ obj
    var $panel = $("<div></div>")
        .click(function (event) {
            event.stopPropagation()
        });
    var theme = ns.controls.theme;
    var main = ns.stage.$main;
    $panel.css(theme.panelStyle);
    var $cross = $("<div></div>")
        .html(name)
        .append($("<span></span>")
            .html("×"))
        .css(theme.panelCrossStyle)
        .click($panel.close);
    $panel.generate = function () {
        $panel.append($cross);
        var i = 0;
        for(i; i < options.length; i++){
            $panel.append(options[i])
        }
        return $panel
    };
    $panel.open = function () {
        console.log($panel.height());
        if(!tmp){
            $panel.show();
        }else {
            $panel.generate().show()
        }
        main.click($panel.close)
    };
    $panel.close = function () {
        if(!tmp){
            $panel.hide()
        }else {
            $panel.remove()
        }
    };

    console.log($panel);

    if(!tmp){
        return $panel.generate()
    }
    return $panel
};



