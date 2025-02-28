


export class Staff {
    staffId : string;
    name : string;
    email : string;
    phone : string;
    address : string;
    status : string;

    constructor(StaffId : string, Name : string, Email : string, Phone : string, Address : string, Status : string) {
        this.staffId = StaffId;
        this.name = Name;
        this.email = Email;
        this.phone = Phone;
        this.address = Address;
        this.status =Status;
    }

}