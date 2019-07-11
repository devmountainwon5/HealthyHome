
git clone the repo: <strong>git clone [pasted URL of repo] </strong>

<h2>OUR GIT CYCLE:</h2> BRANCH > PUSH > PR(TO REPO) > PULL(TO YOUR LOCAL) {BACK TO BRANCH (A cycle! :D)} 

1. CREATE A NEW BRANCH:
  a. Create and switch to a new branch by using: <strong>git checkout -b [name of branch]</strong>
  b. Add/Commit as normal (make local commits often) <strong>git add .</strong>(adds everything contained in your pwd) or <strong>git add -A</strong> (adds everything youve changed)<strong>git commit -m '{message}'</strong> (moves what you've added to the staging area ready to be pushed)
  c. To Switch to an existing branch: <strong>git checkout [branch you want]</strong>
  d. To see which branch you are in: <strong>git branch</strong>
  e. Move to the main branch: <strong>git checkout [main branch]</strong>

2. PUSH (YOUR BRANCH) TO THE REPO

  <strong>git push origin [name of your branch] </strong> (ie. [abby-{name of Component/file/directory you worked in}-styling])

3. CREATE A PULL REQUEST (pull your branch to the repo)
    *make pull requests once you want to contribute something from your branch to the group
  a. in the pull request tab, click 'new pull request'
  b. select which branch you want to 'pull' in to the dev branch (keep dev branch on the left and select your branch on the right (it should be there if you pushed it correctly))
  c. type in any comments you wish.
  d. submit

4. PULL ANY NEW CHANGES TO YOUR LOCAL.

  <strong>git pull origin dev</strong>
  this command pulls down any approved changes to the repo
  make sure you are on the main dev branch when you pull down.

