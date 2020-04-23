
@echo off
echo # Full Git Commit Log >full-git-log.md
echo. >>full-git-log.md
echo GitHub Repository: [khatastroffik/ghostination](https://github.com/khatastroffik/ghostination) >>full-git-log.md
echo. >>full-git-log.md
echo ^|Commit^|Date^|Description^| >>full-git-log.md
echo ^|------^|----^|-----------^| >>full-git-log.md
git log --pretty=format:"| [%%h](https://github.com/khatastroffik/ghostination/commits/%%H) | %%ad | %%s |" --date="format:%%Y-%%m-%%d %%H:%%M" >> full-git-log.md
echo. >>full-git-log.md
