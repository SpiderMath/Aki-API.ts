"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Client_1 = require("../Constants/Client");
/**
 * gets the session uid and frontaddr needed to play the game.
 * @returns {Promise<{uid: string, frontaddr: string}>}
 */
const getSession = async () => {
    // @ts-ignore
    const { data } = await axios_1.default.get("https://en.akinator.com/game").catch(() => null);
    // use pattern matching to get the uid and frontaddr. It looks like:
    // var uid_ext_session = 'a7560672-6944-11e9-bbad-0cc47a40ef18';
    // var frontaddr = 'NDYuMTA1LjExMC40NQ==';
    if (data != null && data.match(Client_1.patternSession)) {
        // @ts-ignore
        const uid = Client_1.patternSession.exec(data)[1];
        // @ts-ignore
        const frontaddr = Client_1.patternSession.exec(data)[2];
        return { uid, frontaddr };
    }
    throw new Error(`Cannot find the uid and frontaddr. Please report to the github at: ${Client_1.issues}`);
};
exports.default = getSession;
//# sourceMappingURL=GetSession.js.map