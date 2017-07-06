'use strict'

/**
 * NOTICE OF LICENSE
 *
 * Licensed under the MIT License.
 *
 * This source file is subject to the MIT License that is
 * bundled with this package in the LICENSE file.
 * It is also available at the following URL: http://opensource.org/licenses/MIT
 *
 * @author     Romain Lanz <romain.lanz@slynova.ch>
 * @license    MIT
 * @copyright  (c) Slynova
 */

import { fetch } from 'whatwg-fetch'

/**
 * Yoyo gives you handy methods to fetch internet resource.
 */
class Yoyo {

  /**
   * Set the URL and the method to GET.
   *
   * @param {String} url
   * @return {this}
   */
  get(url) {
    this.method = 'get'
    this.url = url

    return this
  }

  /**
   * Set the URL and the method to POST.
   *
   * @param {String} url
   * @return {this}
   */
  post(url) {
    this.method = 'post'
    this.url = url

    return this
  }

  /**
   * Set the URL and the method to PATCH.
   *
   * @param {String} url
   * @return {this}
   */
  patch(url) {
    this.method = 'patch'
    this.url = url

    return this
  }

  /**
   * Set the URL and the method to PUT.
   *
   * @param {String} url
   * @return {this}
   */
  put(url) {
    this.method = 'put'
    this.url = url

    return this
  }

  /**
   * Set the URL and the method to DELETE.
   *
   * @param {String} url
   * @return {this}
   */
  delete(url) {
    this.method = 'delete'
    this.url = url

    return this
  }

  /**
   * Set data to send to the url.
   *
   * @param {Object} data
   * @return {this}
   */
  with(data) {
    this.data = data

    return this
  }

  /**
   * Returns the promises.
   *
   * @return {Promises}
   */
  fetchRaw() {
    if (! (this.method && this.url)) {
      throw new Error('You need to defined the url before');
    }

    return fetch(this.url, { method: this.method, body: this.data });
  }

  /**
   * Fetch the resource with the given format.
   *
   * @param {String} format
   * @return {String|json}
   */
  fetch(format = 'text') {
    if (! (this.method && this.url)) {
      throw new Error('You need to defined the url before');
    }

    return fetch(this.url, { method: this.method, body: this.data })
      .then((response) => {
        switch (format) {
          case 'text':
          case 'xml':
            return response.text()
            break
          case 'json':
            return response.json()
            break
        }
      })
  }

}

export default Yoyo
