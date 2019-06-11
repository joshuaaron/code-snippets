const initState = [
	{id: 1, title: 'Title 1'},
	{id: 2, title: 'Title 2'},
	{id: 3, title: 'Title 3'},
];


const snippetsTest = (state = initState, action: any) => {
  switch(action.type) {
    case 'CREATE_SNIPPET':
      console.log('created: ', action.payload);
      return state;
    case 'CREATE_ERROR': 
      console.log('error ', action.error);
      return state;
    default:
      return state;
  }
};
 
export default snippetsTest;