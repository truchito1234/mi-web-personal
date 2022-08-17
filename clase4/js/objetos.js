let chisato = {
    nombre: "Chisato",
    apellido: "Moritaka",
    tema: "森高千里　/　テリヤキバーガー［1990］",
    urlVideo: "https://www.youtube.com/embed/AXlRkZvqMV4"
}

let chisato2 = {
    nombre: "Chisato",
    apellido: "Moritaka",
    tema: "森高千里 「鬼たいじ」古今東西 ～鬼が出るか蛇が出るかツアー～",
    urlVideo: "https://www.youtube.com/embed/xX8hi29tlUM"
}



let chisato3 = {
    nombre: "Chisato Moritaka ",
    apellido: "& Princess Princess",
    tema: "【献唱两曲】森高千里 プリンセス・プリンセス - ペパーランド",
    urlVideo: "//player.bilibili.com/player.html?aid=929124527&bvid=BV1KK4y1Q7FG&cid=295396341&page=1"
}



let yoko = {
    nombre: "Yoko",
    apellido: "Oginome",
    tema: "You're my life",
    urlVideo: "//www.youtube.com/embed/QSzhe9HvMII"
}

let yoko2 = {
    nombre: "Yoko",
    apellido: "Oginome",
    tema: "荻野目洋子 ユア・マイ・ライフ YOU'RE MY LIFE ➅",
    urlVideo: "https://www.youtube.com/embed/nyUW58hnQtA"
}

let yoko3 = {
    nombre: "Yoko",
    apellido: "Oginome",
    tema: "荻野目洋子 ユア・マイ・ライフ YOU'RE MY LIFE ㉒",
    urlVideo: "https://www.youtube.com/embed/D9tNqoyQv3Y"
}

let yoko4 = {
    nombre: "Yoko",
    apellido: "Oginome",
    tema: "荻野目洋子 ユア・マイ・ライフ YOU'RE MY LIFE ㉒",
    urlVideo: "https://www.youtube.com/embed/R_MRr9JCFiI"
}

let yoko5 = {
    nombre: "Yoko",
    apellido: "Oginome",
    tema: "荻野目洋子 / ダンシング・ヒーロー（Eat You Up） (Official Music Video)",
    urlVideo: "https://www.youtube.com/embed/gWFX_JqYYt8"
}


let zard = {
    nombre: "Izumi Zakai Ann Lewis",
    apellido: "Nanase Aikawa",
    tema: "六本木心中 / ZARD 坂井泉水 相川七瀬 アン・ルイス",
    urlVideo: "https://www.youtube.com/embed/SPKGc06M0EU"
}

let ann = {
    nombre: "Ann",
    apellido: "Lewis",
    tema: "【PV】六本木心中　アンルイス",
    urlVideo: "https://www.youtube.com/embed/R_tccXTl8wo"
}


let zard2 = {
    nombre: "zard",
    apellido: "",
    tema: "Mou Sagasanai もう探さない subtitulado en español",
    urlVideo: "https://www.youtube.com/embed/n19qimvZhPs"
}






function escribirCodigo(codigo) {
    document.write(codigo);
}

function mostrarIdols() {

    let codigoATexto = "";
    for (var i = 0; i < idols.length; i++) {
        codigoATexto += '<div class="card__copada"><iframe id="iframe1" width="360" height="245" src="' + idols[i].urlVideo + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><h3></iframe><h3>' + idols[i].tema + '</h3><h4>' + idols[i].nombre + " " + idols[i].apellido + '</h4></div>';
    }

    document.getElementById('container__videos').innerHTML = codigoATexto;
}

let idols = [];

idols.push(yoko);
idols.push(yoko2);
idols.push(yoko3);
idols.push(yoko4);
idols.push(yoko5);

idols.push(chisato);
idols.push(chisato2);
idols.push(chisato3);

idols.push(zard);
idols.push(ann);
idols.push(zard2);


mostrarIdols();