import { Empresa } from '../empresa/empresa';

export interface Segmento {
    id: number;
    nome: string;
    empresas: Empresa[];
    created_at: string;
    created_by: number;
    updated_at: string;
    updated_by: number;
}