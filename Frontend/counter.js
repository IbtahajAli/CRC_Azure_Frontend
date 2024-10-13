    async function getVisitorCount() {
        try {
        console.log('Attempting to fetch visitor count...');
        
        const response = await fetch('https://ibtahajalifn.azurewebsites.net/api/http_triggerali?code=WPPoNdQGe5IGLeydRBoci53Qr2PNmWycwqEfseNfu_bSAzFuOq8ZGw%3D%3D');
        
        if (!response.ok) {
            throw new Error(`Network response was not OK: ${response.statusText}`);
        }
        
        const count = await response.text();
        console.log('Visitor count fetched:', count);  // Check if count is fetched
    
        document.getElementById('counter').innerText = count;
        } catch (error) {
        console.error('Error fetching visitor count:', error);  // Log any errors
        document.getElementById('counter').innerText = 'Error fetching count';
        }
    }
    
    // Call the function on page load
    getVisitorCount();
