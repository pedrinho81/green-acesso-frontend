import { api } from "lib/api";

export const getAllCharacter = async () => {
  try {
    const {data} = await api.get('/character')
    console.log('@@res:')
    console.log(data)
    return data;
  } catch (error: any) {
    console.log('@@err:response')
    console.log(error.response)
    console.log('@@err:message')

    console.log(error.message)
    /* error.response
      ? toast.error(error.response.data.message)
      : toast.error('Ocorreu um erro no servidor, tente novamente mais tarde ou entre em contato com o suporte.') */
    return false
  }
}