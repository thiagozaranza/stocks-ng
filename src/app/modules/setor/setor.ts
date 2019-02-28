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