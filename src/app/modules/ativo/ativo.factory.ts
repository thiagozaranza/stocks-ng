import { Ativo } from './ativo';

export function create(): Ativo {
    return {
        id: null,
        codigo: null,
        empresa: null,
        created_at: null,
        updated_at: null,
    };
}