# Github Analytics
![Github Analytics](/docs/img/headSite.PNG)

Welcome to our first project on github analytics

## What the project is about
This project show some informations about a particuliar repository.
First, you see a chart showing the differents authors of commits in the repository. The size of the square representing them is linked to the percentage of commits made by them.
By clicking on it, the commits associated to the author choosen will be displayed. Leaving your mouse on the square of one of those square will allow you to see some informations, like the date or the URL.
The colors used are linked to the date of the creation: green is recent and gray is old.
The user can go through the chart by using the left click to explore and the right click to come back.

## How we did it
An agent (TWEB_Labo1_Node) has been created. It purpose is to send request to the github api to retreive the list of the commits of the repo and arrange it in a way we could easily display it from a browser. To do so, a JSON file is created.

We used github pages to store our static web pages. This web site is located in the subfolder 'docs' in this repo. 
When the agent is executed, the data it retreive are pushed to github ('docs/repo.json'). Doing so, the website can use the JSON recently pushed and display it in a nice way. 
To display the data, google chart has been used (https://developers.google.com/chart/).

The agent has been pushed to heroku (https://heroku.com). We linked the TWEB_Labo1_Node repo with heroku, so everytime we push a new commit on the master branch on github, our agent on heroku is updated. A scheduler has been set, which execute the agent once every 4 hour. Notice that doing so, the data we display on the website is not 'real time'.

To deal with the github api credentials, we have decided that there are 2 ways to set them:

 - Using a github-credentials.json file at the root of the project 'TWEB_Labo1_Node', formatted like this: 
```
{
    "username": "myUsername",
    "token": "3di2kc21jmwo12i2di1ks92jk91a0"
}
```
 - Setting environnement variables, which are "USERNAME=myUsername" and "TOKEN=3di2kc21jmwo12i2di1ks92jk91a0"

The github-credentials.json file is useful to work locally, but is not very secure since it is pushed to github. This is why, on heroku, these environnement variables have been set.

Lastly, it could be useful to change the repo our project is watching. To do so, change the "owner" and the "repo" constants in TWEB_Labo1_Node/src/agent.js.

### Criteria done
* [x] The app is online and publicly available (e.g. on heroku)

	https://remij1.github.io/TWEB_Labo1/

* [x] Someone arriving on the app, without prior knowledge of the project, understands what it is about and can use it.
	
	We wrote some description and a legend to explain the utilities of our project.
	
* [x] The app uses a nice visual template.

	We used a bootstrap's template to have a nice and clean view.

* [x] There is a repo with a README.md file that explains what the project is about, how to run it locally and how to build it.

	You are reading it ;)

* [x] The build process invokes a linter. The linter is happy with the quality of your code (no error).

	We used gulp to build our project. It is used to check if all of our code is well format. To execute the build process, you could use 'node_modules/.bin/gulp to execute the default task, wich is to check the agent and the client chartPie.js scripts. If you use vscode as IDE, you could open it at the root of this project and launch directly the default gulp task.

* [x] The app fetches data from GitHub and presents it in the UI.

	Yep, we did that. We used the Google charts to present the data.

* [x] The app works (no crash, no obvious problem in the interactivity, etc.)




### Extra criteria done
* [ ] It is possible to test the app locally, with a docker-compose up.

	TODO!!!!

* [x] Extra effort has been put in the UI/UX.

	Our chart is easy to use, and with the legend, easy to understand. The colors choosen are in line with the template and easy to see.

* [x] Extra effort has been put in the depth of the analysis (“you are not just sorting developers per commit count”).

	You can find a lot of informations about the commits, and the ones who are not visible have an URL to follow to be obtained easily. We had to deal with the 'pages', since github-api could list a maximum of 100 commits at once.

* [ ] Extra effort has been put to make the app “sticky” and/or “viral”. There is something about it that makes it particularly original, fun. Or there is something that will make people come back to it.

	TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

* [ ] Extra effort has been put in the build pipeline.

	TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

* [x] There is something else that you have done and that you think deserves a bonus.

	We have added some features: an icon, a redimensionnable windows, etc.
	To avoid any problems using a personal token for the connexion, we create environment variables on heroku to replace it.

	TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

## How to run locally

To open the web site, just open the 'index.html' file under the 'docs' folder with your browser.
To execute the agent once, you firstly have to set your credentials with one of the ways decribed above. Secondly, simple launch the command "npm start" under the 'TWEB_Labo1_node' subfolder.

## How to build it

Firtsly, to install all of the dependencies this project needs, don't forget to do a 'npm install' at the root of the project. You will need to do so for the sub-project TWEB_Labo1_Node too.

We used gulp to build our project. It is used to check if all of our code is well format. To execute the build process, you could use 'node_modules/.bin/gulp (from the root of the project) to execute the default task, wich is to check the agent and the client chartPie.js scripts. If you use vscode as IDE, you could open it at the root of this project and launch directly the default gulp task.
