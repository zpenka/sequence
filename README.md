# Sequence
#### Abstract Data Type Library with Sequence Functions

## What is this?
This is a 'proof-of-concept' project for Abstract Data Types in JavaScript.
This library describes the abstract data type, _Sequence_, and (eventually) many
functions that act on this new abstract type.

#### What is a Sequence?
A Sequence is an abstract data type defined by the operations that may be
performed on it. To be a Sequence, a data collection must be able to be acted
upon by the following three functions:

##### `first`
`first` simply returns the first element of the sequence

##### `rest`
`rest` simply returns the same sequence back minus the first element

##### `cons`
`cons` takes two elements and makes a sequence of them

#### Which JS datatypes are Sequences?
Of the major data types in ES6, `Object`, `Array`, `Set` and `Map`, all but
`Object` are supported. Therefore, any non-Object data structure in JavaScript
can be said to be also of abstract type Sequence. Any function in this library
can act upon any `Array`, `Set` or `Map` that you pass it.

## Inspiration
This project was inspired by the "Core Functions" chapter in _Clojure for the
Brave and True_ by Daniel Higginbotham. The examples of sequence nodes (with
examples in JS) were particularly helpful.
