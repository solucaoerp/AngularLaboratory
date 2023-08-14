import { City } from "./city.model";

export interface Address {
    id?: number;
    rua?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cep?: string;
    cidade?: City;
    estado?: string;
    residencial?: boolean;
    tipoEndereco?: string;
}
