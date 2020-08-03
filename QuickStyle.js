//示例代码
// <!DOCTYPE html>
// <html lang="zh-cn">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>QuickStyle 示例</title>
//     <script src="../js/quickStyle.js"></script>
// </head>
// <body class="pd_0px m_0px">
//     <div class="bg_red w_180px m_0&auto">
//         <div class="c_#0F0 h_100px lh_100px ta_center b_5px&solid#00f b-c_rgba(45,45,45,.5)">我是示例文本</div>
//     </div>
// </body>
// </html>

{
    const STYLES = new Map();
    //可扩展的对象数组，key 缩写前缀，value 对应的样式
    [
        { "a": "align" },
        { "b": "border", "b-c": "border-color", "b-r": "border-radius", "b-w": "border-width" },
        { "bg": "background", "bg-c": "background-color", "bg-i": "background-image" },
        { "c": "color" },
        { "d": "display" },
        { "f": "float" },
        { "font": "font" },
        { "m": "margin", "m-t": "margin-top", "m-b": "margin-bottom", "m-l": "margin-left", "m-r": "margin-right" },
        { "pd": "padding", "pd-t": "padding-top", "pd-b": "padding-bottom", "pd-l": "padding-left", "pd-r": "padding-right" },
        { "ps": "position" },
        { "top": "top" },
        { "bottom": "bottom" },
        { "left": "left" },
        { "right": "right" },
        { "tf": "transform" },
        { "w": "width" },
        { "h": "height" },
        { "ta": "text-align" },
        { "vta": "vertical-align" },
        { "lh": "line-height" },
    ].forEach((v) => {
        for (let k of Object.keys(v)) {
            STYLES.set(k, v[k]);
        }
    })
    window.STYLES = STYLES;
    function getAllElements() {
        let elements = [];
        let objs = document.all;
        for (let i = 0; i < objs.length; i++) {
            let obj = objs[i].tagName;
            if (obj == "html" || obj == "head" || obj == "meta" || obj == "link" || obj == "style" || obj == "script") {
                continue;
            }
            elements.push(objs[i]);
        }

        return elements;
    }
    function loadQuickStyle() {
        let elementsData = getAllElements();
        elementsData.forEach((value) => {
            var classList = value.classList;
            for (let classes of classList) {
                let tmp = classes.split("_");
                if (STYLES.has(tmp[0])) {
                    value.style[STYLES.get(tmp[0])] = tmp[1].replace("&", " ");
                }
            }
        });
    }
    window.addEventListener("load", loadQuickStyle, false);
} (window);

