import { Empresa } from '../empresa/empresa';

export interface Ativo {
    id: number;
    codigo: string;
    empresa: Empresa;
    created_at: string;
    updated_at: string;
}