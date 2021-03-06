// Create a Sequence node
const createNode = (value, next) => ({ value, next });

// Checks if passed object is a Sequence node
const isNode = node => value in node && next in node;

// Checks if passed data structure is a Sequence
const isSeq = data => Array.isArray(data) && data.every(isNode);

// Sequence processing functions:
// Return first node's value in a Sequence
const first = data => isSeq(data) ? data[0] : first(seq(data));

// Return the rest of the Sequence
const rest = data => isSeq(data) ? data.slice(1) : rest(seq(data));

// Return a new sequence with given elements
const cons = (first, second) => isSeq(second) ? second.unshift(first) : cons(seq(first, second));

// Main Sequence function. Takes an Array, Set or Map and returns a 'Sequence',
// an Abstract Data Type that can be used with any of the Sequence processing
// functions
const seq = data => {
  // Each data type is going to need its own procedure for Sequence coersion
  let seq = [];
  if (Array.isArray(data)) {
    let buildSeqNodesFromArray = data => {
      if (data.length === 1) {
        return seq.push(createNode(data[0], null));
      } else {
        return seq.push(createNode(data[0], buildSeqNodesFromArray(data.slice(1)));
      }
    }
    buildSeqNodesFromArray(data);
  } else if (data instanceof Set || data instanceof Map) {
    // Build a Sequence from a JS Set or Map (Both are iterable in identical manner)
    // Create an iterator
    const iter = data[Symbol.iterator]();

    // Recursively build Sequence
    const buildSeqNodesFromIter = iter => {
      const node = iter.next();
      if (node.done) {
        return seq.push(createNode(node.value, null));
      } else {
        return seq.push(createNode(node.value, buildSeqNodesFromIter(iter)));
      }
    }
    buildSeqNodesFromIter(iter);
  } else {
    // Throw an error, data type not supported
    throw new Error("Supplied data must be of abstract type Sequence.");
  }
  // Pass back Sequence
  return seq;
}

// Sequence functions
// These functions all act upon any given Sequence, regardless of its native JS
// Type

// map -> apply a given function to each value in the given Sequence
const map = (f, seq) => seq === null ? null : cons(f(first(seq)), map(f, rest(seq)));

// More to come!
