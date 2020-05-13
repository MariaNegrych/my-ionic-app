export interface UserModel {
    email: any;
    address: {
        suite: string;
        street: string;
        geo: any;
        city: string;
    };
    id: number;
    name: string;
    username: string;
    website: string;
}
