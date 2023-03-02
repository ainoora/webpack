###### Create the email validator (email-validator.js file in the src folder) module and import it in main.js according to the following structure:

Module scoped variable
VALID_EMAIL_ENDINGS	const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com']
Export the function validate(email)	Returns true if an email contains a valid ending, or false otherwise.

###### Validate an email address from the email input field while submitting the form (alert a message with the result of the validate function call).

###### Provide the functionality to build your project using webpack. For that, use the obtained knowledge about the following loaders: babel-loader, style-loader, css-loader, and so on. Add the npm script "build" which builds the project using webpack. Note that in order to work with styles through webpack, they should be included in the main.js file via "import './styles/style.css';" and removed from the index.html file (remove "<link rel="stylesheet" type="text/css" href="styles/style.css">").

###### Configure HtmlWebpackPlugin to simplify the creation of HTML files to serve your webpack bundles. Use the template option from the documentation to supply the existing index.html as a template. Note that the image assets that are used in the img tags in the index.html won’t be copied to the dist folder automatically for you. You need to copy them yourself. Use CopyWebpackPlugin v6 (the current version v7 has issues at the time of writing the task) for that. Or move the references of your image to CSS (using background-image), where webpack can pick them up via the style-loader.

###### Configure webpack-dev-server with the Hot Module Replacement feature enabled. Add the npm script "dev" which runs webpack-dev-server.

###### A webpack bundle should be minified. Note that it should not be used for development mode. For that, use the gained knowledge from the Production additional reading.

###### Your build (or dist) folder should look something like this after the build (npm script "build"). Logo images were copied using CopyWebpackPlugin.

<!-- # Personal Website

## Run

* Open `index.html` in browser (latest Google Chrome is recommended) -->
