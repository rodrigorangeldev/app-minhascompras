import { parse } from 'node-html-parser';   

export const loadData = async (url) => {
    const response = await fetch(url);          // fetch page 
    const htmlString = await response.text();   // get response text

    await htmlParse(htmlString);
    
    return htmlString;
}

const htmlParse = async (htmlString) => {

    const root = parse(htmlString);
    let produtos = root.querySelectorAll('.txtTit');
    produtos.forEach((value, i) => {
        console.log('produto -> ', value.text)
    })
    
}


