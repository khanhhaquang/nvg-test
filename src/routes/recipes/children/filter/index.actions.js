import { SERVER_DOMAIN } from '@configs';
import { Get } from '@helpers';

export const GetRecipesByFilter = (url) => Get(SERVER_DOMAIN + url);
