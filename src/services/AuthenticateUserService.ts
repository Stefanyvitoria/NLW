/**
 * 1 - Receber o código(String)
 * 2 - Recuperar o access_token no github
 * 3 - Verificar se o usuário existe no DB
 * -- Sim = Gera um token.
 * --Não = Cria e gera um token
 * 4 - Retornar o token com as informações do useuário logado.
 */

import axios from "axios";

class AuthenticateUserService {
    async execute(code: String) {
        const url = "https://github.com/login/oauth/access_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                Accept: "Application/json",
            }
        });

        return response.data;

    }
}

export { AuthenticateUserService };