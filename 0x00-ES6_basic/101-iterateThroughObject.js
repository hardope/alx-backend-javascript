export default function* createIteratorObject(report) {
  for (const department of Object.values(report)) {
    if (Symbol.iterator in Object(department)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }
}
