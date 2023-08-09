// Getting the User's Favourite Emoji
let userFavEmoji = "";
function getUserFavEmoji() {
    let favEmoji = document.getElementById("userFavEmoji");
    userFavEmoji = favEmoji.value;
}
// Getting the User's Full Name
let userFullName = "";
function getUserFullName() {
    let fullName = document.getElementById("userFullName");
    userFullName = fullName.value;
}
// Getting the User's GitHub Username
let userGithubUsername = "";
function getUserGithubUsername() {
    let githubUsername = document.getElementById("userGithubUsername");
    userGithubUsername = githubUsername.value;
    console.log(userGithubUsername);
}
// Getting User's Instagram Username
let userInstagramUsername = "";
function getUserInstagramUsername() {
    let instagramUsername = document.getElementById("userInstagramUsername");
    userInstagramUsername = instagramUsername.value;
}
// Getting User's Twitter Handle
let userTwitterUsername = "";
function getUserTwitterUsername() {
    let twitterUsername = document.getElementById("userTwitterUsername");
    userTwitterUsername = twitterUsername.value;
}
// Gettong the User's Linkedin URL
let userLinkedinUrl = "";
function getUserLinkedinUrl() {
    let linkedinUrl = document.getElementById("userLinkedinUrl");
    userLinkedinUrl = linkedinUrl.value;
}
// Getting User's Brief Intro
let userBriefIntro = "";
function getUserBriefIntro() {
    // let briefIntro = document.getElementById("");
    let briefIntro = document.getElementById("userBriefIntro");
    userBriefIntro = briefIntro.value;
}
// Getting the User's the latest Project
let userLatestProject = "";
function getUserLatestProject() {
    let latestProject = document.getElementById("userLatestProject");
    userLatestProject = latestProject.value;
}
// Getting User Language and Tools
let userLangAndTools = "";
function getUserLangAndTools() {
    let langAndTools = document.getElementById("userLangAndTools");
    userLangAndTools = langAndTools.value;
}

// Now, all the input's are done so let's get the content ready to be published
const fullNameElement = document.getElementById("fullName");
const userIntroElement = document.getElementById("userIntro");
const languageAndToolsElement = document.getElementById("languageAndTools");
const metricsElement = document.getElementById("metrics");
const latestProjectElement = document.getElementById("latestProjectOutput");
const connectWithMeElement = document.getElementById("connectWithMe");
const outputSectionElement = document.getElementById("output-section");
const syubmitBtn = document.getElementById("submit");
const outputPreviewer = document.getElementById("output-previewer");
const outputCode = document.getElementById("output-code");

syubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    getUserFavEmoji();
    getUserFullName();
    getUserGithubUsername();
    getUserInstagramUsername();
    getUserTwitterUsername();
    getUserLinkedinUrl();
    getUserBriefIntro();
    getUserLatestProject();
    getUserLangAndTools();
    show();

    const fullnameAndEmoji = `
<h1>${userFavEmoji} ${userFullName}</h1>`;

    const userIntro = `
<div>
<p align="left">${userBriefIntro}</p>
<p style="display:flex;" align="left"> 
  <a href="https://github.com/${userGithubUsername}?tab=repositories&sort=stargazers#gh-light-mode-only">
    <img alt="total stars" title="Total stars on GitHub" src="https://custom-icon-badges.demolab.com/github/stars/${userGithubUsername}?color=3ea97d&style=for-the-badge&labelColor=40b682&logo=star#gh-light-mode-only"/></a>
  
  <a href="https://github.com/${userGithubUsername}?tab=repositories&sort=stargazers#gh-dark-mode-only">
    <img alt="total stars" title="Total stars on GitHub" src="https://custom-icon-badges.demolab.com/github/stars/${userGithubUsername}?color=655489&style=for-the-badge&labelColor=c691e9&logo=star#gh-dark-mode-only"/></a>
  
  <a href="https://github.com/${userGithubUsername}?tab=followers#gh-light-mode-only">
    <img alt="followers" title="Follow me on Github" src="https://custom-icon-badges.demolab.com/github/followers/${userGithubUsername}?color=2c4954&labelColor=2c3e50&style=for-the-badge&logo=person-add&label=Follow&logoColor=white#gh-light-mode-only"/></a>
    
  <a href="https://github.com/${userGithubUsername}?tab=followers#gh-dark-mode-only">
    <img alt="followers" title="Follow me on Github" src="https://custom-icon-badges.demolab.com/github/followers/${userGithubUsername}?color=dacc84&labelColor=f9e692&style=for-the-badge&logo=person-add&label=Follow&logoColor=white#gh-dark-mode-only"/></a>
</p>
</div>
`;

    const languageAndTools = `
<div>
<h2>Languages and Tools</h2> 
<p align="left">
<img width="280px"  src="https://skillicons.dev/icons?i=${userLangAndTools}&perline=9"  />
</p>
</div>
`;

    const metrics = `
<div>
<p><a href="https://github.com/${userGithubUsername}#gh-dark-mode-only" target="_blank"><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${userGithubUsername}&langs_count=6&show_icon=true&layout=compact&theme=nightowl#gh-dark-mode-only" alt="${userGithubUsername}" /></a>
  <a href="https://github.com/${userGithubUsername}#gh-light-mode-only" target="_blank"><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${userGithubUsername}&langs_count=6&show_icon=true&layout=compact&theme=vue#gh-light-mode-only" alt="${userGithubUsername}" /></a>
</p>
<p>&nbsp;<a href="https://github.com/${userGithubUsername}#gh-dark-mode-only" target="_blank"><img align="center" src="https://github-readme-stats.vercel.app/api?username=${userGithubUsername}&count_private=true&show_icons=true&theme=nightowl#gh-dark-mode-only" alt="${userGithubUsername}" /></a>
<a href="https://github.com/${userGithubUsername}#gh-light-mode-only" target="_blank"><img align="center" src="https://github-readme-stats.vercel.app/api?username=${userGithubUsername}&count_private=true&show_icons=true&theme=vue#gh-light-mode-only" alt="${userGithubUsername}" /></a>
</p> 
<p><a href="https://github.com/${userGithubUsername}#gh-dark-mode-only" target="_blank"><img align="center" src="https://streak-stats.demolab.com?user=${userGithubUsername}&theme=nightowl#gh-dark-mode-only" alt="${userGithubUsername}"/></a>
<a href="https://github.com/${userGithubUsername}#gh-light-mode-only" target="_blank"><img align="center" src="https://streak-stats.demolab.com?user=${userGithubUsername}&theme=vue#gh-light-mode-only" alt="${userGithubUsername}"/></a></p>
<p><a href="https://github.com/${userGithubUsername}#gh-dark-mode-only" target="_blank"><img align="center" src="https://github-readme-activity-graph.cyclic.app/graph?username=${userGithubUsername}&theme=nightowl#gh-dark-mode-only" alt="${userGithubUsername}" /></a>
<a href="https://github.com/${userGithubUsername}#gh-light-mode-only" target="_blank"><img align="center" src="https://github-readme-activity-graph.cyclic.app/graph?username=${userGithubUsername}&theme=vue#gh-light-mode-only" alt="${userGithubUsername}" /></a></p>
</div>

---

`;

    const latestProjectOutput = `
<div>
<h2>My Latest Project</h2> 
<p><a href="https://github.com/${userGithubUsername}/${userLatestProject}#gh-dark-mode-only" target="_blank"><img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=${userGithubUsername}&repo=${userLatestProject}&theme=nightowl&show_owner=true#gh-dark-mode-only"/></a></p>
<p><a href="https://github.com/${userGithubUsername}/${userLatestProject}#gh-light-mode-only" target="_blank"><img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=${userGithubUsername}&repo=${userLatestProject}&theme=vue&show_owner=true#gh-light-mode-only"/></a></p>
</div>
`;

    const connectWithMe = `
<div>
<h2>Connect With Me</h2> 
<p align="left">
<a href="https://twitter.com/${userTwitterUsername}" target="_blank"><img align="left" width="30px" style="padding-right:10px;" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="${userTwitterUsername}" /></a>
<a href="https://instagram.com/${userInstagramUsername}" target="_blank"><img align="left" width="30px" style="padding-right:10px" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="${userInstagramUsername}" /></a>
<a href="${userLinkedinUrl}" target="_blank"><img align="left" alt="linkedin" width="30px" style="padding-right: 10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a>
</p>
</div>
`;

    fullNameElement.innerHTML = fullnameAndEmoji;
    userIntroElement.innerHTML = userIntro;
    languageAndToolsElement.innerHTML = languageAndTools;
    metricsElement.innerHTML = metrics;
    latestProjectElement.innerHTML = latestProjectOutput;
    connectWithMeElement.innerHTML = connectWithMe;
});

function show() {
    setTimeout(() => (outputPreviewer.innerHTML = outputCode.innerText), 2000);
}
