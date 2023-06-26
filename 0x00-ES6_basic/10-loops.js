export default function appendToEachArrayValue(array, appendString) {
  const ar = [];
  for (const val of array) {
    ar.push(appendString + val);
  }

  return ar;
}
