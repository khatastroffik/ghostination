# Ghostination

A responsive theme for *personal* [Ghost](https://github.com/tryghost/ghost/) blogs.

## Table of Content
- [Features](#features)
- [Description](#description)
- [Links](#links)
- [Ghost Compatibility](#ghost-compatibility)
- [Usage](#usage)
  - [How to enable a ToC (Table of Content)](#how-to-enable-a-toc-table-of-content)
    - [Standard ToC for all screen/viewport sizes](#standard-toc-for-all-screenviewport-sizes)
    - [Special ToC for wide screen/viewport sizes only](#special-toc-for-wide-screenviewport-sizes-only)
    - [ToC on printouts](#toc-on-printouts)
    - [Automatic ToC generation and default configuration](#automatic-toc-generation-and-default-configuration)
    - [Manually exclude a header from the ToC](#manually-exclude-a-header-from-the-toc)
  - [How to enable the search function](#how-to-enable-the-search-function)
- [Development](#development)
- [License & Copyrights](#license--copyrights)
- [Credits](#credits)

## Features

* Responsive layout
* Table of Content (to be manually enabled per posting/page; see the instructions below)
* Search (to be manually enabled; see the instructions below)
* Post reading progress (visible at the top of the screen)
* Code highlighting (including line numbers)
* Disqus support (if integrated; see the Ghost documentation)
* Adapted, theme specific "amp" template
* Dark Mode (based on the user preference at OS level)

## Description

Ghostination is intended as light-weight theme i.e. it should empower the blog visitor to **focus on the content**. Therefore, the theme reduces any *noise*, avoiding non important information to be displayed.

For example:

* As it is intended to be used for a personal blog, this theme doesen't show up the author information on the indexes and postings. One may still create/display a specific *Author page* and link to it using the *site navigation* sections, though.

* The excerpt (if any) is displayed within the *post header* section.

* All the tags (if any) are displayed per list item on the *collection* views.

## Links

* [Releases and Downloads](./releases)

* [Screenshots](./screenshots.md) TBD

* [Demo](./) TBD

## Ghost Compatibility

The theme has been tested within a Docker image running Ghost version **3.12.1**.

It should work fine with Ghost versions **>= 3.\*** (no warranty, though).

## Usage
### How to enable a ToC (Table of Content)

The ToC is generated using the [Tocbot](https://tscanlin.github.io/tocbot/) library  v4.11.1 and is configured to best fit into the Ghostination theme.

**By design**, the Ghostination theme isn't displaying any ToC on the *posts* or *pages*: this should be the decision of the author(s) to make a ToC visible or not. This decision should be taken *for each posting/page specifically*, depending on the content.

To **switch the ToC on**, add a `#toc` **or** `#toc-wide-screen` **tag** to the posting/page. To switch the ToC off, remove the corresponding tag.

Note: Since implemented as a tag, the "ToC visibility" setting is persisted together with the content of the given post/page.

#### Standard ToC for all screen/viewport sizes

When the `#toc` tag is used, the table of content will be visible at any time on the posting.

Either:

- detached on the right side of the page if the page/viewport width is **>= 1440** pixels

or

- integrated i.e. at the top of the content if the width of the screen/viewport is **< 1440** pixels.

#### Special ToC for wide screen/viewport sizes only

When the `#toc-wide-screen` tag is used, the table of content stay visible (detached) as long as the width of the screen/viewport is **>= 1440** pixels.

Otherwise (< 1440 pixels), the ToC will not be visible - thus will not be displayed on the top of the content.

#### ToC on printouts

If enabled, the table of content will be displayed at the top of the content on printouts - regarless of the *screen size* mode.

#### Automatic ToC generation and default configuration

By default, the Toc is **listing all h1, h2 and h3 headers**. This is a global setting for the blog theme, as it is configured in the Ghost Handlebars Template prior packaging the theme. Furthermore, the displayed ToC header hierarchie is not collapsible.

If you'd like to modify those settings, see the *Development* section below and the Ghost documentation on Handlebars templates.

#### Manually exclude a header from the ToC

To **intentionally exclude** a specific header from the ToC, this header should have a `toc-ignore` class set - which can be done if the header is manually added to the post content as *HTML* in the editor.

```html
<h1 class="">TEST 1 - visible in the ToC</test>
<h1 class="toc-ignore">TEST 2 - invisible in the ToC</test>
```

Please refer to the Tocbot documentation for further information.

### How to enable the search function

The search function is an integration of the open source [ghostHunter](https://github.com/jamalneufeld/ghostHunter) v0.6.0. It is based on a pure *client side* engine, which will trigger the Ghost API in order to retrieve the required information.

1. Go to __Integrations__.  
1. Choose __Add custom integration__, name it `ghostHunter` and choose __Create__. Copy the generated Content API Key.  
1. Go to __Code injection__.  
1. Add this to __Blog Header__:  

````
<script>
  var ghosthunter_key = 'PASTE_THE_GENERATED_KEY_HERE';
  //optional: set your custom ghost_root url, default is "/ghost/api/v2"
  var ghost_root_url = '/ghost/api/v2';
</script>
````

Note: be aware of the fact, that the search engine is running in the background to index the site content. Furthermore, the size of the generated search index (which is consuming the client's memory) is growing with any new blog post.

## Development

Feel free to fork or clone this repository :)

The task runner  [Grunt](https://gruntjs.com/getting-started/) is used for development.

To setup this project (including a project local grunt - hence no global install of grunt is required) do within the project directory:

	npm install

Two grunt tasks are integrated in `package.json` as npm script:

1. **build** the project:

		npm run build

1. **compress** the theme files into `dist/<theme-name>.zip`

		npm run compress

3. upload the compressed theme to your site.

Alternatively, you could reduce the size of the compressed theme using the command file `7zip-compress.cmd` provided, which is using the [7-Zip](https://www.7-zip.org/) tool (to be installed separately). 

## License & Copyrights

**Ghostination** is released under the [MIT License](https://opensource.org/licenses/MIT).

See the [LICENSE](./LICENSE) file .

## Credits

This theme is based on the [Attila Theme](https://github.com/zutrinken/attila) by [Peter Amende](https://github.com/zutrinken): **Thank you Peter!**

The Table-of-Content within this README has been generated using the online tool [Markdown TOC generate](https://magnetikonline.github.io/markdown-toc-generate/) by [David Dal Busco](https://github.com/peterpeterparker): **Thank you David!**