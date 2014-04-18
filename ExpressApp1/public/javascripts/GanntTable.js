
//(function ($) {

    var ganntTable =  ganntTable || {};
    ganntTable.Init = function(id, schedule){
        $('#' + id).each(function(i){
            // 外枠
            var tbl = $('<div class="gannt_table"></div');
            // 左側（表示するスケジュールの名称などを表示するエリア）
            var left_div = $('<div class="gt_left_div"></div>');
            
            var left_top = $('<div class="gt_left_top_div"></div>');
            var left_top1 = $('<div class="gt_left_top1_div"></div>');
            var left_top2 = $('<div class="gt_left_top2_div"></div>');
            
            var category1 = $('<div class="gt_category1_div"></div>');
            var category2 = $('<div class="gt_category2_div"></div>');

            // 右側（スケジュールのガントチャートを表示するエリア）
            var right_div = $('<div class="gt_right_div"></div>');

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
			// 表示対象日数の取得
            var dateCount = ganntTable.createCalendar(schedule.from, schedule.to);
            ganntTable.createRows(schedule,left_div,right_div,dateCount);

            $(right_top1).append("<span>" + dateCount + "</span>");
        });
    };

    ganntTable.createCalendar = function(from, to) {
        var s = ganntTable.dateStringToDate(from);
        var e = ganntTable.dateStringToDate(to);
        var d = ganntTable.getDateCount(s, e);
        return d;
    };

    // 
    // 
    ganntTable.createRows = function(schedule,left_div,right_div,dateCount) {
        if (schedule != null) {

            var rows = schedule.data.length;
            var data = schedule.data;
            for(var i = 0;i < rows;i++) {
				// 左側
                var left_row = $("<div class='gt_left_row_div'></div>");
                $(left_div).append(left_row);
                $(left_row).append("<div class='gt_category1_div'>" + data[i].name + "</div>");
                $(left_row).append("<div class='gt_category2_div'><span style='position:relative;top:-24px;'>" + data[i].desc + "</span></div>");
				// 右側
                var right_row = $("<div class='gt_right_row_div'></div>");
                $(right_div).append(right_row);
				for(var j = 0;j < dateCount;j++) {
					var sch_button = $('<a class="gt_button">テスト</>');
					var left = j * 100;																															
					$(sch_button).css("left",left + "px");
					//$(sch_button).css("width","200px");
					$(right_row).append(sch_button);
				}
            }
        }
    };

    ganntTable.dateStringToDate = function(dateString) {
        var date = new Date(dateString);
        return date;
    };

    ganntTable.getDateCount = function(start,end) {
        var d = end.getTime() - start.getTime();
        d = Math.floor((d / (24 * 3600 * 1000)) + 1);
        return d;
    };

//})(jQuery);
