export default interface ModalInterface {
    isOpen: boolean;
    title: string;
    child: any;
    closeHandler: Function;
};
