
export interface IntNavLink{
    title:string
    path:string
};

export interface IntNavListProps {
    NavArrLink: IntNavLink[];
  }

export interface contMultContainers {
    Icon?:any;
    ContainerTitle?: string;
    ContainerText?: string;
    img?:string;
    classCont?:string;
}

export interface IntMultContainersProps {
    arrContenido: contMultContainers[];
    colums: number;
    rows: number;
    ClassContPrin?: string;
}
