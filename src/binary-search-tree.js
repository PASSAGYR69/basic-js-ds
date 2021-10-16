const { Node } = require('../extensions/list-tree.js');

module.exports = class BinarySearchTree {

  constructor() {
    this.rootStr = null; // корень bst

  }

  root() {
    //throw new NotImplementedError('Not implemented');
    //remove line with error and write your code here
    return this.rootStr;

  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    let newNode = new Node(data);
    
      if (this.rootStr === null) {
          this.rootStr = newNode;
      } else {
          this.insertNode(this.rootStr, newNode); // helper method below
      }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
  }

  has(data) {
    let needToReturn;
    hasNode(this.rootStr, data);
 
    function hasNode(node, data) {
         if (node === null) {
             needToReturn = false;
         } else if (data < node.data) {
             node = node.left;
             return hasNode(node, data);
         } else if (data > node.data) {
             node = node.right;
             return hasNode(node, data);
         } else {
             needToReturn = true;
         }
     }
     return needToReturn;
 }

  find(data) {

    let needToReturn;
    findNode(this.rootStr, data);
 
    function findNode(node, data) {
         if (node === null) {
          needToReturn = null;
         } else if (data < node.data) {
             node = node.left;
             return findNode(node, data);
         } else if (data > node.data) {
             node = node.right;
             return findNode(node, data);
         } else {
             needToReturn = node;
         }
     }
     return needToReturn;
  }

  minNode(node) {
    // если слева от узла ноль тогда это должен быть минимальный узел
    if (node.left === null)
        return node;
    else
        return this.minNode(node.left); 
  }


  remove(data) {
      this.rootStr = this.removeNode(this.rootStr, data); // helper method below
  }

  removeNode(node, data) {
      if (node === null) {
          return null;
      // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
      } else if (data < node.data) {
          node.left = this.removeNode(node.left, data);
          return node;
      // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
      } else if (data > node.data) {
          node.right = this.removeNode(node.right, data);
          return node;
      // если данные такие как данные корня, удаляем узел
      } else {
          // удаляем узел без потомков (листовой узел (leaf) или крайний)
          if (node.left === null && node.right === null) {
              node = null;
              return node;
          }

          // удаляем узел с одним потомком
          if (node.left === null) {
              node = node.right;
              return node;
          } else if(node.right === null) {
              node = node.left;
              return node;
          }

          // удаляем узел с двумя потомками
          // minNode правого поддерева хранится в новом узле
          let newNode = this.minNode(node.right);
          node.data = newNode.data;
          node.right = this.removeNode(node.right, newNode.data);
          return node;
      }
  }

  min() {

    let needToReturn;
    minNode (this.rootStr);

    function minNode(node) {
        if (node === null) {
        needToReturn = null;
        } else if (node.left) {
            node = node.left;
            return minNode (node);
        } else {
            needToReturn = node.data;
        }
    }
    return needToReturn;
  }

  max() {

    let needToReturn;
    maxNode (this.rootStr);

    function maxNode(node) {
        if (node === null) {
        needToReturn = null;
        } else if (node.right) {
            node = node.right;
            return maxNode (node);
        } else {
            needToReturn = node.data;
        }
    }
    return needToReturn;
  }

}
