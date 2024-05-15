class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        const L =  this.collection[j]
        const R = this.collection[j + 1]
        if (L > R) {
          this.collection[j] = R
          this.collection[j + 1] = L
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0])
sorter.sort()
console.log(sorter.collection)
