 Get a reference to the observation table
const tableBody = document.getElementById('observation-table');

 Define a function to render the table
function renderTable() {
   Get the saved observations from local storage
  const observations = JSON.parse(localStorage.getItem('observations'))  [];

   Create an empty string to hold the table HTML
  let tableHtml = '';

   Loop through the observations and add a row to the table for each one
  observations.forEach(observation = {
    tableHtml += `
      tr
        td${observation.species}td
        td${observation.location}td
        td${observation.count}td
        td${observation.timestamp}td
      tr
    `;
  });

   Set the HTML of the table body to the generated HTML
  tableBody.innerHTML = tableHtml;
}

 Call the renderTable function to display the initial data
renderTable();

 Add a click event listener to the email button
const emailButton = document.getElementById('email');
emailButton.addEventListener('click', () = {
   Get the saved observations from local storage
  const observations = JSON.parse(localStorage.getItem('observations'))  [];

   Create a CSV string from the observations
  let csv = 'Species,Location,Count,Timestampn';
  observations.forEach(observation = {
    csv += `${observation.species},${observation.location},${observation.count},${observation.timestamp}n`;
  });

   Create a link to download the CSV file
  const blob = new Blob([csv], { type 'textcsv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'observations.csv';

   Trigger a click on the link to start the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
