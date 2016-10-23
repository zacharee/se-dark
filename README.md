# Night@StackExchange: Removing programmer eye-strain!

This userscript provides dark themes for various StackExchange sites. Currently, the following sites (and their metasites) are supported:

 - [Ask Ubuntu](https://askubuntu.com)
 - [Stack Overflow](https://stackoverflow.com)
 - [Stack Exchange Chat](https://chat.stackexchange.com)
   
This userscript also supports chat on the StackExchange domain.

If there's an element that hasn't been changed or something else looks bad, either submit a pull request with your changes or open a new issue.

If you notice any stylistic bugs, please check for an already-existing [Issue](../../issues). If one doesn't exist, feel free to make a new one! Please be sure to include important information about what page this is visible on, and what element is broken.

Alternatively, you may submit a pull request to fix anything that you think is bad!

# Previews

You might want to know what the site looks like before you install some random script. Well you're in luck!

[Click Here](https://zacharee.github.io/se-dark/) to see some images of the supported sites (formatting coming later).

# Installation

To install this script, you'll need [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (Firefox) or [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) for Chrome.

After you have the appropriate plugin installed, click the image below, which will automagically install the userscript.

[![Install!](https://i.imgur.com/Xnox5zi.png)](../../raw/master/sedark.user.js)

Be sure to accept the prompt brought up by your browser to confirm the installation. When the script is set up, restart your browser to make sure the script is activated.

The userscript will (eventually) automatically update as new revisions are posted here.

# Collaboration

Unfortunately, this project needs a *lot* of time and work. If you can, please take an Issue or two and try to fix them! When you're done, submit a merge request and it'll be added to the project eventually.

Please make changes in the [Beta branch](https://github.com/zacharee/se-dark/tree/beta).

If you want to get Collaborator access, please send [Zacharee](https://github.com/zacharee) a message.

# Where's my site?

If you use a Stack Exchange site that this userscript doesn't cover, head on over to the [Beta branch](https://github.com/zacharee/se-dark/tree/beta). This branch is for developing the stylesheets for the sites; it has more frequent changes, but also more unfinished and experimental work. 

There's a chance you will see your site in Beta, but if you don't, you can always start it yourself. Either start from scratch or copy a stylesheet from another, completed site and make any necessary changes.

# Notes

- The script will eventually have a function to count the number of users actively using the script. If you do not want this anonymous logging, a second version of the script will be published that will not phone home.
