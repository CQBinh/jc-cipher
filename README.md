## jc-cipher
`jc-cipher` is a simple tool to encode and decode your file with your own password.

## Installation
```
npm install -g jc-cipher
```

## Usage
### encoding file

```
jc-cipher encode <path-to-file> <key>
```

*Note*: `jc-cipher` don't save your key, so make sure you remember it or back it up some where for the decoding later.

The output will be localed in the same directory with the `path-to-file` with suffix `.encoded`

For example:
- input: `~./binh.txt`
- output: `~./binh.txt.encoded`

### decoding file

```
jc-cipher decode <path-to-encoded-file> <key>
```


The output will be localed in the same directory with the `path-to-encoded-file` with suffix `.decoded`

For example:
- input: `~./binh.txt.encoded`
- output: `~./binh.txt.encoded.decoded`

## Contributors
[@CQBinh](https://github.com/CQBinh)

## Contributing

1. Fork [https://github.com/CQBinh/jc-cipher](https://github.com/CQBinh/jc-cipher)
2. Create your feature branch (`git checkout -b my-awesome-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request with a description of your changes

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).