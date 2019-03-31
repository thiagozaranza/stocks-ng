import { Segmento } from '../segmento/segmento';

export interface Subsetor {
    id: number;
    nome: string;
    setor_id: number;
    segmentos: Segmento[];
    created_at: string;
    created_by: number;
    updated_at: string;
    updated_by: number;
}

export function isSubsetor(arg: any): arg is Subsetor {
    return arg && arg.setor_id && typeof(arg.setor_id) == 'number';
}