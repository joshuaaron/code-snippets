import { defineAction } from '../helpers/defineAction';
import { WithFirestoreProps } from 'react-redux-firebase';
import { ISnippet } from 'src/interfaces';

export const addSnippet = defineAction<{
  title: string,
  id: string;
}>('ADD_SNIPPET');

export const deleteSnippet = defineAction<{
  id: string,
}>('DELETE_SNIPPET');

export const createSnippet = (snippet: any, firestore: any) => (dispatch: any) => {
  firestore
    .collection('snippets')
      .add({
        ...snippet, // (project.title, project.content as this.state gets passed in
        authorFirstName: 'Josh',
        authorLastName: 'Reynolds',
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_SNIPPET', payload: snippet })
      }).catch((error: any) => {
       dispatch({ type: 'CREATE_ERROR', error })
      });
}