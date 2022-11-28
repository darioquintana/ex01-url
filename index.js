import { UrlParser } from "./parsers/url-parser.js"

async function Main() {
    const hash = UrlParser.parse('/:version/api/:collection/:id', "/6/api/listings/3?sort=desc&limit=10");
    console.log(hash);
}

Main();