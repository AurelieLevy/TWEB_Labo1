# Github Analytics
![Github Analytics](/docs/img/headSite.PNG)
Welcome to our first project on github analytics

## What the project is about
This project show some informations about a particuliar repository.
First, you see a chart showing the differents authors of commits in the repository. The size of the square representing them is linked to the percentage of commits made by them.
By clicking on it, the commits associated to the author choosen will be displayed. Leaving your mouse on the square of one of those square will allow you to see some informations, like the date or the URL.
The colors used are linked to the date of the creation: green is recent and gray is old.
The user can go through the chart by using the left click to explore and the right click to come back.

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

	You can find a lot of informations about the commits, and the ones who are not visible have an URL to follow to be obtained easily.

* [ ] Extra effort has been put to make the app “sticky” and/or “viral”. There is something about it that makes it particularly original, fun. Or there is something that will make people come back to it.

	TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

* [ ] Extra effort has been put in the build pipeline.

	TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

* [x] There is something else that you have done and that you think deserves a bonus.

	We have added some features: an icon, a redimensionnable windows, etc.
	To avoid any problems using a personal token for the connexion, we create environment variables on heroku to replace it.
	TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

## How to run locally

## How to build it

We used gulp to build our project. It is used to check if all of our code is well format. To execute the build process, you could use 'node_modules/.bin/gulp to execute the default task, wich is to check the agent and the client chartPie.js scripts. If you use vscode as IDE, you could open it at the root of this project and launch directly the default gulp task.
