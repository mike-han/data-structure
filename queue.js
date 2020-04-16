function Queue() {
  this.items = [];
}

Queue.prototype = {
  enqueue: function (item) {
    this.items.push(item);
  },
  front: function () {
    return this.items[0];
  },
  dequeue: function () {
    return this.items.shift();
  },
  isEmpty: function () {
    return this.items.length === 0;
  },
  clear: function () {
    this.items = [];
  },
  size: function () {
    return this.items.length;
  },
  toString: function () {
    return this.items.toString();
  }
}

function PriorityItem(element, priority) {
  this.priority = priority;
  this.element = element;
  PriorityItem.prototype.toString = function () {
    return this.element + '-' + this.priority;
  }
}

function MinPriorityQueue() {
  Queue.call(this);
  this.enqueue = function (element, priority) {
    var element = new PriorityItem(element, priority);
    if (this.isEmpty()) {
      this.items.push(element);
    } else {
      var added = false;
      for (var i = 0; i < this.items.length; i++) {
        if (element.priority < this.items[i].priority) {
          this.items.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(element);
      }
    }
  }
}

MinPriorityQueue.prototype = Object.create(Queue.prototype);

function MaxPriorityQueue() {
  Queue.call(this);
  this.enqueue = function (element, priority) {
    var element = new PriorityItem(element, priority);
    if (this.isEmpty()) {
      this.items.push(element);
    } else {
      var added;
      for (var i = 0; i < this.items.length; i++) {
        if (element.priority > this.items[i].priority) {
          this.items.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(element);
      }
    }
  }
}
MaxPriorityQueue.prototype = Object.create(Queue.prototype);
