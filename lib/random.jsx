export const randomInteger = (pMin, pMax) => {
    pMin = Math.round(pMin);
    pMax = Math.round(pMax);
    if (pMax < pMin) {
        let t = pMin;
        pMin = pMax;
        pMax = t;
    }
    return Math.floor(Math.random() * (pMax+1 - pMin) + pMin);
}