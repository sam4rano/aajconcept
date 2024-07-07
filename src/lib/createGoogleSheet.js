const fs = require('fs');
const { google } = require('googleapis');
const { require } = require('module'); // Add this line to import the 'require' function.

// Load client secrets from a local file.
fs.readFile('path/to/credentials.json', (err, content) => {
	if (err) return console.log('Error loading client secret file:', err);
	authorize(JSON.parse(content), createGoogleSheet);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile('path/to/token.json', (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {function} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  console.log('Authorize this app by visiting this url:', authUrl);
const process = require('process');
const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile('path/to/token.json', JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', 'path/to/token.json');
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Create a Google Sheet with the specified rows.
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function createGoogleSheet(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  const request = {
    resource: {
      properties: {
        title: 'Application Form Data',
      },
      sheets: [
        {
          properties: {
            title: 'Form Responses',
          },
          data: [
            {
              rowData: [
                { values: [{ userEnteredValue: { stringValue: 'Name in full' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Date of Birth' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Place of Birth' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Township of origin in Abeokuta' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Local Government Area in Egba land' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Village of Parents in Egba land' } }] },
                { values: [{ userEnteredValue: { stringValue: 'School Attended' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Name and Address of Parents' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Occupation of your Parents' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Parent\'s family compound in Egba land' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Address to which correspondence should be sent' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Applicant\'s Phone Number (1)' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Applicant\'s Phone Number (2)' } }] },
                { values: [{ userEnteredValue: { stringValue: 'State educational qualification and distinctions obtained' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Please attach the photocopy of the following documents' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Are you enjoying any financial assistance' } }] },
                { values: [{ userEnteredValue: { stringValue: 'How is your course financed now' } }] },
                { values: [{ userEnteredValue: { stringValue: 'State value and source' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Name and address of referees, two of whom must have taught you at secondary or post-secondary level' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Signature of student and date' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Screening' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Interview' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Recommendation from the traditional Chief of the applicant\'s area in Egbaland' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Final Selection' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Recommendation' } }] },
                { values: [{ userEnteredValue: { stringValue: 'To be completed by Head of Department or his designated representative' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Hereby certify that the information given by the applicant in sections A and B of this form is, to the best of my knowledge, Correct/Incorrect' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Date' } }] },
                { values: [{ userEnteredValue: { stringValue: 'FOR OFFICIAL USE ONLY' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Signature and Title' } }] },
                { values: [{ userEnteredValue: { stringValue: 'Decision Signature' } }] },
              ],
            },
          ],
        },
      ],
    },
  };
  sheets.spreadsheets.create(request, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Sheet created:', response.data.spreadsheetId);
  });
}
