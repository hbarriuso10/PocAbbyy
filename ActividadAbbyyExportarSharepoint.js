var exports = Context.Transaction.Documents[0].Exports;
var extractedDataExportResult = exports.find(element => element.ExportFormat === ExportFormat.Json);


var invoiceNumberField = Context.Transaction.Documents[0].GetField("Invoice Number");
var invoiceNumber = invoiceNumberField.Value;
 