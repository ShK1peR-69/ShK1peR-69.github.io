const TIME = 500;
let match_1 = $("#item-1");
let match_2 = $("#item-2");
let match_3 = $("#item-3");
let match_4 = $("#item-4");
let match_5 = $("#item-5");

$(document).on("wheel", function fun(e) {
    let elem2_id = parseInt(match_2.find("button").attr("id"));
    let elem4_id = parseInt(match_4.find("button").attr("id"));
    let index;

    /* Скролл вниз */
    if (e.originalEvent.deltaY > 0) {
        console.log(e.originalEvent.deltaY);
        index = arr.indexOf(findElemIndex(elem2_id));
        /* Скролл вверх */
    } else {
        index = arr.indexOf(findElemIndex(elem4_id));
    }
    if (arr[index] !== undefined) {
        setInfoToSmallTopHexagon(index);
        setInfoToMediumTopHexagon(index);
        setInfoToMainHexagon(index);
        setInfoToMediumBottomHexagon(index);
        setInfoToSmallBottomHexagon(index);
    } else {
        return false;
    }
});

function setInfoToMainHexagon(idx) {
    match_3.hide(TIME);
    setTimeout(function () {
        changeOpponents(arr[idx]);
        match_3.empty().append("<span id='match-stadium' class='" + info_span_class + "'>" +
            arr[idx].stadium + "</span>" +
            "<span id='match-date' class='" + main_match_date_class + "'>" + arr[idx].match_date + "</span>" +
            "<span id='match-time' class='" + info_span_class + "'>" + arr[idx].time + "</span>" +
            "<button class='" + main_match_btn_class + "' data-match-num='" + 3 + "'>" + btn_txt + "</button>");
    }, TIME);
    match_3.show(TIME);
}

/* Проверка и заполнение главного гексагона */
function setInfoToSmallTopHexagon(idx) {
    if (arr[idx + 2] !== undefined) {
        match_5.hide(TIME);
        setTimeout(function () {
            match_5.empty().append("<span>" + arr[idx + 2].match_date + "</span>");
            match_5.append("<button class='" + medium_btn_class + "' " +
                "onclick='getMatch(this)' " +
                "id='" + arr[idx + 2].id + "' data-match-num='" + 5 + "'></button>");
        }, TIME);
        hex_5.show(TIME);
        match_5.show(TIME);
        return false;
    } else {
        match_5.empty();
        hex_5.hide(TIME);
        return false;
    }
}

/* Проверка и заполнение второго верхнего (среднего) гексагона */
function setInfoToMediumTopHexagon(idx) {
    if (arr[idx + 1] !== undefined) {
        match_4.hide(TIME);
        setTimeout(function () {
            match_4.empty().append("<span>" + arr[idx + 1].match_date + "</span>");
            match_4.append("<button class='" + medium_btn_class + "' " +
                "onclick='getMatch(this)' " +
                "id='" + arr[idx + 1].id + "' data-match-num='" + 4 + "'></button>");
        }, TIME);
        hex_4.show(TIME);
        match_4.show(TIME);
        return false;
    } else {
        match_4.empty();
        hex_4.hide(TIME);
        return false;
    }
}

/* Проверка и заполнение второго нижнего (среднего) гексагона */
function setInfoToMediumBottomHexagon(idx) {
    if (arr[idx - 1] !== undefined) {
        match_2.hide(TIME);
        setTimeout(function () {
            match_2.empty().append("<span>" + arr[idx - 1].match_date + "</span>");
            match_2.append("<button class='" + medium_btn_class + "' " +
                "onclick='getMatch(this)' " +
                "id='" + arr[idx - 1].id + "' data-match-num='" + 2 + "'></button>");
        }, TIME);
        hex_2.show(TIME);
        match_2.show(TIME);
        return false;
    } else {
        match_2.empty();
        hex_2.hide(TIME);
        return false;
    }
}

/* Проверка и заполнение первого нижнего гексагона */
function setInfoToSmallBottomHexagon(idx) {
    if (arr[idx - 2] !== undefined) {
        match_1.hide(TIME);
        setTimeout(function () {
            match_1.empty().append("<span>" + arr[idx - 2].match_date + "</span>");
            match_1.append("<button class='" + medium_btn_class + "' " +
                "onclick='getMatch(this)' " +
                "id='" + arr[idx - 2].id + "' data-match-num='" + 1 + "'></button>");
        }, TIME);
        hex_1.show(TIME);
        match_1.show(TIME);
        return false;
    } else {
        match_1.empty();
        hex_1.hide(TIME);
    }
}

/* Изменение информации о соперниках (боковые блоки) */
function changeOpponents(match) {
    let home = $("#home-opp");
    let guest = $("#guest-opp");
    home.hide(TIME);
    guest.hide(TIME);
    setTimeout(function () {
        $("#home-opp").text(match.first_opp);
        $("#guest-opp").text(match.second_opp);
    }, TIME);
    home.show(TIME);
    guest.show(TIME);
}