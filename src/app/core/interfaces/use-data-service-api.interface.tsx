interface IState {
    loading: boolean;
    data: any | null;
    error: string | null;
}

interface IAction {
    type: string;
    payload?: any | null;
}

interface ILocation{
    name: string;
    url: string;
}