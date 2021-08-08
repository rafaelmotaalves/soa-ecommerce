
export const TOKEN_KEY = "@ecommerce-auth-token";

export const estaAutenticado = () => localStorage.getItem(TOKEN_KEY) !== null;

export const pegarToken = () => localStorage.getItem(TOKEN_KEY);

export const armazenarToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removerToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};