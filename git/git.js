//* git config --global --list
//* git config --global user.name"<username?>"
//* git config --global user.email "<github_email>"
//* git config --global init.defaultbranch 'main'

//?instializer local git repo
//* git init   // instialized empty git repository

//? git working flow
//* working directory   ->      staging   ->   local repo
//local change                 redy state        new version


//?
//*git status     ->
//*git add <file_path>
//* git commit -m "<commit_message>"

//*git log
//* git log --oneline 


//? rebase

//! main:a -> b -> c -> f -> g ->
//! test:    c -> d -> e
//! test :    c -> f -> g -> d' -> e'

//git rebase <branch>


//* cheery-pick <commit-id>
//! main: A -> B-> C -> F -> G 
//! fix :     C -> D -> E


//! git reset <commit_id>
//* git reset --soft 
//*git reset <commit_id>
//*git reset <commit_id>


//! -> pull request
//* main -> production
//* develop -> integration
//* feature/  -> feature/login
//* fix -> fix/
//* hotfix -> hotfixl