import { defineAction } from '../helpers/defineAction';

export const addSnippet = defineAction<{
  title: string,
  id: number;
}>('ADD_SNIPPET');

export const deleteSnippet = defineAction<{
  id: number,
}>('DELETE_SNIPPET');

export const createSnippet = (project: any) => (dispatch: any, getState: any, { getFirebase, getFirestore }: { getFirebase: any, getFirestore: any}) => {
  // take the project and add it to the database before we dispatch an action
  // initialize the getFirestore
  const firestore = getFirestore();

  // access the collection and add the document 
  firestore.collection('snippets').add({ 
    ...project, // (project.title, project.content as this.state gets passed in
    authorFirstName: 'Josh',
    authorLastName: 'Reynolds',
    authorId: 12345,
    createdAt: new Date()
  }).then(() => {
    dispatch({ type: 'CREATE_SNIPPET', project })
  }).catch((error: any) => {
    dispatch({ type: 'CREATE_ERROR', error })
  })
}