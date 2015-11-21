<!--
Hatena Blog Tab Cloud
http://blog.shibayan.jp/entry/20131229/1388266486
-->

<script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.10.2.min.js"></script>
<script>
    !function ($) {
        var range = 13, base = 90;
        var data = [];
        var list = $(".hatena-module-category ul li a");
        list.each(function () {
            data.push(parseInt($(this).text().match(/\((\d+)\)/)[1]));
        });
        var min = Math.min.apply(null, data), max = Math.max.apply(null, data);
        var sqrtMin = Math.sqrt(min), sqrtMax = Math.sqrt(max);
        var factor = range / (sqrtMax - sqrtMin);
        list.each(function (i) {
            var count = data[i];
            var level = parseInt((Math.sqrt(count) - sqrtMin) * factor) * 10 + base;

            var elem = $(this);
            var text = $.trim(elem.text());

            elem.css("font-size", level + "%");

            elem.text($.trim(text.replace(/\([^\(\s +]+\)/, '')));
            elem.prop("title", text);
        });
    }(jQuery);
</script>