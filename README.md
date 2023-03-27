# team-profile
Team Profile Generator
This is a simple command-line application designed to generate a team profile based on user input. The application prompts the user to answer a few questions about their team members, and then generates an HTML file containing the team profile.

How to Use
To use the application, you need to have Node.js installed on your machine. If you don't have Node.js installed, please visit the official Node.js website and download the latest version.

Once you have Node.js installed, you can follow these steps to use the application:

Clone the repository to your local machine.
Open your terminal and navigate to the cloned repository.
Run npm install to install the necessary dependencies.
Run node index.js to start the application.
Answer the questions about your team members.
Once you've entered all the information, the application will generate an HTML file containing the team profile. You can find the file in the dist folder.
Features
The application has the following features:

It prompts the user to enter the name, ID, email, and role of each team member.
It allows the user to enter an office number for the manager, a GitHub username for engineers, and a school name for interns.
It validates user input to ensure that all required fields are filled in and that the email addresses are valid.
It generates an HTML file containing a team profile with cards for each team member.
Each card displays the team member's name, role, ID, email address, and additional information (office number, GitHub username, or school name, depending on the role).
The HTML file includes CSS styling to make the team profile look nice.
Technologies Used
The application was built using the following technologies:

Node.js
Inquirer.js
Jest (for testing)
HTML
CSS
