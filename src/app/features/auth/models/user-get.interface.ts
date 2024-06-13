
export interface IUtilisateurGet {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
    phoneNumber: string;
    role: IRole;
    createdDate: Date;
    lastModifiedDate: Date;
    enable: boolean;

}

export interface IRole {
    id: number;
    name: string;
    description: string;
    privileges: IPrivilege[];
    createdDate: Date;
    lastModifiedDate: Date;
    editable: boolean;
}

export interface IPrivilege {
    name: string;
    code: string
}



