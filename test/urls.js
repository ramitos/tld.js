var urls =  [
  {
    "url": "http://www.example.org",
    "tld": "org"
  },
  {
    "url": "http://www.example.co.uk",
    "tld": "co.uk"
  },
  {
    "url": "http://www.example.org/some/directory/file.html?query=string#fragment",
    "tld": "org"
  },
  {
    "url": "http://www.example.org/some/directory/file.html-is-awesome?query=string#fragment",
    "tld": "org"
  },
  {
    "url": "scheme://user:pass@www.example.org:123/some/directory/file.html?query=string#fragment",
    "tld": "org"
  },
  {
    "url": "/some/directory/file.html?query=string#fragment",
    "tld": ""
  },
  {
    "url": "../some/directory/file.html?query=string#fragment",
    "tld": ""
  },
  {
    "url": "://user:pass@example.org:123/some/directory/file.html?query=string#fragment",
    "tld": ""
  },
  {
    "url": "http://user:pass@123.123.123.123:123/some/directory/file.html?query=string#fragment",
    "tld": ""
  },
  {
    "url": "http://user:pass@fe80:0000:0000:0000:0204:61ff:fe9d:f156/some/directory/file.html?query=string#fragment",
    "tld": ""
  },
  {
    "url": "http://user:pass@[fe80:0000:0000:0000:0204:61ff:fe9d:f156]:123/some/directory/file.html?query=string#fragment",
    "tld": ""
  },
  {
    "url": "http://user:pass@xn--exmple-cua.org:123/some/directory/file.html?query=string#fragment",
    "tld": "org"
  },
  {
    "url": "http://user:pass@exämple.org:123/some/directory/file.html?query=string#fragment",
    "tld": "org"
  },
  {
    "url": "file:///foo/bar/baz.html",
    "tld": ""
  },
  {
    "url": "http://www.example.org/@foobar",
    "tld": "org"
  },
  {
    "url": "mailto:hello@example.org?subject=hello",
    "tld": "org"
  },
  {
    "url": "magnet:?xt=urn:btih:f8c020dac7a083defda1769a1196a13facc38ef6&dn=Linux+64x+server+11.10+Pt+Pt&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.ccc.de%3A80",
    "tld": ""
  },
  {
    "url": "javascript:alert(\"hello world\");",
    "tld": ""
  },
  {
    "url": "http://en.wikipedia.org/wiki/Help:IPA",
    "tld": "org"
  },
  {
    "url": "/wiki/Help:IPA",
    "tld": ""
  }
]

if(module && module.exports) module.exports = urls