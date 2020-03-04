import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testTodo', () => {
  test('getTodo', async () => {
    const res = await testClient
      .get(`/todos/${process.env.TEST_TODO_ID}`)
    expect(res.status).toBe(200);

    console.log('what is the problem');
    console.log(process.env.TEST_TODO_ID);

    expect(
      Object.keys(res.body)
    ).toEqual(expect.arrayContaining([
      'id',
      'title',
      'description',
      'isCompleted',
      'tags',
      'createdAt',
      'updatedAt',
    ]))
  })
})
