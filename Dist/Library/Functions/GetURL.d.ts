/**
 * Returns the id from the correct region.
 * @param akinatorRegion The regions aki supports: 'en', 'en_objects', 'en_animals',
 * 'ar', 'cn', 'de', 'de_animals', 'es', 'es_animals', 'fr', 'fr_objects', 'fr_animals',
 * 'il', 'it', 'it_animals', 'jp', 'jp_animals', 'kr', 'nl', 'pl', 'pt', 'ru', and 'tr'.
 * Default is 'en'
 * @returns {string}
 */
declare const regionURL: (akinatorRegion: string) => Promise<{
    url: string;
    urlWs: any;
} | undefined>;
export default regionURL;
//# sourceMappingURL=GetURL.d.ts.map