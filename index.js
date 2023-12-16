require('dotenv').config()
const express = require('express')
const app = express()


const port = 4000

const githubData = {
    "login": "jhankda",
    "id": 133991814,
    "node_id": "U_kgDOB_yNhg",
    "avatar_url": "https://avatars.githubusercontent.com/u/133991814?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jhankda",
    "html_url": "https://github.com/jhankda",
    "followers_url": "https://api.github.com/users/jhankda/followers",
    "following_url": "https://api.github.com/users/jhankda/following{/other_user}",
    "gists_url": "https://api.github.com/users/jhankda/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jhankda/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jhankda/subscriptions",
    "organizations_url": "https://api.github.com/users/jhankda/orgs",
    "repos_url": "https://api.github.com/users/jhankda/repos",
    "events_url": "https://api.github.com/users/jhankda/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jhankda/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Harsh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-05-18T15:39:30Z",
    "updated_at": "2023-12-10T12:05:25Z"
}

app.get('/github',(req,res)=> {
  res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('muje na pta')
})
app.get('/twitter',(req,res)=> {
    res.send('harsh jhankda on twitter')
})
app.get('/login',(req,res)=> {
    res.send('<h1>please login at website<h1>')
})
app.get('/author',(req,res)=>{
    res.send('<h1> hello folks my name is HARSH JHANKDA<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})