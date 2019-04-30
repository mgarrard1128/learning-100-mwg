describe('Variables and constants and stuff', () => {
    it('union a type', () => {
        let x: number | string;
        x = 12;

        x = 'tacos';

    });

    it('declaring an initializing a variable', () => {
        let y = 'tacos';
        let z: string | number = 'red';
    });

    it('constants must be initialized and cannot be reassigned', () => {
        const pi = 3.14;
        const favoriteNumbers = [7, 22, 39];
        favoriteNumbers[2] = 4;
        const movie = {
            title: "Avengers",
            yearReleased: 2020
        };
        movie.yearReleased = 2018;
        expect(favoriteNumbers[1]).toBe(22);
    });
    it('var is broken because it does not have block scope', () => {
        let age = 22;
        if (age = 21) {
            var message = 'Old enough';
        }

        expect(message).toBe('Old enough');
    });
});

describe('Literals', () => {
    it('number literals', () => {
        let z = 99;
        let n1 = 1_000_000;
        expect(1000000).toBe(n1);
        let favColor = 0xff;
        let binary = 0b010101;
        let n3 = 1.2;
    });

    it('no difference between single or double', () => {
        let name = 'Darth';
        expect(name).toBe("Darth");

        let story = 'She told him "Never!!!" and then stormed off';
        let author = "Flanner O'Connor";

        let story2 = "She told him \"Never!!!\" and then stormed off"
    });

    it('has string literals', () => {
        let story =
            `It was a dark and stormy night.
        
        That's all folks!`;

        console.log(story);
        expect('beer').toBe(`beer`);
    });

    it('has template strings', () => {
        const name = 'Bob', age = 63;
        const info = 'His name is ' + name + ' and he is ' + age + ' years old';
        const info2 = `His name is ${name} and he is ${age} years old`;
        expect(info).toBe(info2);
    });

    it('how to declare a function', () => {
        expect(add(2, 2)).toBe(4);
        // Named function
        function add(a: number, b: number) {
            return a + b;
        }
        // an anonymous function with the function keyword
        const subtract = function (a: number, b: number) {
            return a - b;
        }
        //anonymous arrow function
        const multiply = (a: number, b: number) => a * b;

        expect(subtract(20, 8)).toBe(12);
        expect(multiply(3, 3)).toBe(9);
    });

    describe('Object literals & interfaces', () => {
        it('has them', () => {
            interface Movie {
                title: string;
                director: string;
                yearReleased: number;
            };

            const thor: Movie = {
                title: "Thor: Ragnarok",
                director: 'Waititi',
                yearReleased: 2018
            }

            const antMan: Movie = {
                title: 'Ant-Man',
                director: 'Sean Connery',
                yearReleased: 2014
            }
            expect(thor.title).toBe('Thor: Ragnarok');
            expect(thor['title']).toBe('Thor: Ragnarok');

            const dataFromApi = {
                data: 'All is good',
                'generated at': 'Server in DC'
            }

            expect(dataFromApi.data).toBe('All is good');
            expect(dataFromApi['generated at']).toBe('Server in DC');
        });
    });

    describe('array literals', () => {
        it('has them', () => {
            const friends = ['REggie', 'David', 'Sara', 'Sean'];
            expect(friends[1]).toBe('David');
            expect(friends[999]).toBeUndefined();
            friends[999] = 'Billy';
            expect(friends[999]).toBe('Billy');

            // declaring without initializing
            let colors: string[];

            colors = ['Red', 'Green', 'Orange'];

            // You can also use this syntax if you like it better, but I don't (usually)

            let numbers: Array<number>;

            numbers = [1, 2, 3];

            let jumbled: (string | number)[] = [1, 'dog', 'cat'];
            let jumbled1: Array<number | string>;
        });

        it('using tuples', () => {
            let settings: [boolean, string, number] = [true, 'shirt', 12];

            const s = settings[2];

            // interface NameInfo { fullName: string, numberOfLetters: number };
            // function formatName(first: string, last: string): NameInfo {
            //     let fullName = `${last}, ${first}`;
            //     return {
            //         fullName,
            //         numberOfLetters: fullName.length
            //     };
            // }

            function formatName(first: string, last: string): [string, number] {
                let fullName = `${last}, ${first}`;
                return [fullName, fullName.length];
            }

            // const answer = formatName('Han', 'Solo');
            // expect(answer.fullName).toBe('Solo, Han');
            // expect(answer.numberOfLetters).toBe(9);

            const [theName, howLong] = formatName('Han', 'Solo');

            expect(theName).toBe('Solo, Han');
            expect(howLong).toBe(9);
        });
    });
});

