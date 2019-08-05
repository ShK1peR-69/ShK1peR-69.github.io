/* Подготовка массива с данными */
let game_1 = {
    "id": 1, "stadium": "Стадион_1",
    "match_date": "30 мая", "time": "19:00",
    "first_opp": "Арсенал", "second_opp": "Ливерпуль"
};
let game_2 = {
    "id": 12, "stadium": "Стадион_2",
    "match_date": "17 июня", "time": "19:30",
    "first_opp": "Челси", "second_opp": "Ювентус"
};
let game_3 = {
    "id": 35, "stadium": "Стадион_3",
    "match_date": "26 июня", "time": "21:45",
    "first_opp": "Реал Мадрид", "second_opp": "Атлетико Мадрид"
};
let game_4 = {
    "id": 9, "stadium": "Стадион_4",
    "match_date": "16 июля", "time": "18:30",
    "first_opp": "Милан", "second_opp": "Наполи"
};
let game_5 = {
    "id": 172, "stadium": "Стадион_5",
    "match_date": "30 сентября", "time": "19:45",
    "first_opp": "ПСЖ", "second_opp": "Марсель"
};
var arr = [game_1, game_2, game_3, game_4, game_5];
const medium_btn_class = "hsg-btn medium-hsg-btn";
const small_btn_class = "hsg-btn small-hsg-btn";
const info_span_class = "small-text transform";
const main_match_date_class = "main-date transform";
const main_match_btn_class = "display-flex transform";
const btn_txt = "Купить билет";

const TIMEOUT = 700;
let hex_1 = $("#hex-1");
let hex_2 = $("#hex-2");
let hex_3 = $("#hex-3");
let hex_4 = $("#hex-4");
let hex_5 = $("#hex-5");

/* Добавление информации о матчах при загрузке страницы */
function addElems() {
    for (let i = 0; i < arr.length; i++) {
        let index = i + 1;
        let elem = $("#item-" + index);
        if (index === 3) {
            elem.append("<span id='match-stadium' class='" + info_span_class + "'>" + arr[i].stadium + "</span>" +
                "<span id='match-date' class='" + main_match_date_class + "'>" + arr[i].match_date + "</span>" +
                "<span id='match-time' class='" + info_span_class + "'>" + arr[i].time + "</span>" +
                "<button class='" + main_match_btn_class + "' data-match-num='" + 3 + "'>" + btn_txt + "</button>");
            $("#home-opp").text(arr[i].first_opp).hide().show(500);
            $("#guest-opp").text(arr[i].second_opp).hide().show(500);
        } else {
            elem.append("<span>" + arr[i].match_date + "</span>");
            if (index === 2 || index === 4) {
                elem.append("<button class='" + medium_btn_class + "' " +
                    "onclick='getMatch(this)' " +
                    "id='" + arr[i].id + "' data-match-num='" + index + "'></button>");
            } else {
                elem.append("<button class='" + small_btn_class + "' " +
                    "onclick='getMatch(this)' " +
                    "id='" + arr[i].id + "' data-match-num='" + index + "'></button>");
            }
        }
    }
}

function findElemIndex(e_id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === e_id) return arr[i];
    }
}

function getMatch(el) {
    let match_1 = $("#item-1").empty();
    let match_2 = $("#item-2").empty();
    let match_3 = $("#item-3").empty();
    let match_4 = $("#item-4").empty();
    let match_5 = $("#item-5").empty();

    let elem_id = parseInt(el.id);
    let arr_index = arr.indexOf(findElemIndex(elem_id));

    /* Заполнение данными 1-го гексагона */
    match_1.hide(TIMEOUT);
    if (arr[arr_index - 2] !== undefined) {
        setTimeout(function () {
            match_1.append("<span>" + arr[arr_index - 2].match_date + "</span>");
            match_1.append("<button class='" + small_btn_class + "' " +
                "onclick='getMatch(this)' " +
                "id='" + arr[arr_index - 2].id + "' data-match-num='" + 1 + "'></button>");
        }, TIMEOUT);
        hex_1.show(TIMEOUT);
        match_1.show(TIMEOUT);
    } else {
        hex_1.hide(TIMEOUT);
    }

    /* Заполнение данными 2-го гексагона */
    match_2.hide(TIMEOUT);
    if (arr[arr_index - 1] !== undefined) {
        setTimeout(function () {
            match_2.append("<span>" + arr[arr_index - 1].match_date + "</span>");
            match_2.append("<button class='" + medium_btn_class + "' " +
                "onclick='getMatch(this)' " +
                "id='" + arr[arr_index - 1].id + "' data-match-num='" + 2 + "'></button>");
        }, TIMEOUT);
        hex_2.show(TIMEOUT);
        match_2.show(TIMEOUT);
    } else {
        hex_2.hide(TIMEOUT);
    }

    /* Заполнение данными 3-го гексагона + кнопка "Купить билет" */
    match_3.hide(TIMEOUT);
    setTimeout(function () {
        match_3.append("<span id='match-stadium' class='" + info_span_class + "'>" + arr[arr_index].stadium + "</span>" +
            "<span id='match-date' class='" + main_match_date_class + "'>" + arr[arr_index].match_date + "</span>" +
            "<span id='match-time' class='" + info_span_class + "'>" + arr[arr_index].time + "</span>" +
            "<button class='" + main_match_btn_class + "'>" + btn_txt + "</button>");
    }, TIMEOUT);
    changeOpponents(arr[arr_index]);
    match_3.show(TIMEOUT);

    /* Заполнение данными 4-го гексагона */
    match_4.hide(TIMEOUT);
    if (arr[arr_index + 1] !== undefined) {
        setTimeout(function () {
            match_4.append("<span>" + arr[arr_index + 1].match_date + "</span>");
            match_4.append("<button class='" + medium_btn_class + "' " +
                "onclick='getMatch(this)' " +
                "id='" + arr[arr_index + 1].id + "' data-match-num='" + 4 + "'></button>");
        }, TIMEOUT);
        hex_4.show(TIMEOUT);
        match_4.show(TIMEOUT);
    } else {
        hex_4.hide(TIMEOUT);
    }

    /* Заполнение 5-го гексагона */
    match_5.hide(TIMEOUT);
    if (arr[arr_index + 2] !== undefined) {
        setTimeout(function () {
            match_5.append("<span>" + arr[arr_index + 2].match_date + "</span>");
            match_5.append("<button class='" + small_btn_class + "' " +
                "onclick='getMatch(this)' " +
                "id='" + arr[arr_index + 2].id + "' data-match-num='" + 5 + "'></button>");
        }, TIMEOUT);
        hex_5.show(TIMEOUT);
        match_5.show(TIMEOUT);
    } else {
        hex_5.hide(TIMEOUT);
    }
}

$(document).ready(function () {
    addElems();
});