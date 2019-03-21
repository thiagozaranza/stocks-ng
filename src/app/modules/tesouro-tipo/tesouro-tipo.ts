import { TesouroCategoria } from '../tesouro-categoria/tesouro-categoria';

export interface TesouroTipo {
    id: number;
    nome: string;
    categoria_id: number;
    categoria: TesouroCategoria;
    created_at: string;
    updated_at: string;
}