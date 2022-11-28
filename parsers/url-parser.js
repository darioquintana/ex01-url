import { QueryStringParser } from "./query-string-parser.js";

export class UrlParser {

    static parse(routeUrl, instanceUrl) {
        const [routeUrlPart, queryParamsPart] = instanceUrl.split('?');

        const result = {
            ...this.parseUrlPart(routeUrl, routeUrlPart),
            ...QueryStringParser.parse(queryParamsPart)
        }
        console.log(result)
    }

    static parseUrlPart(routeUrl, instanceUrl) {
        let res = {};

        const elementsRoute = routeUrl.split('/');
        const elementsInstance = instanceUrl.split('/');

        for (let i = 0; i < elementsInstance.length; i++) {
            if (elementsRoute[i].startsWith(':')) {
                res[elementsRoute[i].replace(':', '')] = elementsInstance[i];
            }
        }
        return res;
    }
}