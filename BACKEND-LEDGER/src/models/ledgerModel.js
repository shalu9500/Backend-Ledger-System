const mongoose = require("mongoose")

const ledgerSchema = new mongoose.Schema({
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        message: [true, "Ledger must be associated with an account"],
        index: true,
        immutable: true
    },

    amount: {
        type: Number,
        required: [true, "Amount is required for creating Ledger entry"],
        immutable: true
    },
    transcation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "transcation",
        message: [true, "Ledger must be associated with an transcation"],
        index: true,
        immutable: true
    },

    type: {
        type: String,
        enum: {
            values: ["CREDIT", "DEBIT"],
            message: "Types can be either CREDIT or DEBIT"
        },
        required: [true, "Ledger type is required"],
        immutable: true
    }
})


function preventLedgerModification() {
    throw new Error("Ledger entries are immutable and cannot be modified or deleted");
}

ledgerSchema.pre('findOneAndUpdate', preventLedgerModification);
ledgerSchema.pre('updateOne', preventLedgerModification);
ledgerSchema.pre('deleteOne', preventLedgerModification);
ledgerSchema.pre('remove', preventLedgerModification);
ledgerSchema.pre('deletetMany', preventLedgerModification);
ledgerSchema.pre('updateMany', preventLedgerModification);
ledgerSchema.pre('findOneAndDelete', preventLedgerModification);
ledgerSchema.pre('findOneAndReplace', preventLedgerModification);

const ledgerModel = mongoose.model("ledger", ledgerSchema)

module.exports = ledgerModel