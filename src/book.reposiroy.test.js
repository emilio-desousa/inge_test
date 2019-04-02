const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get: jest.fn(),
            push: jest.fn(),
            write: jest.fn()
        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.push.mockReturnValue(dbMock);

        const repository = new BookRepository(dbMock);
        repository.save({ id: 1, name: "Unit test" });

        expect(dbMock.write.mock.calls.length).toBe(1);
    })
})


describe('Nombre total de livre', function () {

    test('Count books', () => {

        const dbMock = {
            size: jest.fn(),
            get: jest.fn(),
            value: jest.fn()
        };


        dbMock.get.mockReturnValue(dbMock);
        dbMock.size.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(1000);


        const repository = new BookRepository(dbMock)
        repository.getTotalCount()
        expect(dbMock.size.mock.calls.length).toBe(1);
        expect(repository.getTotalCount()).toBe(1000);

        //expect(dbMock.value.mock.results).toBe(9000)
    })
})



