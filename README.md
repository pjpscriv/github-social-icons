<h1>
    <img width="32" height="32" src="https://github.com/pjpscriv/github-social-icons/blob/main/icons/icon_128.png?raw=true">
    GitHub Social Icons
</h1>

<p>
  <picture>
    <a href="https://chromewebstore.google.com/detail/gmail-label-colorizer/ledidlccnpfooopagmkgihgibfbnbbnp">
      <img src="https://img.shields.io/chrome-web-store/users/ledidlccnpfooopagmkgihgibfbnbbnp?style=flat-square&logo=google-chrome&logoColor=white&label=Chrome%20users&color=%234285F4" alt="Chrome Web Store">
    </a>
  </picture>
</p>

This Chrome extension enhances GitHub profiles and Gist pages by prettifying unsupported social links. It replaces standard links with visually appealing icons, making it easier for users to identify social profiles.

## Development

Built using [Node 22 LTS](https://nodejs.org/en/download). May work fine with earlier versions but I haven't checked them.

Install required libraries
```sh
npm install
```

Compile TypeScript and copy over required files
```sh
npm run watch
```

Launch the extension using Mozilla's `web-ext`
```sh
npm run test
```

### Package

```sh
npm run package
```

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.
