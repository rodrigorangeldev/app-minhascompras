import * as cheerio from 'cheerio-without-node-native'


export const scrap = async (url) => {
    const htmlString = await loadData(url);
    await scrapHtml(htmlString);
}

export const loadData = async (url) => {
    const response = await fetch(url);          // fetch page 
    const htmlString = await response.text();   // get response text
    
    return htmlString;
}

export const scrapHtml = async (htmlString) => {
    const $ = cheerio.load(htmlString);         // parse HTML string
}
