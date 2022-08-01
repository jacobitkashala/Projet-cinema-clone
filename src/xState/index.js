import { assign, interpret, createMachine } from 'xstate'
// import axios from 'axios';
const { REACT_APP_API_KEY } = process.env

export const promiseMachine = createMachine({
  id: 'movie',
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        id: 'fetch-genre-movie',
        src: invokeFetchGenreMovie,
        onDone: {
          target: 'loaded',
          actions: assign({
            posts: (context, event) => event.data,
          }),
        },
        onError: 'failed',
      },
    },
    loaded: {},
    failed: {},
  },
  context: {
    subreddit: null, // none selected
  },
})
// function invokeFetchSubreddit(context) {
//   const { subreddit } = context;
function invokeFetchGenreMovie() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${REACT_APP_API_KEY}&language=en-US`,
  )
    .then((response) => response.json())
    .then((json) => json.data.children.map((child) => child.data))
}

const promiseService = interpret(promiseMachine).onTransition((state) =>
  console.log(state.value),
)

// Start the service
promiseService.start()
// => 'pending'

promiseService.send({ type: 'RESOLVE' })
// => 'resolved'
