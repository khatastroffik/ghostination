# Manage the blog comments on GitHub

Due to the **European Data Privacy/Protection Laws**, managing the comments within the blog or per external commenting service may not be apropriate for your blog.

The following is an alternative way of managing the comments. It makes use of a GitHub repository:

- All comments are held within the Repo "Issues" list.
- The visitor of the blog needs a GitHub account to be able to **post** a new comment.
- No account is required to **review** existing comments.

## Ghost Theme compatibility

This solution is compatible with the Ghost themes "**Ghostination**" and "**Attila**". Adaption may be required for other themes.

## Styling

This script should be added to the `Code Injection` -> `Site Header` in the Blog Settings.

```html
<style>
    .ghComment { display: block!important; }
</style>
```

## Implement the "comment" section with links to the Github Repository

The script below should be added to the `Code Injection` -> `Site Footer` in the Blog Settings.
 
- Don't forget to adapt the script parameters according to your requirements!
- Don't forget to create in GitHub all the labels you'd like to use in the script!

```html
<script>
  const titlePrefix = "Khatastroffik - ";
  const ghIssueURL = "https://github.com/khatastroffik/community/issues";
  const ghIssueLabels = ["khatastroffik", "comment"];
  const ghIssueTitle = `${document.title.substring(document.title.indexOf(titlePrefix)==0?titlePrefix.length:0)}`;
  const ghIssueBody = `\n\n<!-- Please write your comment above this line. Thank you. -->\nReference: ${document.URL}`;

  const builIssueURL = function (issueURL, issueLabels=["khatastroffik"], issueTitle="Khatastroffik Post Comment", issueBody="Hello!") {
    return `${issueURL}/new?labels=${issueLabels.map(encodeURIComponent)}&title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`;
  };

  window.addEventListener('DOMContentLoaded', (event) => {      
    document.querySelector('section.post-comments').innerHTML = `
<div class="post-info-label">
  This blog doesn't implement any "commenting service".<br>
  Comments are managed externally by the <b>"Khatastroffik Community"</b> on <b>GitHub</b>.<br>
</div>
<div class="post-content">
<section>
  <a title="View existing comments"
     href="${ghIssueURL}"
     onclick="window.open(this.href, 'Khatastroffik Community', 'width=930,height=720');return false;">
     View existing comments
  </a>
  &nbsp;-&nbsp;
  <a title="Add a Comment" 
     href="${ builIssueURL(ghIssueURL, ghIssueLabels, ghIssueTitle, ghIssueBody )}"
     onclick="window.open(this.href, 'Khatastroffik Community', 'width=930,height=720');return false;">
     Add a comment
  </a>
</section>
</div>
`;
    document.querySelector('section.post-comments').classList.add("ghComment");
  });
</script>
