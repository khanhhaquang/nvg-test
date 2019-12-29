import { SERVER_DOMAIN } from '@configs';
import { Get, Delete } from '@helpers';

export const GetRecipeList = (url) => Get(SERVER_DOMAIN + url);
export const DeleteRecipe = (url) => Delete(SERVER_DOMAIN + url);
