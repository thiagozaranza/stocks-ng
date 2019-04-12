import { Empresa } from '../empresa/empresa';

export interface Segmento {
    id: number;
    nome: string;
    subsetor_id: number;
    empresas: Empresa[];
    created_at: string;
    created_by: number;
    updated_at: string;
    updated_by: number;
}

export function isSegmento(arg: any): arg is Segmento {
    return arg && arg.subsetor_id && typeof(arg.subsetor_id) == 'number';
}