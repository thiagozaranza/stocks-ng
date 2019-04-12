import { Subsetor } from '../subsetor/subsetor';

export interface Setor {
    id: number;
    nome: string;
    subsetores: Subsetor[];
    created_at: string;
    created_by: number;
    updated_at: string;
    updated_by: number;
}

export function isSetor(arg: any): arg is Setor {
    return arg && arg.subsetores;
}