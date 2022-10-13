"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9450],{6029:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/10/12/drone-ci-telegram-bot","metadata":{"permalink":"/2022/10/12/drone-ci-telegram-bot","editUrl":"https://github.com/lebalz/blog/edit/main/blog/2022-10-12-drone-ci-telegram-bot/index.md","source":"@site/blog/2022-10-12-drone-ci-telegram-bot/index.md","title":"A Telegram Bot for Drone CI","description":"Quickly committing the last change, push and run out the door to the trainstation... Out in the real world, i\'m not worried anymore about the build state - i know what i did and for sure i did not made any mistake... \ud83e\udee3","date":"2022-10-12T00:00:00.000Z","formattedDate":"October 12, 2022","tags":[{"label":"drone ci","permalink":"/tags/drone-ci"},{"label":"telegram","permalink":"/tags/telegram"},{"label":"node red","permalink":"/tags/node-red"},{"label":"bot","permalink":"/tags/bot"}],"readingTime":2.65,"hasTruncateMarker":false,"authors":[{"name":"Balthasar Hofer","url":"https://github.com/lebalz","imageURL":"https://github.com/lebalz.png","key":"lebalz"}],"frontMatter":{"title":"A Telegram Bot for Drone CI","authors":["lebalz"],"tags":["drone ci","telegram","node red","bot"],"image":"./images/flow.png"},"nextItem":{"title":"Transform Docusaurus Frontmatter","permalink":"/2022/06/09/transform-frontmatter"}},"content":"Quickly committing the last change, push and run out the door to the trainstation... Out in the real world, i\'m not worried anymore about the build state - i know what i did and for sure i did not made any mistake... \ud83e\udee3\\n\\nYes, mistakes happen and i hate, when a missing comma breaks everything, but i see it not before the next day...\\n\\n\\nSo i wanted a bot telling me the state of the pipeline. But not another email-bot which spams my inbox... Because i\'m playing around with node red and telegram is quiet well integrated with it, i decided to use telegram as a notification provider.\\n\\n## Requirements\\n\\n- [Node Red](https://nodered.org/)\\n- [node-red-contrib-telegrambot](https://flows.nodered.org/node/node-red-contrib-telegrambot)\\n\\n\\n## Flow\\n\\n![](images/flow.png)\\n\\nA `http in` node builds the entry point for the Webhook. A POST Request can then be used from the Drone CI side, to send a POST Request to [/api/drone-ci](#). It\'s important to acknowledge the request with a `200` Status Code.\\n\\nIn your `.drone.yml` file add a stage to report the build state:\\n\\n```yml\\nsteps:\\n...\\n- name: notify\\n  image: plugins/webhook\\n  settings:\\n    urls:\\n      from_secret: NODE_RED_WEBHOOK\\n```\\n\\n(I added a organization wide `NODE_RED_WEBHOOK` secret with the previously created [/api/drone-ci](#) endpoint)\\n\\nThe `plugin/webhook` image sends the needed information about the build state. With this information we have all the things together to send our telegram message.\\n\\nThe message content is created with the function node. Be sure to create your Telegram Bot with [@Bot Father](https://t.me/botfather) and get your own `chatId`, e.g. from [@Raw Data Bot](https://telegram.me/rawdatabot).\\n\\n```js\\nconst { owner, name } = msg.payload.repo;\\nconst { link, status } = msg.payload.build;\\nconst success = status === \'success\';\\nconst ico = success ? \'\u2705\' : \'\u274c\'   ;\\nconst repo = `https://github.com/${owner}/${name}`;\\n\\nreturn {\\n    payload: {\\n        content: `[Build](${link}): ${owner}/${name} ${ico} [Repo](${repo})`,\\n        type : \'message\',\\n        chatId: 123456789,\\n        options: {\\n            parse_mode : \'Markdown\'\\n        }\\n    }\\n};\\n```\\n\\n<details><summary>Flow Source</summary>\\n\\nCopy&Paste this and your ready to go (except the configuration of your bot...)\\n\\n```json\\n[\\n    {\\n        \\"id\\": \\"f32e663d8a3943a0\\",\\n        \\"type\\": \\"http in\\",\\n        \\"z\\": \\"d5d8db3f081f88c3\\",\\n        \\"name\\": \\"WebHook\\",\\n        \\"url\\": \\"/api/drone-ci\\",\\n        \\"method\\": \\"post\\",\\n        \\"upload\\": false,\\n        \\"swaggerDoc\\": \\"\\",\\n        \\"x\\": 140,\\n        \\"y\\": 240,\\n        \\"wires\\": [\\n            [\\n                \\"795f65ac4317919d\\",\\n                \\"20f60dea1c757f9c\\"\\n            ]\\n        ]\\n    },\\n    {\\n        \\"id\\": \\"795f65ac4317919d\\",\\n        \\"type\\": \\"http response\\",\\n        \\"z\\": \\"d5d8db3f081f88c3\\",\\n        \\"name\\": \\"Confirm\\",\\n        \\"statusCode\\": \\"200\\",\\n        \\"headers\\": {},\\n        \\"x\\": 300,\\n        \\"y\\": 200,\\n        \\"wires\\": []\\n    },\\n    {\\n        \\"id\\": \\"5d155e630c1cea88\\",\\n        \\"type\\": \\"telegram sender\\",\\n        \\"z\\": \\"d5d8db3f081f88c3\\",\\n        \\"name\\": \\"Telegram\\",\\n        \\"bot\\": \\"fcf07fcfe7140093\\",\\n        \\"haserroroutput\\": false,\\n        \\"outputs\\": 1,\\n        \\"x\\": 460,\\n        \\"y\\": 240,\\n        \\"wires\\": [\\n            []\\n        ]\\n    },\\n    {\\n        \\"id\\": \\"20f60dea1c757f9c\\",\\n        \\"type\\": \\"function\\",\\n        \\"z\\": \\"d5d8db3f081f88c3\\",\\n        \\"name\\": \\"\\",\\n        \\"func\\": \\"const {owner, name} = msg.payload.repo;\\\\nconst { link, status } = msg.payload.build;\\\\nconst success = status === \'success\';\\\\nconst ico = success ? \'\u2705\' : \'\u274c\'   ;\\\\nconst repo = `https://github.com/${owner}/${name}`\\\\n\\\\nreturn {\\\\n    payload: {\\\\n      content: `[Build](${link}): ${owner}/${name} ${ico} [Repo](${repo})`,\\\\n      type : \'message\',\\\\n      chatId: xxxxxxxxx,\\\\n        options: {\\\\n            parse_mode : \'Markdown\'\\\\n        }\\\\n    }\\\\n}\\",\\n        \\"outputs\\": 1,\\n        \\"noerr\\": 0,\\n        \\"initialize\\": \\"\\",\\n        \\"finalize\\": \\"\\",\\n        \\"libs\\": [],\\n        \\"x\\": 300,\\n        \\"y\\": 240,\\n        \\"wires\\": [\\n            [\\n                \\"5d155e630c1cea88\\"\\n            ]\\n        ]\\n    },\\n    {\\n        \\"id\\": \\"fcf07fcfe7140093\\",\\n        \\"type\\": \\"telegram bot\\",\\n        \\"botname\\": \\"Drone CI\\",\\n        \\"usernames\\": \\"\\",\\n        \\"chatids\\": \\"\\",\\n        \\"baseapiurl\\": \\"\\",\\n        \\"updatemode\\": \\"polling\\",\\n        \\"pollinterval\\": \\"1000\\",\\n        \\"usesocks\\": false,\\n        \\"sockshost\\": \\"\\",\\n        \\"socksport\\": \\"6667\\",\\n        \\"socksusername\\": \\"anonymous\\",\\n        \\"sockspassword\\": \\"\\",\\n        \\"bothost\\": \\"\\",\\n        \\"botpath\\": \\"\\",\\n        \\"localbotport\\": \\"8443\\",\\n        \\"publicbotport\\": \\"8443\\",\\n        \\"privatekey\\": \\"\\",\\n        \\"certificate\\": \\"\\",\\n        \\"useselfsignedcertificate\\": false,\\n        \\"sslterminated\\": false,\\n        \\"verboselogging\\": true\\n    }\\n]\\n```\\n</details>"},{"id":"/2022/06/09/transform-frontmatter","metadata":{"permalink":"/2022/06/09/transform-frontmatter","editUrl":"https://github.com/lebalz/blog/edit/main/blog/2022-06-09-transform-frontmatter/index.md","source":"@site/blog/2022-06-09-transform-frontmatter/index.md","title":"Transform Docusaurus Frontmatter","description":"Today i wanted to move all the title:  fields from the frontmatter to the markdown content (since docusaurus knows how to do this...).","date":"2022-06-09T00:00:00.000Z","formattedDate":"June 9, 2022","tags":[{"label":"docusaurus","permalink":"/tags/docusaurus"}],"readingTime":0.63,"hasTruncateMarker":false,"authors":[{"name":"Balthasar Hofer","url":"https://github.com/lebalz","imageURL":"https://github.com/lebalz.png","key":"lebalz"}],"frontMatter":{"authors":["lebalz"],"tags":["docusaurus"],"image":"./images/search-and-replace.png"},"prevItem":{"title":"A Telegram Bot for Drone CI","permalink":"/2022/10/12/drone-ci-telegram-bot"},"nextItem":{"title":"Speedup Build Time on Drone CI","permalink":"/2022/01/04/cache-drone-builds"}},"content":"Today i wanted to move all the `title: ` fields from the frontmatter to the markdown content (since docusaurus knows how to do this...). \\n\\n**Old**:\\n\\n```md\\n---\\ntitle: Transform Docusaurus Frontmatter\\ntags: [docusaurus]\\nimage: ./images/search-and-replace.png\\n---\\n\\nToday i wanted to move all the...\\n```\\n\\n**New**:\\n\\n\\n\\n```md\\n---\\ntags: [docusaurus]\\nimage: ./images/search-and-replace.png\\n---\\n\\n# Transform Docusaurus Frontmatter\\n\\nToday i wanted to move all the...\\n```\\n\\nSince i had a lot of files to transform, i wanted to use \\"Search & Replace\\". I came up with the following Search Pattern in VS-Code:\\n\\n![](images/search-and-replace.png)\\n\\n\\n```\\n---\\ntitle: (.*)\\n((.*\\\\r?\\\\n)+?)---\\n```\\n\\n```\\n---\\n$2---\\n\\n# $1\\n```\\n\\n## Add new field to existing `sidebar_custom_props`\\n\\nSearch:\\n```\\n---\\n((.*\\\\r?\\\\n)+?)?sidebar_custom_props:\\n(  .+\\\\r?\\\\n)+?((.*\\\\r?\\\\n)+?)?---\\n```\\n\\nReplace:\\n```\\n---\\n$1sidebar_custom_props:\\n$3  foo: bar\\n$4---\\n```"},{"id":"/2022/01/04/cache-drone-builds","metadata":{"permalink":"/2022/01/04/cache-drone-builds","editUrl":"https://github.com/lebalz/blog/edit/main/blog/2022-01-04-cache-drone-builds/index.md","source":"@site/blog/2022-01-04-cache-drone-builds/index.md","title":"Speedup Build Time on Drone CI","description":"I use drone ci to build and deploy my github pages. Like that i don\'t have to wait for a free github runner and have a more or less constant build time. My initial Pipeline had three stages:","date":"2022-01-04T00:00:00.000Z","formattedDate":"January 4, 2022","tags":[{"label":"drone ci","permalink":"/tags/drone-ci"},{"label":"cache","permalink":"/tags/cache"},{"label":"drone","permalink":"/tags/drone"}],"readingTime":2.42,"hasTruncateMarker":true,"authors":[{"name":"Balthasar Hofer","url":"https://github.com/lebalz","imageURL":"https://github.com/lebalz.png","key":"lebalz"}],"frontMatter":{"title":"Speedup Build Time on Drone CI","authors":["lebalz"],"tags":["drone ci","cache","drone"],"image":"./images/pipeline-cached.png"},"prevItem":{"title":"Transform Docusaurus Frontmatter","permalink":"/2022/06/09/transform-frontmatter"},"nextItem":{"title":"Happy New Year \ud83e\udd73","permalink":"/2022/01/01/happy-new-year"}},"content":"I use drone ci to build and deploy my github pages. Like that i don\'t have to wait for a free github runner and have a more or less constant build time. My initial Pipeline had three stages:\\n\\n![Stages](images/pipeline-old.png)\\n\\n\x3c!--truncate--\x3e\\n\\nThe `website` Stage, where the static page is compiled with Webpacker, consumed the most time. No big deal for pages with few dependencies (e.g. a clean install of Docusaurus), where a complete build takes around 1 minute on a [Hetzner CPX41](https://www.hetzner.com/cloud) (8 VCPUs, *AMD EPYC 2nd* with 16 GB Ram). But for pages with many dependecies it took me around 8 minutes for the page to be built.\\n\\nSo i decided to add caching to my pipeline. Since memory on my server isn\'t a problem for the moment, i\'m using *volume cache* directly on my server. To do so, i configured the `.drony.yml` file with two additional stages:\\n\\n![](images/pipeline-cached.png)\\n\\n\\nI used the [drone-volume-cache](https://github.com/Drillster/drone-volume-cache) from [@drillster](https://github.com/Drillster) and followed the instructions on the [docs page](https://github.com/Drillster/drone-volume-cache/blob/master/DOCS.md).\\n\\n## Configure Drone Server\\n\\nBecause my drone ci is deployed with [Dokku](https://lebalz/synopsis/dokku/drone-ci), the cache will be typically under `/var/lib/dokku/data/storage/<app-name>`.\\n\\n```bash\\n# create persistent directory for caching\\nmkdir -p /var/lib/dokku/data/storage/drone-runner/cache\\n```\\n\\nThe drone server itself will spawn the drone runner with a mounted volume. To do so, the repository, needs to be \\"Trusted\\". This flag can only be set as an admin. So ensure you configured yourself as an admin:\\n\\n```bash\\n# replace foobar with your github username\\ndokku config:set drone-server DRONE_USER_CREATE=username:foobar,admin:true\\n```\\n\\nAnd set the trusted flag under `Settings>General>Project Settings` for the repository you like to cache:\\n\\n![Trusted Flag](images/drone-settings.png)\\n\\n## `.drone.yml`\\n\\nFinally, add the highlighted code blocks to your drone config file.  \\n```yml {3-11,14-22,25-28}\\nsteps:\\n# first step\\n- name: restore-cache\\n  image: drillster/drone-volume-cache\\n  volumes:\\n  - name: cache\\n    path: /cache\\n  settings:\\n    restore: true\\n    mount:\\n      - ./node_modules\\n# ...\\n# last step\\n- name: rebuild-cache\\n  image: drillster/drone-volume-cache\\n  volumes:\\n  - name: cache\\n    path: /cache\\n  settings:\\n    rebuild: true\\n    mount:\\n      - ./node_modules\\n# ...\\n# add volume\\nvolumes:\\n  - name: cache\\n    host:\\n      path: /var/lib/dokku/data/storage/drone-runner/cache\\n```\\n\\n<details><summary>Full .drone.yml</summary>\\n\\n```yml title=.drone.yml\\n---\\nkind: pipeline\\ntype: docker\\nname: default\\n\\nsteps:\\n- name: restore-cache\\n  image: drillster/drone-volume-cache\\n  volumes:\\n  - name: cache\\n    path: /cache\\n  settings:\\n    restore: true\\n    mount:\\n      - ./node_modules\\n\\n- name: website\\n  image: node:16.11.1\\n  commands:\\n  - mkdir -p $HOME/.ssh\\n  - ssh-keyscan -t rsa github.com >> $HOME/.ssh/known_hosts\\n  - echo \\"$GITHUB_PRIVATE_KEY\\" > \\"$HOME/.ssh/id_rsa\\"\\n  - chmod 0600 $HOME/.ssh/id_rsa\\n  - yarn install --frozen-lockfile\\n  - npm run deploy\\n  environment:\\n    USE_SSH: true\\n    GIT_USER: $DRONE_COMMIT_AUTHOR\\n    GITHUB_PRIVATE_KEY:\\n      from_secret: \\"git_deploy_private_key\\"\\n  when:\\n    event:\\n      include:\\n      - push\\n      - pull_request\\n\\n- name: rebuild-cache\\n  image: drillster/drone-volume-cache\\n  volumes:\\n  - name: cache\\n    path: /cache\\n  settings:\\n    rebuild: true\\n    mount:\\n      - ./node_modules\\n\\nvolumes:\\n  - name: cache\\n    host:\\n      path: /var/lib/dokku/data/storage/drone-runner/cache\\n\\ntrigger:\\n  branch:\\n  - main\\n```\\n\\n</details>\\n\\n## Conclusion \ud83d\ude80\\n\\nWith the added cache stages, the build time on my big page could be reduced from 8 minutes to 3:30 minutes \ud83d\ude80. For lightweight pages it takes now around 15 seconds for a small change to be deployed, yay \ud83e\udd73"},{"id":"/2022/01/01/happy-new-year","metadata":{"permalink":"/2022/01/01/happy-new-year","editUrl":"https://github.com/lebalz/blog/edit/main/blog/2022-01-01-happy-new-year.mdx","source":"@site/blog/2022-01-01-happy-new-year.mdx","title":"Happy New Year \ud83e\udd73","description":"Hangovers are perfect for config tasks. So, i set up my dev blog using Docusaurus.","date":"2022-01-01T00:00:00.000Z","formattedDate":"January 1, 2022","tags":[{"label":"docusaurus","permalink":"/tags/docusaurus"}],"readingTime":0.085,"hasTruncateMarker":true,"authors":[{"name":"Balthasar Hofer","url":"https://github.com/lebalz","imageURL":"https://github.com/lebalz.png","key":"lebalz"}],"frontMatter":{"title":"Happy New Year \ud83e\udd73","authors":["lebalz"],"tags":["docusaurus"],"image":"/img/logo.png"},"prevItem":{"title":"Speedup Build Time on Drone CI","permalink":"/2022/01/04/cache-drone-builds"}},"content":"\x3c!--truncate--\x3e\\n\\nHangovers are perfect for config tasks. So, i set up my dev blog using [Docusaurus](https://docusaurus.io).\\n\\n![--width=250px](/img/logo.png)"}]}')}}]);