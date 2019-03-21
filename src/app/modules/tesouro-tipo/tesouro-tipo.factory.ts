import { TesouroTipo } from './tesouro-tipo';

export function create(): TesouroTipo {
    return {
        id: null,
        nome: null,
        categoria_id: null,
        categoria: null,
        created_at: null,
        updated_at: null,
    };
}