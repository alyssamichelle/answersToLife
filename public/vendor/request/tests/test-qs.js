'use strict'

var request = require('../index')
  , tape = require('tape')

// Run a querystring test.  `options` can have the following keys:
//   - suffix              : a string to be added to the URL
//   - qs                  : an object to be passed to request's `qs` option
//   - afterRequest        : a function to execute after creating the request
//   - expected            : the expected path of the request
//   - expectedQuerystring : expected path when using the querystring library
function runTest(name, options) {
  var uri = 'http://www.google.com' + (options.suffix || '')
    , requestOptsQs = {
      uri : uri
    }
    , requestOptsQuerystring = {
      uri : uri,
      useQuerystring : true
    }

  if (options.qs) {
    requestOptsQs.qs = options.qs
    requestOptsQuerystring.qs = options.qs
  }

  tape(name + ' using qs', function(t) {
    var r = request.get(requestOptsQs)
    if (typeof options.afterRequest === 'function') {
      options.afterRequest(r)
    }
    process.nextTick(function() {
      t.equal(r.path, options.expected)
      r.abort()
      t.end()
    })
  })

  tape(name + ' using querystring', function(t) {
    var r = request.get(requestOptsQuerystring)
    if (typeof options.afterRequest === 'function') {
      options.afterRequest(r)
    }
    process.nextTick(function() {
      t.equal(r.path, options.expectedQuerystring || options.expected)
      r.abort()
      t.end()
    })
  })
}

function esc(str) {
  return str
    .replace(/\[/g, '%5B')
    .replace(/\]/g, '%5D')
}

runTest('adding a querystring', {
  qs       : { q : 'search' },
  expected : '/?q=search'
})

runTest('replacing a querystring value', {
  suffix   : '?q=abc',
  qs       : { q : 'search' },
  expected : '/?q=search'
})

runTest('appending a querystring value to the ones present in the uri', {
  suffix   : '?x=y',
  qs       : { q : 'search' },
  expected : '/?x=y&q=search'
})

runTest('leaving a querystring alone', {
  suffix   : '?x=y',
  expected : '/?x=y'
})

runTest('giving empty qs property', {
  qs       : {},
  expected : '/'
})

runTest('modifying the qs after creating the request', {
  qs           : {},
  afterRequest : function(r) {
    r.qs({ q : 'test' })
  },
  expected : '/?q=test'
})

runTest('a query with an object for a value', {
  qs       : { where : { foo: 'bar' } },
  expected : esc('/?where[foo]=bar'),
  expectedQuerystring : '/?where='
})

runTest('a query with an array for a value', {
  qs       : { order : ['bar', 'desc'] },
  expected : esc('/?order[0]=bar&order[1]=desc'),
  expectedQuerystring : '/?order=bar&order=desc'
})
