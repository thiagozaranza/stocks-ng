import { Segmento } from '../segmento/segmento';

export interface Subsetor {
    id: number;
    nome: string;
    segmentos: Segmento[];
    created_at: string;
    created_by: number;
    updated_at: string;
    updated_by: number;
}