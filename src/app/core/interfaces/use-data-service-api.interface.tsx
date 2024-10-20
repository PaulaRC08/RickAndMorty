export interface IState {
    loading: boolean;
    data: any | null;
    error: string | null;
}

export interface IAction {
    type: string;
    payload?: any | null;
}

export interface ILocation{
    name: string;
    //url: string;
}