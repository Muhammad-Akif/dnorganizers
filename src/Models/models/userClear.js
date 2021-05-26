class UserClear {
    constructor(id, bankAddress, branchCode, date, pendingInvoiceId, invoiceData, userEmail) {
        this.id = id //This is firebase generated if
        this.bankAddress = bankAddress
        this.branchCode = branchCode
        this.date = date
        this.pendingInvoiceId = pendingInvoiceId
        this.invoiceData = invoiceData
        this.userEmail = userEmail
    }
}

export default UserClear;
