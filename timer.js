
// Define the required config
const config = {
    localUrl: "http://144.126.234.143:3001",
    // Add any other config properties required by your server
  };
  
  // Function to call getPages on main.js server
  async function testButtonClick() {
    console.log("Test button clicked");
    try {
      const response = await fetch(`${config.localUrl}/getPages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          config,
        }),
      });
  
      if (!response.ok) {
        console.error("Error fetching pages:", response.statusText);
        return;
      }
  
      const data = await response.json();
      console.log("Pages fetched:", data.pages);
    } catch (error) {
      console.error("Error fetching pages:", error);
    }
  }
  