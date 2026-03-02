// chatbot.js

// Function to process user input
function processUserInput(input) {
    // Process the input to extract travel preferences
    const preferences = extractPreferences(input);
    return preferences;
}

// Function to generate personalized itineraries
function generateItinerary(preferences) {
    const itinerary = [];
    // Logic based on preferences: days, budget, travel type, interests
    itinerary.push(`Visit city for ${preferences.days} days.`);
    itinerary.push(`Budget: ${preferences.budget}$`);
    itinerary.push(`Type of travel: ${preferences.travelType}`);
    itinerary.push(`Interests: ${preferences.interests.join(', ')}`);
    return itinerary;
}

// Function to display recommendations
function displayRecommendations(itinerary) {
    itinerary.forEach(item => {
        console.log(item);
    });
}

// Utility function to simulate extracting preferences from input
function extractPreferences(input) {
    // Simulated extraction logic; replace with actual logic
    return {
        days: 5,
        budget: 1000,
        travelType: 'adventure',
        interests: ['hiking', 'cultural sites']
    };
}

// Example Usage
const userInput = 'I want to travel for 5 days with a budget of 1000$ for an adventure trip.';
const preferences = processUserInput(userInput);
const itinerary = generateItinerary(preferences);
displayRecommendations(itinerary);
