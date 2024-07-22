// utils/loadFonts.js
export const loadFontsFromJson = async () => {
  try {
    // Fetch the JSON file
    const response = await fetch('/fonts.json');
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse and return the JSON data
    const fonts = await response.json();
    return fonts;
  } catch (error) {
    console.error('Error loading fonts:', error);
    return {}; // Return an empty object in case of error
  }
};
