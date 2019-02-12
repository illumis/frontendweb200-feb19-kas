import { tassign } from 'tassign';

describe('immutability', () => {
  describe('with arrays', () => {
    it('add an item to an array', () => {
      const numbers = [1, 2, 3, 4, 5];
      const newNumbersIncorrectlyComboed = [numbers, 6];
      const newNumbersCorrectlyComboed = [...numbers, 6];

      expect(newNumbersCorrectlyComboed).toEqual([1, 2, 3, 4, 5, 6]);
      expect(numbers).toEqual([1, 2, 3, 4, 5]);
    });
    it('remove an item from an array', () => {
      const numbers = [1, 2, 3, 4, 5];
      const trimmedNumebrs = numbers.filter(n => n !== 3);

      expect(trimmedNumebrs).toEqual([1, 2, 4, 5]);
    });
    it('combining arrays', () => {
      const numbers = [1, 2, 3, 4, 5];
      const newNumbers = [...numbers.filter(n => n !== 3), 6];

      expect(newNumbers).toEqual([1, 2, 4, 5, 6]);
    });
  });
  describe('immutability with objects', () => {
    it('adding a property to an obj', () => {
      const movie: any = { title: 'Thor Ragnarok', director: 'Taika Waititi', randNums: [1, 2, 3, 4, 5] };

      const newMovie = { ...movie, yearReleased: 2017 };

      expect(newMovie).toEqual({
        title: 'Thor Ragnarok',
        director: 'Taika Waititi',
        randNums: [1, 2, 3, 4, 5],
        yearReleased: 2017,
      });

      movie.title = 'test';
      movie.randNums = [];

      // Note how this passess due to a shallow copy being made with the spread operator
      expect(newMovie).toEqual({
        title: 'Thor Ragnarok',
        director: 'Taika Waititi',
        randNums: [1, 2, 3, 4, 5],
        yearReleased: 2017
      });
    });
    it('using a dict', () => {
      interface Task {
        id: string;
        description: string;
      }

      interface Dictionary<T> {
        [key: string]: T;
      }

      const tasks: Dictionary<Task> = {
        867: {
          id: '867',
          description: 'Clean Garage'
        },
        30002: {
          id: '3002',
          description: 'Change bulb'
        }
      };

      const two = tasks['3002'];

      const newTasks = { 185: { id: '185', description: 'Take boxes to recycling' }, ...tasks };
      console.log(newTasks);
    });
    it('Modifying the property of an object', () => {
      const movie = { title: 'Jaws', director: 'Spielberg', yearReleased: 1978 };
      const fixedMovie = Object.assign({}, movie, { yearReleased: 1977 });

      expect(fixedMovie).toEqual({ title: 'Jaws', director: 'Spielberg', yearReleased: 1977 });
    });
    it('using tassign', () => {
      const movie = { title: 'Jaws', director: 'Spielberg', yearReleased: 1978 };

      // Note: using tassign enables property exposure when adding yearReleased
      const fixedMovie = tassign(movie, { yearReleased: 1977 });

      expect(fixedMovie).toEqual({ title: 'Jaws', director: 'Spielberg', yearReleased: 1977 });
    });
  });
});
