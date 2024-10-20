interface State {
    loading: boolean;
    data: any | null;
    error: string | null;
}

interface Action {
    type: string;
    payload?: any | null;
}