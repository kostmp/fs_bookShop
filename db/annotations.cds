using bookshop as bs from './schema';

annotate bs.Books with @(
    UI.LineItem       : [
        {
            $Type: 'UI.DataField',
            Label: 'Title',
            Value: name
        },
        {
            $Type: 'UI.DataField',
            Label: 'Total Copies Sold',
            Value: totalCopies
        },
        {
            $Type: 'UI.DataField',
            Label: 'Author Name',
            Value: author.name
        }
        
    ],
    UI.SelectionFields: [
        name,
        totalCopies,
    ]
);

annotate bs.Transactions with @(
    UI.LineItem       : [
        {
            $Type: 'UI.DataField',
            Label: 'Book Title',
            Value: book.name
        },
        {
            $Type: 'UI.DataField',
            Label: 'Customer name',
            Value: customer.name
        },
        {
            $Type: 'UI.DataField',
            Label: 'Customer Phone',
            Value: customer.phonenumber
        },
        {
            $Type: 'UI.DataField',
            Label: 'Customer Email',
            Value: customer.email
        },
        {
            $Type: 'UI.DataField',
            Label: 'Transaction Type',
            Value: transactionType
        },
        {
            $Type: 'UI.DataField',
            Label: 'Transaction Date',
            Value: transactionDate
        },
        {
            $Type: 'UI.DataField',
            Label: 'Payment',
            Value: payment
        }
    ],
    UI.SelectionFields: [
        book.name,
        customer.name,
        transactionDate
    ]
);
