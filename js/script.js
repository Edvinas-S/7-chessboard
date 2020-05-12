"use strict";

function renderChessboard (size) {
    const DOMchessboard = document.querySelector(`.chessboard`);
// validacija
    if ( !isFinite(size) ) {
        return console.error('KLAIDA: reikalingas normalus skaicius.');
    }
    if ( size <= 0 ) {
        return console.error('KLAIDA: reikalingas teigiamas skaicius.');
    }
    if ( size % 1 !== 0 ) {
        return console.error('KLAIDA: reikalingas sveikas skaicius (be kablelio).');
    }
// logika
    let HTML = ``;
    let color = ``;

    for (let r=1; r<=size; r++) {

        for (let c=1; c<=size; c++) {
            if ((r+c) % 2 === 0) {
                color = `white`;
            } else {
                color = `black`;
            }
            HTML += `<div class="cell ${color}" style="width: ${100/size}%; height: ${100/size}%"></div>`;
        }
    }
    DOMchessboard.innerHTML = HTML;
return
}

renderChessboard(8);