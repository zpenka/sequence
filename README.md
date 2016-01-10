# Sequence
#### Abstract Data Type Library with Sequence Functions

## What is this?
This is a 'proof-of-concept' project for __Abstract Data Types__ in JavaScript.
This library describes the abstract data type, _Sequence_, and functions that
act on this new abstract type.

#### What is a Sequence?
A Sequence is an abstract data type defined by the operations that may be
performed on it. To be a Sequence, a data collection must be able to be acted
upon by the following three functions:

##### `first`
`first` returns the first element of the sequence

##### `rest`
`rest` returns the same sequence back without the first element

##### `cons`
`cons` takes two elements and makes a sequence of them

#### Which JS data structures are Sequences?
Of the major data structures in ES2015: `Object`, `Array`, `Set` and `Map`, all
but `Object` are supported. Therefore, any non-Object data structure in
JavaScript can be said to be also of abstract type Sequence. Any function in
this library can act upon any `Array`, `Set` or `Map` that you pass it.

## Inspiration
This project was inspired by the "Core Functions" chapter in _Clojure for the
Brave and True_ by Daniel Higginbotham. The examples of sequence nodes (with
examples in JS) were particularly helpful.
