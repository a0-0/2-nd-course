var x = undefined;
var y = undefined;
var r = undefined;
var xValidList = [-5, -4, -3, -2, -1, 0, 1, 2, 3];
var YMIN = -3;
var YMAX = 5;

let testx;

$(function () {



    let isLoad = 1;

    if (isLoad == 1){
        // $.ajax({
        //     url: 'php/script2.php',
        //     type: 'POST',
        //     dataType: 'html',
        //     data: {
        //         'isLoad': 1,
        //     }, success: function (data) {
        //         isLoad = 0;
        //         document.getElementById("res-table").innerHTML =
        //             document.getElementById("res-table").innerHTML + data;
        //     }
        // })
    }

    //************************************************************
    // CANVAS  CANVAS  CANVAS  CANVAS  CANVAS  CANVAS  CANVAS  CANVAS  CANVAS

    let canvas = $('.graph-canvas');
    let clearCanvasField = canvas;

    canvas.on('click', function (e){
        var x_click = e.offsetX;
        var y_click = e.offsetY;
        if (!validateR(getR())) return;
        console.info("coordinates: " + x_click + " " + y_click);

        x = (x_click - 110) / 68 * getR();
        x = getValidXByValue(x);
        pressXButtonByValue(x);
        y = (-y_click + 140) / 66 * getR();
        y = getValidYByValue(y);
        fillYFieldByValue(y);




        x_click = x / getR() * 68 + 110;
        y_click = -(y / getR() * 66 - 140);
        drawPoint(x_click, y_click);
    });

    function drawPoint(x_draw, y_draw) {


        if (!validateR(getR())) return;
        console.info("drawing: " + x_draw+ " " + y_draw + " " + getR());
        clearCanvas();
        // if (x > canvas.width() || x < -canvas.width() || y > canvas.height() || y < -canvas.height()) return;

        let ctxAxes = canvas[0].getContext('2d');
        ctxAxes.beginPath();
        ctxAxes.setLineDash([]);
        ctxAxes.stroke();
        ctxAxes.fillStyle = 'blue';
        ctxAxes.arc(x_draw, y_draw, 3, 0, 2 * Math.PI);
        ctxAxes.fill();


        // pressXButtonByValue();
    }

    function clearCanvas(){
         canvas[0].getContext('2d').clearRect(0, 0, canvas.width(), canvas.height());
    }

    function resetCanvasRValues(){
        let svg = document.querySelector(".graph-svg").getSVGDocument();
        svg.querySelector('.minus_R_X').textContent = "R";
        svg.querySelector('.minus_half_R_X').textContent = "-R/2";
        svg.querySelector('.half_R_X').textContent = "R/2";
        svg.querySelector('.R_X').textContent = "R";
        svg.querySelector('.minus_R_Y').textContent = "-R";
        svg.querySelector('.minus_half_R_Y').textContent = "-R/2";
        svg.querySelector('.half_R_Y').textContent = "R/2";
        svg.querySelector('.R_Y').textContent = "R";
    }

    //************************************************************

    $('#reset_button').on('click', function (e) {
        $('#rval').removeClass("text-error");
        $('#yval').removeClass("text-error")
        // $('.r_button').removeClass("error")
        $('#x_button_1').removeClass('pressed-button')
        $('#x_button_2').removeClass('pressed-button')
        $('#x_button_3').removeClass('pressed-button')
        $('#x_button_4').removeClass('pressed-button')
        $('#x_button_5').removeClass('pressed-button')
        $('#x_button_6').removeClass('pressed-button')
        $('#x_button_7').removeClass('pressed-button')
        $('#x_button_8').removeClass('pressed-button')
        $('#x_button_9').removeClass('pressed-button')
        x = undefined;
        y = undefined;
        r = undefined;

        $('.hidden_clear').val('true');
    });

    $('#goback_button').on('click', function (e){
        // $('.hidden_goback').val('true')
    })



    // if ($('#update_button').val() === "true") {
    //     url = new URL(document.location);
    //     const searchParams = url.searchParams;
    //     searchParams.delete("yval");
    //     searchParams.delete("rval");
    //     searchParams.delete("xval");
    //     searchParams.delete("clear");
    //     searchParams.delete("time");
    //
    //     window.history.pushState({}, '', url.toString());
    //     $('#update_button').val("false")
    // }


    $('#submit_button').on('click', function (e) {

        isValidX = validateX(getX());
        isValidY = validateY(getY());
        isValidR = validateR(getR());
        let url;
        if (isValidX && isValidY && isValidR) {

            $('.hidden_x').val(getX());

            $('.hidden_time').val(new Date().getTimezoneOffset());
        } else {
            e.preventDefault();
        }
    })

    $('#x_button_1').click(function () {
        x = -5;
        x_click = x / getR() * 68 + 110;
        y_click = -(y / getR() * 66 - 140);
        drawPoint(x_click, y_click);
        $('#x_button_1').addClass('pressed-button')
        $('#x_button_2').removeClass('pressed-button')
        $('#x_button_3').removeClass('pressed-button')
        $('#x_button_4').removeClass('pressed-button')
        $('#x_button_5').removeClass('pressed-button')
        $('#x_button_6').removeClass('pressed-button')
        $('#x_button_7').removeClass('pressed-button')
        $('#x_button_8').removeClass('pressed-button')
        $('#x_button_9').removeClass('pressed-button')

    })


    $('#x_button_2').click(function () {
        x = -4;
        x_click = x / getR() * 68 + 110;
        y_click = -(y / getR() * 66 - 140);
        drawPoint(x_click, y_click);
        $('#x_button_2').addClass('pressed-button')
        $('#x_button_1').removeClass('pressed-button')
        $('#x_button_3').removeClass('pressed-button')
        $('#x_button_4').removeClass('pressed-button')
        $('#x_button_5').removeClass('pressed-button')
        $('#x_button_6').removeClass('pressed-button')
        $('#x_button_7').removeClass('pressed-button')
        $('#x_button_8').removeClass('pressed-button')
        $('#x_button_9').removeClass('pressed-button')
    })

    $('#x_button_3').click(function () {
        x = -3;
        x_click = x / getR() * 68 + 110;
        y_click = -(y / getR() * 66 - 140);
        drawPoint(x_click, y_click);
        $('#x_button_3').addClass('pressed-button')
        $('#x_button_2').removeClass('pressed-button')
        $('#x_button_1').removeClass('pressed-button')
        $('#x_button_4').removeClass('pressed-button')
        $('#x_button_5').removeClass('pressed-button')
        $('#x_button_6').removeClass('pressed-button')
        $('#x_button_7').removeClass('pressed-button')
        $('#x_button_8').removeClass('pressed-button')
        $('#x_button_9').removeClass('pressed-button')
    })

    $('#x_button_4').click(function () {
        x = -2;
        x_click = x / getR() * 68 + 110;
        y_click = -(y / getR() * 66 - 140);
        drawPoint(x_click, y_click);
        $('#x_button_4').addClass('pressed-button')
        $('#x_button_2').removeClass('pressed-button')
        $('#x_button_3').removeClass('pressed-button')
        $('#x_button_1').removeClass('pressed-button')
        $('#x_button_5').removeClass('pressed-button')
        $('#x_button_6').removeClass('pressed-button')
        $('#x_button_7').removeClass('pressed-button')
        $('#x_button_8').removeClass('pressed-button')
        $('#x_button_9').removeClass('pressed-button')
    })

    $('#x_button_5').click(function () {
        x = -1;
        x_click = x / getR() * 68 + 110;
        y_click = -(y / getR() * 66 - 140);
        drawPoint(x_click, y_click);
        $('#x_button_5').addClass('pressed-button')
        $('#x_button_2').removeClass('pressed-button')
        $('#x_button_3').removeClass('pressed-button')
        $('#x_button_4').removeClass('pressed-button')
        $('#x_button_1').removeClass('pressed-button')
        $('#x_button_6').removeClass('pressed-button')
        $('#x_button_7').removeClass('pressed-button')
        $('#x_button_8').removeClass('pressed-button')
        $('#x_button_9').removeClass('pressed-button')
    })

    $('#x_button_6').click(function () {
        x = 0;
        x_click = x / getR() * 68 + 110;
        y_click = -(y / getR() * 66 - 140);
        drawPoint(x_click, y_click);
        $('#x_button_6').addClass('pressed-button')
        $('#x_button_2').removeClass('pressed-button')
        $('#x_button_3').removeClass('pressed-button')
        $('#x_button_4').removeClass('pressed-button')
        $('#x_button_1').removeClass('pressed-button')
        $('#x_button_5').removeClass('pressed-button')
        $('#x_button_7').removeClass('pressed-button')
        $('#x_button_8').removeClass('pressed-button')
        $('#x_button_9').removeClass('pressed-button')
    })

    $('#x_button_7').click(function () {
        x = 1;
        x_click = x / getR() * 68 + 110;
        y_click = -(y / getR() * 66 - 140);
        drawPoint(x_click, y_click);
        $('#x_button_7').addClass('pressed-button')
        $('#x_button_2').removeClass('pressed-button')
        $('#x_button_3').removeClass('pressed-button')
        $('#x_button_4').removeClass('pressed-button')
        $('#x_button_1').removeClass('pressed-button')
        $('#x_button_6').removeClass('pressed-button')
        $('#x_button_5').removeClass('pressed-button')
        $('#x_button_8').removeClass('pressed-button')
        $('#x_button_9').removeClass('pressed-button')
    })

    $('#x_button_8').click(function () {
        x = 2;
        x_click = x / getR() * 68 + 110;
        y_click = -(y / getR() * 66 - 140);
        drawPoint(x_click, y_click);
        $('#x_button_8').addClass('pressed-button')
        $('#x_button_2').removeClass('pressed-button')
        $('#x_button_3').removeClass('pressed-button')
        $('#x_button_4').removeClass('pressed-button')
        $('#x_button_1').removeClass('pressed-button')
        $('#x_button_6').removeClass('pressed-button')
        $('#x_button_7').removeClass('pressed-button')
        $('#x_button_5').removeClass('pressed-button')
        $('#x_button_9').removeClass('pressed-button')
    })

    $('#x_button_9').click(function () {
        x = 3;
        x_click = x / getR() * 68 + 110;
        y_click = -(y / getR() * 66 - 140);
        drawPoint(x_click, y_click);
        $('#x_button_9').addClass('pressed-button')
        $('#x_button_2').removeClass('pressed-button')
        $('#x_button_3').removeClass('pressed-button')
        $('#x_button_4').removeClass('pressed-button')
        $('#x_button_1').removeClass('pressed-button')
        $('#x_button_6').removeClass('pressed-button')
        $('#x_button_7').removeClass('pressed-button')
        $('#x_button_8').removeClass('pressed-button')
        $('#x_button_5').removeClass('pressed-button')
    })


    function validateX(x){
        var ans = true;
        if (!x in [-5, -4, -3, -2, -1, 0, 1, 2 , 3] || isNaN(parseInt(x))){
            $('.x_button').addClass("error")
            ans = false;
        } else {
            $('.x_button').removeClass("error");
        }
        return ans;
    }

    function validateY(y){
        var ans = true;
        if (y <= -3 || y >= 5 || isNaN(parseInt(y))) {

            $('#yval').addClass("text-error")
            ans = false;
        } else {
            $('#yval').removeClass("text-error")
        }
        return ans;
    }

    function validateR(r){
        var ans = true;
        if (r < 2 || r > 4 || isNaN(parseInt(r))) {
            $('#rval').addClass("text-error");
            ans = false;
        } else {
            $('#rval').removeClass("text-error")
        }
        return ans;
    }

    function getX(){
        return x
    }

    function getY(){
        y = document.getElementById("yval").value;
        return y;
    }

    function getR(){
        return document.getElementById("rval").value;
    }

    $('#rval').on('input', function (e){
        old_r = r;
        r = $('#rval').val();
        if (!validateR(r)) {
            clearCanvas();
            resetCanvasRValues();
            return;
        }
        let svg = document.querySelector(".graph-svg").getSVGDocument();
        svg.querySelector('.minus_R_X').textContent = (-r).toString();
        svg.querySelector('.minus_half_R_X').textContent = (-r/2).toString();
        svg.querySelector('.half_R_X').textContent = (r/2).toString();
        svg.querySelector('.R_X').textContent = (r).toString();
        svg.querySelector('.minus_R_Y').textContent = (-r).toString();
        svg.querySelector('.minus_half_R_Y').textContent = (-r/2).toString();
        svg.querySelector('.half_R_Y').textContent = (r/2).toString();
        svg.querySelector('.R_Y').textContent = (r).toString();


        x_click = x / r * 68 + 110;
        y_click = -(y / r * 66 - 140);
        drawPoint(x_click, y_click);

    });

    $('#yval').on('input', function (e){
        y_new = $('#yval').val();
        if (!validateY(y_new)) return;
        y = y_new;
        x_click = x / r * 68 + 110;
        y_click = -(y / r * 66 - 140);
        drawPoint(x_click, y_click);
    })

    function getValidXByValue(x){
        let min = Infinity;
        let result;
        for (let i = 0; i < xValidList.length; i++){
            if (Math.abs(x - xValidList[i]) < min){
                min = Math.abs(x - xValidList[i]);
                result = xValidList[i];
            }
        }
        return result;
    }

    function getValidYByValue(y){
        if (y > YMAX) return YMAX - 0.0000000001;
        if (y < YMIN) return YMIN + 0.0000000001;
        return y;
    }

    function pressXButtonByValue(x){
        switch (x){
            case -5:
                $('#x_button_1').click();
                break;
            case -4:
                $('#x_button_2').click();
                break;
            case -3:
                $('#x_button_3').click();
                break;
            case -2:
                $('#x_button_4').click();
                break;
            case -1:
                $('#x_button_5').click();
                break;
            case 0:
                $('#x_button_6').click();
                break;
            case 1:
                $('#x_button_7').click();
                break;
            case 2:
                $('#x_button_8').click();
                break;
            case 3:
                $('#x_button_9').click();
                break;
        }
    }

    function fillYFieldByValue(y){
        document.getElementById("yval").value = y;
    }

    function fillRFieldByValue(r){
        document.getElementById("rval").value = r;
    }



});
