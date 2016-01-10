// Create a sequence node
const createNode = (value, next) => ({ value, next });

// Checks if passed object is a Sequence node
const isNode = node => value in node && next in node;

// Checks if passed data structure is a sequence
const isSeq = data => Array.isArray(data) && data.every(isNode);

// Sequence processing functions:
// Return first node's value in a sequence
const first = data => isSeq(data) ? data[0] : first(seq(data));

// Return the rest of the sequence
const rest = data => isSeq(data) ? data.slice(1) : rest(seq(data));

// Return a new sequence with given elements
const cons = (first, second) => isSeq(second) ? second.unshift(first) : cons(seq(first, second));

// Main sequence function. Takes an array, set or map and returns a 'sequence'
// an Abstract Data Type that can be used with any of the sequence processing
// functions
const seq = data => {
  // Each data type is going to need its own procedure for sequence coersion
  let seq = [];
  if (Array.isArray(data)) {
    let buildSeqNodesFromArray = data => {
      if (data.length === 1) {
        return seq.push({
          value: data[0],
          next: null,
        });
      } else {
        return seq.push({
          value: data[0],
          next: buildSeqNodesFromArray(data.slice(1)),
        });
      }
    }
    return buildSeqNodesFromArray(data);
  } else if (data instanceof Set || data instanceof Map) {
    // Build a sequence from a JS Set or Map (Both are iterable in identical manner)
    // Create an iterator
    const iter = data[Symbol.iterator]();

    // Build Sequence
    const buildSeqNodesFromIter = iter => {
      const node = iter.next();
      if (node.done) {
        return seq.push({
          value: node.value,
          next: null,
        });
      } else {
        return seq.push({
          value: node.value,
          next: buildSeqNodesFromIter(iter),
        });
      }
    }
    buildSeqNodesFromIter(iter);
  } else {
    // Throw an error, data type not supported
    return new Error("Error: Supplied data must be of abstract type Sequence");
  }
  // Pass back sequence of data
  return seq;
}
