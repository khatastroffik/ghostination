# Ghostination

A content focused responsive theme for "personal" [Ghost](https://github.com/tryghost/ghost/) blogs.

## Screenshots

TBD

## Features

* Responsive layout
* Dark Mode (based on the user preference at OS level)
* Search (to be manually enabled; see the instructions below)
* Post reading progress
* Code highlight including line numbers
* Disqus support
* integrated and adapted "amp" template

## Ghost Compatibility

The theme has been tested within a Docker image running Ghost version **3.12.1**.

It should work fine with versions **>= 3.\*** (no warranty, though).

## How to enable the search function

The search function is an integration of the open source [ghostHunter](https://github.com/jamalneufeld/ghostHunter). It is based on a pure *client side* engine.

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