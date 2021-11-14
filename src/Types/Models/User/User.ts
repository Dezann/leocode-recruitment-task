interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser {
    address: IAddress;
    company: ICompany;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}
