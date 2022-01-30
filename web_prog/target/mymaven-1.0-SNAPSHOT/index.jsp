<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:useBean id="components" class="com.example.mymaven.bean.BeanComponents" scope="session" />
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>1 лаба веб</title>
    <link rel="icon" href="img/ico2.ico">
    <style>
        body {
            background: #e9e6ee;
            color: #000;
            font-family: sans-serif;
            font-size: 10px;
            margin: 20px 50px 20px 50px;

        }

        .header {
            background: DarkRed;
            width: 33.33%;
            height: 60px;
            float: left;

        }

        .header h1 {
            padding-top: 6px;
            padding-left: 25px;

        }


        .container {
            vertical-align: middle;
            background: #0000;
            margin: auto auto;
            text-align: center;
            width: 100%;
            height: 500px;
        }


        .graph {

            float: right;
            width: 25%;
            overflow-y: auto;
            overflow-x: auto;
            /*height: 600px;*/
            height: 125%;
            background-color: white;
            line-height: 40px;

        }

        .table {

            float: left;
            width: 73%;
            text-align: center;
            height: 125%;
            overflow-y: auto;
            overflow-x: auto;
            border: none;
        }

        .table th {
            background-color: DarkRed
        }

        .table .coord_col {
            width: 8vw;
        }

        .table .time_col {
            width: 25vw;
        }


        .clear {
            height: 10px;
            clear: both;
        }


        .x_button {
            width: 30px;
            height: 20px;
            color: #ffffff;
            background-color: DarkRed;
            border: none;
        }

        .x_button:hover {
            background-color: #4e438a;
        }


        /*#res-table tr:nth-child(2n) {*/
        /*    font-size: medium;*/
        /*    background-color: DarkRed;*/
        /*}*/

        #res-table tr {
            font-size: medium;
            background-color: #f4f3f6;
        }


        #res-table tr:hover {
            font-size: medium;
            background-color: #4e438a;
        }

        /*#res-table tr:nth-child(2n-1) {*/
        /*    font-size: medium;*/
        /*    background-color: white;*/
        /*}*/

        /*#res-table tr:nth-child(2n):hover {*/
        /*    font-size: medium;*/
        /*    background-color: #4e438a;*/
        /*}*/

        /*#res-table tr:nth-child(2n-1):hover {*/
        /*    font-size: medium;*/
        /*    background-color: #C6C6C6;*/
        /*}*/

        #res-table th {
            font-size: medium;
        }

        .namer {
            color: white;
            background: DarkRed;
            height: 40px;
            line-height: 45px;
        }

        body form {
            margin: 0;
        }

        body h2 {
            margin: 0;
        }

        .header h2 {
            padding-top: 23px;
        }

        .button {
            height: 27px;
            width: 80px;
            color: #ffffff;
            background-color: DarkRed;
            border: none;
        }

        .button:hover {
            background-color: #4e438a;
        }

        .text-error {
            border: 1px solid #ff0000;
        }

        .error {
            color: red;
        }

        .pressed-button {
            background-color: #4e438a;
        }

        .graph-svg{
            /*position: absolute;*/
            /*left: 0;*/
            /*right: 0;*/
            /*top: 15%;*/
            /*margin: 0 auto;*/
            /*z-index: 1;*/
            /*background-color: blue;*/
            /*opacity: 0.2;*/

        }

        .graph-canvas {
            position: absolute;
            left: 0;
            right: 0;
            top: 13%;
            margin: 0 auto;
            /*background-color: red;*/
            /*opacity: 0.2;*/
            z-index: 2;


        }

        .canvas_and_graph {
            position: relative;
            /*text-align: center;*/
            min-height: 220px;


        }

    </style>
</head>

<body>
<div class="container">

    <div class="header">
        <h1 align="left" style="color: white;"> котет Ахмед </h1>
    </div>

    <div class="header" ; style="">
        <h2 style="color: white;"> Группа: P3211</h2>
    </div>

    <div class="header">
        <h2 align="right" style="color: white; padding-right: 20px">Лаб №2 Вариант №12031</h2>
    </div>

    <div class="clear">
    </div>




    <div class="table" style="background: white">
        <h2 class="namer">Таблица</h2>
        <table id="res-table">
            <tr>
                <th class="coord_col">X</th>
                <th class="coord_col">Y</th>
                <th class="coord_col">R</th>
                <th class="time_col">Текущее время</th>
                <th class="time_col">Время выполнения</th>
                <th class="time_col">Результат</th>
            </tr>
            <c:forEach var="bean" items="${components.list}">
                <tr>
                    <td>${bean.xValue}</td>
                    <td>${bean.yValue}</td>
                    <td>${bean.rValue}</td>
                    <td>${bean.currentTime}</td>
                    <td>${bean.executionTime}</td>
                    <td>${bean.hit}</td>
                </tr>
            </c:forEach>
        </table>
    </div>

    <form class="graph">

        <div class="canvas_and_graph">
            <h2 class="namer" style="width: 100%">График</h2>

            <object class="graph-svg" type="image/svg+xml" data="img/graphsvg.svg" style="padding-top: 30px">
                <img style="background: white" src="img/graph.png" ; width=100%>
            </object>
            <canvas class="graph-canvas" width="220" height="250">Интерактивная область графика</canvas>

        </div>


        <form style="line-height: 40px" method="get" action="/mymaven">
            <h2 class="namer" style="margin-top: 7px">Ввод данных</h2>
            <span><b>X:</b></span>
            <input type="button" class="x_button" id="x_button_1" value="-5">
            <input type="button" class="x_button" id="x_button_2" value="-4">
            <input type="button" class="x_button" id="x_button_3" value="-3">
            <input type="button" class="x_button" id="x_button_4" value="-2">
            <input type="button" class="x_button" id="x_button_5" value="-1">
            <input type="button" class="x_button" id="x_button_6" value="0">
            <input type="button" class="x_button" id="x_button_7" value="1">
            <input type="button" class="x_button" id="x_button_8" value="2">
            <input type="button" class="x_button" id="x_button_9" value="3">
            <%--            <span class="xrad"><input name="xval" type="radio" value="-3" id="x_radio_1">-3</span>--%>
            <br>
            <span><b>Y:</b></span>
            <span class="ytext">
                <input type="text" id="yval" name="yval" autocomplete="off" maxlength="12"
                       placeholder="Введите число от -5 до 3..."
                       style="width: 300px;" value="${yval}">
            </span>
            <br>
            <span><b>R:</b></span>
            <input type="text" id="rval" name="rval" autocomplete="off" maxlength="12"
                   placeholder="Введите число от 1 до 4..."
                   style="width: 300px;">
            <br>
            <%--            <button class="button" type="submit" id="submit_button">Отправить</button>--%>
            <%--            <button class="button" type="submit" id="reset_button">Очистить</button>--%>
            <input class="button" type="submit" id="submit_button" value="Отправить">
            <input class="button" type="submit" id="reset_button" value="Очистить">

            <input class="button" type="hidden"  id="update_button" value="${update_button}">

            <input class="hidden_x" type="hidden" name="xval" value="">
            <input class="hidden_clear" type="hidden" name="clear" value="">
            <input class="hidden_time" type="hidden" name="time" value="">
        </form>
    </form>


</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="js/script2.js" type="text/javascript"></script>
</body>
</html>