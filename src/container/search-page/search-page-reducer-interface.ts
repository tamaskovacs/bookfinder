export default interface SearchPageReducerInterface {
    filter?: string;
    isFetching?: boolean;
    isModalOpened?: boolean;
    result?: Object;
    selected?: number;
    hasError?: boolean;
};
