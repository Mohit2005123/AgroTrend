import axios from 'axios';
import cheerio from 'cheerio';

// URL of the page you want to scrape
const url = 'https://www.livemint.com/industry/agriculture';

// Base URL to prepend to each href
const baseUrl = 'https://www.livemint.com';

const fetchData = async () => {
    try {
        // Fetch the HTML data
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        // Select the div with id 'listview'
        const listView = $('#listview');

        // Initialize an array to store the data
        const dataArray = [];

        // Loop through each element with class 'listingNew' inside the 'listview' div
        listView.find('.listingNew').each((index, element) => {
            const anchorTag = $(element).find('a'); // Find the anchor tag inside the div
            const href = anchorTag.attr('href'); // Get the href attribute

            // Ensure href is not undefined and prepend base URL
            const fullUrl = href ? baseUrl + href : '';

            let text = anchorTag.text().trim(); // Get the text content

            // Remove the "Premium" label if it exists in the text
            text = text.replace('Premium', '').trim();

            // Store the full URL and cleaned text in an object and push it to the array
            dataArray.push({ href: fullUrl, text });
        });

        // Log the array containing hrefs and texts
        console.log(dataArray);
    } catch (error) {
        console.error('Error fetching the page:', error);
    }
};

// Call the fetchData function to execute the scraping
fetchData();
