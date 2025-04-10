# GitHub Social Links Chrome Extension

This Chrome extension enhances GitHub profiles and Gist pages by prettifying unsupported social links. It replaces standard links with visually appealing icons, making it easier for users to identify social profiles.

## Development

Install required libraries
```sh
npm install
```


Compile TypeScript and copy over required files with
```sh
npm run watch
```

Launch the extension using Mozilla's `web-ext`

```sh
web-ext run --target chromium --source-dir ./dist/
```

### Package

```sh
web-ext build --source-dir ./dist/
```

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.
