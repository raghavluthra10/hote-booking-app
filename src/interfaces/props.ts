interface ModalTwoProps {

}

export interface ModalOneProps {
    openAddHotelModal: any;
    closeModal: any;
}

export interface ModalOneForm {
    name: string;
    location: string;
    price: number | string;
    bhk: number | string;
    description: string
}
