# hanzi-website
 
Simple website to display Heisig information, especially the decomposition for Chinese characters. The Heisig data comes from *Remembering Simplified Hanzi: How Not to Forget the Meaning and Writing of Chinese Characters; J. W. Heisig & T. W. Richardson, Honolulu: University of Hawai’i Press*.

## Development

This website is generated from a JSON file via [Gatsby](https://www.gatsbyjs.org/). To run the development server, install the [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/) and execute

    gatsby develop

## Acknowledgements

The Heisig data is owned by *J. W. Heisig & T. W. Richardson, Honolulu: University of Hawai’i Press*.
We use the repository from [rouseabout/heisig](https://github.com/rouseabout/heisig) which provides
a XML database of the Heisig data (MIT License). We use the [CC-CEDICT](https://cc-cedict.org/wiki/start#cc-cedict_home)
as our go-to dictionary ([CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)). We use additional decomposition data from *Loach JC, Wang J (2016) Optimizing the Learning Order of Chinese Characters Using a Novel Topological Sort Algorithm. PLoS ONE 11(10): e0163623 [URL](https://doi.org/10.1371/journal.pone.0163623)*