import { Indice } from './indice';

export function create(): Indice {
    return {
        id: null,
        nome: null,
        codigo: null,
        titulo: null,
        descricao: null,
        created_at: null,
        updated_at: null,
    };
}