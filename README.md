# basimilch.github.io

Informational website of the basimilch cooperative: <http://basimil.ch>

## Dev

This website is done with [Jekyll]. The main steps to run it locally
on your machine are the following:

``` bash
git clone https://github.com/basimilch/basimilch.github.io.git
cd basimilch.github.io
jekyll server --watch --host 0.0.0.0
```

Please read the [Jekyll] documentation to install it on your system.

[Jekyll]: http://jekyllrb.com

### Cloud9 ([`c9.io`]) as IDE

To start coding quickly, we recommend you to use [Cloud9], an extremly handy
online IDE:

1. [Fork this repository] with your GitHub account
1. [Sign up for a Cloud9] account with your GitHub account ([direct link])
1. Go to [your repos on c9.io] and create a new workspace for this repo
1. Install [Jekyll] on your workspace with the terminal with following
   command from the [c9.io documentation]:

    ``` bash
    gem install jekyll
    ```
1. Checkout the `dev` branch

    ``` bash
    git checkout -t origin/dev
    ```
1. Start serving the website from your [`c9.io`] account

    ``` bash
    jekyll serve --watch --host $IP --port $PORT --baseurl ''
    ```
1. When your changes are ready, please submit a [pull request].

[Fork this repository]: https://help.github.com/articles/fork-a-repo/
[Cloud9]: https://c9.io
[`c9.io`]: https://c9.io
[Sign up for a Cloud9]: https://c9.io/web/sign-up/free
[direct link]: https://c9.io/auth/github?r=/dashboard.html
[your repos on c9.io]: https://c9.io/account/repos
[c9.io documentation]: https://docs.c9.io/docs/jekyll
[pull request]: https://help.github.com/articles/using-pull-requests/


### Documentation and references

- <http://jekyllrb.com>
- <https://github.com/Shopify/liquid/wiki/Liquid-for-Designers>
- <http://alanwsmith.com/jekyll-liquid-date-formatting-examples>
- <https://github.com/lokesh/lightbox2/>
- <https://docs.c9.io/docs/>
