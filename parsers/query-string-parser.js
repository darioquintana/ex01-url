export class QueryStringParser {
    static parse(queryParamsPart) {
        let res = {};
        const pairs = queryParamsPart.split('&');
        (pairs || []).map(x => {
            const [key, value] = x.split('=');
            res[key] = value;
        });
        return res;
    };
}