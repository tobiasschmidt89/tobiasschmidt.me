---
title: Deploy Lume with GitHub Actions
description: My experience with deploying my static Lume site with GitHub Actions.
date: 2021-12-17
---

<header>

# [{{title}}](/)

{{ comp.dateTime({date: date}) | safe }}

</header><section>

Until now, I updated my website manually by sending static website assets to my FTP server via [Cyberduck](https://cyberduck.io/). This approach is ok, but come on, I am a techie---there has to be a better way.

When I initially created my site, I wanted to use the American provider [Netlify](https://www.netlify.com/) who automatically builds and deploys sites based on a Git repository. But due to GDPR and [Schrems 2](https://www.europarl.europa.eu/RegData/etudes/ATAG/2020/652073/EPRS_ATA\(2020\)652073_EN.pdf), I wanted to be on the safe side when I chose my host. I live in Germany, so I decided to pick a German hoster (Hetzner).

Unfortunately, Hetzner's interface and deployment process are miles away from modern hosting solutions like Netlify---whenever I access the backend, it feels like opening a portal to the early 90s.

I wanted to build a custom workflow that is similar to Netlify. I wanted a system that automatically builds the site when I send updates to my Git repository and deploys it to Hetzner via FTP (FTPS to be specific).

I quickly discovered GitHub Actions that allow running custom tasks when a GitHub repository is updated. As far as I understand GitHub Actions consist of two parts. First, I can specify when a GitHub action runs. Second, it allows me to execute some tasks.

They are written in `yaml` file format. Something I know very well from the templates used by the Lume static site generator. So nothing to hold me back.

The Actions need to be saved in a special folder of the repository `.github > workflows > {action}.yaml`. No lengthy configuration process, just static files inside my repository. Yay.

</section><section>

## Trigger

I want to trigger the Action when I push commits to my GitHub repository that holds the template and content of my site. The GitHub Action documentation has many triggers available---`push`  solves my use case.

Then I realised that this would deploy my site even on the smallest update. What a waste of energy. After some Google-Fu I found that I can add further constraints to the trigger. I decided that I only want to build the site when my commit contains a tag.  So the first part of my Action `yaml` looks like this:

```yaml
name: Deploy Site
on:
  push:
    tags:
    - '*'
(...)
```

During development, I used a different trigger `workflow_dispatch` that allows to manually trigger the Action in the GitHub Action web interface. At this state my `yaml` looked like this:

```
name: Deploy Site
on: workflow_dispatch
```

This was a good way to avoid the need to push updates to trigger the Action until I solved the actual tasks.

</section><section>

## Tasks

The second part of the GitHub Action `yaml` contains the actual steps I need to perform to deploy the site. When a GitHub Action is triggered it basically sets up a new server and runs the specified commands. Most of these tasks have already be solved. GitHub Actions has hundreds of packages that are shared open-source on GitHub to solve common tasks. So instead of writing a custom script to send my files to the FTP server I can simply load and configure an available FTP Action.

For my use case I have the following tasks:
1. I need to set up the server.
2. I need to check out the files of my Git repository to load them on the server.
3. I need to download and install Deno---the JavaScript runtime used by Lume.
4. I need to download and run the Lume generator to build the static assets of my website.
5. I need to push the built files to my FTP server.

Each step usually consists of a `name` and an external Action or `run` command. The `uses` command loads an external Action---the `with` property can be used for configuration. The `run` command allows running a shell command on the server for simple tasks that do not require a script.

The tasks (or steps) of my Action `yaml` look like this. I added the numbers of the above tasks for reference:

```yaml
(...)
jobs:
  build:
    runs-on: ubuntu-latest # 1
    steps:
      - name: Checkout Git Repository # 2
        uses: actions/checkout@v2
      - name: Setup Deno # 3
        uses: denoland/setup-deno@v1
        with:
          deno-version: v1.x
      - name: Build site with Lume # 4
        run: deno run -A https://deno.land/x/lume/ci.ts
      - name: Deploy to FTP # 5
        uses: SamKirkland/FTP-Deploy-Action@4.2.0
        with:
          server: ${{ "{{" }} secrets.FTP_SERVER {{ "}}"  }}
          protocol: ftps
          port: ${{ "{{" }} secrets.FTP_PORT {{ "}}"  }}
          username: ${{ "{{" }} secrets.FTP_USER {{ "}}"  }}
          password: ${{ "{{" }} secrets.FTP_PASSWORD {{ "}}"  }}
          local-dir: ./_site/
```

One thing to be very careful when working with Actions is that the `yaml` file is available publicly. This means any password is displayed in plain text to the entire world. Luckily GitHub offers [Secrets](https://github.com/Azure/actions-workflow-samples/blob/master/assets/create-secrets-for-GitHub-workflows.md) that can be used to hide such details from the public. E.g. I put the FTP Username, URL, Port and Password in a GitHub Secret. Then they can be accessed via the `secrets` property.

---

That is it. The setup was quite fast and took maybe 30 minutes after I figured out the details (e.g. how I can select specific commits via tags and what external Actions I can depend on). You can find the full `yaml` on my [GitHub repository](https://github.com/tobiasschmidt89/tobiasschmidt.me/blob/main/.github/workflows/deploy-site.yml). I hope this inspires you to start automating your work on GitHub.

</section><footer>

_I am looking forward to implementing more Actions. I want to implement a POSSE system that automatically syndicates my posts to social platforms like Twitter and LinkedIn. What kind of GitHub Actions do you use for static site generators? [Let me know](mailto:{{ author.email }})._

</footer>

{% include "links.njk" %}
