// Get references to the form fields
const speciesField = document.getElementById('species');
const locationField = document.getElementById('location');
const countField = document.getElementById('count');
const saveButton = document.getElementById('save');

// Define a function to handle form submission
function saveObservation() {
  // Get the current time as a string
  const timestamp = new Date().toISOString();

  // Create a new observation object with the form data
  const observation = {
    species: speciesField.value,
    location: locationField.value,
    count: countField.value,
    timestamp: timestamp
  };

  // Get the existing observations from local storage, or create an empty array
  let observations = JSON.parse(localStorage.getItem('observations')) || [];

  // Add the new observation to the array
  observations.push(observation);

  // Save the updated observations to local storage
  localStorage.setItem('observations', JSON.stringify(observations));

  // Clear the form fields
  speciesField.value = '';
  locationField.value = '';
  countField.value = '';
}

// Add a click event listener to the save button
saveButton.addEventListener('click', saveObservation);
