const initialState =
  {
    1: {
      title: 'Things to Do',
      body: '### To Do\n- Buy a winning lottery ticket\n- Buy some vegan spam\n- Clean out from under the bed'
    },
    2: {
      title: 'Very Important Link',
      body: '[Do not click here](https://bit.ly/very-secret).'
    },
    3: {
      title: 'Hello World',
      body: "I shredded your linens for you run in circles run up and down stairs. Tuxedo cats always looking dapper. Stuff and things adventure always. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now purr when being pet. Cat dog hate mouse eat string barf pillow no baths hate everything cough hairball, eat toilet paper, cough hairball, eat toilet paper meow meow eat half my food and ask for more lick the other cats lick the plastic bag. Catch mouse and gave it as a present leave fur on owners clothes so who's the baby chew iPad power cord, for touch water with paw then recoil in horror get suspicious of own shadow then go play with toilette paper. Ask for petting instantly break out into full speed gallop across the house for no reason but cough furball so hide at bottom of staircase to trip human jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans, scratch at the door then walk away but pose purrfectly to show my beauty. Ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss!"
    },
    4: {
      title: 'A Picture of Prince',
      body: '![Prince](/prince-1.jpg)'
    }
  };

export default (state = initialState, action) => {
  if (action.type === 'UPDATE_NOTE_CONTENT') {
    const { id, content } = action;

    const previous = state[id];
    const updated = { ...previous, body: content };
    const newState = { ...state, [id]: updated };

    return newState;
  }

  return state;
};
