import axios from 'axios'

export const Recipe = async (params: string) => {
  
  return await axios.request({
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer',
    params: {q: params},
    headers: {
      'x-rapidapi-key': '0293d56d33mshc83d7ef89b8aff4p14c3d0jsne03ae24c97ee',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  })
}