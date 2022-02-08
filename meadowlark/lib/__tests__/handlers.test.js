const handlers = require('../handlers');

test('home page renders', () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.home(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('home');
});

test('about page renders', () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.about(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('about');
  expect(res.render.mock.calls[0][1]).toEqual(
    expect.objectContaining({
      fortune: expect.stringMatching(/\W+/),
    })
  );
});

test('404 page renders', () => {
  const req = {};
  const res = { render: jest.fn(), status: jest.fn() };
  handlers.notFound(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('404');
});

test('500 page renders', () => {
  const err = new Error();
  const req = {};
  const res = { render: jest.fn(), status: jest.fn() };
  const next = jest.fn();
  handlers.serverError(err, req, res, next);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('500');
});
