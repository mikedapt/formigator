function getDPI() {
    const div = document.createElement("basediv");
    div.style.width = "1in"; // 1 inch
    div.style.height = "1in";
    div.style.position = "absolute";
    div.style.left = "-100%"; // hide off-screen
    document.body.appendChild(div);
    const dpi = div.offsetWidth; // pixels per inch
    document.body.removeChild(div);
    return dpi;
}

function getWidthInCm(element) {
    if (!(element instanceof HTMLElement)) {
        throw new Error("Invalid element provided.");
    }
    const rect = element.getBoundingClientRect();
    const dpi = getDPI();
    return (rect.width / dpi) * 2.54;
}

function getHeightInCm(element) {
    if (!(element instanceof HTMLElement)) {
        throw new Error("Invalid element provided.");
    }
    const rect = element.getBoundingClientRect();
    const dpi = getDPI();
    return (rect.height / dpi) * 2.54;
}

function getFormHeightInPxls() {
    const fheight = 27.9 *  37.795275590551;
    return fheight;
}

function getFormWidthInPxls() {
    const fwidth = 21.6 *  37.795275590551;
    return fwidth;
}

function drawYRuler() {
    const ruler = document.getElementById("ruler-y");
    ruler.style.height = getFormHeightInPxls();
    //const h = getFormHeightInPxls();
    const h = getFormHeightInPxls();

    let vsvg = `<svg width=".5cm" height="${h}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;
    var count = 0
    for(let i=0; i<=h; i+=37.795275590551) {
    const y = i;

    vsvg += `<line x1="12" y1="${y}" x2="20" y2="${y}" stroke="black" stroke-width="0.5"/>`;
    vsvg += `<text x="1" y="${y+1}" font-size="9" fill="black" transform="rotate(-90,10,${y})">${count}</text>`;

    count += 1
    }
    vsvg += '</svg>';
    ruler.innerHTML = vsvg;
}

function drawXRuler() {
    const ruler = document.getElementById("ruler-x");
    ruler.style.width = getFormWidthInPxls();
    const w = getFormWidthInPxls();

    let hsvg = `<svg height=".5cm" width="${w}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;
    var count = 0
    for(let i=0; i<=w; i+=37.795275590551) {

    if (count == 0) {
       i += 0.5 * 37.795275590551;
    }
    const x = i;

    hsvg += `<line x1="${x}" y1="12" x2="${x}" y2="20" stroke="black" stroke-width="0.5"/>`;
    hsvg += `<text x="${x+2}" y="10" font-size="9" fill="black">${count}</text>`;

    count += 1
    }
    hsvg += '</svg>';
    ruler.innerHTML = hsvg;

}

drawYRuler();
drawXRuler();

