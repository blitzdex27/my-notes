# Interfaces with Classes

**interfaces/Hasformatter.ts**
```ts
export interface HasFormatter {
    format(): string;
}
```

**app.ts**
```ts
import { HasFormatter } from './interfaces/Hasformatter.js'
class Invoice implements HasFormatter {
    constructor (
        readonly client: string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}
```