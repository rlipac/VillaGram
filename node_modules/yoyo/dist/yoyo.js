'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _whatwgFetch = require('whatwg-fetch');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Yoyo = function () {
  function Yoyo() {
    _classCallCheck(this, Yoyo);

    this.format = 'text';
  }

  _createClass(Yoyo, [{
    key: 'get',
    value: function get(url) {
      this.method = 'get';
      this.url = url;

      return this;
    }
  }, {
    key: 'post',
    value: function post(url) {
      this.method = 'post';
      this.url = url;

      return this;
    }
  }, {
    key: 'patch',
    value: function patch(url) {
      this.method = 'patch';
      this.url = url;

      return this;
    }
  }, {
    key: 'put',
    value: function put(url) {
      this.method = 'put';
      this.url = url;

      return this;
    }
  }, {
    key: 'delete',
    value: function _delete(url) {
      this.method = 'delete';
      this.url = url;

      return this;
    }
  }, {
    key: 'with',
    value: function _with(data) {
      this.data = data;

      return this;
    }
  }, {
    key: 'withFormat',
    value: function withFormat(format) {
      this.format = format;
    }
  }, {
    key: 'fetchRaw',
    value: function fetchRaw() {
      if (!(this.method && this.url)) {
        throw new Error('You need to defined the url before');
      }

      return (0, _whatwgFetch.fetch)(this.url, { method: this.method, body: this.data });
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      var _this = this;

      if (!(this.method && this.url)) {
        throw new Error('You need to defined the url before');
      }

      return (0, _whatwgFetch.fetch)(this.url, { method: this.method, body: this.data }).then(function (response) {
        switch (_this.format) {
          case 'text':
          case 'xml':
            return response.text();
            break;
          case 'json':
            return response.json();
            break;
        }
      });
    }
  }]);

  return Yoyo;
}();

exports.default = Yoyo;