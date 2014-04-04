
(function ($) {

    
    $.ganntTable = function(id, data){
        $('#' + id).each(function(i){
            // 外枠
            var tbl = $('<div class="gannt_table"></div');
            // 左側ペイン
            var left_div = $('<div class="gt_left_div"></div>');
            // 右側ペイン
            var right_div = $('<div class="gt_right_div"></div>');
            
            var left_top = $('<div class="gt_left_top_div"></div>');
            var left_top1 = $('<div class="gt_left_top1_div"></div>');
            var left_top2 = $('<div class="gt_left_top2_div"></div>');
            
            var category1 = $('<div class="gt_category1_div"></div>');
            var category2 = $('<div class="gt_category2_div"></div>');

            var right_top = $('<div class="gt_right_top_div"></div>');
            var right_top1 = $('<div class="gt_right_top1_div"></div>');
            var right_top2 = $('<div class="gt_right_top2_div"></div>');
            var right_top3 = $('<div class="gt_right_top3_div"></div>');

            $(this).append(tbl);
            
            $(tbl).append(left_div);
            $(left_div).append(left_top);
            $(left_top).append(left_top1);
            $(left_top).append(left_top2);
            $(left_top2).append(category1);
            $(left_top2).append(category2);

            $(tbl).append(right_div);
            $(right_div).append(right_top);
            $(right_top).append(right_top1);
            $(right_top).append(right_top2);
            $(right_top).append(right_top3);

            createRows(data,left_div,right_div);
        });
    };
    // 
    // 
    function createRows(data,left_div,right_div) {
        if (data != null) {
            var rows = data.length;
            for(var i = 0;i < rows;i++) {
                var left_row = $("<div class='gt_left_row_div'></div>");
                $(left_div).append(left_row);
                $(left_row).append("<div class='gt_category1_div'>" + data[i].name + "</div>");
                $(left_row).append("<div class='gt_category2_div'><span style='position:relative;top:-24px;'>" + data[i].desc + "</span></div>");
                var right_row = $("<div class='gt_right_row_div'>" +  data[i].values[0].label +"</div>");
                $(right_div).append(right_row);
            }
        }

    };
})(jQuery);
