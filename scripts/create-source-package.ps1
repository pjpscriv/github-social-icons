$version = (Get-Content manifest.json | ConvertFrom-Json).version
$zipName = "github_social_icons-src-$version.zip"

if (Test-Path $zipName) {
    Remove-Item $zipName
}

$entries = @(
    'docs/',
    'icons/',
    'src/',
    'test/',
    'manifest.json',
    'package.json',
    'package-lock.json',
    'README.md',
    'tsconfig.json',
    'webpack.config.js'
)

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::Open($zipName, 'Create')

foreach ($entry in $entries) {
    if ($entry.EndsWith('/')) {
        Get-ChildItem $entry.TrimEnd('/') -Recurse -File | ForEach-Object {
            $relativePath = ($_.FullName -replace [regex]::Escape($PWD.Path + '\'), '') -replace '\\', '/'
            [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, $relativePath, 'Optimal')
        }
    } else {
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $entry, $entry, 'Optimal')
    }
}

$zip.Dispose()
