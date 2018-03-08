export default class {
  static asArray(nodeList) {
    return Array.prototype.slice.call(nodeList, 0);
  }

  static querySelectorAll(key) {
    return this.asArray(document.querySelectorAll(key));
  }

  static baseName(str) {
    let base = str.substring(str.lastIndexOf('/') + 1);
    if (base.lastIndexOf('.') !== -1) {
      base = base.substring(0, base.lastIndexOf('.'));
    }
    return base;
  }
}
