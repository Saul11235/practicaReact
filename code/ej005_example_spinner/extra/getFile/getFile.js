// get File
console.log("get file");

async function getFile(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Error fetching file:', error);
        return null;
    }
}

// Example usage:
