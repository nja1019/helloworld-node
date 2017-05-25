Node app.

 Recipe for Node Application
1. Install Homebrew. Follow instructions here: https:// coolestguidesontheplanet.com/installing-homebrew-on-os-x-el- capitan-10-11-package-manager-for-unix-apps/
2. Install Node via Homebrew. brew install node
3. Create an application folder.
4. Inside myapp/ run npm init to create a package.json
  1. Follow prompts changing the Author field to your name
5. Run npm install express —save and npm install body-parser —save to
install Express and the BodyParser modules.
6. Run npm install to install the modules from package.json
7. Create an app.js file.
8. Connect your myapp folder to GitHub
  1. Create a README.md file inside myapp/ 
    1. Add some text to README.md
    2. Run git init inside myapp
    3. Run git add app.js package.json README.md to track these files
    with git. (We do not want to track node_modules in Git. When someone else clones, they can run npm install to install         these modules from package.json)
    4. Run git commit -m “<Your commit message here>”
    5. In your Github, create a new repository.
    6. Back in the terminal, run git remote add origin https://github.com/<YourGitHubName>/myapp.git
    7. Next run git push -u origin master, and your repo is set up.
9. Using express, in app.js, serve your app on port 3000 and create GET calls for hello and world endpoints that
  return Hello and World respectively.
10. Run your app.js file with node app.js. 

 
