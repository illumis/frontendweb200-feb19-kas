import { compose } from './compose';
import { formatName } from './utils';

describe('functions', () => {
  it('arbitrary number of parameters', () => {

    // Rest operator.
    function add(a: number, b: number, ...rest: number[]): number {
      const firstTwo = a + b;
      return rest.reduce((prev, next) => prev + next, firstTwo);
    }

    expect(add(2, 2)).toBe(4);
    expect(add(2, 2, 2)).toBe(6);
    expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
  });
  describe('practical', () => {
    interface Payment {
      date: string;
      amount: number;
      customer: string;
    }

    const payments: Payment[] = [
      { date: '1/1/2018', amount: 300, customer: 'Bob' },
      { date: '1/8/2018', amount: 615.23, customer: 'Bob' },
      { date: '1/19/2018', amount: 10082, customer: 'Sue' },
      { date: '2/2/2018', amount: 12, customer: 'Bob' },
    ];

    it('Your practice:', () => {
      // Write some code here that gives me the answer
      // the total of all the payments by just bob.
      function computePayments(allPayments: Payment[]): { summaries: { [key: string]: number } } {
        const result = { summaries: {} };

        const uniqueCustomers = allPayments
          .map(tx => tx.customer)
          .filter((indexVal, indexNum, arrIterator) => arrIterator.indexOf(indexVal) === indexNum);

        uniqueCustomers.forEach((currentCustomer: string) => {
          const customerPayments = allPayments.filter(tx => tx.customer === currentCustomer);
          const firstPayment = customerPayments.reverse().pop().amount;
          result.summaries[currentCustomer] = customerPayments.map(tx => tx.amount)
            .reduce((prev, next) => prev + next, firstPayment);
        });

        return result;
      }

      const answer = { total: computePayments(payments).summaries.Bob };
      expect(answer.total).toBe(927.23);
    });
  });
  describe('function literals', () => {
    it('has a few kinds', () => {
      // Named function
      function add(a: number, b: number): number {
        return a + b;
      }
      // See notes for SS["Different functions types"] if >this< isn't updated
    });
  });
});

describe('higher order functions', () => {
  it('an example', () => {
    expect(formatName('Han', 'Solo')).toBe('Solo, Han');

    const makeUpper = (s: string) => s.toUpperCase();

    expect(formatName('Han', 'Solo', (x) => makeUpper(x))).toBe('SOLO, HAN');

    // Note how this doesnt implement type... Duck Typing FTW
    const makeFlashy = (s: string) => `***${s}***`;
    expect(formatName('Han', 'Solo', makeFlashy)).toBe('***Solo, Han***');

    const doBothViaComposition = compose(makeUpper, makeFlashy);
    expect(formatName('Han', 'Solo', doBothViaComposition))
      .toBe('***SOLO, HAN***');
  });
});
