const request = require('request');

module.exports = async (req, res) => {
    // Extract the target path from the request URL
    const targetUrl = 'https://tiktok.com' + req.url.replace('/api/proxy', '');

    // Set up CORS headers so your frontend can access it
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Forward the request to the target destination
    req.pipe(request(targetUrl)).pipe(res);
};
