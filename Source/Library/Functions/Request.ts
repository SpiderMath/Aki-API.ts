import axios from "axios";

const headers = {
	Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
	"Accept-Encoding": "gzip, deflate",
	"Accept-Language": "en-US,en;q=0.9",
	"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) snap Chromium/81.0.4044.92 Chrome/81.0.4044.92 Safari/537.36",
	"x-requested-with": "XMLHttpRequest",
};

const params = Object.freeze({
	gzip: true,
	resolveWithFullResponse: true,
	timeout: 10000,
});

const rp = async (uri: string) => {
	try {
		const result = await axios.get(uri, { headers, params });
		if (!result || !result.data || !result.data.indexOf) {
			throw new Error(`Akinator could not fulfill the request in time for uri ${uri}. There is no data.`);
		}
		const beginningParse = result.data.indexOf("(");
		const jsonString = result.data.substring(beginningParse + 1, result.data.length - 1);
		result.data = JSON.parse(jsonString);
		return result;
	}
	catch (error) {
		throw new Error(`A problem occurred with making the request: ${error}`);
	}
};

export default rp;