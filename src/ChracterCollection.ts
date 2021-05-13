export class ChracterCollection {
    constructor(public data: string) {}

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const chracter = this.data.split('');

        const temp = chracter[leftIndex];
        chracter[leftIndex] = chracter[rightIndex];
        chracter[rightIndex] = temp;

        this.data = chracter.join('');
    }
}