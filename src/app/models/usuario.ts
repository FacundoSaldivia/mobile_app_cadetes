export interface Usuario {
  id: number;
  email: string;
  fullName: string;
  address: string;
  isAccepted?: boolean;
  isDeleted?: boolean;
  observations: string;
  password: string;
  vehicle?: string;
  rol?: Rol;
}

interface Rol {
  id: number;
  name: string;
  isDeleted?: number;
}
