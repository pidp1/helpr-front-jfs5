import { Cargo } from "./cargo";

export interface Funcionario {
    id?: number;
    nome: string;
    email: string;
    cpf: string;
    senha?: string;
    perfil?: string;
    foto?: string;
    cargo: Cargo
}
