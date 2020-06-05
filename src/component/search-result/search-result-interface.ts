export interface SearchRowInterface {
    title:string;
    cover_edition_key: string;
    author_name: string;
};

export default interface SearchResultInterface {
    rowData: Array<SearchRowInterface>;
    selectionHandler: Function;
};
