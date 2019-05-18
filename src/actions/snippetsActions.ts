import { defineAction } from '../helpers/defineAction';

export const addSnippet = defineAction<{
  title: string,
  id: number;
}>('ADD_SNIPPET');

export const deleteSnippet = defineAction<{
  id: number,
}>('DELETE_SNIPPET');