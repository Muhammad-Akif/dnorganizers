class CvForm {
    constructor(firstName,lastName, phone, workAs, event, CNIC, email, message, pakistan) {
        this.firstName =  firstName//This is a firebase assigned id;
        this.lastName = lastName;
        this.phone = phone;
        this.workAs = workAs;
        this.event = event;
        this.CNIC = CNIC; //[{id, name, price}, ....]
        this.email = email; //[{id, name, price}, ....]
        this.message = message;
        this.pakistan = pakistan;
    }
}
export default CvForm;