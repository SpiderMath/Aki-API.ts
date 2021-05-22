"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regions = exports.jQuery = exports.issues = exports.patternSession = void 0;
const patternSession = new RegExp("var uid_ext_session = '(.*)';\\n.*var frontaddr = '(.*)';");
exports.patternSession = patternSession;
const issues = "https://github.com/jgoralcz/aki-api/issues";
exports.issues = issues;
const jQuery = "jQuery331023608747682107778_";
exports.jQuery = jQuery;
const regions = [
    "en",
    "en_objects",
    "en_animals",
    "ar",
    "cn",
    "de",
    "de_animals",
    "es",
    "es_animals",
    "fr",
    "fr_objects",
    "fr_animals",
    "il",
    "it",
    "it_animals",
    "jp",
    "jp_animals",
    "kr",
    "nl",
    "pl",
    "pt",
    "ru",
    "tr",
    "id",
];
exports.regions = regions;
//# sourceMappingURL=Client.js.map