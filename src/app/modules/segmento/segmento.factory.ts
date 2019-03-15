import { Segmento } from './segmento';

export function create(): Segmento {
    return {
        id: null,
        nome: null,
        empresas: null,
        created_at: null,
        created_by: null,
        updated_at: null,
        updated_by: null,
    };
}