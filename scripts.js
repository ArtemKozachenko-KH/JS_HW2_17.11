function urlInfo(url) {
    let protocol, domen, path;
    do {
        let pos = url.indexOf("://");
        let pos2 = url.indexOf("/", pos + 3);
        if (pos == -1) {
            return document.write("Введенный url синтаксически некорректен!<br>Повторите операцию.");
        }
        else {
            protocol = url.slice(0, pos);
            domen = url.slice(pos + 3, pos2);
            path = url.slice(pos2);

            if (url.indexOf(" ") != -1)
                return document.write("Введенный url синтаксически некорректен!<br>Повторите операцию.");
            else if (pos2 == -1)
                return document.write("Введенный url синтаксически некорректен!<br>Повторите операцию.");
            else
                break;
        }
    } while (true);
    document.write("Данные сайта!" + "<br> протокол - " + protocol + "<br> домен - " + domen + "<br> путь - " + path);
}


function mySplit(str, raz) {
    let arr = [];
    let pos = str.indexOf(raz);
    if (pos == -1) {
        return document.write("Введенная строка не содержит", raz);
    }
    arr[0] = str.slice(0, pos);
    for (let i = 1; pos != -1; i++) {
        arr[i] = str.slice(pos + 1, str.indexOf(raz, pos + 1));
        pos = str.indexOf(raz, pos + 1);
    }
    arr[arr.length - 1] = str.slice(str.lastIndexOf(raz) + 1);
    return arr;
}

function makeTemplate(str, arg1, arg2, arg3, arg4) {
    let pos = str.indexOf("%");
    if (pos == -1) {
        return document.write("Введенная строка не содержит %");
    }
    let arr = mySplit(str,"%");
    let count=0;
    let arg = [arg1, arg2, arg3, arg4];
    for (let i = 1; i<arr.length; i++) {
        arr[i]=arg[i-1]+arr[i].slice(1);
    }
    document.write(arr);
    return arr;
}

