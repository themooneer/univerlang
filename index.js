const fifaLang = require("./mapping/byFIFA.js");
const iocLang = require("./mapping/byIOC.js");
const iso2Lang = require("./mapping/byISO2.js");
const iso3Lang = require("./mapping/byISO3.js");

// ioc to iso2 mapping
function iocToIso2(ioc) {
    return iocLang[ioc]?.["ISO-2"] || undefined;
}
// ioc to iso3 mapping
function iocToIso3(ioc) {
    return iocLang[ioc]?.["ISO-3"] || undefined;
}
// ioc to fifa mapping
function iocToFifa(ioc) {
    return iocLang[ioc]?.FIFA || undefined;
}

// iso2 to ioc mapping
function iso2ToIoc(iso2) {
    return iso2Lang[iso2]?.IOC || undefined;
}
// iso2 to iso3 mapping
function iso2ToIso3(iso2) {
    return iso2Lang[iso2]?.["ISO-3"] || undefined;
}
// iso2 to fifa mapping
function iso2ToFifa(iso2) {
    return iso2Lang[iso2]?.FIFA || undefined;
}

// iso3 to iso2 mapping
function iso3ToIso2(iso3) {
    return iso3Lang[iso3]?.["ISO-2"] || undefined;
}
// iso3 to ioc mapping
function iso3ToIoc(iso3) {
    return iso3Lang[iso3]?.IOC || undefined;
}
// iso3 to fifa mapping
function iso3ToFifa(iso3) {
    return iso3Lang[iso3]?.FIFA || undefined;
}

// fifa to iso2 mapping
function fifaToIso2(fifa) {
    return fifaLang[fifa]?.["ISO-2"] || undefined;
}
// fifa to iso3 mapping
function fifaToIso3(fifa) {
    return fifaLang[fifa]?.["ISO-3"] || undefined;
}
// fifa to ioc mapping
function fifaToIoc(fifa) {
    return fifaLang[fifa]?.IOC || undefined;
}

module.exports = {
    iocToIso2,
    iocToIso3,
    iocToFifa,
    iso2ToIoc,
    iso2ToIso3,
    iso2ToFifa,
    iso3ToIso2,
    iso3ToIoc,
    iso3ToFifa,
    fifaToIso2,
    fifaToIso3,
    fifaToIoc
};
