import axios from "axios";
import { issues, patternSession } from "../Constants/Client";

/**
 * gets the session uid and frontaddr needed to play the game.
 * @returns {Promise<{uid: string, frontaddr: string}>}
 */
const getSession = async () => {
	// @ts-ignore
	const { data } = await axios.get("https://en.akinator.com/game").catch(() => null);

	// use pattern matching to get the uid and frontaddr. It looks like:
	// var uid_ext_session = 'a7560672-6944-11e9-bbad-0cc47a40ef18';
	// var frontaddr = 'NDYuMTA1LjExMC40NQ==';
	if (data != null && data.match(patternSession)) {
		// @ts-ignore
		const uid = patternSession.exec(data)[1];
		// @ts-ignore
		const frontaddr = patternSession.exec(data)[2];
		return { uid, frontaddr };
	}
	throw new Error(`Cannot find the uid and frontaddr. Please report to the github at: ${issues}`);
};

export default getSession;