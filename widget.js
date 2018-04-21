DashboardManager.registerScripts(function (widget) {

    var data = [
        {
            day: 'Mon',
            date: '16',
            meetings: [
                {
                    description: 'Induction (LBH)',
                    time: '09:00 – 14:00'
                },
                {
                    description: 'Collect laptop / tech run through (LBH)',
                    time: '15:00 – 16:00'
                }
            ]
        },
        {
            day: 'Tue',
            date: '17',
            meetings: [
                {
                    description: 'Portfolio overview (CAN)',
                    time: '09:00 – 13:00'
                },
                {
                    description: 'SelectHR demo (CAN)',
                    time: '14:00 – 15:00'
                },
                {
                    description: 'SelectPay demo (CAN)',
                    time: '15:00 – 16:00'
                },
                {
                    description: 'aCloud Recruit demo (CAN)',
                    time: '16:00 – 17:00'
                }
            ]
        },
        {
            day: 'Wed',
            date: '18',
            meetings: [
                {
                    description: 'Group sales landscape (LCK)',
                    time: '09:00 – 11:00'
                },
                {
                    description: 'HCM sales landscape (LCK)',
                    time: '11:00 – 13:00'
                },
                {
                    description: 'HCM finance detail 2017/2018 (LCK)',
                    time: '14:00 – 15:00'
                },
                {
                    description: 'New business (LCK)',
                    time: '15:00 – 16:00'
                },
                {
                    description: 'Account Management (LCK)',
                    time: '16:00 – 17:00'
                }
            ]
        },
        {
            day: 'Thu',
            date: '19',
            meetings: [
                {
                    description: 'Build overview (LDN)',
                    time: '09:00 – 17:00'
                }
            ]
        },
        {
            day: 'Fri',
            date: '20',
            meetings: [
                {
                    description: 'Support intro (BAS)',
                    time: '09:00 – 17:00'
                }
            ]
        }
    ];

    widget.logInfo('register calendar');

    var textarea = $(widget.element).find(".sticky-note-input");
    var sizingSwitch = $(widget.element).find(".sizing-switch");
    var widgetDiv = $(widget.outerElement);
    var stickySearchTimer = 0;
    var colorOptions = ["yellow", "atoll", "midnight-blue", "access", "lilac"];
    var color = colorOptions[0];

    var calendarBody = $(widget.element).find(".calendar-body");

    $.each(data, function(key, value){
    
        var row = createDayRow(calendarBody);
        createDateCell(row, value.day, value.date);
        var ec = createEventCell(row);
        
        $.each(value.meetings, function(key1, value2){

            createEvent(ec, value2.description, value2.time);

        })
        
    });

    function createDayRow(calendarBody){
        return createHtml(calendarBody, "tr", "");
    }
    
    function createDateCell(row, day, date){
        row.append("<td style=\"width:80px;\">");
        var cell = $('td:last', row);
        cell.append("<h2 class=\"rpCPrc\">");
        var h2 = $('h2:last', cell);
        h2.append("<div class=\"MmhHI qAeuG pCcXPe\" aria-hidden=\"true\">" + day + "</div>")
        h2.append("<div class=\"MmhHI KSxb4d RKLVef pCcXPe\" tabindex=\"0\" role=\"link\">" + date + "</div>")    
    }

    function createEventCell(row){
        return createHtml(row, "td", "style=\"padding-top: 15px;\"");    
    }

    function createEvent(eventsCell, description, time){
        var eventDiv = createHtml(eventsCell, "div", "role=\"button\" tabindex=\"0\" class=\"NlL62b EfQccc elYzab-cXXICe-Hjleke  EiZ8Dd UflSff jKgTF\" style=\"top: 431px; height: 46px; left: 0%; padding: 4px; margin-bottom: 10px; width: 100%; z-index: 4; background-color: #099; border-color: rgb(153, 219, 188);color: #fff;\"");
        var innerEventDiv = createHtml(eventDiv, "div", "aria-hidden=\"true\" class=\"lFe10c\"");
        var eventNameDiv = createHtml(innerEventDiv,"div", "class=\"Jmftzc RIOtYe cpCWFd EiZ8Dd UflSff\" style=\"max-height: 15px;\" ");
        eventNameDiv.append("<span class=\"FAxxKc\"><html-blob>" + description + "</html-blob></span>");
        innerEventDiv.append("<div class=\"Jmftzc gVNoLb  EiZ8Dd UflSff\">" + time + "</div>");
    }

    function createHtml(parentElement, elementName, sttributString){
        parentElement.append("<" + elementName + " " + sttributString + " >");
        return $(elementName + ":last", parentElement);
    }

});
