export default function* createIteratorObject(report) {
    for (const department of Object.values(report)) {
        for (const employee of department) {
            yield employee;
        }
    }
}
