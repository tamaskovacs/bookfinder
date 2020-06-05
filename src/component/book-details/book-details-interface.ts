export default interface BookDetailsInterface {
    data: {
        title: string;
        author_name: string;
        publish_date: Array<string>;
        publisher: Array<string>;
        subject: Array<string>;
    }
};
